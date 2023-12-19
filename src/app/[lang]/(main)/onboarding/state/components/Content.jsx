/* eslint-disable */
'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { redirectToLastNullInternalFunnel, checkEqualPathName, clearPathnameLocalStorage } from '@/app/lib/utils'
import { useTranslation } from '@/i18n/client'
import { submitCookie } from '@/app/lib/session/clientActions'

import BackButton from '../../components/common/BackButton'
import Heading from './Heading'
import DropDown from './DropDown'
import dynamic from 'next/dynamic'
import axios from 'axios'

const RadioListItem = dynamic(() => import('./RadioListItem'))

/**
 * Pricing component for state page
 * @type {function}
 * @param {object} lang - Language object from useTranslation hook
 * @type {client}
 * @returns {JSX.Element}
*/

const Content = ({ lang, companyType }) => {
  const { t } = useTranslation(lang);
  const router = useRouter();
 
  const [companyState, setCompanyState] = useState('');
  const [otherStates, setOtherStates] = useState([]);
  const selectedLLC = companyType === 'C-Corp' ? true : false;
  
  //* Use Effect to set the cookie
  const handleSubmit = () => {
    const cookie = {...{companyType}, companyState: companyState};
    submitCookie(cookie);
    router.push(`/${lang}/onboarding/formation`);
    router.refresh();
  }

  //* API call to get the states
  useEffect(() => {
    const getState = async () => {
      await axios.get('/api/states')
      .then((response) => {
          var jsonData = response.data;
          const filteredStates = jsonData.filter(item => item.state !== 'Delaware' && item.state !== 'Wyoming');
          setOtherStates(filteredStates);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    getState();
  },[]);

  return (
    <div className='bg-white'>
      <BackButton linkHref={`/${lang}/onboarding`} buttonText={t('companyname_back_button')} />
     
      <div className='mx-auto max-w-2xl px-8 md:px-0'>
        <Heading t={t} />
        
        <div className='mx-auto max-w-xl py-12'>
          <ul className="grid w-full gap-6 md:grid-cols-1">
              <RadioListItem
                id="hosting-small"
                state="Wyoming"
                companyType={companyType}
                companyState={companyState}
                title={t('state_option1_title')}
                text={t('state_option1_text')}
                checked={selectedLLC == false}
                onClick={() => setCompanyState('Wyoming')}
              />   

              <RadioListItem
                id="hosting-big"
                state="Delaware"
                companyType={companyType}
                companyState={companyState}
                title={t('state_option2_title')}
                text={t('state_option2_text')}
                checked={selectedLLC == true}
                onClick={() => setCompanyState('Delaware')}
              />

            <li className="order-3">
              <DropDown
                id="companyState"
                value={companyState}
                placeholder={t('state_option3_text')}
                options={otherStates}
                onChange={(e) => setCompanyState(e.target.value)}
              />
            </li>

            <button 
              onClick={handleSubmit}
              //className={`order-4 w-full bg-[#1649FF] text-white text-center py-4 rounded-[20px] font-semibold text-[22px] leading-[26px] cursor-pointer ${companyState ? '' : 'opacity-50 cursor-not-allowed pointer-events-none'}`}
              className={`order-4 w-full bg-[#1649FF] text-white text-center py-4 rounded-[20px] font-semibold text-[22px] leading-[26px] cursor-pointer`}
            >
                {t('state_button')}
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Content