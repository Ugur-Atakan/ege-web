'use client'

import React, { useState } from 'react'
import { useTranslation } from '@/i18n/client'
import { useRouter } from 'next/navigation'
import Card from './components/Card'
import { umbrella, puzzle } from '@/assets/images/index'
import { useSession } from "next-auth/react"


const Page = ({ params: { lang } }) => {
  const router = useRouter();
  const { t } = useTranslation(lang);
  const { data, update } = useSession();

  const cardClick = async (companyType) => {
    await update({ ...data, companyType: companyType })
    router.push(`/${lang}/dashboard/onboarding/state`)
    router.refresh();
  }

  return(
    <div className='mx-auto max-w-4xl p-6 lg:px-8 '>
      <div className='text-left md:text-center'>
          <h2 className='text-[#222222] text-[20px] md:text-[2rem] font-semibold leading-[2.75rem]'>{t('company_type_title')}</h2>
      </div>

      <div className='flex  flex-col md:flex-row gap-6 items-stretch justify-center md:gap-4 py-12' >
          <Card 
              imageSrc={umbrella} 
              title={t('company_type_package1_name')} 
              description={t('company_type_package1_description')} 
              onClick={() => cardClick('LLC')} 
          />
          <Card 
              imageSrc={puzzle}
              title={t('company_type_package2_name')}
              description={t('company_type_package2_description')}
              onClick={() => cardClick('C-Corp')} 
          />  
      </div>
  </div>
  )
}

export default Page