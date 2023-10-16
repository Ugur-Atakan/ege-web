import React from 'react'
import Image from 'next/image'

const MainArticle = () => {
    return (
        <div className='flex py-16'>
            <div className='flex-1'>
                <Image width={656} height={480} className="w-[656px] h-[480px] rounded-[32px]" src="https://via.placeholder.com/656x480" alt='main-blog'/>
            </div>
            <div className='flex-1'>
                <div className='flex flex-col h-full'>
                    <div className='w-[151px] h-10 bg-blue-600 rounded-2xl justify-center items-center gap-2 inline-flex'>
                        <div className='text-white text-lg font-semibold'>Franchise Tax</div>
                    </div>

                    <div className='my-4 w-[656px] text-black text-[40px] font-semibold leading-[44px]'>Understanding Delaware Franchise Tax</div>
                    <div className='w-[519px] text-zinc-500 text-lg font-semibold leading-normal'>What to Do When You Receive a Hundred Thousand Franchise Tax Notice from the State: Understanding Delaware Franchise Tax: What it is, How it{"'"}s Calculated</div>

                    <div className='mt-auto w-[295px] h-16 justify-start items-center gap-4 inline-flex'>
                        <Image width={16} height={16} className="w-16 h-16 rounded-full" src="https://via.placeholder.com/64x64" alt="auth-avatar" />
                        <div className='flex-col justify-start items-start gap-1.5 inline-flex'>
                            <div className='text-neutral-800  font-semibold leading-normal'>Said Emir Bodakçi</div>
                            <div className='justify-start items-center gap-2.5 inline-flex'>
                                <div className='text-zinc-500 text-lg font-semibold leading-normal'>Aug 1, 2023</div>
                                <div className='w-[3px] h-[3px] bg-zinc-500 rounded-full' />
                                    <div className='text-zinc-500 font-semibold leading-normal'>5 min read</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainArticle
