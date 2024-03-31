'use client'

import { React, useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Navbar from './Navbar'
import heroSvg from './heroSvg.svg'
import heroImg from './heroImg.jpg'

import { useTranslation } from '@/i18n/client'

const Hero = ({ lang, id, name, description, pricing }) => {
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
    if (id == 1) return `/${lang}/product/onboarding/compliance`;
    else if(id == 2) return `/${lang}/product/onboarding/renewal-revival`;
    else if (id == 3) return `/${lang}/product/onboarding/cogs`;
    else if (id == 4) return `/${lang}/product/onboarding/registered-agent`;
  };
  const redirectUrl = getRedirectUrl(id);

  return (
    <div>
      <Navbar
        isSticky={isSticky}
        t={t}
        lang={lang}
      />
      
      <div className="mt-[16%] lg:mt-[8%] lg:mx-20 mx-6">
        <div className="flex flex-col border-b border-gray-200 lg:border-0">
          <div className="relative">
            <div aria-hidden="true" className="absolute hidden h-full w-1/2 lg:block" />
            <div className="relative  lg:bg-transparent">
              <div className="max-w-7xl px-4 rounded-t-3xl lg:rounded-l-3xl bg-gradient-to-r from-[#1649FF] to-[#3E79F4] sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                <div className="mx-auto max-w-3xl py-16 lg:max-w-none lg:py-24"> {/* Adjusted padding here */}
                  <div className="lg:pr-16">
                    <h1 className="text-3xl font-bold  text-white sm:text-5xl xl:text-6xl">
                      {name}
                    </h1>
                    <p className="mt-4 text-xl text-white">
                      {description}
                    </p>
                    <p className="mt-4 text-xl text-white">
                      {pricing.oneTime === -1 ? '' : '$ ' + pricing.oneTime + ' one time fee'}
                    </p>
                    <p className="mt-4 text-xl text-white">
                      {pricing.monthly === -1 ? '' : '$ ' + pricing.monthly + ' / month in Delaware'}
                    </p>
                    <p className="mt-4 text-xl text-white">
                      {pricing.yearly === -1 ? '' : '$ ' + pricing.yearly + ' / year in Delaware'}
                    </p>
                    <p className="mt-4 text-xl text-white">
                      {pricing.allStates === -1 ? '' : '$ ' + pricing.allStates + ' / year in all other States'}  
                    </p>
                    <div className="mt-6">
                      <button 
                        onClick={() => router.push(redirectUrl)}
                        className='bg-white text-[#1649FF] px-8 py-3 rounded-3xl font-bold text-lg hover:bg-black hover:text-white transition duration-300 ease-in-out'>
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-48 w-full  sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
              <Image
                src={heroImg}
                alt="hero-img"
                className="rounded-b-3xl lg:rounded-r-3xl  h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero