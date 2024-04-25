/* eslint-disable */
'use client'

import React, { useEffect, useState } from 'react'
import {  useRouter } from 'next/navigation'
import { useTranslation } from '@/i18n/client'
import { readCookie, submitCookie } from '@/app/lib/session/clientActions'

import BackButton from '../../components/common/BackButton'
import axios from 'axios'

const Content = ({ lang }) => {
  const { t } = useTranslation(lang);
  const router = useRouter();
  
  //* Read cookie
  const [cookie, setCookie] = useState({});
  useEffect(() => {
    const readCkie = async () => {
      const ckie = await readCookie();
      console.log('Cookie inside state page ', ckie);
      setCookie(ckie);
    }
    readCkie();
  }, []);

    
//* Use Effect to set the cookie
//   const handleSubmit = () => {
//     const ckie = {...cookie, companyState: companyState};
//     const setCookie = async (ckie) => {
//       await submitCookie(ckie);
//       router.refresh();
//     }
//     setCookie(ckie);
//     router.push(`/${lang}/onboarding/formation`);
//   }

  return (
    <div className='bg-white'>
      <BackButton linkHref={`/${lang}/onboarding`} buttonText={t('companyname_back_button')} />
     
      <div className='mx-auto max-w-2xl px-8 md:px-0'>        
        <div className='mx-auto max-w-xl py-12'>
          <ul className="grid w-full gap-6 md:grid-cols-1">
              Test 
              Test

            <li className="order-3">
              Selam
            </li>

            <button 
              // onClick={handleSubmit}
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