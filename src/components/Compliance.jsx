'use client'

import Image from 'next/image'
import dataicon from '@/assets/images/data.png'
import feathericon from '@/assets/images/feather.png'
import bagicon from '@/assets/images/bag.png'
import { useTranslation } from '@/i18n/client'

export default function Compliance({ lang }) {
  const { t } = useTranslation(lang);
  
  return (
    <div className='bg-white'>
      <div className="mx-auto max-w-7xl p-6 lg:px-12">
        <div className='items-start justify-between block lg:flex lg:gap-x-72 py-24'>
          <div className='w-full lg:w-[50%]'>
            <h2 className='font-bold text-[32px] leading-[38px] lg:text-[64px] text-black lg:leading-[64px]'>{t('complience_title')}</h2>
            <p className='font-semibold text-lg leading-[24px] pt-6'>{t('complience_description')}</p>
          </div>
          <div className='w-full lg:w-1/2 py-12 lg:py-0'>
            <div className='block border-b border-[#C8C8C8] lg:border-none'>
              <div className='flex items-center gap-4'>
                <Image src={dataicon} className='w-[28px] h-[28px]' alt='icon' />
                <p className='font-semibold text-[28px] leading-[32px] text-black'>{t('complience_card1_title')}</p>
              </div>
              <div className='ml-12 mt-4 lg:border-b lg:border-[#C8C8C8] pb-12'>
                <p className='font-semibold text-lg leading-[24px] text-black'>{t('complience_card1_description')}</p>
              </div>
            </div>
            <div className='block pt-12 border-b border-[#C8C8C8] lg:border-none'>
              <div className='flex items-center gap-4'>
                <Image src={feathericon} className='w-[28px] h-[28px]' alt='icon' />
                <p className='font-semibold text-[28px] leading-[32px] text-black'>{t('complience_card2_title')}</p>
              </div>
              <div className='ml-12 mt-4 lg:border-b lg:border-[#C8C8C8] pb-12'>
                <p className='font-semibold text-lg leading-[24px] text-black'>{t('complience_card2_description')}</p>
              </div>
            </div>
            <div className='block pt-12'>
              <div className='flex items-center gap-4'>
                <Image src={bagicon} className='w-[28px] h-[28px]' alt='icon' />
                <p className='font-semibold text-[28px] leading-[32px] text-black'>{t('complience_card3_title')}</p>
              </div>
              <div className='ml-12 mt-4'>
                <p className='font-semibold text-lg leading-[24px] text-black'>{t('complience_card3_description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}