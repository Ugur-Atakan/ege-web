import React from 'react'
import BackButton from './components/Backbutton'
import Header from './components/article/Header'
import Body from './components/article/Body/Body'
import Right from './components/article/Body/Right'

import { getArticle } from '../api'

export const metadata = {
    title: 'Registate Blog',
    description: 'Find the latest info about registate and how to register a company in USA.'
}

const Page = async ({ params: { lang, slug } }) => {
    const res = getArticle(slug)
    const promise = await Promise.all([res]);
    const article = promise[0].posts[0];
    const tag = article?.tags[0]?.name || 'All';

    return (
        <div>
            <BackButton lang={lang} />

            <div className='mx-[168px] my-[56px]'>
                <Header 
                    tag={tag}
                    title={article.title}
                    readingTime={article.reading_time}
                    featureImg={article.feature_image}
                />

                <div className='lg:flex mt-[56px]'>
                    <Body html={article.html} />
                    <Right author={article.primary_author} />
                </div>
            </div>
        </div>
    );
}

export default Page
