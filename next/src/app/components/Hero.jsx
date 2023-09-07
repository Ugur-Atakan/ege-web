"use client";
import Image from 'next/image'
import { React, Fragment, useState, useEffect } from 'react'
import { Transition, Menu, Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { PopupButton } from "react-calendly";
import whitelogo from '../../images/logos/registate-white-logo.png'
import bluelogo from '../../images/logo-blue.webp'
import circle from '../../images/hero-circle.png';
import variant1 from '../../images/variant1.png';
import variant2 from '../../images/variant2.png';
import rocket from '../../images/rocket.png';

export function CalendlyText() {
  return (
    <div className='cursor-pointer flex items-center gap-2'>
      <p className='font-semibold text-xs leading-4 text-white'>{'Meow'}<span className='text-[#9EE248] mr-1'>En</span>tr</p>
      <ArrowRightIcon className='h-3 text-white' />
    </div>
  )
}

export default function Hero () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const lang = location.pathname.split("/")[1];
//     if (lang && currentLang !== lang && (lang === "en" || lang === "tr")) {
//       setCurrentLang(lang);
//       i18n.changeLanguage(lang);
//     } else if (!lang) {
//       setCurrentLang(i18n.language);
//       navigate(`/${i18n.language}${location.pathname}`, { replace: true });
//     } else if (lang !== "en" && lang !== "tr") {
//       navigate(`/${i18n.language}/notfound/`, { replace: true });
//     }
//   }, [i18n, navigate, location.pathname, currentLang]);

  // const changeLanguage = (lang) => {
  //   if (lang === "en" || lang === "tr") {
  //     setCurrentLang(lang);
  //     i18n.changeLanguage(lang);
  //     const newPathname = location.pathname.replace(`/${currentLang}`, `/${lang}`);
  //     navigate(newPathname, { replace: true });
  //   } else {
  //     navigate(`/${i18n.language}/notfound/`, { replace: true });
  //   }
  // };

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
    <div className="hero-section">
      <header className={`absolute inset-x-0 top-0 z-50 ${isSticky ? 'lg:!fixed !bg-[#ECEFF1]' : ''}`}>
        <nav className={`hidden mx-auto max-w-7xl p-6 lg:px-2 ${isSticky ? '!lg:hidden' : 'lg:block'}`}>
          <div className='flex items-center justify-center -mt-4 pb-2 border-[#ECEFF1] border-b-[1px] border-opacity-10'>
            <div className='flex items-center gap-2'>
              <PopupButton
                url="https://calendly.com/bceylan/30min"
                rootElement={document.getElementById("root")}
                text={<CalendlyText />}
                className="font-semibold text-xs leading-4 text-white cursor-pointer outline-none border-none"
              >
              </PopupButton>
            </div>
          </div>
        </nav>
        <nav className={`mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-2 lg:p-0 ${isSticky && 'border-b border-[#C8C8C8] lg:p-4 lg:py-4'}`} aria-label="Global">
          <div className="flex lg:flex-1">
            <a to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Registate</span>
              <Image className="w-[116px] h-[34px]" src={isSticky ? bluelogo : whitelogo} alt="" />
            </a>
          </div>
          <div className="flex gap-x-3 lg:hidden">
            <a to={`/`} className='bg-white rounded-[28px] py-3 px-4 text-[16px] leading-[22px] font-semibold text-[#1649FF]'>
              {'Loreum Ipsum'}
            </a>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            // onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:hidden lg:gap-x-12">
            <a to={`/`} className="text-sm font-semibold leading-6 text-white">
              {'Loreum Ipsum'}
            </a>
            <a to='#.' className="text-sm font-semibold leading-6 text-white">
              {'Loreum Ipsum'}
            </a>
            <a to='#.' className="text-sm font-semibold leading-6 text-white">
              {'Loreum Ipsum'}
            </a>
            <a to={`/`} className="text-sm font-semibold leading-6 text-white">
              {'Loreum Ipsum'}
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className='hidden lg:flex items-center gap-4'>
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className={`uppercase text-[14px]  font-semibold leading-5 text-white ${isSticky && '!text-black'}`}>
                      {'en'}
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
                            <div className={1 === 1 ? 'block cursor-pointer bg-slate-100 rounded-md' : 'block cursor-pointer hover:bg-slate-200'} onClick={() => changeLanguage("en")}>
                              <div className='flex items-center justify-center gap-2 p-3'>
                                <button className='text-gray-700'>English</button>
                              </div>
                            </div>
                            <div className={1 === 1 ? 'block cursor-pointer bg-slate-100 rounded-md' : 'block cursor-pointer hover:bg-slate-200'} onClick={() => changeLanguage("tr")}>
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
              <a
                to={`/`}
                id="header-fmc"
                className={`bg-white py-2 px-4 rounded-xl text-[#132F8E] font-semibold text-[14px] leading-5' ${isSticky && '!bg-blue-600 !text-white'}`}
              >
                {'Loreum Ipsum'}
              </a>
            </div>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Registate</span>
                <Image
                  className="h-8 w-auto bg-cover"
                  src={whitelogo}
                  alt="registate hero section"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  <a to={`/`} className="text-sm font-semibold leading-6 text-white">
                    {'Loreum Ipsum'}
                  </a>
                  <a to='#.' className="text-sm font-semibold leading-6 text-white">
                    {'Loreum Ipsum'}
                  </a>
                  <a to='#.' className="text-sm font-semibold leading-6 text-white">
                    {'Loreum Ipsum'}
                  </a>
                  <a to={`/`} className="text-sm font-semibold leading-6 text-white">
                    {'Loreum Ipsum'}
                  </a>
                </div>
                <div className="py-6">
                  <a
                    to={`/`}
                    id="header-fmc"
                    className={'bg-white py-2 px-4 rounded-xl text-[#132F8E] font-semibold text-[14px] leading-5'}
                  >
                    {'Loreum Ipsum'}
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate overflow-hidden pt-14 hero-section">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-64 relative z-[3]">
          <div className="text-left lg:text-center px-6 lg:px-0 lg:-mt-24">
            <h1 className="text-4xl leading-[38px] font-bold tracking-tight text-white sm:text-7xl">
              {'F'} <span className='text-[#9EE248]'> {'F'}</span>
            </h1>
            <div className='flex items-center justify-center' >
              <div className='max-w-md'>
                <p className="mt-6 font-semibold text-[16px] lg: leading-[22px] text-lg text-white">
                  {'Loreum Ipsum'}
                </p>
              </div>
            </div>
            <div className="mt-10 flex items-center lg:justify-center gap-x-2">
              <a
                to={`/`}
                className="rounded-2xl  py-3 lg:py-[14px] leading-[22px] px-6 font-semibold text-[15px] lg:text-lg text-[#222222] bg-[#9EE248]"
              >
                {'Loreum Ipsum'}
              </a>
              <a to="#" className="rounded-2xl py-3 lg:py-[14px] leading-[22px] px-6 font-semibold text-[15px] lg:text-lg text-white border bg-transparent">
                {'Loreum Ipsum'}
              </a>
            </div>
          </div>
        </div>
        <div className='absolute top-8 -right-[45rem] lg:top-36 lg:right-0 z-0 rocket-animation'>
          <Image src={rocket} className='rocket' alt='rocket' />
        </div>
        <div className='absolute bottom-4 lg:bottom-16 z-[2]'>
          <Image src={variant1} className='variant1' alt='variant 1' />
        </div>
        <div className='absolute bottom-4 lg:bottom-14'>
          <Image src={variant2} className='variant2' alt='variant 2' />
        </div>
        <div className='absolute bottom-0'>
          <Image src={circle} className='circle' alt='circle' />
        </div>
      </div>
    </div>
  )
}
