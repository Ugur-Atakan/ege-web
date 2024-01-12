'use client';

import Image from 'next/image'
import { calendar, hat, folder, protectionicon, tic, at, navigator, travel, axe, wallet, filetext } from '@/assets/images';
import Card from './Card';
import { useTranslation } from '@/i18n/client'
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';

const SupportBusiness = ({ lang }) => {
  const { t } = useTranslation(lang);

  const stayCompliantPackage = [
    { name: t('after_formation_package1_title'), description: t('after_formation_package1_description'), button: t('after_formation_package1_button'), href: `/${lang}/product/compliance-reminder`, img: hat },
    { name: t('after_formation_package2_title'), description: t('after_formation_package2_description'), button: t('after_formation_package2_button'), href: `/${lang}/product/renewal-and-revival`, img: folder },
    { name: t('after_formation_package3_title'), description: t('after_formation_package3_description'), button: t('after_formation_package3_button'), href: `/${lang}/product/certificate-of-good-standing`, img: calendar },
    { name: t('after_formation_package4_title'), description: t('after_formation_package4_description'), button: t('after_formation_package4_button'), href: `/${lang}/contact-us`, img: tic },
    { name: t('after_formation_package5_title'), description: t('after_formation_package5_description'), button: t('after_formation_package5_button'), href: `https://www.anytimemailbox.com/s/wilmington-1401-pennsylvania-ave`, img: at },
    { name: t('after_formation_package6_title'), description: t('after_formation_package6_description'), button: t('after_formation_package6_button'), href: `/${lang}/contact-us`, img: navigator },
    // { name: t('after_formation_package7_title'), description: t('after_formation_package7_description'), button: t('after_formation_package7_button'), href: `/${lang}/contact-us`, img: mail },
    { name: t('after_formation_package9_title'), description: t('after_formation_package9_description'), button: t('after_formation_package9_button'), href: `/${lang}/contact-us`, img: travel },
    { name: t('after_formation_package10_title'), description: t('after_formation_package10_description'), button: t('after_formation_package10_button'), href: `/${lang}/contact-us`, img: folder },
    { name: t('after_formation_package11_title'), description: t('after_formation_package11_description'), button: t('after_formation_package11_button'), href: `/${lang}/contact-us`, img: axe },
    { name: t('after_formation_package12_title'), description: t('after_formation_package12_description'), button: t('after_formation_package12_button'), href: `/${lang}/contact-us`, img: folder },
    { name: t('after_formation_package13_title'), description: t('after_formation_package13_description'), button: t('after_formation_package13_button'), href: `/${lang}/contact-us`, img: wallet },
    { name: t('after_formation_package14_title'), description: t('after_formation_package14_description'), button: t('after_formation_package14_button'), href: `/${lang}/contact-us`, img: filetext }
  ]
  
  const isMobile = useMediaQuery({ maxWidth: 767 }); 

  return (
    <div className="bg-[#1649FF] overflow-hidden">
      <div className="mx-auto max-w-5xl p-8 lg:px-12 lg:pt-24 pb-12">
        <h2 className="font-bold text-[32px] leading-[38px] lg:text-[64px] lg:leading-[64px] text-white text-left lg:text-center">{t('after_formation_title_white')}</h2><h3 className="font-bold text-[32px] leading-[38px] lg:text-[64px] lg:leading-[64px] text-[#9EE248] text-left lg:text-center">{t('after_formation_title_green')}</h3>
      </div>
    
      {isMobile ? (
        <Slider
          // dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          swipeToSlide={true}
          adaptiveHeight={true}
          centerMode={true}
          autoplay={true}
          centerPadding="60px"
        >
          {stayCompliantPackage.map((pack, index) => (
            <Card key={index} index={index} pack={pack} />
          ))}
        </Slider>
      ) : (
        <div className='flex flex-row gap-4 scroller-inner'>
          {stayCompliantPackage.map((pack, index) => (
            <Card key={index} index={index} pack={pack} />
          ))}
        </div>
      )}
        

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

export default SupportBusiness