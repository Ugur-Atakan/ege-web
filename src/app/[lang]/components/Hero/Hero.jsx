'use client'

import { React, useState, useEffect } from 'react'
import Image from 'next/image'
import rocket from '../../../../images/rocket.png'
import Header from './Header'
import Mid from './Mid'
import Bottom from './Bottom'

import { useTranslation } from '../../../i18n/client'

export default function Hero({ lang }) {
  const { t } = useTranslation(lang);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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

  const setMobileResponsive = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <div className="hero-section">
      <Header
        isSticky={isSticky}
        t={t}
        lang={lang}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setMobileResponsive={setMobileResponsive}
      />

      <div className="relative isolate overflow-hidden pt-14 hero-section">
        <Mid t={t} lang={lang} />
        <div className='absolute top-8 -right-[45rem] lg:top-36 lg:right-0 z-0 rocket-animation'>
          <Image src={rocket} className='rocket' alt='rocket' />
        </div>
        <Bottom />
      </div>
    </div>
  )
}
