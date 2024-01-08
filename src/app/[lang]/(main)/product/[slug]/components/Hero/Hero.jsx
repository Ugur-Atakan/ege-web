'use client'

import { React, useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Navbar from './Navbar'
import heroSvg from './heroSvg.svg'

import { useTranslation } from '@/i18n/client'

const Hero = ({ lang, id, name, description }) => {
  const { t } = useTranslation(lang);
  const router = useRouter();
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

  const getRedirectUrl = (id) => {
    if (id == 1) return `/${lang}/product/compliance-reminder/onboarding/compliance`;
  };
  const redirectUrl = getRedirectUrl(id);

  return (
    <div>
      <Navbar
        isSticky={isSticky}
        t={t}
        lang={lang}
      />

      <div className="my-[10%] mx-20">
          <div className="rounded-3xl flex flex-col md:flex-row items-center justify-center overflow-hidden shadow-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-white">
            <div className="w-full md:w-1/2 md:h-auto">
              <Image src={heroSvg} alt="heroSvg" />
            </div>
            
            <div className="w-full md:w-1/2 p-10 space-y-10">
              <h1 className="text-3xl font-bold text-[64px] leading-[64px]">{name}</h1>
              <p className="mt-3 mb-5 pb-10 opacity-50 text-lg font-medium leading-7">{description}</p>
              <button 
                onClick={() => {router.push(redirectUrl)}}  
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-4 px-6 rounded-full transition duration-300 inline-block">
                Get started now
              </button>
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