'use client';

import { useState } from "react";
import { useTranslation } from "../../i18n/client";
import Image from 'next/image';
import Slider from "react-slick";
import calendar from '../../../images/calendar.png';
import hat from '../../../images/hat.png';
import folder from '../../../images/folder.png';
import protectionicon from '../../../images/protection-icon.png';
import tic from '../../../images/tick-dynamic.png';
import at from '../../../images/at-dynamic.png';
import navigator from '../../../images/navigator.png';
import mail from '../../../images/mail-dynamic.png';
import phone from '../../../images/phone-missing-dynamic.png';
import travel from '../../../images/travel-dynamic.png';
import axe from '../../../images/axe-dynamic.png';
import wallet from '../../../images/wallet-dynamic.png';
import filetext from '../../../images/file-text-dynamic.png';
import sheild from '../../../images/sheild-dynamic.png';
import dollar from '../../../images/dollar-dynamic.png';
import locker from '../../../images/locker-dynamic.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#1649FF" }}
      onClick={onClick}
    />
  );
}

export default function SupportBusiness({ lang }) {
  const { t } = useTranslation(lang);

  const stayCompliantPackage = [
    { name: t('after_formation_package1_title'), description: t('after_formation_package1_description'), button: t('after_formation_package1_button'), href: `/`, img: hat },
    { name: t('after_formation_package2_title'), description: t('after_formation_package2_description'), button: t('after_formation_package2_button'), href: `/`, img: folder },
    { name: t('after_formation_package3_title'), description: t('after_formation_package3_description'), button: t('after_formation_package3_button'), href: `/`, img: calendar },
    { name: t('after_formation_package4_title'), description: t('after_formation_package4_description'), button: t('after_formation_package4_button'), href: `/`, img: tic },
    { name: t('after_formation_package5_title'), description: t('after_formation_package5_description'), button: t('after_formation_package5_button'), href: `/`, img: at },
    { name: t('after_formation_package6_title'), description: t('after_formation_package6_description'), button: t('after_formation_package6_button'), href: `/`, img: navigator },
    { name: t('after_formation_package7_title'), description: t('after_formation_package7_description'), button: t('after_formation_package7_button'), href: `/`, img: mail },
    { name: t('after_formation_package8_title'), description: t('after_formation_package8_description'), button: t('after_formation_package8_button'), href: `/`, img: phone },
    { name: t('after_formation_package9_title'), description: t('after_formation_package9_description'), button: t('after_formation_package9_button'), href: `/`, img: travel },
    { name: t('after_formation_package10_title'), description: t('after_formation_package10_description'), button: t('after_formation_package10_button'), href: `/`, img: folder },
    { name: t('after_formation_package11_title'), description: t('after_formation_package11_description'), button: t('after_formation_package11_button'), href: `/`, img: axe },
    { name: t('after_formation_package12_title'), description: t('after_formation_package12_description'), button: t('after_formation_package12_button'), href: `/`, img: folder },
    { name: t('after_formation_package13_title'), description: t('after_formation_package13_description'), button: t('after_formation_package13_button'), href: `/`, img: wallet },
    { name: t('after_formation_package14_title'), description: t('after_formation_package14_description'), button: t('after_formation_package14_button'), href: `/`, img: filetext }
  ]
  const taxesPackage = [
    { name: t('after_formation_package15_title'), description: t('after_formation_package15_description'), button: t('after_formation_package15_button'), href: `/`, img: sheild },
    { name: t('after_formation_package16_title'), description: t('after_formation_package16_description'), button: t('after_formation_package16_button'), href: `/`, img: dollar },
    { name: t('after_formation_package17_title'), description: t('after_formation_package17_description'), button: t('after_formation_package17_button'), href: `/`, img: locker }
  ]

  const growYourBusinessPackage = [
    { name: t('after_formation_package18_title'), description: t('after_formation_package18_description'), button: t('after_formation_package18_button'), href: `/`, img: folder }
  ]

  const [showAllPackages, setShowAllPackages] = useState(false);
  const packagesName = [t('after_formation_tab1'), t('after_formation_tab2'), t('after_formation_tab3')];

  const [selectedPackage, setSelectedPackage] = useState(0);

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
    nextArrow: <SampleNextArrow />,
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
    <div className="bg-[#1649FF] overflow-hidden">
      <div className="mx-auto max-w-5xl p-8 lg:px-12 lg:pt-24 pb-12">
        <h1 className="font-bold text-[32px] leading-[38px] lg:text-[64px] lg:leading-[64px] text-white text-left lg:text-center">{t('after_formation_title_white')}</h1><h1 className="text-[#9EE248]">{t('after_formation_title_green')}</h1>
      </div>
      <div className="flex items-center justify-center gap-0.5 pb-12">
        {packagesName.map((pac, index) => {
          return (
            <div key={index} onClick={() => setSelectedPackage(index)} className={`cursor-pointer rounded-[12px] text-white text-[16px] leading-[22px] px-[6px] py-2 font-semibold text-center ${selectedPackage === index ? 'bg-white text-[#1649FF]' : 'bg-[#1649FF] text-white'}`}>
              {pac}
            </div>
          )
        })}
      </div>
      <div className={t('after-formation hidden lg:block relative')} style={{ marginLeft: '15rem', width: 'calc(100% - 20px)' }}>
        <Slider {...settings} className='relative'>
          {selectedPackages.map((pac, index) => (           
              <div key={index} className="p-8 shadow-lg bg-white rounded-[32px] h-[35rem]">
                <div className="flex items-center justify-center pb-4">
                  <Image src={pac.img} className='h-56' alt='' />
                </div>
                <div className="font-semibold text-[32px] leading-[38px] lg:leading-[44px] text-[#222222]">
                  {pac.name}
                </div>
                <div className="font-semibold text-[16px] lg:text-lg leading-[22px] text-[#222222] pt-4 flex-1">
                  {pac.description}
                </div>
                <button className="absolute bottom-4 py-1 text-[19px] leading-[26px] font-semibold text-[#1649FF]">{pac.button}</button>
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