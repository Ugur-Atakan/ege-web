/* eslint-disable */
'use client'

import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { useTranslation } from '../../../i18n/client'
import axios from 'axios'

/**
 * Pricing component for state page
 * @type {function}
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element}
*/


const Pricing = ({ lang }) => {
  const { t } = useTranslation(lang);

  const [companyState, setCompanyState] = useState('');
  const [otherStates, setOtherStates] = useState([]);
  const [selectedLLC, setSelectedLLC] = useState(false);

  useEffect(() => { 
    setCompanyState(companyState);
    localStorage.setItem('companyState', companyState);
  }), [companyState];

  useEffect(() => {
    let companyType = localStorage.getItem('companyType');

    const updateState = () => {
      axios.get(`/${lang}/state/api/`)
      .then((response) => {
          var jsonData = response.data;
          const filteredStates = jsonData.filter(item => item.state !== 'Delaware' && item.state !== 'Wyoming');
          setOtherStates(filteredStates);
        })
        .catch((error) => {
          console.log(error);
        });
    }

      if (companyType !== "") {
        updateState();
        if(companyType === 'LLC'){
          setSelectedLLC(true);
        }
      } else {
          if (typeof window !== 'undefined' && window.location)
            window.location.href = `/${lang}/company-type`;
      }
  },[]);

  const handleCompanyStateChange = (name) => {
    setCompanyState(name);
  }

  return (
    <div className='bg-white'>
      <div className="mx-auto p-6 lg:px-8">
        <Link href={`/${lang}/company-type`} className='flex items-center gap-2' >
          <ArrowLeftIcon className='text-[#1649FF] h-[18px] w-[18px]' />
          <span className='text-[#1649FF] text-lg font-semibold'>{t('state_back_button')}</span>
        </Link>
      </div>
      <div className='mx-auto max-w-2xl px-8 md:px-0'>
        <div className='text-left md:text-center'>
          <h1 className='font-semibold  text-[26px] md:text-[40px] leading-[32px] md:leading-[44px] text-[#222222]'>{t('state_title')}</h1>
        </div>
        <div className='mx-auto max-w-xl py-12'>
          <ul className="grid w-full gap-6 md:grid-cols-1">
            <li onClick={()=> setCompanyState('Wyoming')} className={selectedLLC === true ? 'order-1' : 'order-2'}>
              <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required />
              <label htmlFor="hosting-small" className={`relative inline-flex items-start justify-between w-full p-5 bg-white border border-[#C8C8C8] rounded-[20px] cursor-pointer peer-checked:border-blue-600 peer-checked:border-[4px] peer-checked:text-blue-600 ${selectedLLC === true && 'wyoming'}`}>
                <div className="block">
                  <div className="w-full text-[22px] font-semibold leading-[26px] text-[#222222]">{t('state_option1_title')}</div>
                  <div className="w-[75%] pt-3 font-semibold text-lg leading-[24px] text-[#222222]">{t('state_option1_text')}</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"   className={`w-24 md:w-12 mt-4 ml-3 peer" ${companyState === 'Wyoming' && 'bg-blue-600 rounded-full border-2 border-white'}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

              </label>
            </li>
            <li onClick={()=> setCompanyState('Delaware')} className={selectedLLC===true ? 'order-2' : 'order-1'}>
              <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer" />
              <label htmlFor="hosting-big" className={`relative inline-flex items-start justify-between w-full p-5 text-gray-500 bg-white border border-[#C8C8C8] rounded-[20PX] cursor-pointer peer-checked:border-blue-600 peer-checked:border-[4px] peer-checked:text-blue-600 ${selectedLLC === false && 'delaware'}`}>
                <div className="block">
                  <div className="w-full text-[20px] md:text-[22px] font-semibold leading-[26px] text-[#222222]">{t('state_option2_title')}</div>
                  <div className="w-[75%] pt-3 font-semibold text-[16px] md:text-lg leading-[24px] text-[#222222]">{t('state_option2_text')}</div>
                </div>
                <svg className={`w-24 md:w-12 mt-4 ml-3 peer" ${companyState ==='Delaware' && 'bg-blue-600 rounded-full border-2 border-white'}`} aria-hidden="true" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="13.5" stroke="currentColor" />
                </svg>
              </label>
            </li>
            <li className='order-3'>
              <select
                id="companyState"
                name="companyState"
                value={companyState}
                placeholder={t('state_option3_text')}
                className="font-semibold border-[#C8C8C8] text-[#8A8A8A] w-full rounded-[20px] p-5 focus:border-[4px]"
                onChange={(e) => handleCompanyStateChange(e.target.value)}
              >
                <option value="">{t('state_option3_text')}</option>
                {otherStates.map((state) => (
                  <option
                    key={state.id}
                    value={state.state}
                  >
                    {state.state}
                  </option>
                ))}
              </select>

            </li>
            <Link href={`/${lang}/company-name/`} className='order-4 w-full bg-[#1649FF] text-white text-center py-4 rounded-[20px] font-semibold text-[22px] leading-[26px] cursor-pointer'>
              <button>
                {t('state_button')}
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pricing