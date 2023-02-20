import React from 'react'
import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'


export function WhyUs() {
  const { t } = useTranslation();
  const features = [
    {
      name: t('section3_icon1_title'),
      description:
        t('section3_icon1_desc'),
      icon: GlobeAltIcon,
    },
    {
      name: t('section3_icon2_title'),
      description:
        t('section3_icon2_desc'),
      icon: ScaleIcon,
    },
    {
      name: t('section3_icon3_title'),
      description:
        t('section3_icon3_desc'),
      icon: BoltIcon,
    },
    {
      name: t('section3_icon4_title'),
      description:
        t('section3_icon4_desc'),
      icon: DevicePhoneMobileIcon,
    },
  ]

  return (
    <div className="bg-white py-12 sm:py-12 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('section3_title')}</p>
          <p className="mx-auto mt-6 max-w-6xl text-lg leading-8 text-gray-600">
            {t('section3_desc')}
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className='flex items-center gap-4'>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white sm:shrink-0">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p className="md:hidden text-lg font-semibold leading-1 text-gray-900">{feature.name}</p>
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                <p className="hidden md:block text-lg font-semibold leading-1 text-gray-900">{feature.name}</p>
                  <p className=" text-base leading-7 text-gray-600">{feature.description}</p>
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