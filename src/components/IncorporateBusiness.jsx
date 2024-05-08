'use client'

import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import globalmap from '@/assets/videos/globalmap.mp4';
import { tickIcon, palace } from '@/assets/images';
import { useTranslation } from '@/i18n/client';

export default function IncorporateBusiness({ lang }) {
    const { t } = useTranslation(lang);
    const [isLoaded, setIsLoaded] = useState(false);
    const videoRef = useRef(null);
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '50px 0px', // Load the video a little before it comes into view
    });

    // When the video comes into view and isn't loaded yet, load the video
    if (inView && !isLoaded) {
        setIsLoaded(true);
        videoRef.current.load();
    }

    return (
        <div className="bg-white">
            <div className="mx-auto lg:p-6 lg:px-12">
                <div ref={ref} className="relative">
                    <video
                        autoPlay
                        muted
                        loop
                        width="2432" height="1442"
                        alt="product video"
                        ref={videoRef}
                        className="lg:rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 outline-none"
                    >
                        {isLoaded && (
                            <source
                                src={globalmap}
                                type="video/mp4"
                            />
                        )}
                    </video>
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
                                    <div className="w-[293px] text-neutral-800 text-lg font-semibold  leading-normal">{t('starter_packages_list1')} </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row'> 
                                        <Image src={tickIcon} className='w-6 h-6 mr-4' alt='tick icon' />
                                        <div className="text-neutral-800 text-lg font-semibold leading-normal">{'7 Day Money back guarantee'}</div>
                                        
                                    </div>
                                    <div className="text-sm text-gray-500 italic py-2 pl-10">
                                            <sup className="mr-1">*</sup>except state fee
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
