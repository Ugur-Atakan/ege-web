import { React, Fragment } from 'react'
import { Popover, Transition, Menu } from '@headlessui/react'
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
  ReceiptPercentIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'
import Logo from '../images/logo2x.png.webp'
import { useTranslation } from 'react-i18next';
import turkeyicon from '../images/turkey.png'
import ukicon from '../images/united-kingdom.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: 'pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQs', href: '#faqs' },
]
const lngs = {
  en: { nativeName: 'English', icon: ukicon },
  tr: { nativeName: 'Turkish', icon: turkeyicon }
};


export function Navbar() {

  const { t, i18n } = useTranslation();
  const menu1 = [
    {
      name: t('mobile_menu_title_4'),
      description: t('mobile_menu_title_4_desc'),
      href: '/pricing/form-my-company',
      icon: BuildingOfficeIcon,
    },
    {
      name: t('menu2_1_link_2_title'),
      description: t('menu2_1_link_2_subtitle'),
      href: '/registered-agent',
      icon: UserIcon,
    },
    {
      name: t('menu2_1_link_3_title'),
      description: t('menu2_1_link_3_subtitle'),
      href: '/virtual-mailbox',
      icon: EnvelopeOpenIcon,
    },
    {
      name: t('menu2_1_link_4_title'),
      description: t('menu2_1_link_4_subtitle'),
      href: '/apostille',
      icon: DocumentDuplicateIcon,
    }
  ]

  const pricing = [
    { name: t('menu1_title'), href: '/pricing/form-your-company', desc: 'Remain compliant', icon: BuildingOfficeIcon },
    { name: 'Other Services', href: '/pricing/other-services', desc: 'Secure registered agent service online', icon: ReceiptPercentIcon },
  ]

  const recurring = [
    { name: t('menu2_1_link_1_title'), href: '/compliance-reminder', desc: t('menu2_1_link_1_subtitle'), icon: FolderMinusIcon },
    { name: t('menu2_1_link_2_title'), href: '/registered-agent', desc: t('menu2_1_link_2_subtitle'), icon: BuildingOfficeIcon },
    { name: t('menu2_1_link_3_title'), href: '/virtual-mailbox', desc: t('menu2_1_link_3_subtitle'), icon: EnvelopeOpenIcon },
    { name: t('menu2_1_link_4_title'), href: '/office-address', desc: t('menu2_1_link_4_subtitle'), icon: BriefcaseIcon },
    { name: t('menu2_1_link_5_title'), release: '(BETA)', href: '/our-packages', desc: t('menu2_1_link_5_subtitle'), icon: CubeIcon },
    { name: t('menu2_1_link_6_title'), release: '(BETA)', href: '/virtual-phone-number', desc: t('menu2_1_link_6_subtitle'), icon: ChatBubbleLeftRightIcon },
    { name: t('menu2_1_link_7_title'), href: '/dedicated-receptionist', desc: t('menu2_1_link_7_subtitle'), icon: PhoneIcon },
  ]
  const onetime = [
    { name: t('menu2_2_link_1_title'), href: '/foreign-qualification', desc: t('menu2_2_link_1_subtitle'), icon: RocketLaunchIcon },
    { name: t('menu2_2_link_2_title'), href: '/certificate-of-good-standing', desc: t('menu2_2_link_2_subtitle'), icon: BookmarkSquareIcon },
    { name: t('menu2_2_link_3_title'), release: '(BETA)', href: '/certified-copy-request', desc: t('menu2_2_link_3_subtitle'), icon: ClipboardDocumentListIcon },
    { name: t('menu2_2_link_4_title'), release: '(BETA)', href: '/ein', desc: t('menu2_2_link_4_subtitle'), icon: CalendarIcon },
    { name: t('menu2_2_link_5_title'), release: '(BETA)', href: '/entity-type-conversion', desc: t('menu2_2_link_5_subtitle'), icon: PresentationChartBarIcon },
    { name: t('menu2_2_link_6_title'), href: '/renewal-and-revival', desc: t('menu2_2_link_6_subtitle'), icon: ArrowPathIcon },
    { name: t('menu2_2_link_7_title'), desc: t('menu2_2_link_7_subtitle'), href: '/dissolution-and-cancellation', icon: ArchiveBoxIcon },
    { name: t('menu2_2_link_8_title'), desc: t('menu2_2_link_8_subtitle'), href: '/certificate-of-amendment', icon: DocumentTextIcon },
    { name: t('menu2_2_link_9_title'), desc: t('menu2_2_link_9_subtitle'), href: '/doing-business-as', icon: PencilSquareIcon },
  ]
  const ies = [
    { name: t('menu2_3_link_1_title'), href: '/apostille', desc: t('menu2_3_link_1_subtitle'), icon: DocumentDuplicateIcon },
    { name: t('menu2_3_link_2_title'), href: '/certified-copy-request', desc: t('menu2_3_link_2_subtitle'), icon: ClipboardDocumentListIcon },
    { name: t('menu2_3_link_3_title'), href: '/ein', desc: t('menu2_3_link_3_subtitle'), icon: CalendarIcon },
    { name: t('menu2_3_link_4_title'), href: '/us-bank-account-opening-support', desc: t('menu2_3_link_4_subtitle'), icon: BuildingLibraryIcon },
    { name: t('menu2_3_link_5_title'), href: '/post-incorp', desc: t('menu2_3_link_5_subtitle'), icon: RectangleStackIcon },
  ]
  const support = [
    { name: t('menu3_1_title'), href: '/faq', desc: t('menu3_1_subtitle'), icon: QuestionMarkCircleIcon },
    { name: t('menu3_2_title'), href: '/terms-of-service', desc: t('menu3_2_subtitle'), icon: ClipboardDocumentIcon },
    { name: t('menu3_3_title'), href: '/privacy-policy', desc: t('menu3_3_subtitle'), icon: ShieldCheckIcon },
    { name: t('menu3_4_title'), href: '/contact', desc: t('menu3_4_subtitle'), icon: InboxStackIcon },
  ]

  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 96);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  return (
    <Popover className="fixed left-0 top-0 bg-white w-full z-50">
      <div className="pointer-events-none absolute inset-0 z-30 shadow" aria-hidden="true" />
      <div className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
          <div>
            <a href="/" className="flex">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={Logo}
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Popover>
                <button
                  className='text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:text-black focus:ring-blue-500 focus:ring-offset-2'>
                  <a href='/pricing/form-my-company'><span>{t('menu1_title')}</span></a>
                </button>
              </Popover>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                      )}
                    >
                      <span>{t('menu2_title')}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block">
                        <div className="absolute inset-0 flex">
                          <div className="w-1/2 bg-white" />
                          <div className="w-1/2 bg-white" />
                        </div>
                        <div className="relative mx-auto grid max-w-7xl grid-cols-1">
                          <nav className="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-3 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                            <div>
                              <h3 className="text-base font-medium text-gray-500">{t('menu2_1_title')}</h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {recurring.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                    >
                                      <item.icon className="h-6 w-6 flex-shrink-0 text-blue-600" aria-hidden="true" />
                                      <div className='flex flex-col'>
                                        <div className='flex gap-1 items-center'>
                                          <span className="ml-4">{item.name}</span>
                                          {item.release && <span className='text-blue-600 text-xs'>{item.release}</span>}
                                        </div>
                                        <span className='ml-4 text-gray-400 text-xs'>{item.desc}</span>
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-base font-medium text-gray-500">{t('menu2_2_title')}</h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {onetime.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                    >
                                      <item.icon className="h-6 w-6 flex-shrink-0 text-blue-600" aria-hidden="true" />
                                      <div className='flex flex-col'>
                                        <div className='flex gap-1 items-center'>
                                          <span className="ml-4">{item.name}</span>
                                          {item.release && <span className='text-blue-600 text-xs'>{item.release}</span>}
                                        </div>
                                        <span className='ml-4 text-gray-400 text-xs'>{item.desc}</span>
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-base font-medium text-gray-500">{t('menu2_3_title')}</h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {ies.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                    >
                                      <item.icon className="h-6 w-6 flex-shrink-0 text-blue-600" aria-hidden="true" />
                                      <div className='flex flex-col'>
                                        <div className='flex gap-1 items-center'>
                                          <span className="ml-4">{item.name}</span>
                                          {item.release && <span className='text-blue-600 text-xs'>{item.release}</span>}
                                        </div>
                                        <span className='ml-4 text-gray-400 text-xs'>{item.desc}</span>
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </nav>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                      )}
                    >
                      <span>{t('menu3_title')}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block">
                        <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                          {support.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-500 text-white sm:h-12 sm:w-12">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                                  </div>
                                  <p className="mt-2 text-sm font-medium text-blue-600 lg:mt-4">
                                    Learn more
                                    <span aria-hidden="true"> &rarr;</span>
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover>
                <button
                  className='text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:text-black focus:ring-blue-500 focus:ring-offset-2'>
                  <a href='/blog'><span>{t('menu4_title')}</span></a>
                </button>
              </Popover>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
            </div>
          </div>
          <div class='hidden lg:flex items-center gap-4'>
            <a
              href="/pricing/form-my-company"
              className={isScroll ? "shadow rounded-md border border-transparent font-medium text-white bg-blue-600 px-4 py-2 text-md transition-colors duration-1000" : "shadow rounded-md border border-blue-600 font-medium text-blue-600 px-4 py-2 text-md transition-colors duration-1000"}
            >
              {t('menu_top_right_handcorner_button')}
            </a>
            <div>

              {/* <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    <GlobeAltIcon className='h-5 w-5 text-blue-600' />
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-blue-600" aria-hidden="true" />
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

                  <Menu.Items className="absolute top-12 -right-16 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {Object.keys(lngs).map((lang) => (
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => i18n.changeLanguage(lang)}
                            className={i18n.resolvedLanguage === lang ? 'flex items-center gap-4 p-2 text-gray-900 hover:bg-gray-200 opacity-[0.5]' : 'flex items-center gap-4 p-2 text-gray-900 hover:bg-gray-200 cursor-pointer'}
                          >
                            <img src={lngs[lang].icon} alt='language' />
                            <span>{lngs[lang].nativeName}</span>
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu> */}
            </div>
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={Logo}
                    alt="Registate"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    {menu1.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-blue-500 text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-8 text-base">
                    <a href="/all-products" className="font-medium text-blue-600 hover:text-blue-500">
                      {t('mobile_menu_all_products')}
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a href="/pricing/form-my-company" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  {t('menu1_title')}
                </a>
                <a href="/faq" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  {t('menu3_1_title')}
                </a>
                <a href="/company" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  {t('mobile_menu_title_1')}
                </a>
                <a href="/resources" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  {t('mobile_menu_title_2')}
                </a>
                <a href="/blog" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  {t('menu4_title')}
                </a>
                <a href="/contact" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  {t('mobile_menu_title_3')}
                </a>
              </div>
              <div className="mt-6">
                <a
                  href="/pricing/form-my-company"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  {t('menu_top_right_handcorner_button')}
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}


export function Navbar2() {
  return (
    <>
      <Popover>
        <div className="pointer-events-none absolute inset-0 z-30 shadow" aria-hidden="true" />
        <div className="relative z-20">
          <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <a href="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt="Your Company"
                    className="h-8 w-auto sm:h-10"
                    src={Logo}
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={Logo}
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close main menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  )
}