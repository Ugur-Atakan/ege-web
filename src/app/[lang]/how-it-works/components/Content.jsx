'use client';

import React, { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Transition, Menu, Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import whitelogo from '../../../../images/logos/registate-white-logo.png'
import bluelogo from '../../../../images/logo-blue.webp'
import umbrella from '../../../../images/reverse-umbrella.png'
import puzzle from '../../../../images/reverse-puzzle.png'
import tick from '../../../../images/tick.png'
import tickblue from '../../../../images/tick_blue.png'
import bishop from '../../../../images/bishop-white.png'
import queen from '../../../../images/queen-color.png'
import bishopcolor from '../../../../images/bishop-color.png'
import kingblack from '../../../../images/king-black.png'
import start from '../../../../images/start-perfect-name.webp'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import taq1 from '../../../../images/take-a-quiz2.webp'
import taq2 from '../../../../images/take-a-quiz1.webp'
import hero from '../../../../images/hiw.webp'
import arrow from '../../../../images/vector-arrow.png'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import star from '../../../../images/star-block.png'
import packageDataEN from '../../../../assets/packageDataEN.json'
import packageDataTR from '../../../../assets/packageDataTR.json'
import arrowblack from '../../../../images/arrow-black.png'
import arrowblue from '../../../../images/arrow-blue.png'
import noinclude from '../../../../images/no-include.png'
import { useTranslation } from '../../../i18n/client'

export default function Content({ lang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const [currentLang, setCurrentLang] = useState(lang);
  const [isSticky, setIsSticky] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const selectedCompanyType = isChecked === false ? 'LLC' : 'C-corp';
  const selectedCompanyTypesEN = packageDataEN.packages.find((item) => item[selectedCompanyType]);
  const selectedCompanyTypesTR = packageDataTR.packages.find((item) => item[selectedCompanyType]);
  const selectedPackagesLLC = lang === 'en' ? selectedCompanyTypesEN['LLC'] : selectedCompanyTypesTR['LLC'];
  const selectedPackagesCorporation = lang === 'en' ? selectedCompanyTypesEN['C-corp'] : selectedCompanyTypesTR['C-corp'];
  const [showAllDifferences, setShowAllDifferences] = useState(false);
  const [selectedPackagesNameLLC, setSelectedPackagesNameLLC] = useState('gold');
  const [selectedPackagesNameCorp, setSelectedPackagesNameCorp] = useState('starter');

  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };

  const handleBusinessName = (e) => {
    setBusinessName(e.target.value);
  }

  const startNow = () => {
    if (businessName === '') {
      toast(t("how_it_works_business_name_error_message"));
    } else {
        //   localStorage.setItem('companyName', businessName);
        //   navigate(`/${lang}/company-type`);
    }
  }

//   useEffect(() => {
//     const lang = location.pathname.split("/")[1];
//     if (lang && currentLang !== lang && (lang === "en" || lang === "tr")) {
//       setCurrentLang(lang);
//       i18n.changeLanguage(lang);
//     } else if (!lang) {
//       setCurrentLang(lang);
//       navigate(`/${lang}${location.pathname}`, { replace: true });
//     } else if (lang !== "en" && lang !== "tr") {
//       navigate(`/${lang}/notfound/`, { replace: true });
//     }
//   }, [i18n, navigate, location.pathname, currentLang]);

//   const changeLanguage = (lang) => {
//     if (lang === "en" || lang === "tr") {
//       setCurrentLang(lang);
//       i18n.changeLanguage(lang);
//       const newPathname = location.pathname.replace(`/${currentLang}`, `/${lang}`);
//       navigate(newPathname, { replace: true });
//     } else {
//       navigate(`/${lang}/notfound/`, { replace: true });
//     }
//   };

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
    <>
      <div className='relative'>
        <header className={`absolute inset-x-0 top-0 z-50 ${isSticky ? 'lg:!fixed !bg-[#ECEFF1]' : ''}`}>
          <nav className={`mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-2 lg:p-0 lg:py-4 ${isSticky && 'border-b border-[#C8C8C8] lg:p-4 lg:py-4'}`} aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Registate</span>
                <Image className="w-[116px] h-[34px]" src={isSticky ? bluelogo : whitelogo} alt="" />
              </Link>
            </div>
            <div className="flex gap-x-3 lg:hidden">
              <Link href={`/${lang}/company-type`} className='bg-white rounded-[28px] py-2 px-4 text-[16px] leading-[22px] font-semibold text-[#1649FF]'>
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
                  className='bg-[#9EE248] py-2 px-4 rounded-xl text-[#222222] font-semibold text-[14px] leading-5'
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
        <div className="relative isolate overflow-hidden pt-14">
          <Image
            src={hero}
            alt="how it works"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="mx-auto max-w-[66rem] pt-24 pb-64 sm:py-48 lg:pt-64 lg:pb-[32rem] relative z-[3]">
            <div className="text-center lg:text-center px-6 lg:px-0 lg:-mt-24">
              <div className='flex items-center justify-center' >
                <div className='max-w-[408px] mb-12'>
                  <p className="font-semibold text-[16px] lg: leading-[22px] text-lg text-white">
                    {t('how_it_works_desc')}
                  </p>
                </div>
              </div>
              <h1 className="-mt-4 text-4xl leading-[38px] font-bold tracking-tight text-white sm:text-7xl relative">
                {t('how_it_works_title')}
                <div className='absolute top-1/2 -right-8 lg:right-20'>
                  <Image src={arrow} className='object-cover h-40 lg:h-64' alt='arrow' />
                </div>
              </h1>
            </div>
          </div>
        </div>
        <div className='relative z-30 -top-6 lg:-top-[5.5rem]'>
          <Link href={`/${lang}/company-type`} className="absolute px-4 py-3 text-center transform -translate-x-1/2 -translate-y-1/2 bg-[#1649FF] text-white font-semibold text-[18px] leading-6 rounded-[16px] top-0 left-1/2">
            {t("how_it_works_button")}
          </Link>
        </div>
        <div className='absolute bottom-0 w-full h-[140px] bg-white circle'></div>
      </div>
      <div className='mx-auto max-w-[552px] px-4 lg:px-0 pt-24'>
        <div className='w-[80%] lg:w-full text-left lg:text-center font-semibold text-[26px] lg:text-[40px] leading-[32px] lg:leading-[44px] text-[#1649FF]'>
          {t("how_it_works_step_1")}
          <span className='text-[#222222]'>{t("how_it_works_choose_company_type_title")}</span>
        </div>
      </div>
      <div className='mx-auto max-w-[1120px] px-4 py-12'>
        <div className='flex-col lg:flex-row flex items-center justify-center gap-6'>
          <div className='rounded-[20px] bg-[#ECEFF1] pb-16 lg:pb-6 p-6 relative overflow-hidden'>
            <h1 className='font-bold text-[32px] lg:text-[64px] leading-[64px] text-[#222222]'>{t("how_it_works_choose_company_type_card1_title")}</h1>
            <p className='font-semibold text-[16px] lg:text-[18px] leading-[24px] text-[#222222] pt-4 pb-24 lg:w-2/3'>{t("how_it_works_choose_company_type_card1_desc")}</p>
            <div className='absolute bottom-0 right-0'>
              <Image src={umbrella} className='h-48 lg:h-72' alt='select llc' />
            </div>
          </div>
          <div className='rounded-[20px] bg-[#ECEFF1] pb-16 lg:pb-6 p-6 relative overflow-hidden'>
            <h1 className='font-bold text-[32px] lg:text-[64px] leading-[64px] text-[#222222]'>{t("how_it_works_choose_company_type_card2_title")}</h1>
            <p className='font-semibold text-[16px] lg:text-[18px] leading-[24px] text-[#222222] pt-4 pb-24 lg:w-2/3'>{t("how_it_works_choose_company_type_card2_desc")}</p>
            <div className='absolute bottom-0 right-0'>
              <Image src={puzzle} className='h-36 lg:h-52' alt='select ccorp' />
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[25rem] px-4 pb-24'>
        <div className='text-left lg:text-center font-semibold text-[20px] lg:text-[22px] leading-[22px] lg:leading-[26px] text-[#222222]'>{t("how_it_works_choose_company_type_footer_white_text")} <Link href={`/${lang}/start-my-business`} className='text-[#1649FF]'>{t("how_it_works_choose_company_type_footer_blue_text")}</Link></div>
      </div>
      <div className='bg-[#ECEFF1] py-16 lg:py-24 px-4 lg:px-0 overflow-hidden'>
        <div className='mx-auto max-w-[1120px]'>
          <div className='mx-auto max-w-[473px]'>
            <div className='text-left lg:text-center pb-12'>
              <h2 className='font-semibold text-[26px] lg:text-[40px] leading-[32px] lg:leading-[44px] text-[#1649FF]'>
                {t("how_it_works_step_2")}
                <span className='text-[#222222]'>{t("how_it_works_help_company_state_title")}</span>
              </h2>
            </div>
          </div>
          <div className='flex-col lg:flex-row flex items-center gap-8 pb-12'>
            <div className='w-[360px] h-[30rem] lg:w-[549px] lg:h-[669px] rounded-[32px] hiw-delaware relative lg:overflow-hidden'>
              <div className='absolute top-[45%] lg:top-[60%] -right-4'>
                <div className='bg-[#9EE248] text-[#222222] py-4 px-6 text-[16px] rounded-2xl rotate-12 font-semibold'>{t('how_it_works_help_company_state_card1_button_on')}</div>
              </div>
              <div className='w-full pr-12 lg:pr-0 bottom-8 left-4 lg:left-8 absolute'>
                <div className='flex items-center gap-4'>
                  <h3 className='font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-white'>{t("how_it_works_help_company_state_card1_title")}</h3>
                  <ArrowRightIcon className='mt-2 h-12 text-white' />
                </div>
                <div className='py-2'>
                  <p className='font-semibold text-white text-[16px] lg:text-[18px] leading-6'>{t('how_it_works_help_company_state_card1_desc')}</p>
                </div>
              </div>
            </div>
            <div className='w-[360px] h-[30rem] lg:w-[549px] lg:h-[669px] rounded-[32px] hiw-wyoming relative'>
              <div className='absolute top-[45%] lg:top-2/3 -right-8'>
                <div className='bg-[#1649FF] text-white py-4 px-6 rounded-2xl -rotate-12 font-semibold'>{t('how_it_works_help_company_state_card2_button_on')}</div>
              </div>
              <div className='bottom-8 left-4 lg:left-8 absolute'>
                <div className='flex items-center gap-4'>
                  <h3 className='font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-white'>{t("how_it_works_help_company_state_card2_title")}</h3>
                  <ArrowRightIcon className='mt-2 h-12 text-white' />
                </div>
                <div className='py-2 pr-2'>
                  <p className='font-semibold text-white text-[16px] lg:text-[18px] leading-6'>{t('how_it_works_help_company_state_card2_desc')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-[32px]'>
            <div className='flex-col-reverse lg:flex-row flex items-end justify-between relative overflow-hidden'>
              <div className='flex flex-col gap-4 pt-4 pb-8 px-6 lg:p-12'>
                <h4 className='font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-[#222222]'>{t('how_it_works_all_states_title')}</h4>
                <p className='w-full lg:w-[65%] font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>{t('how_it_works_all_states_desc')}</p>
              </div>
              <div className='relative -top-8 lg:top-auto lg:-bottom-16 lg:right-12 all-states'>
                <Image src={star} alt='all states' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1120px] px-4 lg:px-0 py-24 lg:py-48'>
        <div className='flex-col lg:flex-row flex items-start gap-8 lg:gap-32'>
          <div>
            <h2 className='font-semibold text-[26px] lg:text-[40px] leading-8 lg:leading-[44px] text-[#1649FF]'>
              {t('how_it_works_step_3')}
              <span className='text-[#222222]'>{t('how_it_works_take_a_quiz_title')}</span>
            </h2>
            <div className='hidden lg:flex gap-6 py-24'>
              <Image src={taq1} className='w-[305px] h-[415px] object-cover rounded-2xl' alt='Take a quiz, get your business in 1 day' />
              <Image src={taq2} className='mt-24 w-[305px] h-[415px] object-cover rounded-2xl' alt='Take a quiz, get your business in 1 day' />
            </div>
          </div>
          <div>
            <ul className='flex flex-col gap-6 lg:gap-12'>
              <li>
                <div className='flex items-center gap-3'>
                  <Image src={tick} className='h-8' alt='Company created in any state' />
                  <h3 className='font-semibold text-[20px] lg:text-[28px] leading-[22px] lg:leading-[32px] text-[#222222]'>{t('how_it_works_take_a_quiz_list_item1_title')}</h3>
                </div>
                <div className='block pl-12 py-1 lg:py-4'>
                  <p className='text-[#222222] font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-[26px]'>{t('how_it_works_take_a_quiz_list_item1_desc')}</p>
                </div>
              </li>
              <li>
                <div className='flex items-center gap-3'>
                  <Image src={tick} className='h-8' alt='Registered agent' />
                  <h3 className='font-semibold text-[20px] lg:text-[28px] leading-[22px] lg:leading-[32px] text-[#222222]'>{t('how_it_works_take_a_quiz_list_item2_title')}</h3>
                </div>
                <div className='block pl-12 py-1 lg:py-4'>
                  <p className='text-[#222222] font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-[26px]'>{t('how_it_works_take_a_quiz_list_item2_desc')}</p>
                </div>
              </li>
              <li>
                <div className='flex items-center gap-3'>
                  <Image src={tick} className='h-8' alt='EIN and bank account setup assistance' />
                  <h3 className='font-semibold text-[20px] lg:text-[28px] leading-[22px] lg:leading-[32px] text-[#222222]'>{t('how_it_works_take_a_quiz_list_item3_title')}</h3>
                </div>
                <div className='block pl-12 py-1 lg:py-4'>
                  <p className='text-[#222222] font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-[26px]'>{t('how_it_works_take_a_quiz_list_item3_desc')}</p>
                </div>
              </li>
              <Link href={`/${lang}/company-type`} className='w-full lg:w-1/2 text-center font-semibold text-[18px] leading-6 text-white rounded-2xl bg-[#1649FF] px-6 py-3'>{t('how_it_works_take_a_quiz_list_button')}</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className={`pt-12 pb-0 lg:py-12 lg:pt-24 lg:pb-0 px-6 bg-[#ECEFF1] ${showAllDifferences && '!pb-12'}`}>
        <div className='mx-auto max-w-[571px]'>
          <h1 className='text-left lg:text-center font-semibold text-[26px] leading-[32px] lg:text-[40px] lg:leading-[44px] text-[#1649FF]'>
            {t('how_it_works_step_4')}
            <span className='text-[#222222]'>{t('how_it_works_package_title')}</span>
          </h1>
          <div className='flex items-center justify-start lg:justify-center pb-6 lg:pb-0 pt-12 gap-4'>
            <span className='font-semibold text-[28px] leading-8 text-[#222222]'>LLC</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value={isChecked} onChange={toggleChecked} className="sr-only peer" />
              <div className="w-20 h-10 bg-[#1649FF] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[4px] after:left-[8px] after:bg-white  after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-[#222222]"></div>
            </label>
            <span className='font-semibold text-[28px] leading-8 text-[#222222]'>Corp</span>
          </div>
        </div>
        <div className='mx-auto max-w-[1120px] py-0 lg:py-12 lg:px-4 lg:pb-0'>
          {isChecked ?
            <div className='flex-col lg:flex-row flex items-stretch justify-center gap-4'>
              <div className='w-full bg-white rounded-[32px] p-6 relative overflow-hidden'>
                <div className='flex flex-col gap-4'>
                  <h1 className='font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-[#222222]'>Starter</h1>
                  <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-[24px] text-[#222222] lg:w-2/3'>Expedited Filing (1-3 business days). Everything you need to perfectly start your company.</p>
                </div>
                <div className='py-8'>
                  <ul className='flex flex-col gap-3'>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>Registered Agent</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>Expedited EIN</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>All formation documents</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>Access to Registate Dashboad</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>Lifetime Support</p>
                    </li>
                  </ul>
                  <div className='float-right -mb-56'>
                    <div className='hidden lg:block relative -right-6 bottom-12'>
                      <Image src={bishop} alt='premium package' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full bg-[#1649FF] rounded-[32px] p-6 relative overflow-hidden'>
                <div className='flex flex-col gap-4'>
                  <h1 className='font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-white'>Start Up</h1>
                  <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-[24px] text-white lg:w-2/3'>
                    Expedited Filing (1-3 business days). Everything you need to diligently operate and manage your company.</p>
                </div>
                <div className='py-8'>
                  <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white pb-4'>Everything in Starter, plus:</p>
                  <ul className='flex flex-col gap-3'>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8' alt='Compliance Reminder' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>Compliance Reminder</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8' alt='Membership Certificates' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>Membership Certificates</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8' alt='Expedited filling' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>Expedited filling</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8' alt='Free mailbox' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>Free mailbox</p>
                    </li>
                  </ul>
                </div>
                <div className='float-right -mb-56'>
                  <div className='hidden lg:block relative -right-4 bottom-12'>
                    <Image src={bishopcolor} alt='premium package' />
                  </div>
                </div>
              </div>
              <div className='w-full bg-[#222222] rounded-[32px] p-6 relative overflow-hidden'>
                <div className='flex flex-col gap-4'>
                  <h1 className='font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-white'>Start Up</h1>
                  <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-[24px] text-white lg:w-2/3'>Expedited Filing (1-3 business days). Everything you need to operate, manage and grow your company.</p>
                </div>
                <div className='py-8'>
                  <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white pb-4'>Everything in Starter, plus:</p>
                  <ul className='flex flex-col gap-3'>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8' alt='Compliance Reminder' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>Compliance Reminder</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8' alt='Membership Certificates' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>Membership Certificates</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8' alt='Expedited filling' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>Expedited filling</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8' alt='Free mailbox' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>Free mailbox</p>
                    </li>
                  </ul>
                </div>
                <div className='float-right -mb-56'>
                  <div className='hidden lg:block relative right-0 bottom-12'>
                    <Image src={kingblack} alt='premium package' />
                  </div>
                </div>
              </div>
            </div>
            :
            <div className='flex-col lg:flex-row flex items-stretch justify-center gap-6'>
              <div className='bg-white rounded-[32px] p-6 relative overflow-hidden'>
                <div className='flex flex-col gap-4'>
                  <h1 className='font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-[#222222]'>Gold</h1>
                  <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-[24px] text-[#222222] lg:w-2/3'>I want my business set up with essential services and documents.</p>
                </div>
                <div className='py-8'>
                  <ul className='flex flex-col gap-3'>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>Registered Agent</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>Expedited EIN</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>All formation documents</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>Access to Registate Dashboad</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>Lifetime Support</p>
                    </li>
                  </ul>
                  <div className='float-right -mb-56'>
                    <div className='hidden lg:block relative right-0 bottom-24'>
                      <Image src={bishop} alt='premium package' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-[#1649FF] rounded-[32px] p-6 relative overflow-hidden'>
                <div className='flex flex-col gap-4'>
                  <h1 className='font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-white'>Premium</h1>
                  <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-[24px] text-white lg:w-2/3'>I want an expert to ensure my business runs smoothly even after creation.</p>
                </div>
                <div className='py-8'>
                  <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white pb-4'>Everything in Gold, plus:</p>
                  <ul className='flex flex-col gap-3'>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8' alt='Compliance Reminder' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>Compliance Reminder</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8' alt='Membership Certificates' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>Membership Certificates</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8' alt='Expedited filling' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>Expedited filling</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8' alt='Free mailbox' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>Free mailbox</p>
                    </li>
                  </ul>
                </div>
                <div className='float-right -mb-56'>
                  <div className='hidden lg:block relative right-0 bottom-24'>
                    <Image src={queen} alt='premium package' />
                  </div>
                </div>
              </div>
            </div>
          }
          <div className="hidden lg:block !overflow-hidden px-0 lg:border-2 lg:border-white lg:rounded-t-3xl lg:px-8 overflow-x-scroll overflow-y-hidden mt-12">
            <div className={`inline-block min-w-full py-2 align-middle overflow-hidden ${showAllDifferences ? ' h-full' : ' h-96'}`}>
              <table className="min-w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="w-2/5 sticky top-0 z-10 border-b border-white py-3.5 pr-3 text-left text-[26px] md:text-3xl font-semibold text-[#222222] leading-6 md:leading-[44px] backdrop-blur backdrop-filter"
                    >
                      Compare hat{"'"}s included <br /> per package
                    </th>
                    {isChecked === false ? (
                      <>
                        <th
                          scope="col"
                          className="w-1/5 sticky top-0 z-10 border-b border-white whitespace-nowrap md:whitespace-normal px-3 py-3.5 text-center text-2xl font-semibold text-[#222222] backdrop-blur backdrop-filter sm:table-cell"
                        >
                          Gold
                        </th>
                        <th
                          scope="col"
                          className="w-1/5 sticky top-0 z-10 border-b border-white whitespace-nowrap md:whitespace-normal px-3 py-3.5 text-center text-2xl font-semibold text-[#1649FF] backdrop-blur backdrop-filter sm:table-cell"
                        >
                          Premium
                        </th>
                      </>
                    )
                      : (
                        <>
                          <th
                            scope="col"
                            className="w-1/5 sticky top-0 z-10 border-b border-white whitespace-nowrap md:whitespace-normal px-3 py-3.5 text-center text-2xl font-semibold text-[#222222] backdrop-blur backdrop-filter sm:table-cell"
                          >
                            Starter
                          </th>
                          <th
                            scope="col"
                            className="w-1/5 sticky top-0 z-10 border-b border-white whitespace-nowrap md:whitespace-normal px-3 py-3.5 text-center text-2xl font-semibold text-[#222222] backdrop-blur backdrop-filter sm:table-cell"
                          >
                            Start Up
                          </th>
                          <th
                            scope="col"
                            className="w-1/5 sticky top-0 z-10 border-b border-white whitespace-nowrap md:whitespace-normal px-3 py-3.5 text-center text-2xl font-semibold text-[#1649FF] backdrop-blur backdrop-filter sm:table-cell"
                          >
                            Scale Up
                          </th>
                        </>
                      )}
                  </tr>
                </thead>
                <tbody>
                  {isChecked === false ? (
                    selectedPackagesLLC.map((packageItem, packageIndex) => (
                      <React.Fragment key={packageIndex}>
                        <tr>
                          <td
                            colSpan="2"
                            className="text-2xl font-semibold leading-8 text-[#222222] pb-8 pt-16 pr-96"
                          >
                            {packageItem.title}
                          </td>
                        </tr>
                        {packageItem.features.map((feature, featureIndex) => (
                          <tr key={featureIndex}>
                            <td className='font-semibold text-lg text-left leading-6 text-[#222222] py-4 pr-36'>
                              {feature.title}
                            </td>
                            <td className='font-semibold text-lg text-center leading-6 text-[#222222] py-4 lg:border-l-[1px] lg:border-[#C8C8C8]'>
                              <div className='flex items-center justify-center'>
                                <Image src={feature.gold ? arrowblack : noinclude} className='h-6 w-6' alt='tick' />
                              </div>
                            </td>
                            <td className='font-semibold text-lg text-center leading-6 text-[#222222] py-4 lg:border-l-[1px] lg:border-[#C8C8C8]'>
                              <div className='flex items-center justify-center'>
                                <Image src={feature.premium ? arrowblue : noinclude} className='h-6 w-6' alt='tick' />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))
                  ) : (
                    selectedPackagesCorporation.map((packageItem, packageIndex) => (
                      <React.Fragment key={packageIndex}>
                        <tr>
                          <td colSpan="2" className="text-2xl font-semibold leading-8 text-[#222222] pb-8 pt-16 pr-[21rem]">
                            {packageItem.title}
                          </td>
                        </tr>
                        {packageItem.features.map((features, detailIndex) => (
                          <tr key={detailIndex}>
                            <td className="font-semibold text-lg text-left leading-6 text-[#222222] lg:pr-12 py-4 pr-36">
                              {features.title}
                            </td>
                            <td className='font-semibold text-lg text-center leading-6 text-[#222222] py-4 lg:border-l-[1px] lg:border-[#C8C8C8]'>
                              <div className='flex items-center justify-center'>
                                <Image src={features.starter ? arrowblack : noinclude} className='h-6 w-6' alt='tick' />
                              </div>
                            </td>
                            <td className='font-semibold text-lg text-center leading-6 text-[#222222] py-4 lg:border-l-[1px] lg:border-[#C8C8C8]'>
                              <div className='flex items-center justify-center'>
                                <Image src={features.startup ? arrowblack : noinclude} className='h-6 w-6' alt='tick' />
                              </div>
                            </td>
                            <td className='font-semibold text-lg text-center leading-6 !text-[#1649FF] py-4 lg:border-l-[1px] lg:border-[#C8C8C8]'>
                              <div className='flex items-center justify-center'>
                                <Image src={features.scaleup ? arrowblue : noinclude} className='h-6 w-6' alt='tick' />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className={`block overflow-hidden lg:hidden ${showAllDifferences ? ' h-full' : ' h-[32rem]'}`}>
            <div className='text-center py-8'>
              <h2 className='font-semibold text-[20px] leading-[22px] text-[#222222]'>Compare what’s included per package</h2>
            </div>
            <div className='flex items-center justify-around border border-[#222222] rounded-2xl'>
              {isChecked === false ?
                (
                  <>
                    <div onClick={() => setSelectedPackagesNameLLC('gold')} className={`w-full text-center p-4 border-r border-[#222222] font-semibold text-[18px] leading-6 text-[#222222] rounded-tl-2xl rounded-bl-2xl ${selectedPackagesNameLLC === 'gold' && 'bg-[#1649FF] text-white'}`}>Gold</div>
                    <div onClick={() => setSelectedPackagesNameLLC('premium')} className={`w-full text-center p-4 font-semibold text-[18px] leading-6 text-[#222222] rounded-tr-2xl rounded-br-2xl ${selectedPackagesNameLLC === 'premium' && 'bg-[#1649FF] text-white'}`}>Premium</div>
                  </>
                ) :
                (
                  <>
                    <div onClick={() => setSelectedPackagesNameCorp('starter')} className={`w-full text-center p-4 border-r border-[#222222] font-semibold text-[18px] leading-6 text-[#222222] rounded-tl-2xl rounded-bl-2xl ${selectedPackagesNameCorp === 'starter' && 'bg-[#1649FF] text-white'}`}>Starter</div>
                    <div onClick={() => setSelectedPackagesNameCorp('startup')} className={`w-full text-center p-4 border-r border-[#222222] font-semibold text-[18px] leading-6 text-[#222222] ${selectedPackagesNameCorp === 'startup' && 'bg-[#1649FF] text-white'}`}>Start Up</div>
                    <div onClick={() => setSelectedPackagesNameCorp('scaleup')} className={`w-full text-center p-4 border-r border-[#222222] font-semibold text-[18px] leading-6 text-[#222222] rounded-tr-2xl rounded-br-2xl ${selectedPackagesNameCorp === 'scaleup' && 'bg-[#1649FF] text-white'}`}>Premium</div>
                  </>
                )
              }
            </div>
            <div className='relative'>
              {isChecked === false ? (
                selectedPackagesLLC.map((packageItem, packageIndex) => (
                  <React.Fragment key={packageIndex}>
                      <div key={packageIndex} className='py-8'>
                        <div className='font-semibold text-[18px] leading-6 text-[#222222]'>
                          {packageItem.title}
                        </div>
                      </div>
                      {packageItem.features.map((features, detailIndex) => (
                        <div key={detailIndex}>
                          {selectedPackagesNameLLC === 'gold' && features.gold &&
                            <div className="font-semibold text-lg text-left leading-6 text-[#222222] py-3">
                              <div className='flex items-center gap-4'>
                                <Image src={arrowblack} className='h-6 w-6' alt='tick' />
                                {features.title}
                              </div>
                            </div>
                          }
                          {selectedPackagesNameLLC === 'premium' && features.premium &&
                            <div className="font-semibold text-lg text-left leading-6 text-[#222222] py-3">
                              <div className='flex items-center gap-4'>
                                <Image src={arrowblack} className='h-6 w-6' alt='tick' />
                                {features.title}
                              </div>
                            </div>
                          }
                        </div>
                      ))}
                  </React.Fragment>
                ))) : (
                  selectedPackagesCorporation.map((packageItem, packageIndex) => (
                    <React.Fragment key={packageIndex}>
                        <div key={packageIndex} className='py-8'>
                          <div className='font-semibold text-[18px] leading-6 text-[#222222]'>
                            {packageItem.title}
                          </div>
                        </div>
                        {packageItem.features.map((features, detailIndex) => (
                          <div key={detailIndex}>
                            {selectedPackagesNameCorp === 'starter' && features.starter &&
                              <div className="font-semibold text-lg text-left leading-6 text-[#222222] py-3">
                                <div className='flex items-center gap-4'>
                                  <Image src={arrowblack} className='h-6 w-6' alt='tick' />
                                  {features.title}
                                </div>
                              </div>
                            }
                            {selectedPackagesNameCorp === 'startup' && features.startup &&
                              <div className="font-semibold text-lg text-left leading-6 text-[#222222] py-3">
                                <div className='flex items-center gap-4'>
                                  <Image src={arrowblack} className='h-6 w-6' alt='tick' />
                                  {features.title}
                                </div>
                              </div>
                            }
                             {selectedPackagesNameCorp === 'scaleup' && features.scaleup &&
                              <div className="font-semibold text-lg text-left leading-6 text-[#222222] py-3">
                                <div className='flex items-center gap-4'>
                                  <Image src={arrowblack} className='h-6 w-6' alt='tick' />
                                  {features.title}
                                </div>
                              </div>
                            }
                          </div>
                        ))}
                    </React.Fragment>
                  )))}
            </div>
          </div>
          <div className={`relative ${showAllDifferences ? 'hidden' : 'block'}`} aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[50%] lg:pt-[20%]" />
            </div>
            <div className="relative" aria-hidden="true">
              <div
                onClick={() => setShowAllDifferences(true)}
                className={`w-full lg:w-auto cursor-pointer absolute px-4 py-3 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white hover:bg-[#9EE248] text-[#1649FF] font-semibold text-[18px] leading-6 rounded-[16px] -top-12 left-1/2 ${showAllDifferences ? 'hidden' : 'block'}`}>
                Show all differences
              </div>
            </div>
        </div>
      </div>
      <div className='hiw-section7'>
        <div className='mx-auto max-w-[851px] px-6 lg:px-0  py-12 lg:py-24'>
          <h1 className='text-left lg:text-center font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-[#1649FF]'>
            {t('how_it_works_step_5')}
            <span className='text-[#ECEFF1]'>{t("how_it_works_just_1_day_title")}</span>
          </h1>
        </div>
        <div className='lg:mx-auto max-w-[938px] lg:px-4 mx-6 py-12 rectangle'>
          <div className='block lg:flex items-start justify-between gap-24 px-4 lg:px-12'>
            <div className='w-[80%] lg:w-[40%]'>
              <div className='flex flex-col gap-16'>
                <div>
                  <h3 className='font-semibold  text-[20px] lg:text-[22px] leading-[22px] lg:leading-[26px] text-white'>{t("how_it_works_just_1_day_desc")}</h3>
                </div>
                <div className='hidden lg:block'>
                  <Link href={`/${lang}/company-type`} className='rounded-2xl bg-[#1649FF] text-white font-semibold p-4'>{t("how_it_works_just_1_day_button")}</Link>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-[60%]'>
              <ul className='flex flex-col gap-12 pt-6 lg:pt-0 lg:pb-24'>
                <li>
                  <div className='flex items-center gap-3'>
                    <Image src={tick} className='h-8' alt='Company created in any state' />
                    <h3 className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t("how_it_works_just_1_day_list1_title")}</h3>
                  </div>
                  <div className='block pl-12'>
                    <p className='text-[#ECEFF1] text-opacity-[30%] font-semibold text-lg lg:leading-6 lg:text-[16px] leading-[22px]'>{t("how_it_works_just_1_day_list1_desc")}</p>
                  </div>
                </li>
                <li>
                  <div className='flex items-center gap-3'>
                    <Image src={tick} className='h-8' alt='Registered agent' />
                    <h3 className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t("how_it_works_just_1_day_list2_title")}</h3>
                  </div>
                  <div className='block pl-12'>
                    <p className='text-[#ECEFF1] text-opacity-[30%] font-semibold text-lg lg:leading-6 lg:text-[16px] leading-[22px]'>{t("how_it_works_just_1_day_list2_desc")}</p>
                  </div>
                </li>
                <li>
                  <div className='flex items-center gap-3'>
                    <Image src={tick} className='h-8' alt='EIN and bank account setup assistance' />
                    <h3 className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t("how_it_works_just_1_day_list3_title")}</h3>
                  </div>
                  <div className='block pl-12'>
                    <p className='text-[#ECEFF1] text-opacity-[30%] font-semibold text-lg lg:leading-6 lg:text-[16px] leading-[22px]'>{t("how_it_works_just_1_day_list3_desc")}</p>
                  </div>
                </li>
                <li>
                  <div className='flex items-center gap-3'>
                    <Image src={tick} className='h-8' alt='Access to Registate online dashboard' />
                    <h3 className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t("how_it_works_just_1_day_list4_title")}</h3>
                  </div>
                  <div className='block pl-12'>
                    <p className='text-[#ECEFF1] text-opacity-[30%] font-semibold text-lg lg:leading-6 lg:text-[16px] leading-[22px]'>{t("how_it_works_just_1_day_list4_desc")}</p>
                  </div>
                </li>
              </ul>
              <Link href={`/${lang}/company-type`} className='w-full block mt-12 mb-0 lg:hidden text-center rounded-2xl bg-[#1649FF] text-white font-semibold p-4'>{t("how_it_works_just_1_day_button")}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1120px] lg:px-4 py-24'>
        <div className='h-[30rem] w-full'>
          <Image src={start} className='h-[30rem] w-full object-cover rounded-tl-[32px] rounded-tr-[32px]' alt='Start with you perfect name' />
        </div>
        <div className='bg-black rounded-bl-[32px] rounded-br-[32px] py-12 px-6 lg:py-12 lg:px-12'>
          <div className='flex-col lg:flex-row flex items-start justify-between gap-8'>
            <div className='flex flex-col gap-4 lg:gap-8 w-full'>
              <h2 className='font-bold leading-[38px] lg:leading-[64px] text-[32px] lg:text-[64px] text-white '>{t('how_it_works_start_perfect_name_title')}</h2>
              <p className='w-full lg:w-[75%] text-[16px] lg:text-[18px] font-semibold leading-[22px] lg:leading-6 text-white'>{t('how_it_works_start_perfect_name_desc')}</p>
            </div>
            <div className='w-full'>
              <label htmlFor="businessName" className="mb-2 text-sm font-medium sr-only">Search</label>
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                </div>
                <input type="text" onChange={handleBusinessName} id="businessName" className="block w-full p-6 pl-6 text-xs lg:text-lg text-[#8A8A8A] rounded-[20px]  focus:outline-none border-none focus:border-none focus:ring-0" placeholder={t('pricing_header2_footer_input_text')} required />
                <button type="submit" onClick={startNow} className="text-white absolute right-2.5 bottom-2.5 bg-[#1649FF] py-3 lg:py-4 px-7 rounded-2xl">{t('pricing_header2_footer_input_button')}</button>
              </div>
              <Link href={`/${lang}/start-my-business`} className='text-left'>
                <p className='text-[#8A8A8A] block lg:flex items-center  gap-1'>{t('pricing_header2_footer_text_gray')} <span className='flex justify-start lg:justify-center items-center gap-1 text-[#9EE248] cursor-pointer'>{t('pricing_header2_footer_text_green')} <ArrowRightIcon className='w-4 h-4' /> </span></p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}