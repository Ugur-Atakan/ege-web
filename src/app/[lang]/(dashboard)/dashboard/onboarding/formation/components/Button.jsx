'use client'

import React from 'react'
import { getRandomPackages } from '../utils/util'
import { submitCookie } from '@/app/lib/session/clientActions' 
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const Button = ({ selectedPackage, selectedCompanyType, selectedPackageVar, lang, buttonText, bottomText }) => {
  const { data, update } = useSession();
  const router = useRouter();

  return (
    <div className='mx-auto max-w-xs'>
        <button
            className='w-full flex flex-col items-center justify-center font-semibold bg-[#1649FF] text-white rounded-[20px] p-5 cursor-pointer'
            onClick={() => {
                if (selectedPackage) {
                    const packages = getRandomPackages(selectedPackage, selectedCompanyType, selectedPackageVar);
                    update({ ...data, selectedPackage: JSON.stringify([{ ...selectedPackage, features: packages }])});
                    router.push(`/${lang}/dashboard/onboarding/company-name`);
                    router.refresh();
                }
            }}
        >
            {buttonText}
        </button>
    </div>
  )
}

export default Button
