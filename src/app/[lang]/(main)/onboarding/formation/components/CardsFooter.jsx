'use client'

import React from 'react'
import { getRandomPackages } from '../utils/util'
import { submitCookie } from '@/app/lib/session/clientActions' 
import { useRouter } from 'next/navigation'

const CardsFooter = ({ cookie, selectedPackage, selectedCompanyType, selectedPackageVar, lang, buttonText, bottomText }) => {
  const router = useRouter();

  //* Set Cookie function
  const setCookie = (selectedPackage) => {
    const ckie = { ...cookie, 'selectedPackage': selectedPackage};
    const sendCookie = async () => {
      await submitCookie(ckie);
    }
    sendCookie();
  };

  return (
    <div className='mx-auto max-w-xs'>
        <button
            className='w-full flex flex-col items-center justify-center font-semibold bg-[#1649FF] text-white rounded-[20px] p-5 cursor-pointer'
            onClick={() => {
                setCookie(selectedPackage);
                const packages = getRandomPackages(selectedPackage, selectedCompanyType, selectedPackageVar);
                if (selectedPackage) {
                    if (typeof window !== 'undefined' && window.localStorage && window.location) {
                        window.localStorage.setItem('selectedPackage', JSON.stringify([{...selectedPackage, features: packages}]));
                        window.localStorage.setItem('companyFormationCompleted', true);
                        router.push(`/${lang}/v2/onboarding/company-name`);
                    }
                }
            }}
        >
            {buttonText}
        </button>
        <div className='w-full flex flex-col items-center justify-center'>
            <p className="md:py-6 font-semibold  text-[22px] leading-[26px] text-[#1649FF]">{bottomText}</p>
        </div>
    </div>
  )
}

export default CardsFooter
