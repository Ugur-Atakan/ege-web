'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import tolga from '@/assets/videos/tolga-game.mp4'
import melis from '@/assets/videos/melis-wellbees.mp4'
import batu from '@/assets/videos/batu-malliq.mp4'
import { melisImg, batuSatImg, tolgaOzturk, playButton } from '@/assets/images'
import { useTranslation } from '@/i18n/client'

const Features = ({ lang }) => {
  const { t } = useTranslation(lang);

  const videos = [
    {
        name: t('founders1_name'),
        title: t('founders2_title'),
        img: melisImg,
        source: melis
    },
    {
        name: t('founders2_name'),
        title: t('founders2_title'),
        img: batuSatImg,
        source: batu
    },
    {
        name: t('founders3_name'),
        title: t('founders3_title'),
        img: tolgaOzturk,
        source: tolga 
    }
  ]

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow:2.75,
    slidesToScroll: 0,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
        }
      },
    ],
  };

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleToggleVideo = (index) => {
    const videoElement = document.getElementById(`video-${index}`);
    if (isVideoPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  const handleStopVideo = (index) => {
    const videoElement = document.getElementById(`video-${index}`);
    videoElement.pause();
    setIsVideoPlaying(false);
  };

  return (
    <div className="bg-white relative overflow-hidden">
      <div className="p-6 py-12 lg:px-36 lg:py-36">
        <div className="block lg:flex items-start gap-4">
          <div className="w-2/3 lg:w-1/4">
            <h1 className="font-semibold text-[20px] lg:text-[28px] leading-[22px] lg:leading-[32px] text-[#222222]">{t('founders_title')}</h1>
          </div>
        <div className="w-full lg:w-3/4 founders relative lg:-right-[18rem] py-6 lg:py-0 founders-section">
        <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="relative group">
            <div className="relative w-[336px] h-[457px]">
              {!isVideoPlaying ? (
                <div className="relative">
                  <Image
                    src={video.img} 
                    alt="video-img"
                    className={`object-cover w-full h-full rounded-lg ${isVideoLoaded ? 'hidden' : 'block'}`}
                    style={{ zIndex: 10 }}
                    onClick={() => handleToggleVideo(index)}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={() => handleToggleVideo(index)}
                  >
                    <Image src={playButton} alt="play" className="w-16 h-16" />
                  </div>
                </div>
              ): null}
              <video
                id={`video-${index}`}
                src={video.source}
                controls={false}
                autoPlay={false}
                loop={true}
                muted={false}
                className={`w-full h-full rounded-lg ${isVideoPlaying ? 'block' : 'hidden'}`}
                onLoadedData={handleVideoLoad}
              />
              {isVideoPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={() => handleStopVideo(index)}
                >
                  <Image src={playButton} alt="play" className="w-16 h-16" />
                </div>
              )}
            </div>
            <h1 className="font-semibold text-[22px] leading-[26px] text-[#222222] pt-4">{video.name}</h1>
            <p className="font-semibold text-lg leading-6 text-[#222222]">{video.title}</p>
          </div>
        ))}
        </Slider>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Features;
