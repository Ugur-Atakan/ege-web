'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import videoasian from '@/assets/videos/video-asian.mp4'
import videoeurope from '@/assets/videos/video-europe.mp4'
import videoturkey from '@/assets/videos/video-turkey.mp4'
import thaiflag from '@/assets/images/thailand-flag.png'
import turkeyflag from '@/assets/images/turkey-flag.png'
import italiaflag from '@/assets/images/italia-flag.png'
import { tickIcon, palace } from '@/assets/images'

import { useTranslation } from '@/i18n/client'

export default function IncorporateBusiness({ lang }) {
    const { t } = useTranslation(lang);
    const [videoSource, setVideoSource] = useState(videoasian);

    const handleTurkey = () => {
        setVideoSource(videoturkey);
    }

    const handleAsian = () => {
        setVideoSource(videoasian);
    }

    const handleEurope = () => {
        setVideoSource(videoeurope);
    }

    return (
        <div className="bg-white">
            <div className="mx-auto lg:p-6 lg:px-12">
                <div className="relative">
                    <video
                        autoPlay
                        muted
                        loop
                        width="2432" height="1442"
                        alt="product video"
                        key={videoSource}
                        className="lg:rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 outline-none"
                    >
                        <source
                             src={videoSource}
                            type="video/mp4" />
                    </video>
                    <div className="absolute right-3 bottom-3 lg:bottom-6 lg:right-6 text-white">
                        <div className='flex items-center gap-4'>
                            <Image src={thaiflag}  onClick={handleAsian} className='w-8 h-8 lg:w-24 lg:h-24 cursor-pointer' alt='thailand flag' />
                            <Image src={turkeyflag}  onClick={handleTurkey} className='w-8 h-8 lg:w-24 lg:h-24 cursor-pointer' alt='thailand flag' />
                            <Image src={italiaflag}  onClick={handleEurope} className='w-8 h-8 lg:w-24 lg:h-24 cursor-pointer' alt='thailand flag' />
                        </div>
                    </div>
                </div>
                
                <div className="block lg:flex items-start justify-between pt-12 pb-24 px-6 lg:px-12">
                    <div className="w-full lg:w-[60%]">
                        <h3 className='font-bold  text-[32px] lg:text-[64px] text-black leading-[38px] lg:leading-[64px] mb-6 lg:mb-24'>{t('video_title')}</h3>
                        <Link
                            href={`/${lang}/onboarding`}
                            className="hidden lg:inline rounded-2xl py-[14px] px-6 font-semibold text-lg text-[#222222] bg-[#9EE248]"
                        >
                          {t('video_button')}
                        </Link>
                    </div>
                    <div className="w-full lg:w-[40%] mt-4">
                        <div>
                            <p className="font-semibold text-lg leading-[24px]">{t('video_description')}</p>
                            <Link
                                href={`/${lang}/onboarding`}
                                className="inline-block text-center lg:hidden mt-8 rounded-2xl py-[14px] px-6 font-semibold text-lg text-[#222222] bg-[#9EE248]"
                            >
                              {t('video_button')}
                            </Link>

                            <div className="flex flex-col pt-10 space-y-4">
                                <div className='flex flex-row'> 
                                    <Image src={palace} className='w-6 h-6 mr-4' alt='tick icon' />
                                    <div className="w-[293px] text-neutral-800 text-lg font-semibold font-['Inter'] leading-normal">{t('starter_packages_list1')} </div>
                                </div>

                                <div className='flex flex-row'> 
                                    <Image src={tickIcon} className='w-6 h-6 mr-4' alt='tick icon' />
                                    <div className="text-neutral-800 text-lg font-semibold font-['Inter'] leading-normal">{t('after_formation_footer3')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
