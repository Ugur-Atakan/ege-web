import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from '../../../i18n/client'
import { start } from '../../../../images'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function StartBusiness({ lang }) {
    const [businessName, setBusinessName] = useState('');

    const { t } = useTranslation(lang)

    const handleBusinessName = (e) => {
      setBusinessName(e.target.value);
    }

    const startNow = () => {
      if (businessName === '') {
        toast(t("how_it_works_business_name_error_message"));
      } else {
          if (window && window.localStorage) {
            localStorage.setItem('companyName', businessName);
            window.href = `/${lang}/company-type`;
          }
      }
    }


    return (
        <div className='mx-auto max-w-[1120px] lg:px-4 py-24'>
        <div className='h-[30rem] w-full'>
          <Image src={start} className='h-[30rem] object-cover rounded-tl-[32px] rounded-tr-[32px]' alt='Start with you perfect name' />
        </div>
        <div className='bg-black rounded-bl-[32px] rounded-br-[32px] py-12 px-6 lg:py-12 lg:px-12'>
          <div className='flex-col lg:flex-row flex items-start justify-between gap-8'>
            <div className='flex flex-col gap-4 lg:gap-8 w-full'>
              <h2 className='font-bold leading-[38px] lg:leading-[64px] text-[32px] lg:text-[64px] text-white '>{t('how_it_works_start_perfect_name_title')}</h2>
              <p className='w-full lg:w-[75%] text-[16px] lg:text-[18px] font-semibold leading-[22px] lg:leading-6 text-white'>{t('how_it_works_start_perfect_name_desc')}</p>
            </div>
            <div className='w-full'>
              <label htmlFor="businessName" className="mb-2 text-sm font-medium sr-only">Search</label>
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                </div>
                <input type="text" onChange={handleBusinessName} id="businessName" className="block w-full p-6 pl-6 text-xs lg:text-lg text-[#8A8A8A] rounded-[20px]  focus:outline-none border-none focus:border-none focus:ring-0" placeholder={t('pricing_header2_footer_input_text')} required />
                <button type="submit" onClick={startNow} className="text-white absolute right-2.5 bottom-2.5 bg-[#1649FF] py-3 lg:py-4 px-7 rounded-2xl">{t('pricing_header2_footer_input_button')}</button>
              </div>
              <Link href={`/${lang}/start-my-business`} className='text-left'>
                <p className='text-[#8A8A8A] block lg:flex items-center  gap-1'>{t('pricing_header2_footer_text_gray')} <span className='flex justify-start lg:justify-center items-center gap-1 text-[#9EE248] cursor-pointer'>{t('pricing_header2_footer_text_green')} <ArrowRightIcon className='w-4 h-4' /> </span></p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}