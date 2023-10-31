import React from 'react'
import Image from 'next/image'
import { anyCountry } from '@/assets/images/main-page'

const Top = () => {
    return (
        <div>
            <div className='flex'>
                <div className='flex-1'>
                    <div className= "flex-col h-full">
                        <div className='p-10  space-y-4'>
                            <div className="w-[123px] px-3 py-[7px] rounded-xl border-2 border-lime-400 justify-center items-center gap-2 inline-flex">
                                <div className="text-lime-400 text-lg font-semibold leading-normal">Accounting</div>
                            </div>
                    
                            <div className="w-[734px] text-white text-7xl font-bold font-['Inter'] leading-[64px]">Use your notarized documents outside of the US</div>
                            <div className="w-[420px] text-white text-lg font-semibold font-['Inter'] leading-normal">International documentation can be complex. We handle the details, making sure your notarized documents are globally accepted.</div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 '>
                    <Image src={anyCountry} alt='anyCountry' />
                </div>
            </div>
        </div>
    );
}

export default Top
