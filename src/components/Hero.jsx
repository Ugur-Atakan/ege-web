import { React, Fragment, useState, useEffect } from 'react'
import { Transition, Menu, Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import whitelogo from '../images/logos/registate-white-logo.png'
import heroimg from '../images/bg.png'
import rocket from '../images/animation.png'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

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


  return (
    <div className="hero-section">
      <header className="absolute inset-x-0 top-0 z-50" >
        <nav className="mx-auto max-w-7xl p-6 lg:px-2">
          <div className='flex items-center justify-center -mt-4 pb-2 border-[#ECEFF1] border-b-[1px] border-opacity-10'>
            <div className='flex items-center gap-2'>
              <p className='font-semibold text-xs leading-4 text-white'> ✨ Book a <span className='text-[#9EE248] mr-1'>free call</span>with an experienced attorney</p>
              <ArrowRightIcon className='h-3 text-white' />
            </div>
          </div>
        </nav>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-2 lg:p-0" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Registate</span>
              <img className="w-[116px] h-[34px]" src={whitelogo} alt="" />
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
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className='hidden lg:flex items-center gap-4'>
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="uppercase text-[14px]  font-semibold leading-5 text-white">
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
                to={`/${i18n.language}/state`}
                id="header-fmc"
                className='bg-white py-2 px-4 rounded-xl text-[#132F8E] font-semibold text-[14px] leading-5'
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

      <div className="relative isolate overflow-hidden pt-14 hero-section">
        <img
          src={rocket}
          className="absolute -z-10 -right-20 w-full -bottom-32 h-full object-cover animate-rocket"
          alt='hero section'
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-64">
          <div className="text-center -mt-24">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
              Start a business in the USA in 24 hours <span className='text-[#9EE248]'>from anywhere</span>
            </h1>
            <div className='flex items-center justify-center' >
              <div className='max-w-md'>
                <p className="mt-6 font-semibold text-lg text-white">
                  All-in-one compliance solution for fulfilling your dreams, no matter where you are.
                </p>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <Link
                to="#"
                className="rounded-2xl py-[14px] px-6 font-semibold text-lg text-[#222222] bg-[#9EE248]"
              >
                Open a business
              </Link>
              <Link to="#" className="rounded-2xl py-[14px] px-6 font-semibold text-lg text-white border bg-transparent">
                How it works
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
