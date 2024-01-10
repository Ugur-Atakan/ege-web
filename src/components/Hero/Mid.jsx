import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getRandomCountry } from './utils';
import Typewriter from 'typewriter-effect';

const Mid = ({ t, lang }) => {
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };


  
  return (
    <motion.div
      className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-64 relative z-[3]"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <div className="text-white text-left lg:text-center px-6 lg:px-0 lg:-mt-24">
        <motion.div  variants={textVariants}>
          <h1 className="font-inter lg:text-7xl font-bold leading-16 tracking-tighter text-5xl">
            {t('hero_text_white1')} {t('hero_text_green')}{' '}
            {lang === 'tr' ?
              <span className=" text-[#9EE248]">
                {t('hero_text_white2')}
              </span>
              :
              <span className="flex flex-row justify-center text-center text-[#9EE248]">
                {t('hero_text_white2')}&nbsp;
                <Typewriter
                  options={{
                    loop: true,
                    delay: 100,
                    deleteSpeed: 100,
                    autoStart: true,
                    strings: ['anywhere', getRandomCountry(), getRandomCountry(), getRandomCountry(), getRandomCountry(), getRandomCountry(), getRandomCountry()]
                  }}
                />
              </span>
            }
          </h1>
        </motion.div>
        <div className="flex items-center justify-center">
          <motion.div variants={textVariants}>
            <div className="lg:max-w-md">
              <p className="mt-6 font-medium text-[18px] lg:leading-[22px] text-lg text-white">
                {t('hero_description')}
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div variants={textVariants} className="mt-10 flex items-center lg:justify-center gap-x-2">
          <Link
            href={`/${lang}/onboarding`}
            className="hover:bg-white hover:text-blue-500  hover:scale-105 rounded-2xl py-3 lg:py-[12px] lg:px-[24px] leading-[22px] px-6 font-semibold text-[15px] lg:text-lg text-[#222222] bg-[#9EE248]"
          >
            {t('hero_green_button')}
          </Link>
          <Link
            href={`/${lang}/how-it-works`}
            className="hover:bg-white hover:text-blue-500 hover:scale-105 rounded-2xl py-3 lg:py-[12px] lg:px-[36px] leading-[22px] px-6 font-medium text-[18px] lg:text-lg text-white border bg-transparent"
          >
            {t('hero_transparent_button')}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Mid;
