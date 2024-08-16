import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ index, pack }) => {
    return (
        <div key={index} className="flex flex-col flex-shrink-0 hover:scale-105 w-[275px] h-[26rem] sm:w-[275px] sm:h-[26rem] md:w-[300px] md:h-[30rem] lg:w-[385px] lg:h-[35rem] space-y-4 p-8 shadow-lg bg-white rounded-[32px]">
            <Image src={pack.img} className='lg:h-56 lg:w-64 md:h-48 md:w-52' alt='card-pic' />
            <h2 className="font-semibold lg:text-[32px] md:text-[24px] leading-[38px] lg:leading-[44px] text-[#222222]">
                {pack.name}
            </h2>
            <div className="text-justify md:text-[14px] sm:hidden lg:text-[16px] md:flex lg:flex hidden">
                {pack.description}
            </div>
            
            <div className='fixed bottom-10'>
                <Link href={pack.href} className="md:text-[14px] lg:text-[19px] font-semibold text-[#1649FF] whitespace-nowrap">
                    {pack.button}
                </Link>
            </div>
        </div>
    );
};

export default Card;
