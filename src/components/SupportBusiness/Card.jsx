import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ index, pack }) => {
    return (
        <div key={index} className="flex flex-col hover:scale-105 support-card flex-shrink-0 w-[385px]  h-[35rem] space-y-4 p-8 shadow-lg bg-white rounded-[32px]">
                <Image src={pack.img} className='h-56 w-64' alt='card-pic' />
                <div className="font-semibold text-[32px] leading-[38px] lg:leading-[44px] text-[#222222]">
                    {pack.name}
                </div>
                <div className="text-justify">
                    {pack.description}
                </div>
                
                <div className='fixed bottom-10'>
                    <Link href={pack.href} className="text-[19px] leading-[26px] font-semibold text-[#1649FF]">{pack.button}</Link>
                </div>
        </div>
    );
};

export default Card
