'use client'

import React, { useState } from 'react'
import MainArticle from './components/articles/MainArticle'
import CardGrid from './components/articles/CardGrid'
import Pagination from './components/Pagination'

const Articles = ({ articles, lang }) => {
    const [count, setCount] = useState(1)

    return (
        <div>
            <MainArticle article={articles[0]} />
            <CardGrid articles={articles} lang={lang} />
            {/* <Pagination
                currentPage={count}
                setCurrentPage={setCount}
                totalPages={100}
                lang={lang}
            /> */}
        </div>
    );
};

export default Articles;
