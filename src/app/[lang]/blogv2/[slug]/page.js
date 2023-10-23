import React from 'react'
import Navbar from '../components/Navbar'
import BackButton from './components/Backbutton'
import Header from './components/article/Header'
import Body from './components/article/Body/Body'
import Right from './components/article/Body/Right'


import axios from 'axios'

const getArticle = async (slug) => {
    try {
        const res = await axios.get(`https://blog.registate.com/ghost/api/content/posts?key=${process.env.BLOG_API_KEY}&include=authors,tags&filter=slug: ${slug}`)
        const article = res.data // res.json() for fetch
        return article
    }
    catch {
        console.log('Error getting getArticle')
    }
}

const Page = async ({ params: { lang, slug } }) => {
    const res = getArticle(slug)
    const promise = await Promise.all([res]);
    const article = promise[0].posts[0];

    return (
        <div>
            <Navbar lang={lang} />
            <BackButton lang={lang} />

            <div className='mx-[168px] my-[56px]'>
                <Header 
                    title={article.title}
                    readingTime={article.reading_time}
                    featureImg={article.feature_image}
                />

                <div className='flex mt-[56px]'>
                    <div className='flex-2/3'>
                        <Body excerpt={article.excerpt} html={article.html} />
                    </div>
                    <div className='flex-1/3'>
                        <Right />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
