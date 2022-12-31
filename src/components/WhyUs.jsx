import React from 'react'
import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Decades of Experience In The Field',
    description:
      'Exceptional professional service serves as a symbol of our vision as our clients deserves the best there is.',
    icon: GlobeAltIcon,
  },
  {
    name: '24/7 Customer Support',
    description:
    'We are always here to help you. Our customer support team is available 24/7 to answer your questions.',
    icon: ScaleIcon,
  },
  {
    name: 'Fast and Reliable Service',
    description:
    'We are committed to providing you with the best service possible. We are always here to help you.',
    icon: BoltIcon,
  },
  {
    name: 'No Hidden Fees',
    description:
    'No hourly charges, no hidden fees, no surprises.',
    icon: DevicePhoneMobileIcon,
  },
]

export function WhyUs() {
  return (
    <div className="bg-white py-12 sm:py-12 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why work with us?</p>
          <p className="mx-auto mt-6 max-w-6xl text-lg leading-8 text-gray-600">
          We are a team of lawyers, CPAs, and entrepreneurs who have helped thousands of companies to start and manage successful businesses in the US for many years. We know the challenges you face and the concerns you have. This is why we have built Registate as a comprehensive platform that will take care of everything for you and give you piece of mind so you can focus on your business.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs