import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ index, img, name, href }) => {
    return (
        <div key={index} className="flex flex-col justify-between bg-[#1649FF] p-8 shadow-lg rounded-[32px] h-[35rem]">
            <div className="font-semibold text-[24px] leading-[38px] lg:leading-[38px] text-white">
                {name}
            </div>
            <div className="flex items-center justify-center pb-4">
                <Image src={img} className='h-56 w-64' alt='' />
            </div>
            <div className="rounded-2xl py-4 bg-[#ECEFF1]">
                <Link href={href} className="flex justify-center py-1 text-[19px] leading-[26px] font-semibold text-black">Open PDF</Link>
            </div>
        </div>
    );
}

export default Card
