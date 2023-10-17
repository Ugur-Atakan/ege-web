import React from 'react'
import Image from 'next/image'

const MainArticle = ({ article }) => {
    return (
        <div className='flex py-16'>
            <div className='flex-1'>
                <Image width={656} height={480} className="rounded-[32px]" src={article.articleImage} alt='main-blog'/>
            </div>

            <div className='flex-1'>
                <div className='flex flex-col h-full'>
                    <div className="items-center px-3 py-2 max-w-[200px] bg-blue-600 rounded-2xl justify-center gap-2 inline-flex">
                        <div className="text-white text-lg font-semibold leading-normal">{article.tag}</div>
                    </div>

                    <div className='my-4 w-[656px] text-black text-[40px] font-semibold leading-[44px]'>{article.title}</div>
                    <div className='w-[519px] text-zinc-500 text-lg font-semibold leading-normal'>{article.excerpt}</div>

                    <div className='mt-auto w-[295px] h-16 justify-start items-center gap-4 inline-flex'>
                        <Image width={16} height={16} className="w-16 h-16 rounded-full" src={article.author.authorImage} alt="auth-avatar" />
                        <div className='flex-col justify-start items-start gap-1.5 inline-flex'>
                            <div className='text-neutral-800  font-semibold leading-normal'>{article.author.name}</div>
                            <div className='justify-start items-center gap-2.5 inline-flex'>
                                <div className='text-zinc-500 text-lg font-semibold leading-normal'>Aug 1, 2023</div>
                                <div className='w-[3px] h-[3px] bg-zinc-500 rounded-full' />
                                    <div className='text-zinc-500 font-semibold leading-normal'>{article.readingTime}</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainArticle
