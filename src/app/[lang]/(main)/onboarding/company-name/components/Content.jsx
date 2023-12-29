/* eslint-disable */
'use client';

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { submitCookie } from '@/app/lib/session/clientActions'
import axios from 'axios'

import BackButton from '../../components/common/BackButton'
import { redirectToLastNullInternalFunnel, checkEqualPathName, clearPathnameLocalStorage } from '@/app/lib/utils'

import { Spinner, Tick, Cross } from './utils'
import { useTranslation } from '@/i18n/client'

/**
 * Content component for the page
 * @type {function} Content React component
 * @param {object} lang - Language object from useTranslation hook
 * @type {client}
 * @returns {JSX.Element} Rendered content for the page
*/

const Content = ({ lang , cookie }) => {
  const { t } = useTranslation(lang);
  const router = useRouter();
  const [companyName, setCompanyName] = useState('');
  const [abbreviation, setAbbreviation] = useState('');

  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const llcOptions = [t('companyname_llc_option1'),t('companyname_llc_option2'),t('companyname_llc_option3')];
  const ccorpOptions = [t('companyname_ccorp_option1'),t('companyname_ccorp_option2'),t('companyname_ccorp_option3'),t('companyname_ccorp_option4'),'Co'];

  const checkName = async () => {
    if (companyName != '') {
      try {
        setLoading(true);
        setLoaded(true);
  
        const res = await axios.post('/api/namecheck?name=' + encodeURIComponent(companyName));
        if (res.data === 'Available') {
          setSuccess(true);
        } else {
          setSuccess(false);
        }
      } catch (error) {
        console.error('Error checking name:', error);
      } finally {
        setLoading(false);
      }
    }
  }

  const onChangeCompanyName = (e) => {
    setCompanyName(e.target.value);
  }

  const finishNameCompletion = () => {
    let ckie; 
    if (abbreviation === '') ckie = { ...cookie, 'companyName': companyName + ' Inc'};
    else ckie = { ...cookie, 'companyName': companyName + ' ' + abbreviation};

    const sendCookie = async () => {
      await submitCookie(ckie);
    };
    sendCookie();
    router.push(`/${lang}/onboarding/upsell`);
    router.refresh();
  }

  return (
    <div className='bg-white'>
      <BackButton buttonText={t('companyname_back_button')} linkHref={`/${lang}/onboarding/formation`} />

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
                        onBlur={checkName}
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
                  value={abbreviation || ''}
                  className="font-semibold border-[#C8C8C8] text-[#8A8A8A] w-full my-2 rounded-[20px] p-4 focus:border-[4px]"
                  onChange={(e) => setAbbreviation(e.target.value)}
              >
                  <option disabled>Select a Designator</option>
                  {cookie.companyType ==='LLC' ? llcOptions.map((abb, index) => (
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
                onClick={finishNameCompletion} 
                className={`w-full bg-[#1649FF] text-white text-center py-4 rounded-[20px] font-semibold text-[22px] leading-[26px] cursor-pointer ${success ? '' : 'opacity-50 cursor-not-allowed'}`}
              >
                  {t('companyname_button')}
              </button>
          </ul>

          <div className="max-w-lg mx-auto text-sm text-gray-500 py-5">
            <sup className="mr-1">[*]</sup>{t('name_checker_footnote')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content