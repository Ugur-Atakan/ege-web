import React from 'react'

import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import Body from './components/Body'

import { getArticles, getTags, getAuthors, getArticlesTR } from './api/index'

const Page = async ({ params: { lang } }) => {
    console.log(lang)
    let articlesData = null;

    if (lang === 'en') {
        articlesData = getArticles();
    }
    else if (lang == 'tr') {
        articlesData = getArticlesTR();
    }

    const [articles] = await Promise.all([articlesData]);

    const tagsData = getTags();
    const [tags] = await Promise.all([tagsData]);

    const authorsData = getAuthors();
    const [authors] = await Promise.all([authorsData]);

    return (
        <div className='mx-[56px] my-[56px] flex flex-col'>
            <Hero lang={lang} />
            <SearchBar lang={lang} />
            {articles && 
                <Body
                    articleJSON={articles}
                    tags={tags}
                    lang={lang}
                    authors={authors}
                />
            }
        </div>
    );
}

export default Page
