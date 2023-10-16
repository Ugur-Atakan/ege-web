import React from 'react'
import Image from 'next/image'
import { calender } from 'src/images'

const AttorneyCard = () => {
    return(
        <div className="w-[432px] h-[680px] p-8 bg-blue-600 rounded-[32px] flex-col justify-between items-center inline-flex">
            <div className="self-stretch text-white text-[40px] font-semibold capitalize leading-[44px]">Book a free call with an experienced attorney</div>
         
            <Image  className="w-[366px] h-[366px]" src={calender} alt='author-card' />
            <div className="self-stretch h-[72px] px-[68px] py-6 bg-white rounded-[20px] justify-center items-center gap-2 inline-flex">
                <div className="text-neutral-800 text-[22px] font-semibold leading-relaxed">Book a call</div>
            </div>
        </div>
    )
}

export default AttorneyCard
