import { React, Fragment, useState, useEffect } from 'react'
import { Transition, Menu, Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import whitelogo from '../images/logos/registate-white-logo.png'
import bluelogo from '../images/logo-blue.webp'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { PopupButton } from "react-calendly";
import circle from '../images/hero-circle.png';
import variant1 from '../images/variant1.png';
import variant2 from '../images/variant2.png';
import rocket from '../images/rocket.png';

export function CalendlyText() {
  const { t, i18n } = useTranslation();
  return (
    <div className='cursor-pointer flex items-center gap-2'>
      <p className='font-semibold text-xs leading-4 text-white'>{t('topbar_first_part')}<span className='text-[#9EE248] mr-1'>{t('topbar_middle_part')}</span>{t('topbar_last_part')}</p>
      <ArrowRightIcon className='h-3 text-white' />
    </div>
  )
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const [isSticky, setIsSticky] = useState(false);


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
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Registate</span>
              <img className="w-[116px] h-[34px]" src={isSticky ? bluelogo : whitelogo} alt="" />
            </Link>
          </div>
          <div className="flex gap-x-3 lg:hidden">
            <Link to={`/${i18n.language}/company-type`} className='bg-white rounded-[28px] py-3 px-4 text-[16px] leading-[22px] font-semibold text-[#1649FF]'>
              {t('menu_top_right_handcorner_button')}
            </Link>
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
            <Link to={`/${i18n.language}/company-type`} className="text-sm font-semibold leading-6 text-white">
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
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className='hidden lg:flex items-center gap-4'>
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className={`uppercase text-[14px]  font-semibold leading-5 text-white ${isSticky && '!text-black'}`}>
                      {i18n.language}
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
                            <div className={i18n.language === 'en' ? 'block cursor-pointer bg-slate-100 rounded-md' : 'block cursor-pointer hover:bg-slate-200'} onClick={() => changeLanguage("en")}>
                              <div className='flex items-center justify-center gap-2 p-3'>
                                <button className='text-gray-700'>English</button>
                              </div>
                            </div>
                            <div className={i18n.language === 'tr' ? 'block cursor-pointer bg-slate-100 rounded-md' : 'block cursor-pointer hover:bg-slate-200'} onClick={() => changeLanguage("tr")}>
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
                to={`/${i18n.language}/company-type`}
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
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Registate</span>
                <img
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
                    to={`/${i18n.language}/company-type`}
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

      <div className="relative isolate overflow-hidden pt-14 hero-section">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-64 relative z-[3]">
          <div className="text-left lg:text-center px-6 lg:px-0 lg:-mt-24">
            <h1 className="text-4xl leading-[38px] font-bold tracking-tight text-white sm:text-7xl">
              {t('hero_text_white')} <span className='text-[#9EE248]'> {t('hero_text_green')}</span>
            </h1>
            <div className='flex items-center justify-center' >
              <div className='max-w-md'>
                <p className="mt-6 font-semibold text-[16px] lg: leading-[22px] text-lg text-white">
                  {t('hero_description')}
                </p>
              </div>
            </div>
            <div className="mt-10 flex items-center lg:justify-center gap-x-2">
              <Link
                to={`/${i18n.language}/company-type`}
                className="rounded-2xl  py-3 lg:py-[14px] leading-[22px] px-6 font-semibold text-[15px] lg:text-lg text-[#222222] bg-[#9EE248]"
              >
                {t('hero_green_button')}
              </Link>
              <Link to="#" className="rounded-2xl py-3 lg:py-[14px] leading-[22px] px-6 font-semibold text-[15px] lg:text-lg text-white border bg-transparent">
                {t('hero_transparent_button')}
              </Link>
            </div>
          </div>
        </div>
        <div className='absolute top-8 -right-[45rem] lg:top-36 lg:right-0 z-0 rocket-animation'>
          <img src={rocket} className='rocket' alt='rocket' />
        </div>
        <div className='absolute bottom-4 lg:bottom-16 z-[2]'>
          <img src={variant1} className='variant1' alt='variant 1' />
        </div>
        <div className='absolute bottom-4 lg:bottom-14'>
          <img src={variant2} className='variant2' alt='variant 2' />
        </div>
        <div className='absolute bottom-0'>
          <img src={circle} />
        </div>
      </div>
    </div>
  )
}
