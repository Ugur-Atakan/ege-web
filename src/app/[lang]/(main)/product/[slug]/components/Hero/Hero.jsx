'use client'

import { React, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
import heroSvg from './heroSvg.svg'

import { useTranslation } from '@/i18n/client'

const Hero = ({ lang, name, description }) => {
  const { t } = useTranslation(lang);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar
        isSticky={isSticky}
        t={t}
        lang={lang}
      />

      <div className="my-[10%] mx-20">
          <div className="rounded-3xl flex flex-col md:flex-row items-center justify-center bg-black text-white">
            <div className="w-full md:w-1/2 md:h-auto">
              <Image src={heroSvg} alt="heroSvg" />
            </div>
            
            <div className="w-full md:w-1/2 p-10 space-y-10">
              <h1 className="text-3xl font-bold text-[64px] leading-[64px]">{name}</h1>
              <p className="mt-3 mb-5 pb-10 opacity-50 text-lg font-medium leading-7">{description}</p>
              <Link 
                href={`/${lang}/v2/onboarding`}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300">
                Get started now
              </Link>
              <div className="mt-2 font-semibold leading-7">
                From $6.5/month*
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero