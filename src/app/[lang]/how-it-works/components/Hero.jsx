'use client'

import Image from 'next/image'
import Link from 'next/link'
import { hero, arrow } from '../../../../images'
import { useTranslation } from '../../../i18n/client'

/**
 * Hero Component for how it works page
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {client}
 * @returns {JSX.Element} 
*/

const Hero = ({ lang }) => {
    const { t } = useTranslation(lang)

    return (
       <div className='relative'>
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
    )
}

export default Hero