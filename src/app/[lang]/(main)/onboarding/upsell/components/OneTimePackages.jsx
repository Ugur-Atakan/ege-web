'use client'

import PricingCard from './PricingCard'
import { getPricing } from './one-time'
import { useRouter } from 'next/navigation'

const OneTimePackages = ({ lang, companyState,  EIN, apostille }) => {
  const pricing = getPricing(companyState, EIN, apostille);
  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/${lang}/onboarding/review`);
    router.refresh();      
  }

  return (
    <div className="bg-white">
    <main>
    {/* Pricing section */}
      <div className="isolate overflow-hidden">
        <div className="flow-root py-16 sm:pt-16 lg:pb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative z-10">
            <h1 className="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-black">
               One time Packages
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-black/60">
                Get these one time packages, pay once and enjoy the benefits.
            </p>
            <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
                {pricing.tiers.map((tier) => (
                    <PricingCard key={tier.id} tier={tier} frequency={pricing.frequencies[0]} />
                ))}
            </div>
            </div>
        </div>
        </div>
        
        <div className='my-10 mx-auto max-w-xl py-12'>
            <button
                onClick={handleSubmit}
                className={`hover:bg-blue-500 order-4 w-full bg-[#1649FF] text-white text-center py-4 rounded-[20px] font-semibold text-[22px] leading-[26px] cursor-pointer`}
            >
                Continue
            </button>
        </div>
    </div>
    </main>
   </div>
  )
}

export default OneTimePackages
