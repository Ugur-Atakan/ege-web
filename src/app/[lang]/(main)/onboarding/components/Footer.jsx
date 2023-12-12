import React from 'react'
import { searchwhite } from '@/assets/images/index'
import Image from 'next/image'
import Link from 'next/link'

const Footer = ({ t, takeQuizForm , lang }) => {
    return (
        <React.Fragment>
            <div className='hidden md:block bg-[#1649FF] rounded-[1.5rem] relative overflow-hidden py-12 px-12 mb-24'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <div>
                            <Image src={searchwhite} className='w-[22rem] absolute -top-12 -left-6' alt='search icon' />
                        </div>
                        <div className='block relative left-40'>
                            <h2 className='text-[1.75rem] text-white font-semibold leading-8'>{t('company_type_banner_text')}</h2>
                            <p className='text-white  text-lg font-semibold leading-6 pt-4'>{t('company_type_banner_description')}</p>
                        </div>
                    </div>
                    <div>
                        <Link href={t(`/${lang}/onboarding/start-my-business`)} className='rounded-[1.25rem] bg-white py-6 px-[4.25rem] text-black text-[1.375rem] font-semibold leading-[1.625rem]'>
                            {t('company_type_banner_button')}
                        </Link>
                    </div>
                </div>
            </div>
            <div className='block md:hidden'>
                <div className='bg-[#1649FF] rounded-[1.5rem] py-12 px-8 my-12'>
                    <h2 className='text-[20px] text-white font-semibold leading-[22px]'>  {t('company_type_banner_text')}</h2>
                    <p className='text-white  text-[16px] font-semibold leading-[22px] pr-12 pt-4'>  {t('company_type_banner_description')}</p>
                    <div onClick={takeQuizForm} className='my-6 w-full rounded-[1.25rem] bg-whit py-3 text-black text-lg font-semibold leading-[22px] text-center'>
                        {t('company_type_banner_button')}
                    </div>
                    <Image src={searchwhite} className='w-full h-full' alt='search icon' />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer