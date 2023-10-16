import React from 'react'
import Image from 'next/image'

const Article = () => {
    return (
        <div className='flex flex-col'>
            <Image width={432} height={280} className="w-[432px] h-[280px] rounded-3xl" src="https://via.placeholder.com/432x280" alt='article-pic'/>
            
            <div className='py-3'>
                <div className="w-[151px] py-2 bg-blue-600 rounded-2xl justify-center items-center gap-2 inline-flex">
                    <div className="text-white text-lg font-semibold leading-normal">Bussines Tips</div>
                </div>
            </div>

            <div className="w-[432px] text-black text-[28px] font-semibold leading-normal">5 best countries to form a company</div>
            <div className="w-[432px] py-2 text-zinc-500 text-lg font-semibold leading-normal">Discover the top 5 countries to form a company and their advantages. From the flexible Delaware to business-friendly Singapore, choose the best place for your new venture with expert legal and financial guidance.</div>

            <div className="mt-auto w-[295px] py-10 justify-start items-center gap-4 inline-flex">
                <Image width={16} height={16} className="w-16 h-16 rounded-full" src="https://via.placeholder.com/64x64" alt='author-avatar' />
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="text-neutral-800 font-semibold leading-normal">Said Emir Bodakçi</div>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                    <div className="text-zinc-500 font-semibold leading-normal">Aug 1, 2023</div>
                    <div className="w-[3px] h-[3px] bg-zinc-500 rounded-full" />
                    <div className="text-zinc-500 font-semibold leading-normal">5 min read</div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Article
