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
import logo from '../../images/logo-blue.webp'
import chaticon from '../../images/chat.png'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
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
      name: 'mobile_menu_title_4',
      description: 'mobile_menu_title_4_desc',
      href: `/state`,
      icon: BuildingOfficeIcon,
    },
    {
      name: 'menu2_1_link_2_title',
      description: 'menu2_1_link_2_subtitle',
      href: `/registered-agent`,
      icon: UserIcon,
    },
    {
      name: 'menu2_1_link_3_title',
      description: 'menu2_1_link_3_subtitle',
      href: `/virtual-mailbox`,
      icon: EnvelopeOpenIcon,
    },
    {
      name: 'menu2_1_link_4_title',
      description: 'menu2_1_link_4_subtitle',
      href: `/apostille`,
      icon: DocumentDuplicateIcon,
    }
  ]


  const recurring = [
    { name: 'menu2_1_link_1_title', href: `/compliance-reminder`, desc: 'menu2_1_link_1_subtitle', icon: FolderMinusIcon },
    { name: 'menu2_1_link_2_title', href: `/registered-agent`, desc: 'menu2_1_link_2_subtitle', icon: BuildingOfficeIcon },
    { name: 'menu2_1_link_3_title', href: `/virtual-mailbox`, desc: 'menu2_1_link_3_subtitle', icon: EnvelopeOpenIcon },
    { name: 'menu2_1_link_4_title', href: `/office-address`, desc: 'menu2_1_link_4_subtitle', icon: BriefcaseIcon },
    { name: 'menu2_1_link_5_title', release: '(BETA', href: `/our-packages`, desc: 'menu2_1_link_5_subtitle', icon: CubeIcon },
    { name: 'menu2_1_link_6_title', release: '(BETA', href: `/virtual-phone-number`, desc: 'menu2_1_link_6_subtitle', icon: ChatBubbleLeftRightIcon },
    { name: 'menu2_1_link_7_title', href: `/dedicated-receptionist`, desc: 'menu2_1_link_7_subtitle', icon: PhoneIcon },
  ]
  const onetime = [
    { name: 'menu2_2_link_1_title', href: `/foreign-qualification`, desc: 'menu2_2_link_1_subtitle', icon: RocketLaunchIcon },
    { name: 'menu2_2_link_2_title', href: `/certificate-of-good-standing`, desc: 'menu2_2_link_2_subtitle', icon: BookmarkSquareIcon },
    { name: 'menu2_2_link_3_title', release: '(BETA', href: `/certified-copy-request`, desc: 'menu2_2_link_3_subtitle', icon: ClipboardDocumentListIcon },
    { name: 'menu2_2_link_4_title', release: '(BETA', href: `/ein`, desc: 'menu2_2_link_4_subtitle', icon: CalendarIcon },
    { name: 'menu2_2_link_5_title', release: '(BETA', href: `/entity-type-conversion`, desc: 'menu2_2_link_5_subtitle', icon: PresentationChartBarIcon },
    { name: 'menu2_2_link_6_title', href: `/renewal-and-revival`, desc: 'menu2_2_link_6_subtitle', icon: ArrowPathIcon },
    { name: 'menu2_2_link_7_title', desc: 'menu2_2_link_7_subtitle', href: `/dissolution-and-cancellation`, icon: ArchiveBoxIcon },
    { name: 'menu2_2_link_8_title', desc: 'menu2_2_link_8_subtitle', href: `/certificate-of-amendment`, icon: DocumentTextIcon },
    { name: 'menu2_2_link_9_title', desc: 'menu2_2_link_9_subtitle', href: `/doing-business-as`, icon: PencilSquareIcon },
  ]
  const ies = [
    { name: 'menu2_3_link_1_title', href: `/apostille`, desc: 'menu2_3_link_1_subtitle', icon: DocumentDuplicateIcon },
    { name: 'menu2_3_link_2_title', href: `/certified-copy-request`, desc: 'menu2_3_link_2_subtitle', icon: ClipboardDocumentListIcon },
    { name: 'menu2_3_link_3_title', href: `/ein`, desc: 'menu2_3_link_3_subtitle', icon: CalendarIcon },
    { name: 'menu2_3_link_4_title', href: `/us-bank-account-opening-support`, desc: 'menu2_3_link_4_subtitle', icon: BuildingLibraryIcon },
    { name: 'menu2_3_link_5_title', href: `/post-incorp`, desc: 'menu2_3_link_5_subtitle', icon: RectangleStackIcon },
  ]
  const support = [
    { name: 'menu3_1_title', href: `/faq`, desc: 'menu3_1_subtitle', icon: QuestionMarkCircleIcon },
    { name: 'menu3_2_title', href: `/terms-of-service`, desc: 'menu3_2_subtitle', icon: ClipboardDocumentIcon },
    { name: 'menu3_3_title', href: `/privacy-policy`, desc: 'menu3_3_subtitle', icon: ShieldCheckIcon },
    { name: 'menu3_4_title', href: `/contact`, desc: 'menu3_4_subtitle', icon: InboxStackIcon },
  ]
  return (
    <div className='hidden md:block'>
      <header className='bg-white'>
        <nav className="mx-auto flex h-[5.5rem] items-center justify-between p-6  lg:px-8 border-b" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/">
              <span className="sr-only">Registate</span>
              <Image  width={0} src={logo} className="h-10" alt="registrat-logo" />
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
            <a to={`/company-type`}  className={({ isActive }) => 'text-[1.125rem] font-semibold leading-[1.5rem] text-[#8A8A8A]' + (isActive ? ' border-b-2 border-[#1649FF] !text-[#1649FF] -mb-8' :'')}>
              Company Type
            </a>
            <a to={`/state`} className={({ isActive }) => 'text-[1.125rem] font-semibold leading-[1.5rem] text-[#8A8A8A]' + (isActive ? ' border-b-2 border-[#1649FF] !text-[#1649FF] -mb-8' :'')}>
              State
            </a>
            <a to={`/company-name`} className={({ isActive }) => 'text-[1.125rem] font-semibold leading-[1.5rem] text-[#8A8A8A]' + (isActive ? ' border-b-2 border-[#1649FF] !text-[#1649FF] -mb-8' :'')}>
              Company Name
            </a>
            <a to={`/formation`} className={({ isActive }) => 'text-[1.125rem] font-semibold leading-[1.5rem] text-[#8A8A8A]' + (isActive ? ' border-b-2 border-[#1649FF] !text-[#1649FF] -mb-8' :'')}>
              Formation
            </a>
            <a to={`/review`} className={({ isActive }) => 'text-[1.125rem] font-semibold leading-[1.5rem] text-[#8A8A8A]' + (isActive ? ' border-b-2 border-[#1649FF] !text-[#1649FF] -mb-8' :'')}>
              Review
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className='hidden lg:flex items-center gap-4'>
              <a
                to={`/state`}
                id="header-fmc"
                className='bg-white flex items-center gap-2 py-2 px-4 text-[1.125rem] font-semibold leading-[1.5rem] text-[#1649FF]'
              >
                <Image src={chaticon} className='w-6 h-6' alt='chat icon' />
                We're here to help
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
                  className="h-8 w-auto"
                  src={logo}
                  alt=""
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
                  <a to={`/state`} className="text-sm font-semibold leading-6 text-white">
                    {'menu1_title'}
                  </a>
                  <a to='#.' className="text-sm font-semibold leading-6 text-white">
                    {'menu2_title'}
                  </a>
                  <a to='#.' className="text-sm font-semibold leading-6 text-white">
                    {'menu3_title'}
                  </a>
                  <a to={`/blog`} className="text-sm font-semibold leading-6 text-white">
                    {'menu4_title'}
                  </a>
                </div>
                <div className="py-6">
                  <a
                    to={`/state`}
                    id="header-fmc"
                    className='bg-white py-2 px-4 rounded-xl text-[#132F8E] font-semibold text-[14px] leading-5'
                  >
                    {'menu_top_right_handcorner_button'}
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog> 
      </header>
    </div>
  )
}
