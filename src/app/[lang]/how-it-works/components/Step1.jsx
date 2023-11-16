'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { umbrella, puzzle } from '@/assets/images'
import { useTranslation } from '@/i18n/client'

/**
 * Step1 Component
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {client}
 * @returns {JSX.Element} 
*/

const Step1 = ({ lang }) => {
  const { t } =  useTranslation(lang)

  return (
    <React.Fragment>
      <div className='mx-auto max-w-[552px] px-4 lg:px-0 pt-24'>
        <div className='w-[80%] lg:w-full text-left lg:text-center font-semibold text-[26px] lg:text-[40px] leading-[32px] lg:leading-[44px] text-[#1649FF]'>
          {t("how_it_works_step_1")}
          <span className='text-[#222222]'>{t("how_it_works_choose_company_type_title")}</span>
        </div>
      </div>
      <div className='mx-auto max-w-[1120px] px-4 py-12'>
        <div className='flex-col lg:flex-row flex items-center justify-center gap-6'>
          <div className='rounded-[20px] bg-[#ECEFF1] pb-16 lg:pb-6 p-6 relative overflow-hidden'>
            <h2 className='font-bold text-[32px] lg:text-[64px] leading-[64px] text-[#222222]'>{t("how_it_works_choose_company_type_card1_title")}</h2>
            <p className='font-semibold text-[16px] lg:text-[18px] leading-[24px] text-[#222222] pt-4 pb-24 lg:w-2/3'>{t("how_it_works_choose_company_type_card1_desc")}</p>
            <div className='absolute bottom-0 right-0'>
              <Image src={umbrella} className='h-48 w-96 lg:h-72' alt='select llc' />
            </div>
          </div>
          <div className='rounded-[20px] bg-[#ECEFF1] pb-16 lg:pb-6 p-6 relative overflow-hidden'>
            <h3 className='font-bold text-[32px] lg:text-[64px] leading-[64px] text-[#222222]'>{t("how_it_works_choose_company_type_card2_title")}</h3>
            <p className='font-semibold text-[16px] lg:text-[18px] leading-[24px] text-[#222222] pt-4 pb-24 lg:w-2/3'>{t("how_it_works_choose_company_type_card2_desc")}</p>
            <div className='absolute bottom-0 right-0'>
              <Image src={puzzle} className='h-36 w-52 lg:h-52' alt='select ccorp' />
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[25rem] px-4 pb-24'>
        <div className='text-left lg:text-center font-semibold text-[20px] lg:text-[22px] leading-[22px] lg:leading-[26px] text-[#222222]'>
          {t("how_it_works_choose_company_type_footer_white_text")} <Link href={`/${lang}/start-my-business`} className='text-[#1649FF]'>{t("how_it_works_choose_company_type_footer_blue_text")}</Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Step1