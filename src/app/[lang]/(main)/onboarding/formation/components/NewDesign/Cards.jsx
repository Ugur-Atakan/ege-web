import React from 'react'
import { CheckIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Cards = ({ pricing }) => {
    return pricing.tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? 'z-10 bg-white shadow-xl ring-1 ring-gray-900/10'
                  : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0',
                'relative rounded-2xl'
              )}
            >
              <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                <h2
                  id={tier.id}
                  className={classNames(
                    tier.featured ? 'text-gray-900' : 'text-white',
                    'text-4xl font-semibold leading-6'
                  )}
                >
                  {tier.name}
                </h2>
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                  <div className="mt-2 flex items-center gap-x-4">
                    <p
                      className={classNames(
                        tier.featured ? 'text-gray-900' : 'text-white',
                        'text-3xl font-bold tracking-tight'
                      )}
                    >
                      {tier.price}
                    </p>
                    <div className="text-sm leading-5">
                      <p className={tier.featured ? 'text-gray-900' : 'text-white'}>USD</p>
                
                    </div>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.featured
                        ? 'bg-blue-600 shadow-sm hover:bg-blue-500 focus-visible:outline-blue-600'
                        : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white',
                      'rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                    )}
                  >
                    Buy this Packages
                  </a>
                </div>
                <div className="mt-8 flow-root sm:mt-10">
                  <ul
                    role="list"
                    className={classNames(
                      tier.featured
                        ? 'divide-gray-900/5 border-gray-900/5 text-gray-600'
                        : 'divide-white/5 border-white/5 text-white',
                      '-my-2 divide-y border-t text-sm leading-6 lg:border-t-0'
                    )}
                  >
                    {tier.mainFeatures.map((mainFeature) => (
                      <li key={mainFeature} className="flex gap-x-3 py-2">
                        <CheckIcon
                          className={classNames(
                            tier.featured ? 'text-indigo-600' : 'text-gray-500',
                            'h-6 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                        {mainFeature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
        )
    );
};

export default Cards;
