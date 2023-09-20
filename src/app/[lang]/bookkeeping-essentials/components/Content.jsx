'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import book from '../../../../images/book.png'
import tick from '../../../../images/tick.png'
import { useTranslation } from '../../../i18n/client'

export default function Content({ lang }) {
  const { t } = useTranslation(lang);
  
  return (
    <>
      <div className="mx-auto p-6 lg:px-8">
        <Link href={`/${lang}/company-name`} className='flex items-center gap-2' >
          <ArrowLeftIcon className='text-[#1649FF] h-[18px] w-[18px]' />
          <span className='text-[#1649FF] text-lg font-semibold'>{t('formation_back_button')}</span>
        </Link>
      </div>
      <div className='flex items-start'>
        <div className='relative -left-24 top-0'>
          <Image src={book} className='' alt='bookkeeping essentails' />
          <div className='w-1/2 right-0 absolute py-24'>
            <h1 className='font-semibold text-[40px] leading-[44px] text-[#222222]'>Use bookkeeping to plan and save efficiently</h1>
          </div>
        </div>
        <div className='w-[35%]'>
          <h2 className='font-semibold text-[40px] leading-[44px] text-[#222222]'>Add Registate Bookkeeping Essentails</h2>
          <p className='font-semibold text-[18px] leading-6 text-[#222222] py-4'>Use bookkeeping to analyze your business{"'"}s financial performance, identifying areas for growth.</p>
          <ul className="grid w-full gap-6 md:grid-cols-1 py-6">
            <li className='order-1'>
              <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required />
              <label htmlFor="hosting-small" className='relative inline-flex items-start justify-between w-full p-5 bg-white border border-[#C8C8C8] rounded-[20px] cursor-pointer peer-checked:border-blue-600 peer-checked:border-[4px] peer-checked:text-blue-600'>
                <div className="block">
                  <div className="w-full text-[22px] font-semibold leading-[26px] text-[#222222]">Add Bookkeeping</div>
                  <div className="w-full pt-3 font-semibold text-lg leading-[24px] text-[#1649FF]">Starting at $200/month</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 md:w-8 mt-4 ml-3 peer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </label>
            </li>
            <li className='order-2'>
              <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required />
              <label htmlFor="hosting-small" className='relative inline-flex items-center justify-between w-full p-5 bg-white border border-[#C8C8C8] rounded-[20px] cursor-pointer peer-checked:border-blue-600 peer-checked:border-[4px] peer-checked:text-blue-600'>
                <div className="block">
                  <div className="w-full text-[22px] font-semibold leading-[26px] text-[#222222]">No, thanks</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 md:w-8 mt-4 ml-3 peer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </label>
            </li>
            <Link href={"#"} className='order-4 w-full bg-[#1649FF] text-white text-center py-4 rounded-[20px] font-semibold text-[22px] leading-[26px] cursor-pointer'>
              <button>
               Continue
              </button>
            </Link>
          </ul>
          <ul className='flex flex-col gap-10 py-12'>
                <li>
                  <div className='flex items-center gap-3'>
                    <Image src={tick} className='h-8' alt='Company created in any state' />
                    <h3 className='font-bold text-[18px] leading-6 text-[#222222]'>Organization</h3>
                  </div>
                  <div className='block pl-12'>
                    <p className='text-[#222222] font-normal text-lg leading-6'>Keep your finances organized, providing a clear view of your business{"'"}s financial health.</p>
                  </div>
                </li>
                <li>
                  <div className='flex items-center gap-3'>
                    <Image src={tick} className='h-8' alt='Registered agent' />
                    <h3 className='font-bold text-[18px] leading-6 text-[#222222]'>Decision Making and Planning</h3>
                  </div>
                  <div className='block pl-12'>
                    <p className='text-[#222222] font-normal text-lg leading-6'>Make informed decisions about your finances, identifying areas for improvement or cost savings.</p>
                  </div>
                </li>
                <li>
                  <div className='flex items-center gap-3'>
                    <Image src={tick} className='h-8' alt='EIN and bank account setup assistance' />
                    <h3 className='font-bold text-[18px] leading-6 text-[#222222]'>Tax Compliance</h3>
                  </div>
                  <div className='block pl-12'>
                    <p className='text-[#222222] font-normal text-lg leading-6'>Meet your tax obligations, simplifying tax preparation and optimizing returns.</p>
                  </div>
                </li>
                <li>
                  <div className='flex items-center gap-3'>
                    <Image src={tick} className='h-8' alt='Access to Registate online dashboard' />
                    <h3 className='font-bold text-[18px] leading-6 text-[#222222]'>Investor Confidenced</h3>
                  </div>
                  <div className='block pl-12'>
                    <p className='text-[#222222] font-normal text-lg leading-6'>Well-maintained financial records enhance investor confidence and open doors to funding opportunities.</p>
                  </div>
                </li>
              </ul>
        </div>
      </div>
    </>
  )
}