'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import BackButton from './buttons/BackButton'
import EscapeButton from './buttons/EscapeButton'
import Heading from './Heading'

import { Spinner, Tick, Cross } from './utils'

import { useTranslation } from '@/i18n/client'

/**
 * Content for start my business page
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {clien}
 * @returns {JSX.Element} 
*/

const Content = ({ lang }) => {
    const { t } = useTranslation(lang);  

    const [companyName, setCompanyName] = useState('');
    const [abbreviation, setAbbreviation] = useState(null);
    const [finalAbbreviation, setFinalAbbreviation] = useState(null);

    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const options = [t('companyname_llc_option1'),t('companyname_llc_option2'),t('companyname_llc_option3'), t('companyname_ccorp_option1'),t('companyname_ccorp_option2'),t('companyname_ccorp_option3'),t('companyname_ccorp_option4'),t('companyname_ccorp_option5')];
    
    const handleAbbreviationChange = (e) => {
      setAbbreviation(e.target.value)
      setFinalAbbreviation(e.target.value)

      if (typeof window !== 'undefined' && window.localStorage)
      {
        if (e.target.value.includes('LLC') || e.target.value.includes('L.L.C.')
            || e.target.value.includes('Limited'))
        {
          window.localStorage.setItem('companyType', 'LLC');
        }
        else {
          window.localStorage.setItem('companyType', 'Corporation');
        }
        window.localStorage.setItem('companyName', companyName);
      }
      
      checkName();
    }

    const checkName = async () => {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('companyState', 'Delaware');
      }

      if (companyName != '') {
        setLoading(true)
        setLoaded(true)
  
        const res = await axios.post('/api/namecheck?name=' + companyName)

        if (res.data == 'Available') {
          setSuccess(true)
        }
        else {        
          setSuccess(false)
        }

        setAbbreviation(null)
        setLoading(false)
      }
    }

    return (
      <div className='company-type py-12'>
          <div className="mx-auto max-w-7xl bg-white lg:shadow-xl rounded-2xl open-animation">
            <div className="flex justify-between items-center py-4 px-12">
              <BackButton lang={lang} t={t} />
              <EscapeButton lang={lang} />
            </div>

            <Heading text={t('name_checker_title')} />
                
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
                    onChange={(e) => setCompanyName(e.target.value)}
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

            <div className="max-w-lg mx-auto pb-12">
              <div className="py-2">
                <label className="font-semibold text-lg leading-6 text-[#222222]">{t('companyname_input2_label')}</label>
                <select
                  id="abbreviation"
                  name="abbreviation"
                  value={abbreviation || ''} 
                  className="font-semibold border-[#C8C8C8] text-[#8A8A8A] w-full my-2 rounded-[16px] p-4 focus:border-[4px]"
                  onChange={handleAbbreviationChange}
                >
                  <option value="" disabled>Select an abbreviation</option>
                    { 
                      options.map((abb, index) => (
                        <option
                            key={index}
                            value={abb}
                        >
                            {abb}
                        </option>
                    ))}
                </select>
              </div>
            </div>
            
            <div className="flex flex-col max-w-lg mx-auto bg-white rounded-lg ">
              <div className='flex flex-col text-center shadow-lg p-3 rounded-md px-10 border border-[#C8C8C8] font-semibold'>
                <h1 className="font-medium text-md text-gray-800 mb-4">Your Company name will be:</h1>
                <p className="text-gray-700 text-2xl">
                    {companyName} {finalAbbreviation}
                </p>
              </div>

              <Link 
                href={`/${lang}/formation`}
                className={`my-8 py-3 px-44 bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded-lg ${success ? '' : 'opacity-50 cursor-not-allowed'}`}
                disabled={!success}
              >
                  Create my company
              </Link>
            </div>

            <div className="max-w-lg mx-auto text-sm text-gray-500 py-5">
                <sup className="mr-1">[*]</sup>Company name checker only works for Delaware based companies.
            </div>
          </div>
      </div>
  );
}
  
export default Content