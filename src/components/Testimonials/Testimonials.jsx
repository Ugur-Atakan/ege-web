/* eslint-disable */
import React from 'react'
import Image from 'next/image'
import { batuSatImg, melisImg, tolgaOzturk } from '@/assets/images/index'
import wellbeesLogo from '@/assets/images/logos/wellbees-logo.jpg'
import funverseLogo from '@/assets/images/logos/funverse-logo.jpg'

export default function Testimonials() { 
  return (
    <section className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-xl text-center mb-10">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Loved by founders all over the world
        </p>
      </div> 

      {/* Main testimonial */}
      <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-12 sm:py-12 lg:max-w-4xl">
          <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />
          <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
            <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
              <svg
                viewBox="0 0 162 128"
                fill="none"
                aria-hidden="true"
                className="absolute -top-12 left-0 -z-10 h-32 stroke-gray-900/10"
              >
                <path
                  id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                />
                <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
              </svg>
            <blockquote className="text-xl text-justify first-letter leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p className='pb-5'>
                "I am extremely pleased with the exceptional service provided by Registate in helping me establish my LLC in America. As a first-time entrepreneur, the process of setting up a business seemed overwhelming, but Registate made it seamless and stress-free."
              </p>
              <a href="https://www.youtube.com/watch?v=_zj-Bh5SjK0&ab_channel=Registate" target="_blank" >
                <p className="text-[18px] font-semibold text-blue-600 hover:text-blue-500">
                  Video Testimonial
                </p>
              </a>
            </blockquote>
            
          </div>
          
          <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
            <Image
              className="rounded-xl bg-indigo-50 lg:rounded-3xl"
              src={batuSatImg}
              alt="batu-sah"
            />
          </div>
          <figcaption className="text-base lg:col-start-1 lg:row-start-3">
            <div className="font-semibold text-gray-900">Batu Şah</div>
            <div className="mt-1 text-gray-500">Co-founder of Mall IQ</div>
            
          </figcaption>
        </figure>
      </div>
    </section>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <Image className="h-14 w-[100px] rounded-xl self-start" src={funverseLogo} alt="funverse-logo" />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  Registate made establishing my LLC in the U.S. a breeze. Their team's expertise and seamless process stood out. I highly recommend Registate for their efficient and personalized approach. Thanks to them, my journey to set up an LLC was smooth.
                </p>
              </blockquote>
              <a href="https://www.youtube.com/watch?v=ggWsTwawg4o&ab_channel=Registate" target="_blank" className="mt-3">
                  <p className="text-base font-semibold text-blue-600 hover:text-blue-500">
                    Video Testimonial
                  </p>
              </a>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <Image
                  className="h-14 w-14 rounded-full bg-gray-50"
                  src={tolgaOzturk}
                  alt="tolga-ozturk"
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900">Tolga Öztürk</div>
                  <div className="mt-1 text-gray-500">CEO of Funverse Games</div>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <Image className="h-14 w-[100px] self-start rounded-xl" src={wellbeesLogo} alt="well-bees" />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “Registate has been a game-changer in helping me set up my LLC in the U.S. The entire process was made effortless by their knowledgeable team. Their expertise and attention to detail ensured a smooth journey from start to finish. I confidently recommend Registate for their personalized service and commitment to client satisfaction.”
                </p>
              </blockquote>
              
              <a href="https://www.youtube.com/watch?v=QiqVTtFDjYY&t=2s&ab_channel=Registate" target="_blank" className="mt-3">
                  <p className="text-base font-semibold text-blue-600 hover:text-blue-500">
                    Video Testimonial
                  </p>
              </a>
              <figcaption className="mt-4 flex items-center gap-x-6">
                <Image
                  className="h-14 w-14 rounded-full bg-gray-50"
                  src={melisImg}
                  alt="melis"
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900">{`Melis Abacıoğlu`}</div>
                  <div className="mt-1 text-gray-500">CEO of Wellbees</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
