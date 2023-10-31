'use client'

import React from 'react'
import Slider from 'react-slick'
import Card from './Card'
import { settings } from './setting'
import { calendar, hat, folder, tic, at } from '@/assets/images';
import { useTranslation } from '@/i18n/client'

export default function SupportBusiness({ lang }) {
  const { t } = useTranslation();

  const stayCompliantPackage = [
    { name: t('after_formation_package3_title'), description: t('after_formation_package1_description'), href: `/${lang}/contact-us`, img: hat },
    { name: 'Initiate your Own Business With Our Starting Tips', href: `/${lang}/contact-us`, img: folder },
    { name: 'Registered Agent', href: `/${lang}/contact-us`, img: calendar },
    { name: t('after_formation_package4_title'), href: `/${lang}/contact-us`, img: tic },
    { name: t('after_formation_package5_title'), href: `/${lang}/contact-us`, img: at }
  ]

  return (
    <div className="bg-[#ECEFF1] hidden lg:block overflow-hidden py-12">
      
      <div className="mx-auto max-w-5xl py-6">
        <h1 className="font-bold text-[32px] leading-[38px] lg:text-[50px] lg:leading-[64px] text-black text-left lg:text-center">Give even more useful tips for your business with our files</h1>
      </div>

      <div className='after-formation relative my-10' >
        <Slider {...settings} className='relative'>
          {stayCompliantPackage.map((pac, index) => (           
              <Card
                key={index}
                index={index}
                img={pac.img}
                name={pac.name}
                description={pac.description}
                href={pac.href}
              />
          ))}
        </Slider>
      </div>
    </div>
  )
}