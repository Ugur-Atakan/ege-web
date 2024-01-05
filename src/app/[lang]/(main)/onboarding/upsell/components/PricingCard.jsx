'use client'

import React, { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { readCookie, submitCookie } from '@/app/lib/session/clientActions'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const PricingCard = ({ lang, tier, frequency }) => {
    const [monthlyChecked, setMonthlyChecked] = useState(false);
    const [annuallyChecked, setAnnuallyChecked] = useState(false);
    const [oneTimeChecked, setOneTimeChecked] = useState(false);

    const handleSubmit = async (e) => {
      if (frequency.value === 'monthly') {
        setMonthlyChecked(!monthlyChecked);
      } else if (frequency.value === 'annually') {
        setAnnuallyChecked(!annuallyChecked);
      } else if (frequency.value === 'oneTime') {
        setOneTimeChecked(!oneTimeChecked);
      }

      const cookie = await readCookie();
      const upsellIDs = cookie.upsellIDs ? cookie.upsellIDs : [];
      const currentIDs = upsellIDs.map((upsell) => upse2l.id);

      if (currentIDs.includes(tier.stripeIDs[frequency.value])) {
        const index = currentIDs.indexOf(tier.stripeIDs[frequency.value]);
        if (index > -1) {
          upsellIDs.splice(index, 1);
        }
      } 
      else {
        const freq = frequency.value.charAt(0).toUpperCase() + frequency.value.slice(1);
        const upsell = {
            id: tier.stripeIDs[frequency.value],
            name: tier.name + ' ' + freq,
            price: tier.price[frequency.value],
            description: tier.description,
        };
        upsellIDs.push(upsell);
      }
      
      const cke = { ...cookie, upsellIDs: upsellIDs };
      submitCookie(cke);
    };

    return tier.price[frequency.value] ? (
        <div
            key={tier.id}
            className={classNames(
                tier.mostPopular ? 'ring-2 ring-[#1649FF]' : 'ring-1 ring-gray-200',
                'rounded-2xl p-6 pb-36'
            )}
        >
        <h2
            id={tier.id}
            className={classNames(
                tier.mostPopular ? 'text-[#1649FF]' : 'text-gray-900',
                'text-lg font-semibold leading-8'
            )}
        >
            {tier.name}
        </h2>
        <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
        <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight text-gray-900">{'$ '+tier.price[frequency.value]}</span>
            <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span>
        </p>
        <button
            onClick={(e) => handleSubmit(e)}
            aria-describedby={tier.id}
            className={classNames(
                ((frequency.value === 'monthly' && monthlyChecked) || (frequency.value === 'annually' && annuallyChecked) || (frequency.value === 'oneTime' && oneTimeChecked)) 
                    ? 'bg-green-500 text-white shadow-sm hover:bg-green-600'
                    : 'bg-[#1649FF] text-white ring-1 ring-inset ring-white hover:ring-indigo-300',
                'cursor-pointer flex justify-center w-full items-center mt-6 rounded-md py-3 px-12 text-center text-base font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            )}
        >
            { 
                ((frequency.value === 'monthly' && monthlyChecked) || (frequency.value === 'annually' && annuallyChecked) || (frequency.value === 'oneTime' && oneTimeChecked)) ?
                <>
                    <CheckIcon className="h-6 w-5 text-white" aria-hidden="true" />
                    Added to Package
                </> : 'Add to Package' 
            }
        </button>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
            {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-[#1649FF]" aria-hidden="true" />
                    {feature}
                </li>
            ))}
        </ul>
     </div>
    ) :  null;
};

export default PricingCard;
