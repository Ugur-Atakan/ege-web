'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LanguageChange from '@/components/Hero/LanguageChange'
import MobileSideMenu from './MobileSideMenu'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import bluelogo from '@/assets/images/logo-blue.webp'
import { useTranslation } from '@/i18n/client'

const Navbar = ({ lang }) => {
    const { t } = useTranslation();

    const [isSticky, setIsSticky] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const changeLanguage = (lang) => {
        if (lang === "en" || lang === "tr") {
          i18next.changeLanguage(lang);
    
          if (typeof window !== 'undefined' && window.location) {
            window.localStorage.setItem('i18nextLng', lang);
            window.location.href = `/${lang}`;
          }
        } else {
          navigate(`/${lang}/notfound/`, { replace: true });
        }
    };

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
      <nav className={`inset-x-0 top-0 lg:z-10 ${isSticky ? 'bg-[#ECEFF1] lg:!fixed' : '!relative'} `}>
        <div className='mx-[56px] flex  items-center justify-between p-6 lg:px-2 border-b border-[#C8C8C8] lg:p-4' aria-label="Global">
            <div className="flex lg:flex-1">
                {!mobileMenuOpen &&
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Registate</span>
                        <Image className="w-[116px] h-[34px]" src= {bluelogo} alt="bluelogo" />
                    </Link>
                }
            </div>

            <div className="flex gap-x-3 lg:hidden">
                    {!mobileMenuOpen && (
                        <Link
                            href={`/${lang}/company-type`} 
                            className='py-2 px-4 rounded-full font-medium text-[14px] leading-5 !bg-blue-600 !text-white'
                        >
                            {t('menu_top_right_handcorner_button')}
                        </Link>
                    )}
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {!mobileMenuOpen && <Bars3Icon className="h-8 w-8" aria-hidden="true" />}
                    </button>
            </div>

            <div className='hidden lg:flex lg:justify-between lg:items-center space-x-4'>
                <Link href={`/${lang}/company-type`} className="text-neutral-800 text-sm font-semibold leading-tight">Get Started</Link>
                <Link href={`/${lang}/how-it-works`} className="text-neutral-800 text-sm font-semibold leading-tight">How it Works</Link>
                <Link href={`/${lang}/blog`} className="text-neutral-800 text-sm font-semibold leading-tight">Blog</Link>
            </div> 
        
  
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <div className='hidden lg:flex items-center gap-4'>
                    <LanguageChange lang={lang} isSticky={isSticky} changeLanguage={changeLanguage} renderWhite={false}/>
                    
                    <Link
                        href={`/${lang}/company-type`}
                        id="header-fmc"
                        className='py-2 px-4 rounded-full font-medium text-[14px] leading-5 !bg-blue-600 !text-white'
                    >
                        {t('menu_top_right_handcorner_button')}
                    </Link>
                </div>
            </div>
        </div>

        <MobileSideMenu 
            t={t}
            lang={lang}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            isSticky={isSticky}
            changeLanguage={changeLanguage}
        />
      </nav>
    );
}

export default Navbar
