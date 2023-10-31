import React from 'react'
import Image from 'next/image'

const Header = ({ tag, title, readingTime, featureImg }) => {
    return (
        <div className='flex flex-col'>
            <div className='py-3'>
                <div className="items-center px-3 py-2 bg-blue-600 rounded-2xl justify-center gap-2 inline-flex">
                    <p className="text-white text-lg font-semibold leading-normal">{tag}</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-end py-7'>
                <h1 className=" text-black text-[40px] font-semibold leading-[44px] pb-5">{title}</h1>         
                <div className="text-zinc-500 text-lg font-semibold leading-normal pb-5">Aug 1, 2023 . {readingTime} min read</div>
            </div>

            <Image height={496} width={1104} className="w-auto h-auto rounded-3xl" src={featureImg} alt="header-pic-blog"/>
        </div>
    )
}

export default Header
