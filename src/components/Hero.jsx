import { StarIcon } from '@heroicons/react/20/solid'
import React, { useState, useEffect } from 'react'
import HeroImage from '../images/hero.png'
import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

function TypingHeader() {
  const { t, i18n } = useTranslation();
  const [text, setText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    t('hero_section_title_message_1'),
    t('hero_section_title_message_2'),
    t('hero_section_title_message_3'),
    t('hero_section_title_message_4'),
    t('hero_section_title_message_5'),
    t('hero_section_title_message_6'),
    t('hero_section_title_message_7'),
    t('hero_section_title_message_8'),
    t('hero_section_title_message_9'),
    t('hero_section_title_message_10'),
  ]

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(messages[messageIndex].substring(0, i));
      i++;
      if (i > messages[messageIndex].length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setText('');
          setMessageIndex((messageIndex + 1) % messages.length);
        }, 1000);
      }
    }, 100);
  }, [messageIndex]);

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">{t('hero_section_title_1')}</span>
      </h1>
      <h1 className="flex md:justify-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block text-blue-600 xl:inline">{text}</span>
        <span className="text-yellow-500">|</span>
      </h1>
    </>
  );
}

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 96);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8">
              <div className="sm:text-center lg:text-center pt-16">
                <TypingHeader />
                <p className="mt-5 mb-5 text-base text-gray-800 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-2xl lg:mx-0">
                  {t('hero_section_desc')}
                </p>
                <div className='flex justify-center'>
                  <a href="/pricing/form-my-company/" class="px-16 py-4 relative rounded group overflow-hidden font-medium bg-blue-600 text-white inline-block">
                    <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-700 group-hover:h-full opacity-90"></span>
                    <span class="relative group-hover:text-white text-lg"> {t('hero_section_button')}</span>
                  </a>
                </div>
                <div className="flex flex-col md:flex-row py-3 gap-2 md:gap-0  md:py-0 md:inline-flex items-center mx-auto mt-4">
                  <div className="flex flex-shrink-0 pr-2">
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  </div>
                  <div className=" min-w-0 flex-1 py-1 text-sm text-gray-500 sm:py-3">
                    <span className="font-medium text-gray-900">{t('hero_section_star_1')}</span> {t('hero_section_star_2')}{' '}
                    <span className="font-medium text-blue-600">{t('hero_section_star_3')}</span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src={HeroImage}
            alt=""
          />
        </div>
      </div>
    </>
  )
}
