import React from 'react'
import Image from 'next/image'
import { calendar } from '@/assets/images'

const AttorneyCard = () => {
    return(
        <div className="flex flex-col p-8 bg-blue-600 rounded-[32px] items-center justify-center">
            <div className="self-stretch text-white text-[28px] font-semibold capitalize leading-[44px] mb-8">Book a free call with an experienced attorney</div>

            <div className="flex justify-center mb-8">
                <Image className="w-[200px] h-[200px]" src={calendar} alt='author-card' />
            </div>

            <div className="self-stretch h-[72px] px-[68px] py-6 bg-white rounded-[20px] justify-center items-center gap-2 inline-flex">
                <div className="text-neutral-800 text-[22px] font-semibold leading-relaxed">Book a call</div>
            </div>
        </div>
    )
}

export default AttorneyCard
