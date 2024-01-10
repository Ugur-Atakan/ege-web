'use client'

import React, { useEffect, useState } from 'react'
import {  RadioGroup } from '@headlessui/react'
import PricingCard from './PricingCard'
import { readCookie } from '@/app/lib/session/clientActions'
import { getPricing } from './util'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Pricing = ({ lang, complianceReminder, virtualMailBoxMonthly, virtualMailBoxYearly, officeSpaceMonthly, officeSpaceYearly }) => {  
  const [pricing, setPrice] = useState(null);
  const [cookie, setCookie] = useState({});
  const [frequency, setFrequency] = useState({});
  useEffect(() => {
    const readCkie = async () => {
      const ckie = await readCookie();
      const prices = getPricing(ckie.companyState, complianceReminder, virtualMailBoxMonthly, virtualMailBoxYearly, officeSpaceMonthly, officeSpaceYearly);
      setPrice(prices);
      setFrequency(prices.frequencies[0]);
      console.log('cookie', ckie)
      setCookie(ckie);
    }
    readCkie();
  }, []);


  return (
    <main>
      <div className="isolate overflow-hidden pb-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative z-10">
            {/* Pricing frequency */}
            <div className="flex justify-center">
                
              {pricing?.frequencies && ( <RadioGroup
                    value={frequency}
                    onChange={setFrequency}
                    className={pricing.frequencies.length === 1 ? `grid grid-cols-1 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200` : 'grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200'}
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
              )}
            </div>

            {/* Pricing cards */}
            <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
                {pricing?.tiers && pricing.tiers.map((tier) => (
                    <PricingCard cookie={cookie} key={tier.id} lang={lang} tier={tier} frequency={frequency} />
                ))}
            </div>
          </div>
        </div>
     </div>
    </main>
  )
}

export default Pricing
