import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="w-[432px] h-40 flex-col justify-center items-start gap-6 inline-flex">
                <div className="text-black text-[64px] font-bold font-['Inter'] leading-[64px]">Blog</div>
                <div className="self-stretch text-neutral-800 text-lg font-semibold  leading-normal">Read the latest posts from our blog. All articles are written by our team of experts, so you know you{"'"}re getting the best advice.</div>
            </div>

            <div className="flex items-center justify-center space-x-2.5 py-10">
                <div className="px-3 py-1 bg-blue-600 rounded-lg">
                    <div className="text-white text-lg font-semibold leading-normal">All</div>
                </div>
                <div className="px-3 py-1 rounded-lg border border-black">
                    <div className="text-neutral-800 text-lg font-semibold leading-normal">Franchise Tax</div>
                </div>
                <div className="px-3 py-1 rounded-lg border border-black">
                    <div className="text-neutral-800 text-lg font-semibold leading-normal">Business Tips</div>
                </div>
                <div className="px-3 py-1 rounded-lg border border-black">
                    <div className="text-neutral-800 text-lg font-semibold leading-normal">Registered Agent</div>
                </div>
                <div className="px-3 py-1 rounded-lg border border-black">
                    <div className="text-neutral-800 text-lg font-semibold leading-normal">LLC</div>
                </div>
                <div className="px-3 py-1 rounded-lg border border-black">
                    <div className="text-neutral-800 text-lg font-semibold leading-normal">Incorporations</div>
                </div>
            </div>
        </div>
    )
}

export default Hero
