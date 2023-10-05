'use client'

import Link from 'next/link'
import { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'
import { Transition, Menu, Dialog } from '@headlessui/react'

import whitelogo from '../../../../images/logos/registate-white-logo.png'
import bluelogo from '../../../../images/logo-blue.webp'

import { useTranslation } from '../../../i18n/client'
import i18next from 'i18next'

/**
 * Navbar Component 
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {client}
 * @returns {JSX.Element} 
*/

const Navbar = ({ lang }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { t } = useTranslation(lang);

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
        <header className={`absolute inset-x-0 top-0 z-50 ${isSticky ? 'lg:!fixed !bg-[#ECEFF1]' : ''}`}>
        <nav className={`mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-2 lg:p-0 lg:py-4 ${isSticky && 'border-b border-[#C8C8C8] lg:p-4 lg:py-4'}`} aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Registate</span>
              <Image className="w-[116px] h-[34px]" src={isSticky ? bluelogo : whitelogo} alt="" />
            </Link>
          </div>
          <div className="flex gap-x-3 lg:hidden">
            <Link href={`/${lang}/company-type`} className='bg-white rounded-[28px] py-3 px-4 text-[16px] leading-[22px] font-semibold text-[#1649FF]'>
              {t('menu_top_right_handcorner_button')}
            </Link>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            // onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              {/* <Bars3Icon className="h-8 w-8" aria-hidden="true" /> */}
            </button>
          </div>
          <div className="hidden lg:hidden lg:gap-x-12">
            <Link href={`/${lang}/company-type`} className="text-sm font-semibold leading-6 text-white">
              {t('menu1_title')}
            </Link>
            <Link href='#.' className="text-sm font-semibold leading-6 text-white">
              {t('menu2_title')}
            </Link>
            <Link href='#.' className="text-sm font-semibold leading-6 text-white">
              {t('menu3_title')}
            </Link>
            <Link href={`/${lang}/blog`} className="text-sm font-semibold leading-6 text-white">
              {t('menu4_title')}
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className='hidden lg:flex items-center gap-4'>
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className={`uppercase text-[14px]  font-semibold leading-5 text-white ${isSticky && '!text-black'}`}>
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
                className={`bg-white py-2 px-4 rounded-xl text-[#132F8E] font-semibold text-[14px] leading-5' ${isSticky && '!bg-blue-600 !text-white'}`}
              >
                {t('menu_top_right_handcorner_button')}
              </Link>
            </div>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href={`/${lang}`} className="-m-1.5 p-1.5">
                <span className="sr-only">Registate</span>
                <Image
                  className="h-8 w-auto bg-cover"
                  src={whitelogo}
                  alt="registate hero section"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  <Link href={`/${lang}/state`} className="text-sm font-semibold leading-6 text-white">
                    {t('menu1_title')}
                  </Link>
                  <Link href='#.' className="text-sm font-semibold leading-6 text-white">
                    {t('menu2_title')}
                  </Link>
                  <Link href='#.' className="text-sm font-semibold leading-6 text-white">
                    {t('menu3_title')}
                  </Link>
                  <Link href={`/${lang}/blog`} className="text-sm font-semibold leading-6 text-white">
                    {t('menu4_title')}
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    href={`/${lang}/company-type`}
                    id="header-fmc"
                    className={'bg-white py-2 px-4 rounded-xl text-[#132F8E] font-semibold text-[14px] leading-5'}
                  >
                    {t('menu_top_right_handcorner_button')}
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    )
}

export default Navbar