/* eslint-disable */
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTranslation } from '@/i18n/client'
import BackButton from './BackButton'
import Heading from './Heading'
import SelectDropdown from './SelectDropdown'
import dynamic from 'next/dynamic'
import axios from 'axios'
import { readCookie, submitCookie } from '../../../lib/session/clientActions'

const RadioListItem = dynamic(() => import('./RadioListItem'))

/**
 * Pricing component for state page
 * @type {function}
 * @param {object} lang - Language object from useTranslation hook
 * @type {client}
 * @returns {JSX.Element}
*/

const Content = ({ lang }) => {
  const { t } = useTranslation(lang);
  const [otherStates, setOtherStates] = useState([]);

  //* Session Logic commented out for now
  // const [cookieState, setCookieState] = useState({});
  // useEffect(() => {
  //   const fetchCookie = async () => {
  //     const awaitCookie = await readCookie();
  //     setCookieState(awaitCookie);
  //   }
  //   fetchCookie();
  // }, []);
  // useEffect(() => { 
  //   // setCompanyState(companyState);
  //   // const cookie = {...cookieState, companyState: companyState};
  //   // const sendCookie = async () => {
  //   //   await submitCookie(cookie);
  //   //   window.localStorage.setItem('companyState', companyState);
  //   // }
  //   // sendCookie();
  // }), [companyState];

  
  const companyType = (typeof window !== 'undefined') ? localStorage.getItem('companyType') : '';
  const [companyState, setCompanyState] = useState((typeof window !== 'undefined') ? localStorage.getItem('companyState') : '');

  if (!companyType)
  {
    if (typeof window !== 'undefined' && window.location) {
      window.location.href = `/${lang}/company-type`;
    }
  } 

  const selectedLLC = companyType === 'Corporation' ? true : false;

  //* API call to get the states
  useEffect(() => {
    const getState = async () => {
      await axios.get(`/${lang}/state/api/`)
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

  const setStateInStorage = (state) => {
    setCompanyState(state);

    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('companyState', state);
    }
  }

  return (
    <div className='bg-white'>
      <BackButton t={t} lang={lang} />
      
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
                checked={selectedLLC === false}
                onClick={() => setStateInStorage('Wyoming')}
              />   

              <RadioListItem
                id="hosting-big"
                state="Delaware"
                companyType={companyType}
                companyState={companyState}
                title={t('state_option2_title')}
                text={t('state_option2_text')}
                checked={selectedLLC === true}
                onClick={() => setStateInStorage('Delaware')}
              />

            <li className="order-3">
              <SelectDropdown
                id="companyState"
                value={companyState}
                placeholder={t('state_option3_text')}
                options={otherStates}
                onChange={(e) => setCompanyState(e.target.value)}
              />
            </li>

            <Link href={`/${lang}/company-name/`} className="order-4 w-full bg-[#1649FF] text-white text-center py-4 rounded-[20px] font-semibold text-[22px] leading-[26px] cursor-pointer">
              {t('state_button')}
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Content