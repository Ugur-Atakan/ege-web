'use client'

import React, { useState, useEffect } from 'react'
import { useTranslation } from '@/i18n/client'
import RadioListItem from './RadioListItem'
import axios from 'axios'
import DropDown from '@/app/[lang]/(main)/onboarding/state/components/DropDown'
import Link from 'next/link'

const CompanyStep = ({ lang }) => {
  const { t } = useTranslation(lang);
  const [otherStates, setOtherStates] = useState([]); 
  const companyType = (typeof window !== 'undefined') ? localStorage.getItem('companyType') : '';
  const [selectedLLC, setSelectedLLC] = useState(companyType === 'Corporation' ? true : false);
  const [companyState, setCompanyState] = useState((typeof window !== 'undefined') ? localStorage.getItem('companyState') : '');


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
    <div className='flex flex-col my-10'>
      <div className='text-left md:text-center'>
        <h1 className='font-semibold  text-[26px] md:text-[40px] leading-[32px] md:leading-[44px] text-[#222222]'>{t('state_title')}</h1>
      </div>

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
              <DropDown
                id="companyState"
                value={companyState}
                placeholder={t('state_option3_text')}
                options={otherStates}
                onChange={(e) => setStateInStorage(e.target.value)}
              />
            </li>

            <Link 
              onClick={() => {
                if (typeof window !== 'undefined' && window.localStorage) {
                  window.localStorage.setItem('companyStateCompleted', true);
                }
              }}
              href={`/${lang}/onboarding/formation`} 
              //className={`order-4 w-full bg-[#1649FF] text-white text-center py-4 rounded-[20px] font-semibold text-[22px] leading-[26px] cursor-pointer ${companyState ? '' : 'opacity-50 cursor-not-allowed pointer-events-none'}`}
              className={`order-4 w-full bg-[#1649FF] text-white text-center py-4 rounded-[20px] font-semibold text-[22px] leading-[26px] cursor-pointer`}
            >
                {t('state_button')}
            </Link>
          </ul>
        </div>
    </div>
  );
};

export default CompanyStep