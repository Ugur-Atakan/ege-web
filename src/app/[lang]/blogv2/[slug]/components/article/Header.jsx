import React from 'react'
import Image from 'next/image'

const Header = ({ title, readingTime, featureImg }) => {
    return (
        <div className='flex flex-col'>
            <div className='w-[151px] h-10 bg-blue-600 rounded-2xl justify-center items-center gap-2 inline-flex'>
                <div className='text-white text-lg font-semibold'>Franchise Tax</div>
            </div>

            <div className='flex flex-row justify-between items-end py-7'>
                <div className="w-[656px] text-black text-[40px] font-semibold leading-[44px]">{title}</div>         
                <div className="text-zinc-500 text-lg font-semibold leading-normal">Aug 1, 2023 . {readingTime} min read</div>
            </div>

            <Image height={496} width={1104} className="w-auto h-auto rounded-3xl" src={featureImg} alt="header-pic-blog"/>
        </div>
    )
}

export default Header
