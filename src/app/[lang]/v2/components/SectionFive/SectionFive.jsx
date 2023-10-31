'use client';

import { useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { calendar, hat, folder, protectionicon, tic, at, navigator, mail, phone, travel, axe, wallet, filetext, sheild, dollar, locker } from '@/assets/images'
import { NextArrow } from './Arrows'
import { useTranslation } from '@/i18n/client'

export default function SupportBusiness({ lang }) {
  const { t } = useTranslation(lang);
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [showAllPackages, setShowAllPackages] = useState(false);

  const stayCompliantPackage = [
    { name: t('after_formation_package1_title'), description: t('after_formation_package1_description'), button: t('after_formation_package1_button'), href: `/${lang}`, img: hat },
    { name: t('after_formation_package2_title'), description: t('after_formation_package2_description'), button: t('after_formation_package2_button'), href: `/${lang}`, img: folder },
    { name: t('after_formation_package3_title'), description: t('after_formation_package3_description'), button: t('after_formation_package3_button'), href: `/${lang}`, img: calendar },
    { name: t('after_formation_package4_title'), description: t('after_formation_package4_description'), button: t('after_formation_package4_button'), href: `/${lang}`, img: tic },
    { name: t('after_formation_package5_title'), description: t('after_formation_package5_description'), button: t('after_formation_package5_button'), href: `/${lang}`, img: at },
    { name: t('after_formation_package6_title'), description: t('after_formation_package6_description'), button: t('after_formation_package6_button'), href: `/${lang}`, img: navigator },
    { name: t('after_formation_package7_title'), description: t('after_formation_package7_description'), button: t('after_formation_package7_button'), href: `/${lang}`, img: mail },
    { name: t('after_formation_package8_title'), description: t('after_formation_package8_description'), button: t('after_formation_package8_button'), href: `/${lang}`, img: phone },
    { name: t('after_formation_package9_title'), description: t('after_formation_package9_description'), button: t('after_formation_package9_button'), href: `/${lang}`, img: travel },
    { name: t('after_formation_package10_title'), description: t('after_formation_package10_description'), button: t('after_formation_package10_button'), href: `/${lang}`, img: folder },
    { name: t('after_formation_package11_title'), description: t('after_formation_package11_description'), button: t('after_formation_package11_button'), href: `/${lang}`, img: axe },
    { name: t('after_formation_package12_title'), description: t('after_formation_package12_description'), button: t('after_formation_package12_button'), href: `/${lang}`, img: folder },
    { name: t('after_formation_package13_title'), description: t('after_formation_package13_description'), button: t('after_formation_package13_button'), href: `/${lang}`, img: wallet },
    { name: t('after_formation_package14_title'), description: t('after_formation_package14_description'), button: t('after_formation_package14_button'), href: `/${lang}`, img: filetext }
  ]
  const taxesPackage = [
    { name: t('after_formation_package15_title'), description: t('after_formation_package15_description'), button: t('after_formation_package15_button'), href: `/${lang}`, img: sheild },
    { name: t('after_formation_package16_title'), description: t('after_formation_package16_description'), button: t('after_formation_package16_button'), href: `/${lang}`, img: dollar },
    { name: t('after_formation_package17_title'), description: t('after_formation_package17_description'), button: t('after_formation_package17_button'), href: `/${lang}`, img: locker }
  ]

  const growYourBusinessPackage = [
    { name: t('after_formation_package18_title'), description: t('after_formation_package18_description'), button: t('after_formation_package18_button'), href: `/${lang}`, img: folder }
  ]


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow:4,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 7,
        }
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <NextArrow />,
  };

  const selectedPackages = (() => {
    if (selectedPackage === 0) {
      return stayCompliantPackage;
    } else if (selectedPackage === 1) {
      return taxesPackage;
    } else if (selectedPackage === 2) {
      return growYourBusinessPackage;
    }
  })();

  return (
    <div className="overflow-hidden">
        {/* bg-[#ECEFF1] */}

      <div className={t('after-formation hidden lg:block relative')} >
        <Slider {...settings} className='relative'>
          {selectedPackages.map((pac, index) => (           
            <div key={index} className="p-8 shadow-lg bg-white rounded-[32px] h-[35rem]">
                <div className="media-query-image flex items-center justify-center pb-4">
                  <Image src={pac.img} className='h-56 w-64' alt='' />
                </div>
                <div className="media-query-heading font-semibold text-[32px] leading-[38px] lg:leading-[44px] text-[#222222]">
                  {pac.name}
                </div>
                <div className="media-query-description">
                  {pac.description}
                </div>
                <button className="media-query-button absolute bottom-4 py-1 text-[19px] leading-[26px] font-semibold text-[#1649FF]">{pac.button}</button>
              </div> 
          ))}
        </Slider>
      </div>
      <div className="block px-8 lg:hidden">
        <div className="flex flex-col gap-3 py-12">
          {selectedPackages.slice(0, showAllPackages ? selectedPackages.length : 3).map((pac, index) => {
            return (
              <div key={index} className="overflow-hidden shadow-lg bg-white rounded-[32px] relative">
                <div className="flex items-center justify-center">
                  <Image className="h-64" src={pac.img} alt="Products" />
                </div>
                <div className="px-6">
                  <div className="font-semibold text-[40px] leading-[38px] lg:leading-[44px] text-[#222222]">{pac.name}</div>
                  <p className="font-semibold text-[16px] lg:text-lg leading-[22px] text-[#222222] pt-4">
                    {pac.description}
                  </p>
                </div>
                <div className="px-6 pt-6 pb-4 ">
                  <a to={pac.href} className="inline-block py-1 text-[22px] leading-[26px] font-semibold text-[#1649FF] mr-2 mb-2">{pac.button}</a>
                </div>
              </div>
            )
          })}
          {!showAllPackages && (
            <button onClick={() => setShowAllPackages(true)} className="mt-4 font-semibold text-[16px] leading-[22px] text-white">
              Show More
            </button>
          )}
        </div>
      </div>
      <div className="mx-auto max-w-5xl border-t mt-4 lg:mt-16 border-white border-opacity-[0.20] py-12 px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols:2 lg:grid-cols-3 items-start gap-6 lg:gap-3">
          <div className="flex items-start gap-3 justify-start lg:justify-center">
            <Image src={protectionicon} className='w-8 h-8 lg:w-6 lg:h-6' alt="protection icon" />
            <p className="text-white font-bold text-lg leading-6">{t('after_formation_footer1')}</p>
          </div>
          <div className="flex items-start gap-3 justify-start lg:justify-center">
            <Image src={protectionicon} className='w-8 h-8 lg:w-6 lg:h-6' alt="protection icon" />
            <p className="text-white font-bold text-lg leading-6">{t('after_formation_footer2')}</p>
          </div>
          <div className="flex items-start gap-3 justify-start lg:justify-center">
            <Image src={protectionicon} className='w-8 h-8 lg:w-6 lg:h-6' alt="protection icon" />
            <p className="text-white font-bold text-lg leading-6">{t('after_formation_footer3')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}