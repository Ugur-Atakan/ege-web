'use client'
import React from 'react'
import { getRandomPackages } from '../utils/util'
import { useRouter } from 'next/navigation'

const CardsFooter = ({ selectedPackage, selectedCompanyType, selectedPackageVar, lang, buttonText, bottomText }) => {
  const router = useRouter();

  return (
    <div className='mx-auto max-w-xs'>
        <button
            className='w-full flex flex-col items-center justify-center font-semibold bg-[#1649FF] text-white rounded-[20px] p-5 cursor-pointer'
            onClick={() => {
                const packages = getRandomPackages(selectedPackage, selectedCompanyType, selectedPackageVar);

                if (selectedPackage) {
                    if (typeof window !== 'undefined' && window.localStorage && window.location) {
                        window.localStorage.setItem('selectedPackage', JSON.stringify([{...selectedPackage, features: packages}]));
                        window.localStorage.setItem('companyFormationCompleted', true);
                        router.push(`/${lang}/onboarding/company-name`);
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
