import React from 'react'
import Image from 'next/image'
import { redirect } from '../../../../lib/utils';

const ArticleCard = ({ article, lang }) => {
    const goToArticle = () => {
        redirect(`/blogv2/${article.slug}`, lang)
    }

    return (
        <div className='flex cursor-pointer flex-col' onClick={goToArticle}>
            <Image width={532} height={300} className="h-[300px] rounded-3xl" src={article.articleImage} alt='article-pic'/>
            
            <div className='py-3'>
                <div className="items-center px-3 py-2 bg-blue-600 rounded-2xl justify-center gap-2 inline-flex">
                    <div className="text-white text-lg font-semibold leading-normal">{article.tag}</div>
                </div>
            </div>

            <div className="text-black text-[28px] font-semibold leading-normal">{article.title}</div>
            <div className="py-2  text-zinc-500 text-lg font-medium text-justify leading-normal">{article.excerpt}</div>

            <div className="mt-auto py-10 justify-start items-center gap-4 inline-flex">
                <Image width={16} height={16} className="w-16 h-16 rounded-full" src={article.author.authorImage} alt='author-avatar' />
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="text-neutral-800 font-semibold leading-normal">{article.author.name}</div>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                        <div className="text-zinc-500 font-semibold leading-normal">Aug 1, 2023</div>
                        <div className="w-[3px] h-[3px] bg-zinc-500 rounded-full" />
                        <div className="text-zinc-500 font-semibold leading-normal">{article.readingTime} min</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard
