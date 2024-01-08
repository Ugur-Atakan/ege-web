import React from 'react'
import Image from 'next/image'
import cover from './img/cover.png'

const HowItWorks = () => {
  return (
    <div className='px-8 py-[130px] bg-gray-100'>
        <div className='flex justify-center items-center'>
            <h2 className="w-[550px] text-center text-neutral-800 text-[58px] font-bold leading-[58px]">
                How it works in 3 steps
            </h2>
        </div>

        <div className="flex flex-col lg:flex-row md:flex-row items-center mx-[215px] py-10">
            <div className="flex justify-center items-center w-full lg:w-1/2 md:w-1/2 h-full">
                <Image 
                    src={cover} 
                    alt="Person using phone" 
                    width={425} 
                    height={425} 
                />
            </div>

            <div className="w-full lg:w-1/2 md:w-1/2 ">
                <div className="mb-6 space-y-4">
                    <h3 className="w-[395px] text-neutral-800 text-[40px] font-semibold leading-[44px]">Sign up for our plan</h3>
                    <p className="w-[395px] text-neutral-800 text-lg font-medium font-['Inter'] leading-7">One straightforward plan, tailored to meet all your registered agent needs without the fuss.</p>
                </div>
                <div className="mb-6 space-y-4">
                    <h3 className="w-[395px] text-neutral-800 text-[40px] font-semibold leading-[44px]">Provide your details</h3>
                    <p className="w-[395px] text-neutral-800 text-lg font-medium font-['Inter'] leading-7">Share your business information with us to ensure accurate and compliant representation.</p>
                </div>
                <div className="mb-6 space-y-4">
                    <h3 className="w-[395px] text-neutral-800 text-[40px] font-semibold leading-[44px]">Relax, we{"'"}ve got it covered</h3>
                    <p className="w-[395px] text-neutral-800 text-lg font-medium font-['Inter'] leading-7">Sit back and focus on your business while we handle all your legal document needs seamlessly.</p>
                </div>

                <div className='py-2'>
                    <button className="h-14 px-10 py-4 bg-black rounded-2xl justify-center items-center gap-2 inline-flex">
                        <div className="text-center text-white text-lg font-semibold leading-normal">Start applying</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HowItWorks
