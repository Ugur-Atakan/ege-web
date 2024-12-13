'use client'

import React, { useEffect, useState } from 'react'
import PricingCard from './PricingCard'
import { getPricing } from './one-time'
import { readCookie } from '@/app/lib/session/clientActions'  
import { useRouter } from 'next/navigation'

const OneTimePackages = ({ lang,  EIN, apostille }) => {
  const router = useRouter();

  const [pricing, setPrice] = useState(null);
  const [cookie, setCookie] = useState({});
  useEffect(() => {
    const readCkie = async () => {
      const ckie = await readCookie();
      setPrice(getPricing(ckie.companyState, EIN, apostille));
      setCookie(ckie);
    }
    readCkie();
  }, []);

  return (
    <main>
    {/* Pricing section */}
      <div className="isolate overflow-hidden pt-10">
        <div className="flow-root ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative z-10">
            <h1 className="text-white mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight ">
               One time Packages
            </h1>
            <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
                {pricing?.tiers && pricing.tiers.map((tier) => (
                    <PricingCard key={tier.id} cookie={cookie} tier={tier} frequency={pricing.frequencies[0]} />
                ))}
            </div>
            </div>
        </div>
        </div>
        
        <div className='my-10 mx-auto max-w-xl py-12'>
            <button
                onClick={() => router.push(`/${lang}/onboarding/review`)}
                className={`hover:bg-blue-500 order-4 w-full bg-[#1649FF] text-white text-center py-4 rounded-[20px] font-semibold text-[22px] leading-[26px] cursor-pointer`}
            >
                Continue
            </button>
        </div>
    </div>
    </main>
  )
}

export default OneTimePackages
