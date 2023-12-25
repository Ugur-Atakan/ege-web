'use client'

import { useState } from 'react'
import {  RadioGroup } from '@headlessui/react'
import PricingCard from './PricingCard'
import { getPricing } from './util'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Pricing = ({ lang, companyState, complianceReminder, virtualMailBoxMonthly, virtualMailBoxYearly, officeSpaceMonthly, officeSpaceYearly }) => {  
  const pricing = getPricing(companyState, complianceReminder, virtualMailBoxMonthly, virtualMailBoxYearly, officeSpaceMonthly, officeSpaceYearly);
  const [frequency, setFrequency] = useState(pricing.frequencies[0])

  return (
    <div className="bg-white">
    <main>
      <div className="isolate overflow-hidden">
        <div className="flow-root py-16 sm:pt-16 lg:pb-0">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
            <div className="relative z-10">
            <h1 className="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-black">
                Upsell Packages
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-black/60">
                Upgrade your package to get more features and benefits.
            </p>
            {/* Pricing frequency */}
            <div className="mt-16 flex justify-center">
                <RadioGroup
                    value={frequency}
                    onChange={setFrequency}
                    className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
                >
                    <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
                    {pricing.frequencies.map((option) => (
                        <RadioGroup.Option
                            key={option.value}
                            value={option}
                            className={({ checked }) =>
                                classNames(
                                checked ? 'bg-[#1649FF] text-white' : 'text-gray-500',
                                    'cursor-pointer rounded-full px-2.5 py-1'
                                )
                            }
                        >
                            <span>{option.label}</span>
                        </RadioGroup.Option>
                    ))}
                </RadioGroup>
            </div>

            {/* Pricing cards */}
            <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
                {pricing.tiers.map((tier) => (
                    <PricingCard key={tier.id} lang={lang} tier={tier} frequency={frequency} />
                ))}
            </div>
          </div>
        </div>
      </div>
     </div>
    </main>
   </div>
  )
}

export default Pricing
