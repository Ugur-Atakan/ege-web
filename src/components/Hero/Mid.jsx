import React from 'react'
import Link from 'next/link'

const Mid = ({ t, lang }) => {
    return (
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-64 relative z-[3]">
          <div className="text-white text-left lg:text-center px-6 lg:px-0 lg:-mt-24">
            <h1 className="font-inter text-7xl font-bold leading-16 tracking-tighter">
              {t('hero_text_white1')} {t('hero_text_green')} <span className='text-[#9EE248]'>{t('hero_text_white2')}</span>
            </h1>
            <div className='flex items-center justify-center' >
              <div className='lg:max-w-md'>
                <p className="mt-6 font-medium text-[18px] lg:leading-[22px] text-lg text-white">
                  {t('hero_description')}
                </p>
              </div>
            </div>
            <div className="mt-10 flex items-center lg:justify-center gap-x-2">
              <Link
                href={`/${lang}/onboarding`}
                className="rounded-2xl py-3 lg:py-[12px] lg:px-[24px] leading-[22px] px-6 font-semibold text-[15px] lg:text-lg text-[#222222] bg-[#9EE248]"
              >
                {t('hero_green_button')}
              </Link>
              <Link
                href={`/${lang}/how-it-works`}
                className="rounded-2xl py-3 lg:py-[12px] lg:px-[36px] leading-[22px] px-6 font-medium text-[18px] lg:text-lg text-white border bg-transparent"
              >
                  {t('hero_transparent_button')}
              </Link>
            </div>
          </div>
        </div>
    );
};

export default Mid