/* eslint-disable */
'use client'

import React, { useEffect, useState } from 'react'
import {  useRouter } from 'next/navigation'
import { useTranslation } from '@/i18n/client'
import { readCookie, submitCookie } from '@/app/lib/session/clientActions'

import BackButton from '../../components/common/BackButton'
import Heading from './Heading'
import DropDown from './DropDown'
import dynamic from 'next/dynamic'
import axios from 'axios'

const RadioListItem = dynamic(() => import('./RadioListItem'))

const NewContent = ({ cookie, lang }) => {
    const { t } = useTranslation(lang);
    const router = useRouter();
   
    const [companyState, setCompanyState] = useState('');
    const [otherStates, setOtherStates] = useState([]);
    let selectedLLC = false;
    
    //* Button click
    const handleSubmit = () => {
      const ckie = {...cookie, companyState: companyState};
      const setCookie = async (ckie) => {
        await submitCookie(ckie);
        router.refresh();
      }
      setCookie(ckie);
      router.push(`/${lang}/onboarding/formation`);
    }
  
    //* API call to get the states
    useEffect(() => {
      const getState = async () => {
        await axios.get('/api/states')
        .then((response) => {
            var jsonData = response.data;
            const filteredStates = jsonData.filter(item => item.state !== 'Delaware' && item.state !== 'Wyoming');
            setOtherStates(filteredStates);
        })
        .catch((error) => {
          console.log(error);
        });
      }
      getState();
    },[]);
  
  return (
    <div className="bg-white">

      <main>
        {/* Pricing section */}
        <div className="isolate overflow-hidden">
          <div className="flow-root bg-gray-900 py-16 sm:pt-18 lg:pb-0">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="relative z-10">
                <h1 className="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">
                  {t('state_title')}
                </h1>
              </div>
              <div className="flex items-center justify-center relative mt-10">
                <svg
                  viewBox="0 0 1208 1024"
                  aria-hidden="true"
                  className="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
                >
                  <ellipse cx={604} cy={512} fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" rx={604} ry={512} />
                  <defs>
                    <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                      <stop stopColor="#1649FF" />
                      <stop offset={1} stopColor="#1649FF" />
                    </radialGradient>
                  </defs>
                </svg>
                  <div
                    className={'relative rounded-2xl z-10 mb-12 items-center bg-white shadow-xl ring-1 ring-gray-900/10'}
                  >
                    <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14 ">
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                      <div className='mx-auto max-w-2xl px-8 md:px-0'>
        
                        <ul className="grid w-full gap-6 md:grid-cols-1">
                            <RadioListItem
                                id="hosting-small"
                                state="Wyoming"
                                companyType={cookie.companyType}
                                companyState={companyState}
                                title={t('state_option1_title')}
                                text={t('state_option1_text')}
                                checked={selectedLLC == false}
                                onClick={() => setCompanyState('Wyoming')}
                            />   

                            <RadioListItem
                                id="hosting-big"
                                state="Delaware"
                                companyType={cookie.companyType}
                                companyState={companyState}
                                title={t('state_option2_title')}
                                text={t('state_option2_text')}
                                checked={selectedLLC == true}
                                onClick={() => setCompanyState('Delaware')}
                            />

                            <li className="order-3">
                              <div className="text-center">
                                <h3 className="text-lg font-medium text-gray-900">Or</h3>
                              </div>
                            </li>

                            <li className="order-4">
                              <DropDown
                                  id="companyState"
                                  value={companyState}
                                  placeholder={t('state_option3_text')}
                                  options={otherStates}
                                  onChange={(e) => setCompanyState(e.target.value)}
                              />
                            </li>

                            <button 
                              onClick={handleSubmit}
                              className={`order-5 w-full bg-[#1649FF] text-white text-center py-4 rounded-[20px] font-semibold text-[22px] leading-[26px] cursor-pointer ${companyState ? '' : 'opacity-50 cursor-not-allowed pointer-events-none'}`}
                            >
                              {t('state_button')}
                            </button>
                        </ul>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NewContent
