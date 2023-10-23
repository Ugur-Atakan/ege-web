import React from 'react'
import Image from 'next/image'
import { creditCards } from 'src/images/main-page'

const Left = () => {
    return (
        <div className= "flex flex-col h-full bg-white">
            <div className='p-10  space-y-4'>
                <div className="w-[123px] px-3 py-[7px] rounded-xl border-2 border-blue-600 justify-center items-center gap-2 inline-flex">
                    <div className="text-blue-600 text-lg font-semibold leading-normal">Accounting</div>
                </div>
        
                <div className="w-[628px] text-black text-[64px] font-bold leading-[64px]">Open a bank account, no SSN required</div>
                <div className="w-[380px] text-black text-lg font-semibold leading-normal">Start receiving payments quickly. Get your bank account up and running in no time.</div>
            </div>

            <div className='overflow-hidden'>
                <Image className='pt-14 pr-10 scale-[1.55]' src={creditCards} alt='credit cards'  />
            </div>
            <div className="w-[245px] px-6 py-4 bg-blue-800 rounded-2xl justify-center items-center gap-2 inline-flex">
                <div className="text-center text-blue-600 text-lg font-semibold font-['Inter'] leading-normal">Open my bank account</div>
            </div>
        </div>
    );
};

export default Left
