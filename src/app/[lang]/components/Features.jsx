'use client'

import Slider from "react-slick"
import { useTranslation } from '../../i18n/client'

import tolga from '../../../videos/tolga-game.mp4'
import melis from '../../../videos/melis-wellbees.mp4'
import batu from '../../../videos/batu-malliq.mp4'

import { Player } from 'video-react';

export default function Features({ lang }) {
  const { t } = useTranslation(lang);
  
  const videos = [
    {
        name: t('founders1_name'),
        title: t('founders2_title'),
        source: melis
    },
    {
        name: t('founders2_name'),
        title: t('founders2_title'),
        source: batu
    },
    {
        name: t('founders3_name'),
        title: t('founders3_title'),
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
                <div key={index}>
                   <Player>
                    <source src={video.source} />
                  </Player>
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
