'use client';

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import bigstar from '../../images/big-star.webp'
import smallstar from '../../images/small-star.png'
import darkstar from '../../images/dark-star.png'
import { useSearchParams } from 'next/navigation'

/**
 * Home page route
 * @type {Component} 
 * @type {client}
 * @description This is the page component for the post-order page
 * @returns {JSX.Element} 
*/

const Page = () => {
  const params = useSearchParams()
  const success = params.get('success')
  const trueOrFalse = success === 'true'

  return (
  <main className="mt-16 sm:mt-24">
    <div className="mx-auto max-w-7xl bg-white py-24 px-4 sm:px-6 lg:px-8">
      {trueOrFalse ? (
        <div className="md:min-h-screen block md:flex items-center justify-center bg-cover bg-center bg-image relative">
          <Image src={bigstar} className="h-64 md:h-auto" alt="big-star" />
              <div className="md:absolute text-center top-1/2 left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 max-w-xl px-4 md:px-0">
                <h1 className="text-black md:text-white text-xl md:text-6xl leading-16 md:leading-64 text-center font-bold md:mb-6">
                  Congratulations, your company is almost a reality!
                </h1>
                <p className="text-black md:text-white text-lg md:text-2xl leading-7 md:leading-10 text-center font-semibold mb-8 md:mb-16 md:px-20">
                  We confirmed your payment and we{"'"}ll get in touch as soon as possible.
                </p>
                <Link
                  href="/"
                  className="rounded-[20px] bg-[#1649FF] md:bg-white text-white md:text-[#222222] font-semibold text-lg md:text-2xl leading-7 md:leading-10 py-3 md:py-6 px-6 md:px-12"
                >
                  Go to the main page
                </Link>
              </div>
              <div className="hidden md:block absolute right-48 top-48 transform -translate-y-1/2 animate-bounce">
                <Image src={smallstar} alt="small-star" className="h-36 w-36" />
              </div>
              <div className="hidden md:block absolute left-[28rem] top-48 transform -translate-y-1/2 animate-bounce">
                <Image src={darkstar} alt="dark-star" className="h-12 w-12" />
              </div>
              <div className="hidden md:block absolute left-[28rem] bottom-[38%] transform -translate-y-1/2 animate-bounce">
                <Image src={darkstar} alt="dark-star" className="h-12 w-12" />
              </div>
            </div>
          ) : (
            <div className="md:min-h-screen block md:flex items-center justify-center bg-cover bg-center bg-image relative">
              <Image src={bigstar} className="h-64  md:h-auto" alt="" />
              <div className="md:absolute text-center top-1/2 left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 max-w-xl px-4 md:px-0">
                <h1 className="text-black md:text-white text-xl md:text-6xl leading-16 md:leading-64 text-center font-bold md:mb-6">
                  Payment has not been cleared
                </h1>
                <p className="text-black md:text-white text-lg md:text-2xl leading-7 md:leading-10 text-center font-semibold mb-8 md:mb-16 md:px-20">
                  Please go back and try again
                </p>
                <Link
                  href="/"
                  className="rounded-[20px] bg-[#1649FF] md:bg-white text-white md:text-[#222222] font-semibold text-lg md:text-2xl leading-7 md:leading-10 py-3 md:py-6 px-6 md:px-12"
                >
                  Go to the home page
                </Link>
              </div>
              <div className="hidden md:block absolute right-48 top-48 transform -translate-y-1/2 animate-bounce">
                <Image src={smallstar} alt="small-star" className="h-36 w-36" />
              </div>
              <div className="hidden md:block absolute left-[28rem] top-48 transform -translate-y-1/2 animate-bounce">
                <Image src={darkstar} alt="dark-star" className="h-12 w-12" />
              </div>
              <div className="hidden md:block absolute left-[28rem] bottom-[38%] transform -translate-y-1/2 animate-bounce">
                <Image src={darkstar} alt="dark-star" className="h-12 w-12" />
              </div>
            </div>
          )}
        </div>
    </main>
  )
}

export default Page
