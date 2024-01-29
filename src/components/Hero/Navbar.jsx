'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Calendely from './Calendely'
import whitelogo from '@/assets/images/logos/registate-white-logo.png'
import bluelogo from '@/assets/images/logo-blue.webp'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LanguageChange from './LanguageChange'
import HoverMenu from './HoverMenu'
import i18next from 'i18next'
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isSticky, t, lang }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

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

    return (
        <motion.header
            className={`absolute inset-x-0 top-0 z-50 ${isSticky ? 'lg:!fixed !bg-[#ECEFF1]' : ''}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Calendely isSticky={isSticky} lang={lang} />

            <nav className={`mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-2 lg:p-0 ${isSticky && 'border-b border-[#C8C8C8] lg:p-4 lg:py-4'}`} aria-label="Global">
                <div className="flex lg:flex-1">
                    {!mobileMenuOpen &&
                        <Link href="/" className="hover:scale-105 hv-m-1.5 p-1.5">
                            <span className="sr-only">Registate</span>
                            <Image className="w-[116px] h-[34px]" src={isSticky ? bluelogo : whitelogo} alt="" />
                        </Link>
                    }
                </div>
                <div className="flex gap-x-3 lg:hidden">
                    {/* {!mobileMenuOpen && (
                        <Link href={`/${lang}/onboarding`}  className='bg-white rounded-[28px] py-2 px-4 text-[16px] leading-[22px] font-semibold text-[#1649FF]'>
                            {t('menu_top_right_handcorner_button')}
                        </Link>
                    )} */}
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {!mobileMenuOpen && <Bars3Icon className="h-8 w-8" aria-hidden="true" />}
                    </button>
                </div>
            
                {/* Mid navbar component */}
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link href={`/${lang}/how-it-works`} className={`hover:scale-105 px-2 text-sm font-medium leading-6 ${isSticky ? 'text-black' : 'text-white'}`}>
                        {t('menu2_title')}
                    </Link>
                    <button 
                        onMouseEnter={() => setShowMenu(!showMenu)}
                        className={`hover:scale-105 px-2 text-sm font-medium leading-6 ${isSticky ? 'text-black' : 'text-white'}`}
                    >
                        {t('menu1_title')}
                        <HoverMenu lang={lang} showMenu={showMenu} setShowMenu={setShowMenu}/>
                    </button>
                    <Link href={`/${lang}/blog`} className={`hover:scale-105 px-2 text-sm font-medium leading-6 ${isSticky ? 'text-black' : 'text-white'}`}>
                        {t('menu3_title')}
                    </Link>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className='hidden lg:flex items-center gap-4'>
                        <LanguageChange lang={lang} isSticky={isSticky} changeLanguage={changeLanguage} renderWhite={true} />
                    
                        {/* Button left */}
                        <Link
                            href={`/${lang}/onboarding`}
                            id="header-fmc"
                            className={`hover:scale-105 bg-white py-2 px-4 rounded-full text-[#1649FF] font-semibold text-[14px] leading-5' ${isSticky && '!bg-blue-600 !text-white'}`}
                        >
                            {t('menu_top_right_handcorner_button')}
                        </Link>
                    </div>
                </div>
            </nav>
            
            {/* Mobile Menu Right Sidebar */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Registate</span>
                                <Image
                                    className="h-8 w-auto bg-cover"
                                    src={whitelogo}
                                    alt="registate-logo"
                                />
                            </Link>
                            <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-400"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="flex flex-col space-y-5 py-6">
                            <Link href={`/${lang}/onboarding`} className="text-3xl font-extrabold leading-6 text-white">
                                {t('menu1_title')}
                            </Link>
                            <Link href={`/${lang}/how-it-works`} className="text-2xl leading-6 text-white">
                                {t('menu2_title')}
                            </Link>
                            <Link href={`/${lang}/blog`} className="text-2xl leading-6 text-white">
                                {t('menu3_title')}
                            </Link>

                            <div className="text-white">
                                <LanguageChange lang={lang} isSticky={isSticky} changeLanguage={changeLanguage} renderWhite={true}/>
                            </div>
                        </div>
                </Dialog.Panel>
            </Dialog>
        </motion.header>
    );
}

export default Navbar
