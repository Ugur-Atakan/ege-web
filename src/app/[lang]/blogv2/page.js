'use client'

import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Articles from './Articles'
import { ArticleClass } from './classes/Article' 

const Page = ({ params: { lang } }) => {
    const [selectedTag, setSelectedTag] = useState('All')
    const [articles, setArticles] = useState(null)

    useEffect(() => {
        const getArticles = async () => {
            const res = await fetch('/api/blog/get-all')
            const articles = await res.json()

            // create article class instances
            const articlesClass = articles.posts.map(article => {
                return new ArticleClass(
                    article.title, 
                    article.feature_image, 
                    article.primary_tag.name, 
                    article.primary_author.name, 
                    article.primary_author.profile_image, 
                    article.reading_time, 
                    article.published_at, 
                    article.slug, 
                    article.html, 
                    article.excerpt
                )
            })
            
            setArticles(articlesClass)
        }
        getArticles()
    }, [])

    return (
        <div>
            <Navbar lang={lang} />
            <div className='mx-[56px] my-[56px] flex flex-col'>
                <Hero selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
                {articles && <Articles articles={articles} lang={lang} />}
            </div>
        </div>
    );
}

export default Page;
