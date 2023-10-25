'use client'

import React, { useState } from 'react'
import MainArticle from './components/articles/MainArticle'
import CardGrid from './components/articles/CardGrid'
import Pagination from './components/Pagination'

import Hero from './components/Hero'
import { createArticleClasses } from './classes/Article'
import RightColumn from './components/RightColumn/RightColumn'

const Body = ({ articleJSON, lang }) => {
    const [count, setCount] = useState(1)
    const [selectedTag, setSelectedTag] = useState('All')
    const articles = createArticleClasses(articleJSON) // create article class instances

    return (
        <div>
            <Hero />

            <div className='grid grid-cols-3'>
                <div className='col-span-2'>     
                    <MainArticle article={articles[0]} />
                    <CardGrid articles={articles} lang={lang} />
                </div>
                <div className='col-span-1'>
                    <RightColumn selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
                </div>
            </div>

            {/* <Pagination
                currentPage={count}
                setCurrentPage={setCount}
                totalPages={100}
                lang={lang}
            /> */}
        </div>
    );
};

export default Body
