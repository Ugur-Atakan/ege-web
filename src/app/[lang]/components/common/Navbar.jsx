'use client';

import { React, Fragment, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, Transition, Menu, Dialog } from '@headlessui/react'
import {
  Bars3Icon,
  BookmarkSquareIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  PhoneIcon,
  ShieldCheckIcon,
  XMarkIcon,
  EnvelopeOpenIcon,
  UserIcon,
  DocumentDuplicateIcon,
  InboxStackIcon,
  ClipboardDocumentIcon,
  QuestionMarkCircleIcon,
  BuildingLibraryIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  RectangleStackIcon,
  RocketLaunchIcon,
  PresentationChartBarIcon,
  CubeIcon,
  ArchiveBoxIcon,
  DocumentTextIcon,
  PencilSquareIcon,
  FolderMinusIcon,
  ArrowPathIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import logo from '../../../../images/logo-blue.webp'
import chaticon from '../../../../images/chat.png'
import { useTranslation } from '../../../i18n/client'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ lang }) {
  const { t } = useTranslation(lang);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect() => {
//     const lang = location.pathname.spli"/")[1];
//     if (lang && currentLang !== lang && (lang === "en" || lang === "tr")) {
//       setCurrentLang(lang);
//       i18n.changeLanguage(lang);
//     } else if (!lang) {
//       setCurrentLang(i18n.language);
//       navigate(`/${i18n.language}${location.pathname}`, { replace: true });
//     } else if (lang !== "en" && lang !== "tr") {
//       navigate(`/notfound/`, { replace: true });
//     }
//   }, [i18n, navigate, location.pathname, currentLang]);

//   const changeLanguage = (lang) => {
//     if (lang === "en" || lang === "tr") {
//       setCurrentLang(lang);
//       i18n.changeLanguage(lang);
//       const newPathname = location.pathname.replace(`/${currentLang}`, `/${lang}`);
//       navigate(newPathname, { replace: true });
//     } else {
//       navigate(`/notfound/`, { replace: true });
//     }
//   };

  const menu1 = [
    {
      name: t('mobile_menu_title_4'),
      description: t('mobile_menu_title_4_desc'),
      href: `/${lang}/state`,
      icon: BuildingOfficeIcon,
    },
    {
      name: t('menu2_1_link_2_title'),
      description: t('menu2_1_link_2_subtitle'),
      href: `/${lang}/registered-agent`,
      icon: UserIcon,
    },
    {
      name: t('menu2_1_link_3_title'),
      description: t('menu2_1_link_3_subtitle'),
      href: `/${lang}/virtual-mailbox`,
      icon: EnvelopeOpenIcon,
    },
    {
      name: t('menu2_1_link_4_title'),
      description: t('menu2_1_link_4_subtitle'),
      href: `/${lang}/apostille`,
      icon: DocumentDuplicateIcon,
    }
  ]

  return (
    <div className='hidden md:block'>
      <header className='bg-white'>
        <nav className="mx-auto flex h-[5.5rem] items-center justify-between p-6  lg:px-8 border-b" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/">
              <span className="sr-only">Registate</span>
              <Image src={logo} className="h-10 w-36" alt="registrat-logo" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href={`/${lang}/company-type`}  className={({ isActive }) => 'text-[1.125rem] font-semibold leading-[1.5rem] text-[#8A8A8A]' + (isActive ? ' border-b-2 border-[#1649FF] !text-[#1649FF] -mb-8' :'')}>
              {t('header_1')}
            </Link>
            <Link href={`/${lang}//state`} className={({ isActive }) => 'text-[1.125rem] font-semibold leading-[1.5rem] text-[#8A8A8A]' + (isActive ? ' border-b-2 border-[#1649FF] !text-[#1649FF] -mb-8' :'')}>
              {t('header_2')}
            </Link>
            <Link href={`/${lang}//company-name`} className={({ isActive }) => 'text-[1.125rem] font-semibold leading-[1.5rem] text-[#8A8A8A]' + (isActive ? ' border-b-2 border-[#1649FF] !text-[#1649FF] -mb-8' :'')}>
              {t('header_3')}
            </Link>
            <Link href={`/${lang}/formation`} className={({ isActive }) => 'text-[1.125rem] font-semibold leading-[1.5rem] text-[#8A8A8A]' + (isActive ? ' border-b-2 border-[#1649FF] !text-[#1649FF] -mb-8' :'')}>
              {t('header_4')}
            </Link>
            <Link href={`/${lang}/review`} className={({ isActive }) => 'text-[1.125rem] font-semibold leading-[1.5rem] text-[#8A8A8A]' + (isActive ? ' border-b-2 border-[#1649FF] !text-[#1649FF] -mb-8' :'')}>
              {t('header_5')}
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className='hidden lg:flex items-center gap-4'>
              <Link
                href={`/${lang}/state`}
                id="header-fmc"
                className='bg-white flex items-center gap-2 py-2 px-4 text-[1.125rem] font-semibold leading-[1.5rem] text-[#1649FF]'
              >
                <Image src={chaticon} className='w-6 h-6' alt='chat icon' />
                  {t('header_right_btn')}
              </Link>
            </div>
          </div>
        </nav>
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Registate</span>
                <Image
                  className="h-8 w-auto"
                  src={logo}
                  alt=""
                />
              </Link>
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
                    href={`/${lang}/state`}
                    id="header-fmc"
                    className='bg-white py-2 px-4 rounded-xl text-[#132F8E] font-semibold text-[14px] leading-5'
                  >
                    {t('menu_top_right_handcorner_button')}
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog> 
      </header>
    </div>
  )
}
