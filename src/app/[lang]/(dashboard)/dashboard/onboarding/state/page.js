'use client'

import React, { useState, useEffect } from 'react'
import { useTranslation } from '@/i18n/client'
import RadioListItem from './RadioListItem'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import DropDown from '@/app/[lang]/(main)/onboarding/state/components/DropDown'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const Page = ({ params: { lang } }) => {
  const { t } = useTranslation(lang);
  const router = useRouter();
  const { data, update } = useSession();

  const [otherStates, setOtherStates] = useState([]); 
  const [companyState, setCompanyState] = useState();

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

  const onSubmit = async () => {
    const res = await update({ ...data, companyState: companyState });
    router.push(`/${lang}/dashboard/onboarding/formation`);
  }

  return (
    <div className='flex flex-col my-10'>
      <div className='text-left md:text-center'>
        <h1 className='font-semibold  text-[22px] md:text-[40px] leading-[32px] md:leading-[44px] text-[#222222]'>{t('state_title')}</h1>
      </div>

      <div className='mx-auto max-w-xl py-12'>
          <ul className="grid w-full gap-6 md:grid-cols-1">
              <RadioListItem
                id="hosting-small"
                state="Wyoming"
                companyState={companyState}
                title={t('state_option1_title')}
                text={t('state_option1_text')}
                onClick={() => setCompanyState('Wyoming')}
              />   

              <RadioListItem
                id="hosting-big"
                state="Delaware"
                companyState={companyState}
                title={t('state_option2_title')}
                text={t('state_option2_text')}
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
              onClick={onSubmit}
              className={`order-4 w-full bg-[#1649FF] text-white text-center py-4 rounded-[20px] font-semibold text-[22px] leading-[26px] cursor-pointer`}
            >
                {t('state_button')}
            </button>
          </ul>
        </div>
    </div>
  );
};

export default Page