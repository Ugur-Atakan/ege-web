import React from 'react'
import Image from 'next/image'

const Right = ({ author }) => {
    return (
        <div className='flex flex-col'>
            <div className="items-center gap-4 inline-flex">
                <Image width={16} height={16} className="w-16 h-16 rounded-full" src={author.profile_image || 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg' } alt="image-icon"/>
                <div className="flex-col justify-start items-start">
                    <div className="text-neutral-800 text-lg font-semibold leading-normal">{author.name}</div>
                    <div className="text-zinc-500 text-lg font-semibold leading-normal">{author.meta_description}</div>
                </div>
            </div>

            <div className="flex-col justify-start items-start mt-4 gap-5 inline-flex">
                <div className="self-stretch text-neutral-800 text-[28px] font-semibold font-['Inter'] leading-loose">Share</div>
                <div className="justify-start items-start gap-3 inline-flex">
                    <div className="w-14 h-14 relative bg-gray-100 rounded-[44px]">
                    <div className="h-[26px] left-[16px] top-[13px] absolute">
                    </div>
                    </div>
                    <div className="w-14 h-14 relative bg-gray-100 rounded-[44px]" />
                    <div className="w-14 h-14 relative bg-gray-100 rounded-[44px]" />
                    <div className="w-14 h-14 relative bg-gray-100 rounded-[44px]" />
                </div>
            </div>
        </div>
    );
};

export default Right
