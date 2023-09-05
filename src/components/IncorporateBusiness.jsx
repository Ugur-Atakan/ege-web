import { Link } from "react-router-dom";
import videoasian from "../videos/video-asian.mp4"
import videoeurope from "../videos/video-europe.mp4"
import videoturkey from "../videos/video-turkey.mp4"
import thaiflag from '../images/thailand-flag.png'
import turkeyflag from '../images/turkey-flag.png'
import italiaflag from '../images/italia-flag.png'
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function IncorporateBusiness() {
    const {t,i18n} = useTranslation();
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
            <div className="mx-auto max-w-7xl lg:p-6 lg:px-12">
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
                            <img src={thaiflag} onClick={handleAsian} className='w-8 h-8 lg:w-24 lg:h-24 cursor-pointer' alt='thailand flag' />
                            <img src={turkeyflag} onClick={handleTurkey} className='w-8 h-8 lg:w-24 lg:h-24 cursor-pointer' alt='thailand flag' />
                            <img src={italiaflag} onClick={handleEurope} className='w-8 h-8 lg:w-24 lg:h-24 cursor-pointer' alt='thailand flag' />
                        </div>
                    </div>
                </div>
                <div className="block lg:flex items-start justify-between pt-12 pb-24 px-6 lg:px-12">
                    <div className="w-full lg:w-[60%]">
                        <h1 className='font-bold  text-[32px] lg:text-[64px] text-black leading-[38px] lg:leading-[64px] mb-6 lg:mb-24'>{t('video_title')}</h1>
                        <Link
                            to={`/${i18n.language}/company-type`}
                            className="hidden lg:inline rounded-2xl py-[14px] px-6 font-semibold text-lg text-[#222222] bg-[#9EE248]"
                        >
                          {t('video_button')}
                        </Link>
                    </div>
                    <div className="w-full lg:w-[40%] mt-4">
                        <div>
                            <p className="font-semibold text-lg leading-[24px]">{t('video_description')}</p>
                            <Link
                                 to={`/${i18n.language}/company-type`}
                                className="inline-block text-center lg:hidden mt-8 rounded-2xl py-[14px] px-6 font-semibold text-lg text-[#222222] bg-[#9EE248]"
                            >
                              {t('video_button')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}
