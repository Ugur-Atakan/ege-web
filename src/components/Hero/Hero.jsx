'use client'

import { React, useState, useEffect } from 'react'
import Image from 'next/image'
import rocket from '@/assets/images/rocket.png'
import Navbar from './Navbar'
import Mid from './Mid'
import Bottom from './Bottom'
import HoverMenu from './HoverMenu'

import { useTranslation } from '@/i18n/client'

const Hero = ({ lang }) => {
  const { t } = useTranslation(lang);

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

  return (
    <div className="hero-section">
      <Navbar
        isSticky={isSticky}
        t={t}
        lang={lang}
      />

      <div className="relative isolate overflow-hidden pt-14 hero-section">
        <Mid t={t} lang={lang} />
        <div className='absolute top-8 -right-[45rem] lg:top-36 lg:right-0 z-0 rocket-animation'>
          {/* <Image src={rocket} className='rocket' alt='rocket' /> */}
        </div>
        <Bottom />
      </div>
    </div>
  )
}

export default Hero