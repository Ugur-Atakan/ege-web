'use client'

import React, { useState } from 'react'
import MainArticle from './components/articles/MainArticle'
import CardGrid from './components/articles/CardGrid'
import Pagination from './components/Pagination'

const Articles = ({ lang }) => {
    const [count, setCount] = useState(1)

    return (
        <div>
            <MainArticle />
            <CardGrid />
            <Pagination
                currentPage={count}
                setCurrentPage={setCount}
                totalPages={100}
                lang={lang}
            />
        </div>
    );
};

export default Articles;
