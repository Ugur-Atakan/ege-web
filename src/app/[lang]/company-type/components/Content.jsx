'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import umbrella from '../../../../images/umbrella.png'
import puzzle from '../../../../images/puzzle.png'
import search from '../../../../images/search.png'
import searchwhite from '../../../../images/search-white.png'
import { useTranslation } from '../../../i18n/client'

export default function Content({ lang }) {
    const { t } = useTranslation(lang);
    const [companyType, setCompanyType] = useState('');

    useEffect(() => {
        window.localStorage.setItem('companyType', companyType);
    }, [companyType])

    const handleSelectLlc = () => {
        setCompanyType('LLC');
        if (typeof window !== 'undefined' && window.location)
            window.location.href = `/${lang}/state`;
    }

    const handleSelectCcorp = () => {
        setCompanyType('Corporation');
        if (typeof window !== 'undefined' && window.localStorage)
            window.localStorage.setItem('companyType', companyType);

        if (typeof window !== 'undefined' && window.location)
            window.location.href = `/${lang}/state`;
    }

    const takeQuizForm = () => {
        if (typeof window !== 'undefined' && window.location)
            window.location.href = `/${lang}/start-my-business`
    }

    return (
        <div className='relative'>
            <div className="mx-auto p-6 lg:px-8 bg-white">
                <Link href='/' className='flex items-center gap-2' >
                    <ArrowLeftIcon className='text-[#1649FF] h-[18px] w-[18px]' />
                    <span className='text-[#1649FF] md:text-lg font-semibold'>{t('company_type_leftcorner_button')}</span>
                </Link>
            </div>
            <div className='bg-white'>
                <div className='mx-auto max-w-5xl p-6 lg:px-8 '>
                    <div className='text-left md:text-center'>
                        <h1 className='text-[#222222] text-[26px] md:text-[2.5rem] font-semibold leading-[2.75rem]'>{t('company_type_title')}</h1>
                    </div>
                    <div className='flex flex-col md:flex-row gap-6 items-stretch justify-center md:gap-4 py-12' >
                        <div className='block w-full bg-[#ECEFF1] rounded-[2rem] p-8 cursor-pointer relative overflow-hidden' onClick={handleSelectLlc}>
                            <Image src={umbrella} className='relative -top-36 -right-12 md:w-64 md:h-64 md:static tial rotate-180 md:rotate-0' alt='llc' />
                            <div className='-mt-48 md:mt-0'>
                                <h2 className='text-[#222222] text-[20px] md:text-[1.75rem] font-semibold leading-[2rem]'>{t('company_type_package1_name')}</h2>
                                <p className='text-[#222222] text-[16px] md:text-[1.125rem] font-semibold leading-[22px] md:leading-[1.5rem] pt-4'>{t('company_type_package1_description')}</p>
                            </div>
                        </div>
                        <div className='block w-full bg-[#ECEFF1] rounded-[2rem] p-8 cursor-pointer relative overflow-hidden' onClick={handleSelectCcorp}>
                            <Image src={puzzle} className='relative -top-36 -right-12 md:w-64 md:h-64  md:static rotate-180 md:rotate-0' alt='llc' />
                            <div className='-mt-48 md:mt-0'>
                                <h2 className='text-[#222222] text-[20px] md:text-[1.75rem] font-semibold leading-[2rem]'>{t('company_type_package2_name')}</h2>
                                <p className='text-[#222222] text-[16px] md:text-[1.125rem] font-semibold leading-[22px] md:leading-[1.5rem] pt-4'>{t('company_type_package2_description')}</p>
                            </div>
                        </div>
                        <a  className='block w-full bg-white border-4 border-solid border-[#1649FF] rounded-[2rem] p-8 not-sure relative' to={`/${lang}/start-my-business/`}>
                            <Image src={search} className='relative -top-20 -right-8 md:w-64 md:h-64 md:static rotate-360 md:rotate-45' alt='llc' />
                            <div className='-mt-48 md:mt-0'>
                                <h2 className='text-[#222222] text-[20px] md:text-[1.75rem] font-semibold leading-[2rem]'>{t('company_type_package3_name')}</h2>
                                <p className='text-[#222222] text-[16px] md:text-[1.125rem] font-semibold leading-[22px] md:leading-[1.5rem] pt-4'>{t('company_type_package3_description')}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <div className='mx-auto max-w-5xl p-6 lg:px-8 '>
                    <div className='text-left md:text-center'>
                        <h1 className='text-[#222222] text-[26px] leading-8 md:text-[2.5rem] font-semibold md:leading-[2.75rem]'>{t('company_type_comparing_title')}</h1>
                    </div>
                    <div className='py-6'>
                        <div className="md:mt-8 flow-root px-4 md:px-0">
                            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-300 sticky-table">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="w-1/2 md:w-1/3 py-3.5 md:pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sm:pl-0">
                                                   {t('company_type_comparing_subtitle1')}
                                                </th>
                                                <th scope="col" className="hidden md:table-cell w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem]">
                                                    LLC
                                                </th>
                                                <th scope="col" className="hidden md:table-cell w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem]">
                                                    C-Corp
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="hidden md:block w-1/3 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 sr-only">
                                                    sr only
                                                </td>
                                                <td className="w-1/3 pr-3 md:px-3 py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list1_llc')}</td>
                                                <td className="w-1/3 pr-3 md:px-3 py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list1_ccorp')}</td>
                                            </tr>
                                            <tr>
                                                <td className="hidden md:w-1/3 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 sr-only">
                                                    sr only
                                                </td>
                                                <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list2')}</td>
                                                <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list2_llc')}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-6'>
                        <div className="md:mt-8 flow-root px-4 md:px-0">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="w-1/2 md:w-1/3 py-3.5 md:pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem]">
                                                   {t('company_type_comparing_subtitle2')}
                                                </th>
                                                <th scope="col" className="w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] ">
                                                    LLC
                                                </th>
                                                <th scope="col" className="w-1/3  px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem]">
                                                    C-Corp
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-4 md:pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0">
                                                   {t('company_type_comparing_list3')}
                                                </td>
                                                <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list3_llc')}</td>
                                                <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list3_ccorp')}</td>
                                            </tr>
                                            <tr>
                                                <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">
                                                   {t('company_type_comparing_list4')}
                                                </td>
                                                <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list4_llc')}</td>
                                                <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list4_ccorp')}</td>
                                            </tr>
                                            <tr>
                                                <td className="w-1/3 py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0 sr-only">
                                                    sr-only
                                                </td>
                                                <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list5_llc')}</td>
                                                <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list5_ccorp')}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-6'>
                        <div className="md:mt-8 flow-root px-4">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="w-1/2 md:w-1/3 py-3.5 md:pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sm:pl-0">
                                                  {t('company_type_comparing_subtitle3')}
                                                </th>
                                                <th scope="col" className="hidden md:block w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                                    LLC
                                                </th>
                                                <th scope="col" className="hidden md:block w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                                    C-Corp
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="hidden md:block py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0 sr-only">
                                                    sr-only
                                                </td>
                                                <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list6_llc')}</td>
                                                <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list6_ccorp')}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-6'>
                        <div className="md:mt-8 flow-root px-4">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="w-1/2 md:w-1/3 py-3.5 md:pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sm:pl-0">
                                                    {t('company_type_comparing_subtitle4')}
                                                </th>
                                                <th scope="col" className="hidden md:block w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                                    LLC
                                                </th>
                                                <th scope="col" className="hidden md:block w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                                    C-Corp
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="hidden md:block py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0 sr-only">
                                                    sr-only
                                                </td>
                                                <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list7_llc')}</td>
                                                <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list7_ccorp')}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-6'>
                        <div className="md:mt-8 flow-root px-4">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="w-1/3 py-3.5 md:pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sm:pl-0">
                                                   {t('company_type_comparing_subtitle5')}
                                                </th>
                                                <th scope="col" className="w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] md:sr-only">
                                                    LLC
                                                </th>
                                                <th scope="col" className="w-1/3  px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] md:sr-only">
                                                    C-Corp
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-4 md:pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0">
                                                   {t('company_type_comparing_list8')}
                                                </td>
                                                <td className="w-1/3 pr-3 md:px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]"> {t('company_type_comparing_list8_llc')}</td>
                                                <td className="w-1/3 pr-3 md:px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]"> {t('company_type_comparing_list8_ccorp')}</td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0 sr-only">
                                                    sr-only
                                                </td>
                                                <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list9_llc')} </td>
                                                <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list9_ccorp')}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block pt-6 pb-32'>
                        <div className="md:mt-8 flow-root px-12">
                            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-0">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="w-1/3 py-3.5 md:pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sm:pl-0">
                                                    {t('company_type_comparing_subtitle6')}
                                                </th>
                                                <th scope="col" className="w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                                    LLC
                                                </th>
                                                <th scope="col" className="w-1/3    px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                                    C-Corp
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='relative'>
                                            <tr>
                                                <td className="py-4 md:pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0">
                                                    {t('company_type_comparing_list10')}
                                                </td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]"> {t('company_type_comparing_list10_llc')}</td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]"> {t('company_type_comparing_list10_ccorp')}</td>
                                            </tr>
                                            <tr className='relative -bottom-12'>
                                                <td className="py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0 sr-only">
                                                    sr-only
                                                </td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]"><button className='py-3 px-12 rounded-2xl bg-[#1649FF] text-white text-lg font-semibold leading-6' onClick={handleSelectLlc}>{t('company_type_comparing_list_button_blue')}</button></td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]"><button className='py-3 px-12 rounded-2xl bg-[#9EE248] text-white text-lg font-semibold leading-6' onClick={handleSelectCcorp}>{t('company_type_comparing_list_button_green')}</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                <Link href={t(`/${lang}/start-business`)} className='rounded-[1.25rem] bg-white py-6 px-[4.25rem] text-black text-[1.375rem] font-semibold leading-[1.625rem]'>
                                   {t('company_type_banner_button')}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='block md:hidden'>
                        <div className='bg-[#1649FF] rounded-[1.5rem] py-12 px-8 my-12'>
                            <h2 className='text-[20px] text-white font-semibold leading-[22px]'>  {t('company_type_banner_text')}</h2>
                            <p className='text-white  text-[16px] font-semibold leading-[22px] pr-12 pt-4'>  {t('company_type_banner_description')}</p>
                           <div onClick={takeQuizForm} className='my-6 w-full rounded-[1.25rem] bg-white py-3 text-black text-lg font-semibold leading-[22px] text-center'>
                                {t('company_type_banner_button')}
                           </div>
                           <Image src={searchwhite} className='w-full h-full' alt='search icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}