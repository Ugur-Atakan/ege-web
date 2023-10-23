import React from 'react'
import Image from 'next/image'
import { Legacy } from 'src/images/main-page'

const Right = () => {
    return (
        <div className="flex flex-col justify-evenly  bg-blue-600">
            <div className='p-10  text-gray-100 space-y-4'>
                <div className="w-[123px] px-3 py-[7px] rounded-xl border-2 border-lime-400 justify-center items-center gap-2 inline-flex">
                    <div className="text-lime-400 text-lg font-semibold leading-normal">Legacy</div>
                </div>
        
                <div className="w-[507px] text-[64px] font-bold leading-[64px]">Stay calm.Stay compliant</div>
                <div className="w-[454px]  text-lg font-semibold font-['Inter'] leading-normal">Avoid risks by not managing all documents on your own. Operate legally across states, ensuring you adhere to all required laws and regulations.</div>
            </div>

            <div className=''>
                <Image className='' src={Legacy} alt='credit cards' />
            </div>
        </div>
    )
};

export default Right
