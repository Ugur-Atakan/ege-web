import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'
import i18n from '../i18n'
import bishopwhite from '../images/bishop-white.png'
import bishop from '../images/bishop-color.png'

export default function Formation() {
  return (
    <div className='bg-white'>
      <div className="mx-auto p-6 lg:px-8">
        <Link className='flex items-center gap-2' to={`/${i18n.language}/company-name`}>
          <ArrowLeftIcon className='text-[#1649FF] h-[18px] w-[18px]' />
          <span className='text-[#1649FF] text-lg font-semibold'>Back</span>
        </Link>
      </div>
      <div className='mx-auto max-w-5xl p-4'>
        <div className='text-center'>
          <h1 className='font-semibold text-[40px] leading-[44px] text-[#222222]'>Choose your package</h1>
        </div>
        <div className='grid grid-cols-2 gap-5 py-12'>
          <div className='flex flex-col gap-5 border border-[#9EE248] p-12 rounded-[20px] h-[35rem] overflow-hidden'>
            <h2 className='font-semibold text-[40px] leading-[44px] text-[#222222]'>LLC Gold</h2>
            <p className='text-lg font-semibold leading-6 text-[#222222]'>Expedited Filing (1-3 business days). Everything you need to perfectly start your company.</p>
            <p className='font-semibold text-[28px] leading-8 text-[#222222]'>$299</p>
            <img src={bishopwhite} className='object-none -mt-24' alt='llc package' />
          </div>
          <div className='flex flex-col gap-5 bg-[#1649FF] p-12 rounded-[20px] h-[35rem] overflow-hidden'>
            <h2 className='font-semibold text-[40px] leading-[44px] text-white'>LLC Premium</h2>
            <p className='text-lg font-semibold leading-6 text-white'>I want an experienced attorney to ensure I form my business right. </p>
            <p className='font-semibold text-[28px] leading-8 text-white'>$499</p>
            <img src={bishop} className='object-none -mt-24' alt='llc package' />
          </div>
        </div>
      </div>
    </div>
  )
}
