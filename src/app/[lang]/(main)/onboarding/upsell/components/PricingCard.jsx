'use client'

import React, { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'
import { readCookie, submitCookie } from '@/app/lib/session/clientActions'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const PricingCard = ({ lang, tier, frequency }) => {
    const router = useRouter();
    const [checked, setChecked] = useState(false);

    const handleSubmit = async () => {
    //   const cookie = await readCookie();
    //   console.log('cookie', cookie);
    //   const upsellIDs = cookie.upsellIDs ? cookie.upsellIDs : [];
    //   upsellIDs.push(tier.stripeIDs[frequency.value]);
    //   const cke = { ...cookie, upsellIDs: upsellIDs };
    //   submitCookie(cke);
        setChecked(true);
      // router.push(`/${lang}/onboarding/formation`);
      // router.refresh();
    };

    return tier.price[frequency.value] ? (
        <div
            key={tier.id}
            className={classNames(
                tier.mostPopular ? 'ring-2 ring-[#1649FF]' : 'ring-1 ring-gray-200',
                'rounded-2xl p-6'
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
            onClick={handleSubmit}
            aria-describedby={tier.id}
            className={classNames(
                checked
                    ? 'bg-green-500 text-white shadow-sm hover:bg-green-600'
                    : 'bg-[#1649FF] text-white ring-1 ring-inset ring-white hover:ring-indigo-300',
                'cursor-pointer flex justify-center w-full items-center mt-6 rounded-md py-3 px-12 text-center text-base font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            )}
        >
            {checked ?
                <>
                    <CheckIcon className="h-6 w-5 text-white" aria-hidden="true" />
                    Added to Package
                </> : 
                'Add to Package'
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

export default PricingCard
