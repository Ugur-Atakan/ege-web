'use client'

import React, { useState, useEffect } from 'react';
import { whitelogo , bluelogo } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'

import { useTranslation } from '@/i18n/client'
import i18next from 'i18next'

const Navbar = ({ lang }) => {
    const { t } = useTranslation(lang);

    const [isSticky, setIsSticky] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const changeLanguage = (lang) => {
      if (lang === "en" || lang === "tr") {
        i18next.changeLanguage(lang);
  
        if (typeof window !== 'undefined' && window.location) {
          window.localStorage.setItem('i18nextLng', lang);
          window.location.href = `/${lang}/blog`;
        }
      } else {
        navigate(`/${lang}/notfound/`, { replace: true });
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
      <nav className="flex justify-center py-4">
        <div className=" w-full border-b border-[#C8C8C8] flex items-center justify-between">
            <div className="flex items-center">
           
  
            <div className="flex lg:flex-1">
                {!mobileMenuOpen &&
                    <Link href={`/${lang}`} className="-m-1.5 p-1.5">
                        <span className="sr-only">Registate</span>
                        <Image className="w-[116px] h-[33px]" src={whitelogo} alt="white-logo" />
                    </Link>
                }
            </div>

            {/* <div className="flex gap-5 flex-grow justify-center">
                <NavItem text="Pricing" />
                <NavItem text="Products" />
                <NavItem text="Resources and support" />
                <NavItem text="Blog" />
            </div> */}
            </div>
            <div className="flex items-center">
            <div className="text-white text-sm font-semibold leading-tight mr-5">EN</div>
            </div>
        </div>
      </nav>
    );
}

export default Navbar;
