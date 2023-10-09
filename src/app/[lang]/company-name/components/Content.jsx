/* eslint-disable */
'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useTranslation } from '../../../i18n/client'
import { readCookie, submitCookie } from '../../../lib/session/clientActions'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import { redirect } from '../../../lib/util'

/**
 * Content component for the page
 * @type {function} Content React component
 * @param {object} lang - Language object from useTranslation hook
 * @type {client}
 * @returns {JSX.Element} Rendered content for the page
*/

const Content = ({ lang }) => {
  const { t } = useTranslation(lang);
  const [cookie, setCookie] = useState({});

  const [companyName, setCompanyName] = useState('');
  const [abbreviation, setAbbreviation] = useState('');

  const llcOptions = [t('companyname_llc_option1'),t('companyname_llc_option2'),t('companyname_llc_option3')];
  const ccorpOptions = [t('companyname_ccorp_option1'),t('companyname_ccorp_option2'),t('companyname_ccorp_option3'),t('companyname_ccorp_option4'),t('companyname_ccorp_option5')];

  const handleAbbreviationChange = (name) => {
    setAbbreviation(name);
  }

  const onChangeCompanyName = (e) => {
    setCompanyName(e.target.value);
    if (typeof window !== 'undefined' && window.localStorage)
      window.localStorage.setItem('companyName', e.target.value);
  }

  const handleNameCompletion = (e) => {
    const sendCookie = async () => {
      const cookieArr = {...cookie, companyName: companyName + ' ' + abbreviation};
      await submitCookie(cookieArr);
      redirect(`/formation`, lang);
    }

    sendCookie();
  }

  useEffect(()=> {
    const fetchCookie = async () => {
      const awaitCookie = await readCookie();
      setCookie(awaitCookie);
    }
    fetchCookie();
  },[])

  let companyType = '';
  let companyState = '';

  useEffect(()=> {
    companyType = window.localStorage.getItem('companyType');
    companyState = window.localStorage.getItem('companyState');
    window.localStorage.setItem('companyName', companyName);

    if (!(companyType && companyState)) {
      if (typeof window !== 'undefined' && window.location)
        window.location.href = `/${lang}/state`;
    }
  },[companyType, companyState, lang])

  return (
    <div className='bg-white'>
    <div className="mx-auto p-6 lg:px-8">
      <Link className='flex items-center gap-2' href={`/${lang}/state`}>
        <ArrowLeftIcon className='text-[#1649FF] h-[18px] w-[18px]' />
        <span className='text-[#1649FF] text-lg font-semibold'>{t('companyname_back_button')}</span>
      </Link>
    </div>
    <div className='mx-auto max-w-md px-8 md:px-0'>
      <div className='text-left md:text-center'>
        <h1 className='font-semibold text-[26px] md:text-[40px] leading-[44px] text-[#222222]'>{t('companyname_title')}</h1>
      </div>
      <div className='mx-auto max-w-xl py-6 md:py-12'>
        <ul className="grid w-full gap-6 md:grid-cols-1">
          <li>
            <label className="font-semibold text-lg leading-6 text-[#222222]">{t('companyname_input1_label')}</label>
           <input
            className="border border-[#C8C8C8] rounded-[20px] w-full p-4 my-2"
            type='text'
            onChange={onChangeCompanyName}
           />
          </li>
          <li>
          <label className="font-semibold text-lg leading-6 text-[#222222]">{t('companyname_input2_label')}</label>
          <select
                id="abbreviation"
                name="abbreviation"
                value={abbreviation}
                className="font-semibold border-[#C8C8C8] text-[#8A8A8A] w-full my-2 rounded-[20px] p-4 focus:border-[4px]"
                onChange={(e) => handleAbbreviationChange(e.target.value)}
              >
                {companyType==='LLC' ? llcOptions.map((abb, index) => (
                  <option
                    key={index}
                    value={abb}
                  >
                    {abb}
                  </option>
                )): ccorpOptions.map((abb, index) => (
                  <option
                    key={index}
                    value={abb}
                  >
                    {abb}
                  </option>
                ))}
              </select>
          </li>
            <button onClick={handleNameCompletion} className='w-full bg-[#1649FF] text-white text-center py-4 rounded-[20px] font-semibold text-[22px] leading-[26px] cursor-pointer'>
              {t('companyname_button')}
            </button>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Content