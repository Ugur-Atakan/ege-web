'use client';

import Link from 'next/link';

import Hero from './components/Hero';
import GetStarted from './components/GetStarted';
import Compare from './components/Compare';
import Compliance from './components/Compliance';
import IncorporateBusiness from './components/IncorporateBusiness';
import SupportBusiness from './components/SupportBusiness';
import Features from './components/Features';
import TestimonialLogos from './components/TestimonialLogos';
import Faqs from './components/Faqs';
import Footer from './components/Footer';

import { useTranslation } from '../i18n/client'
import { Switcher } from './switcher/index'

export default function Home({ params: { lang } }) {
  const { t } =  useTranslation(lang)

  return(
    <>

      {/* For testing do not use this code */}
      {/* <h1>{t('topbar_first_part')}</h1>
      <Link href={`/${lang}/second-page`}>
        second page
      </Link>
      <Switcher lng={lang} /> */}

      <Hero lang={lang} />
      <GetStarted lang={lang} />
      <Compare lang={lang} />
      <Compliance lang={lang} />
      <IncorporateBusiness lang={lang} />
      <SupportBusiness lang={lang} />
      <Features lang={lang} />
      <TestimonialLogos lang={lang} />
      <Faqs lang={lang} />
      <Footer lang={lang} /> 
    </>
  )
}