/* eslint-disable */
'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useTranslation } from '../../../i18n/client'
import { readCookie, submitCookie } from '../../../lib/session/clientActions'
import { useEffect, useState } from 'react'
import { Spinner, Tick, Cross } from './utils'
import axios from 'axios'

import Link from 'next/link'
import { redirect } from '../../../lib/utils'

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

  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const llcOptions = [t('companyname_llc_option1'),t('companyname_llc_option2'),t('companyname_llc_option3')];
  const ccorpOptions = [t('companyname_ccorp_option1'),t('companyname_ccorp_option2'),t('companyname_ccorp_option3'),t('companyname_ccorp_option4'),t('companyname_ccorp_option5')];

  const handleAbbreviationChange = (name) => {
    setAbbreviation(name);
    checkName();
  }

  const checkName = async () => {
    setLoading(true)
    setLoaded(true)
    const res = await axios.post('/api/namecheck?name=' + companyName)

    if (res.data == 'Available') {
      setSuccess(true)
    }
    else {
      setAbbreviation(null)
      setSuccess(false)
    }

    setLoading(false)
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
            <div className="max-w-lg mx-auto">
                <div className="py-2">
                  <label className="font-semibold text-lg leading-6 text-[#222222]">
                    {t('companyname_input1_label')}
                  </label>
                  <div className="relative">
                    <input
                      className="flex-1 border border-[#C8C8C8] rounded-[16px] w-full p-4 my-2 pr-10"
                      type='text'
                      value={companyName}
                      onChange={onChangeCompanyName}
                    />
                    <div className="absolute right-0 top-0 bottom-0 flex items-center pr-3">
                      {loaded ? (
                          loading ? (
                            <Spinner />
                          ) : (
                            success ? <Tick /> : <Cross />
                          )
                        ) : null}
                    </div>
                  </div>
                </div>
              </div>
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
                <option value="" disabled>Select an abbreviation</option>
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
            <button 
              disabled={!success}
              onClick={handleNameCompletion} 
              className={`w-full bg-[#1649FF] text-white text-center py-4 rounded-[20px] font-semibold text-[22px] leading-[26px] cursor-pointer ${success ? '' : 'opacity-50 cursor-not-allowed'}`}>
                {t('companyname_button')}
            </button>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Content