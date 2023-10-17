import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='flex flex-col'>
            <div className='w-[151px] h-10 bg-blue-600 rounded-2xl justify-center items-center gap-2 inline-flex'>
                <div className='text-white text-lg font-semibold'>Franchise Tax</div>
            </div>

            <div className='flex flex-row justify-between items-end py-7'>
                <div className="w-[656px] text-black text-[40px] font-semibold leading-[44px]">How A Delaware Registered Agent Can Help Your Business</div>         
                <div className="text-zinc-500 text-lg font-semibold leading-normal">Aug 1, 2023 . 5 min read</div>
            </div>

            <Image height={496} width={1104} className="w-auto h-auto rounded-3xl" src="https://via.placeholder.com/1104x496" alt="header-pic-blog"/>
        </div>
    );
}

export default Header
