import { React, Fragment } from 'react'
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
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../images/logo-blue.webp'
import chaticon from '../images/chat.png'
import { NavLink } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




export function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const lang = location.pathname.split("/")[1];
    if (lang && currentLang !== lang && (lang === "en" || lang === "tr")) {
      setCurrentLang(lang);
      i18n.changeLanguage(lang);
    } else if (!lang) {
      setCurrentLang(i18n.language);
      navigate(`/${i18n.language}${location.pathname}`, { replace: true });
    } else if (lang !== "en" && lang !== "tr") {
      navigate(`/${i18n.language}/notfound/`, { replace: true });
    }
  }, [i18n, navigate, location.pathname, currentLang]);

  const changeLanguage = (lang) => {
    if (lang === "en" || lang === "tr") {
      setCurrentLang(lang);
      i18n.changeLanguage(lang);
      const newPathname = location.pathname.replace(`/${currentLang}`, `/${lang}`);
      navigate(newPathname, { replace: true });
    } else {
      navigate(`/${i18n.language}/notfound/`, { replace: true });
    }
  };

  const menu1 = [
    {
      name: t('mobile_menu_title_4'),
      description: t('mobile_menu_title_4_desc'),
      href: `/${i18n.language}/state`,
      icon: BuildingOfficeIcon,
    },
    {
      name: t('menu2_1_link_2_title'),
      description: t('menu2_1_link_2_subtitle'),
      href: `/${i18n.language}/registered-agent`,
      icon: UserIcon,
    },
    {
      name: t('menu2_1_link_3_title'),
      description: t('menu2_1_link_3_subtitle'),
      href: `/${i18n.language}/virtual-mailbox`,
      icon: EnvelopeOpenIcon,
    },
    {
      name: t('menu2_1_link_4_title'),
      description: t('menu2_1_link_4_subtitle'),
      href: `/${i18n.language}/apostille`,
      icon: DocumentDuplicateIcon,
    }
  ]


  const recurring = [
    { name: t('menu2_1_link_1_title'), href: `/${i18n.language}/compliance-reminder`, desc: t('menu2_1_link_1_subtitle'), icon: FolderMinusIcon },
    { name: t('menu2_1_link_2_title'), href: `/${i18n.language}/registered-agent`, desc: t('menu2_1_link_2_subtitle'), icon: BuildingOfficeIcon },
    { name: t('menu2_1_link_3_title'), href: `/${i18n.language}/virtual-mailbox`, desc: t('menu2_1_link_3_subtitle'), icon: EnvelopeOpenIcon },
    { name: t('menu2_1_link_4_title'), href: `/${i18n.language}/office-address`, desc: t('menu2_1_link_4_subtitle'), icon: BriefcaseIcon },
    { name: t('menu2_1_link_5_title'), release: '(BETA)', href: `/${i18n.language}/our-packages`, desc: t('menu2_1_link_5_subtitle'), icon: CubeIcon },
    { name: t('menu2_1_link_6_title'), release: '(BETA)', href: `/${i18n.language}/virtual-phone-number`, desc: t('menu2_1_link_6_subtitle'), icon: ChatBubbleLeftRightIcon },
    { name: t('menu2_1_link_7_title'), href: `/${i18n.language}/dedicated-receptionist`, desc: t('menu2_1_link_7_subtitle'), icon: PhoneIcon },
  ]
  const onetime = [
    { name: t('menu2_2_link_1_title'), href: `/${i18n.language}/foreign-qualification`, desc: t('menu2_2_link_1_subtitle'), icon: RocketLaunchIcon },
    { name: t('menu2_2_link_2_title'), href: `/${i18n.language}/certificate-of-good-standing`, desc: t('menu2_2_link_2_subtitle'), icon: BookmarkSquareIcon },
    { name: t('menu2_2_link_3_title'), release: '(BETA)', href: `/${i18n.language}/certified-copy-request`, desc: t('menu2_2_link_3_subtitle'), icon: ClipboardDocumentListIcon },
    { name: t('menu2_2_link_4_title'), release: '(BETA)', href: `/${i18n.language}/ein`, desc: t('menu2_2_link_4_subtitle'), icon: CalendarIcon },
    { name: t('menu2_2_link_5_title'), release: '(BETA)', href: `/${i18n.language}/entity-type-conversion`, desc: t('menu2_2_link_5_subtitle'), icon: PresentationChartBarIcon },
    { name: t('menu2_2_link_6_title'), href: `/${i18n.language}/renewal-and-revival`, desc: t('menu2_2_link_6_subtitle'), icon: ArrowPathIcon },
    { name: t('menu2_2_link_7_title'), desc: t('menu2_2_link_7_subtitle'), href: `/${i18n.language}/dissolution-and-cancellation`, icon: ArchiveBoxIcon },
    { name: t('menu2_2_link_8_title'), desc: t('menu2_2_link_8_subtitle'), href: `/${i18n.language}/certificate-of-amendment`, icon: DocumentTextIcon },
    { name: t('menu2_2_link_9_title'), desc: t('menu2_2_link_9_subtitle'), href: `/${i18n.language}/doing-business-as`, icon: PencilSquareIcon },
  ]
  const ies = [
    { name: t('menu2_3_link_1_title'), href: `/${i18n.language}/apostille`, desc: t('menu2_3_link_1_subtitle'), icon: DocumentDuplicateIcon },
    { name: t('menu2_3_link_2_title'), href: `/${i18n.language}/certified-copy-request`, desc: t('menu2_3_link_2_subtitle'), icon: ClipboardDocumentListIcon },
    { name: t('menu2_3_link_3_title'), href: `/${i18n.language}/ein`, desc: t('menu2_3_link_3_subtitle'), icon: CalendarIcon },
    { name: t('menu2_3_link_4_title'), href: `/${i18n.language}/us-bank-account-opening-support`, desc: t('menu2_3_link_4_subtitle'), icon: BuildingLibraryIcon },
    { name: t('menu2_3_link_5_title'), href: `/${i18n.language}/post-incorp`, desc: t('menu2_3_link_5_subtitle'), icon: RectangleStackIcon },
  ]
  const support = [
    { name: t('menu3_1_title'), href: `/${i18n.language}/faq`, desc: t('menu3_1_subtitle'), icon: QuestionMarkCircleIcon },
    { name: t('menu3_2_title'), href: `/${i18n.language}/terms-of-service`, desc: t('menu3_2_subtitle'), icon: ClipboardDocumentIcon },
    { name: t('menu3_3_title'), href: `/${i18n.language}/privacy-policy`, desc: t('menu3_3_subtitle'), icon: ShieldCheckIcon },
    { name: t('menu3_4_title'), href: `/${i18n.language}/contact`, desc: t('menu3_4_subtitle'), icon: InboxStackIcon },
  ]
  return (
    <div className='hidden md:block'>
      <header className='bg-white'>
        <nav className="mx-auto flex h-[5.5rem] items-center justify-between p-6  lg:px-8 border-b" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="">
              <span className="sr-only">Registate</span>
              <img className="h-10" src={logo} alt="" />
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
            <NavLink to={`/${i18n.language}/company-type`}  className={({ isActive }) => 'text-[1.125rem] font-semibold leading-[1.5rem] text-[#8A8A8A]' + (isActive ? ' border-b-2 border-[#1649FF] !text-[#1649FF] -mb-8' :'')}>
              Company Type
            </NavLink>
            <NavLink to={`/${i18n.language}/state`} className={({ isActive }) => 'text-[1.125rem] font-semibold leading-[1.5rem] text-[#8A8A8A]' + (isActive ? ' border-b-2 border-[#1649FF] !text-[#1649FF] -mb-8' :'')}>
              State
            </NavLink>
            <NavLink to={`/${i18n.language}/company-name`} className={({ isActive }) => 'text-[1.125rem] font-semibold leading-[1.5rem] text-[#8A8A8A]' + (isActive ? ' border-b-2 border-[#1649FF] !text-[#1649FF] -mb-8' :'')}>
              Company Name
            </NavLink>
            <NavLink to={`/${i18n.language}/formation`} className={({ isActive }) => 'text-[1.125rem] font-semibold leading-[1.5rem] text-[#8A8A8A]' + (isActive ? ' border-b-2 border-[#1649FF] !text-[#1649FF] -mb-8' :'')}>
              Formation
            </NavLink>
            <NavLink to={`/${i18n.language}/review`} className={({ isActive }) => 'text-[1.125rem] font-semibold leading-[1.5rem] text-[#8A8A8A]' + (isActive ? ' border-b-2 border-[#1649FF] !text-[#1649FF] -mb-8' :'')}>
              Review
            </NavLink>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className='hidden lg:flex items-center gap-4'>
              <Link
                to={`/${i18n.language}/state`}
                id="header-fmc"
                className='bg-white flex items-center gap-2 py-2 px-4 text-[1.125rem] font-semibold leading-[1.5rem] text-[#1649FF]'
              >
                <img src={chaticon} className='w-6 h-6' alt='chat icon' />
                We're here to help
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
                <img
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
                  <Link to={`/${i18n.language}/state`} className="text-sm font-semibold leading-6 text-white">
                    {t('menu1_title')}
                  </Link>
                  <Link to='#.' className="text-sm font-semibold leading-6 text-white">
                    {t('menu2_title')}
                  </Link>
                  <Link to='#.' className="text-sm font-semibold leading-6 text-white">
                    {t('menu3_title')}
                  </Link>
                  <Link to={`/${i18n.language}/blog`} className="text-sm font-semibold leading-6 text-white">
                    {t('menu4_title')}
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    to={`/${i18n.language}/state`}
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
