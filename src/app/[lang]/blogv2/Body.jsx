'use client'

import React, { useState, Suspense } from 'react'
import MainArticle from './components/articles/MainArticle'
import CardGrid from './components/articles/CardGrid'
import Pagination from './components/Pagination'
import { createArticleClasses } from './classes/Article'
import RightColumn from './components/RightColumn/RightColumn'

const Body = ({ articleJSON, lang, tags, authors }) => {
    const [count, setCount] = useState(1)
    const [selectedTag, setSelectedTag] = useState('All')
    const articles = createArticleClasses(articleJSON)

    return (
        <div>
            <div className='grid lg:grid-cols-3'>
                <div className='lg:col-span-2 sm:col-span-1'>     
                    <MainArticle article={articles[0]} />
                    <CardGrid articles={articles} lang={lang} />
                </div>
                <div className='lg:col-span-1'>
                    <Suspense fallback={<></>}>
                        <RightColumn
                            tags={tags}
                            selectedTag={selectedTag}
                            setSelectedTag={setSelectedTag}
                            lang={lang}
                            authors={authors}
                        />
                    </Suspense>
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
