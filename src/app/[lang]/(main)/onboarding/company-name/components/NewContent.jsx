'use client'

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { submitCookie, readCookie } from '@/app/lib/session/clientActions'
import axios from 'axios'

import BackButton from '../../components/common/BackButton'
import { Spinner, Tick, Cross } from './utils'
import { useTranslation } from '@/i18n/client'

const NewContent = ({ lang }) => {
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

  //* Read cookie
  const [cookie, setCookie] = useState({});
  useEffect(() => {
    const readCkie = async () => {
      const ckie = await readCookie();
      console.log('Cookie inside company-name ', ckie);
      setCookie(ckie);
    }
    readCkie();
  }, []);

  const finishNameCompletion = () => {
    let ckie;
    if (abbreviation === '') ckie = { ...cookie, 'companyName': companyName + ' Inc'};
    else ckie = { ...cookie, 'companyName': companyName + ' ' + abbreviation};

    const sendCookie = async () => {
      await submitCookie(ckie);
      router.refresh();
    };
    sendCookie();
    router.push(`/${lang}/onboarding/upsell`);
  }

  return (
    <main>
      <div className="isolate overflow-hidden">
        <div className="flow-root bg-gray-900 py-16 sm:pt-16 lg:pb-0 h-screen">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative z-10">
                <h1 className="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">
                    Choose the name for your company!
                </h1>
            </div>
            <div className="flex items-center justify-center relative mt-10 ">
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
                        className={'relative rounded-2xl z-10  items-center bg-white shadow-xl ring-1 ring-gray-900/10'}
                    >
                        <div className="lg:pt-12 xl:p-10 xl:pt-14">
                                <ul className="grid w-full gap-6 md:grid-cols-1">
                                    <li>
                                    <div className="">
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
            </div>
        </div>
      </div>
    </main>
  )
}

export default NewContent