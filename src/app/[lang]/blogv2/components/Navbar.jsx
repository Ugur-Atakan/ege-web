'use client'

import React, { useState, Fragment, useEffect } from 'react'
import { Transition, Menu, Dialog } from '@headlessui/react'
import whitelogo from '../../../../images/logos/registate-white-logo.png'
import bluelogo from '../../../../images/logo-blue.webp'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '../../../i18n/client'

const Navbar = ({ lang }) => {
    const { t } = useTranslation();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [currentLang, setCurrentLang] = useState(lang);

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
                <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Registate</span>
                    <Image className="w-[116px] h-[34px]" src= {bluelogo} alt="bluelogo" />
                </Link> 
            </div>

            <div className='flex justify-between items-center space-x-4'>
                <div className="text-neutral-800 text-sm font-semibold leading-tight">Pricing</div>
                <div className="text-neutral-800 text-sm font-semibold leading-tight">Products</div>
                <div className="text-neutral-800 text-sm font-semibold leading-tight">Resources and support</div>
                <div className="text-neutral-800 text-sm font-semibold leading-tight">Contact Us</div>
            </div>
  
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <div className='hidden lg:flex items-center gap-4'>
                    <div>
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className={`uppercase text-[14px]  font-semibold leading-5 !text-black`}>
                                    {lang}
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute -right-16 z-10 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <div className='block'>
                                                <div className={lang === 'en' ? 'block cursor-pointer bg-slate-100 rounded-md' : 'block cursor-pointer hover:bg-slate-200'} onClick={() => changeLanguage("en")}>
                                                    <div className='flex items-center justify-center gap-2 p-3'>
                                                        <button className='text-gray-700'>English</button>
                                                    </div>
                                                </div>
                                                <div className={lang === 'tr' ? 'block cursor-pointer bg-slate-100 rounded-md' : 'block cursor-pointer hover:bg-slate-200'} onClick={() => changeLanguage("tr")}>
                                                    <div className='flex items-center justify-center gap-2 p-3'>
                                                        <button className='text-gray-700'>Turkish</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
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
      </nav>
    );
}

export default Navbar
