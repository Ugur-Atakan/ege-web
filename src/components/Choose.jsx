import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import umbrella from '../images/umbrella.png'
import puzzle from '../images/puzzle.png'
import search from '../images/search.png'
import searchwhite from '../images/search-white.png'
import i18n from '../i18n'

export default function Choose() {
    const [companyType, setCompanyType] =useState('');
    localStorage.setItem('companyType', companyType);

    const handleSelectLlc = () => {
        setCompanyType('LLC');
        window.location.href = `/${i18n.language}/state`;
    }

    const handleSelectCcorp = () => {
        setCompanyType('Corporation');
        window.location.href = `/${i18n.language}/state`;
    }
    return (
        <div className='relative'>
            <div className="mx-auto p-6 lg:px-8 bg-white">
                <Link className='flex items-center gap-2' to='/'>
                    <ArrowLeftIcon className='text-[#1649FF] h-[18px] w-[18px]' />
                    <span className='text-[#1649FF] text-lg font-semibold'>Back</span>
                </Link>
            </div>
            <div className='bg-white'>
                <div className='mx-auto max-w-5xl p-6 lg:px-8 '>
                    <div className='text-center'>
                        <h1 className='text-[#222222] text-[2.5rem] font-semibold leading-[2.75rem]'>Choose a company type</h1>
                    </div>
                    <div className='flex items-stretch justify-center gap-4 py-12' >
                        <div className='block bg-[#ECEFF1] rounded-[2rem] p-8 cursor-pointer' onClick={handleSelectLlc}>
                            <img src={umbrella} className='w-64 h-64' alt='llc' />
                            <h2 className='text-[#222222] text-[1.75rem] font-semibold leading-[2rem]'>LLC</h2>
                            <p className='text-[#222222] text-[1.125rem] font-semibold leading-[1.5rem] pt-4'>Great for small businesses and entrepreneurs with its flexibility and tax benefits.</p>
                        </div>
                        <div className='block bg-[#ECEFF1] rounded-[2rem] p-8 cursor-pointer' onClick={handleSelectCcorp}>
                            <img src={puzzle} className='w-64 h-64' alt='llc' />
                            <h2 className='text-[#222222] text-[1.75rem] font-semibold leading-[2rem]'>C-Corp</h2>
                            <p className='text-[#222222] text-[1.125rem] font-semibold leading-[1.5rem] pt-4'>Great for small businesses and entrepreneurs with its flexibility and tax benefits.</p>
                        </div>
                        <Link className='block bg-white border-4 border-solid border-[#1649FF] rounded-[2rem] p-8 not-sure relative' to={`/${i18n.language}/start-my-business/`}>
                            <img src={search} className='w-64 h-64 transform rotate-45' alt='llc' />
                            <h2 className='text-[#222222] text-[1.75rem] font-semibold leading-[2rem]'>Not Sure?</h2>
                            <p className='text-[#222222] text-[1.125rem] font-semibold leading-[1.5rem] pt-4'>Great for small businesses and entrepreneurs with its flexibility and tax benefits.</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <div className='mx-auto max-w-5xl p-6 lg:px-8 '>
                    <div className='text-center'>
                        <h1 className='text-[#222222] text-[2.5rem] font-semibold leading-[2.75rem]'>Comparing company types</h1>
                    </div>
                    <div className='py-6'>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-300 sticky-table">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="w-1/3 py-3.5 pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sm:pl-0">
                                                    Main differences
                                                </th>
                                                <th scope="col" className="w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem]">
                                                    LLC
                                                </th>
                                                <th scope="col" className="w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem]">
                                                    C-Corp
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="w-1/3 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 sr-only">
                                                    sr only
                                                </td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">LLCs can’t go public</td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">Less management flexibility; must have a board of directors</td>
                                            </tr>
                                            <tr>
                                                <td className="w-1/3 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 sr-only">
                                                    sr only
                                                </td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">Not recognized globally; you may be taxed as a corporation outside U.S.</td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">More admin; strict rules about holding meetings and keeping records</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-6'>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="w-1/3 py-3.5 pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sm:pl-0">
                                                    Protections & Taxation
                                                </th>
                                                <th scope="col" className="w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                                    LLC
                                                </th>
                                                <th scope="col" className="w-1/3    px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                                    C-Corp
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0">
                                                    Protects personal assets
                                                </td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">Yes</td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">Yes</td>
                                            </tr>
                                            <tr>
                                                <td className="w-1/3 py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0">
                                                    Offer pass-through taxation
                                                </td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">Yes</td>
                                                <td className=" w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">No</td>
                                            </tr>
                                            <tr>
                                                <td className="w-1/3 py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0 sr-only">
                                                    sr-only
                                                </td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">This avoids the double taxation that occurs in some other business structures</td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">Double taxation — corporate and shareholder taxes.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-6'>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="w-1/3 py-3.5 pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sm:pl-0">
                                                    Membership
                                                </th>
                                                <th scope="col" className="w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                                    LLC
                                                </th>
                                                <th scope="col" className="w-1/3    px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                                    C-Corp
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0 sr-only">
                                                    sr-only
                                                </td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">Single member or multiple members</td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">Shareholders (individuals, other corporations, or entities)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-6'>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="w-1/3 py-3.5 pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sm:pl-0">
                                                    Management structure
                                                </th>
                                                <th scope="col" className="w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                                    LLC
                                                </th>
                                                <th scope="col" className="w-1/3    px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                                    C-Corp
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0 sr-only">
                                                    sr-only
                                                </td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">Flexible management structure</td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">Board of directors, annual meetings, record keeping are required</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-6'>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="w-1/3 py-3.5 pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sm:pl-0">
                                                    Investment
                                                </th>
                                                <th scope="col" className="w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                                    LLC
                                                </th>
                                                <th scope="col" className="w-1/3    px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                                    C-Corp
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0">
                                                    Can issue a stock
                                                </td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">No</td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">Yes</td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0 sr-only">
                                                    sr-only
                                                </td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">Investors may not be interested in investing </td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">Preferred by investors</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-6 pb-32'>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="w-1/3 py-3.5 pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sm:pl-0">
                                                    Fundraising
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
                                                <td className="py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0">
                                                    Plan to raise a funds
                                                </td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">No</td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]">Yes</td>
                                            </tr>
                                            <tr className='relative -bottom-12'>
                                                <td className="py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0 sr-only">
                                                    sr-only
                                                </td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]"><button className='py-3 px-12 rounded-2xl bg-[#1649FF] text-white text-lg font-semibold leading-6' onClick={handleSelectLlc}>Start LLC</button></td>
                                                <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]"><button className='py-3 px-12 rounded-2xl bg-[#9EE248] text-white text-lg font-semibold leading-6' onClick={handleSelectCcorp}>Start C-Corp</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#1649FF] rounded-[1.5rem] relative overflow-hidden py-12 px-12 mb-24'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <img src={searchwhite} className='w-[22rem] absolute -top-12 -left-6' alt='search icon' />
                                </div>
                                <div className='block relative left-40'>
                                    <h2 className='text-[1.75rem] text-white font-semibold leading-8'>Take a quiz</h2>
                                    <p className='text-white  text-lg font-semibold leading-6 pt-4'>Find out what business type is right for you.</p>
                                </div>
                            </div>
                            <div>
                                <Link to={`/${i18n.language}/start-my-business`} className='rounded-[1.25rem] bg-white py-6 px-[4.25rem] text-black text-[1.375rem] font-semibold leading-[1.625rem]'>
                                    Take a quiz
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
