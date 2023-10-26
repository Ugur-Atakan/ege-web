import React from 'react'

const Hero = () => {
    return (
        <div className='space-y-8'>
            <div className="w-[432px] h-40 flex-col justify-center items-start gap-6 inline-flex">
                <div className="text-black text-[64px] font-bold leading-[64px]">Blog</div>
                <div className="self-stretch text-neutral-800 text-lg font-semibold  leading-normal">Read the latest posts from our blog. All articles are written by our team of experts, so you know you{"'"}re getting the best advice.</div>
            </div>
        </div>
    )
}

export default Hero
