import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import Body from '../components/Body'
import Footer from '@/components/common/Footer'
import PDFSlider from '../components/PDFSlider/PDFSlider'

import { getTags, getAuthors, getByTag, getAlikeArticles } from '../api/index'

const Page = async ({ params, searchParams }) => {
    const { lang } = params;
    const key = Object.keys(searchParams)[0];
    let value = searchParams[key];
    value = `'${value}'`; // to avoid white space problem in API 
   
    let articlesData = null;
    if (key === 'search') {
        articlesData = getAlikeArticles(value);
    }
    else if (key === 'tag') {
        articlesData = getByTag(value);
    }

    const [articles] = await Promise.all([articlesData]);
    const tagsData = getTags();
    const [tags] = await Promise.all([tagsData]);

    const authorsData = getAuthors();
    const [authors] = await Promise.all([authorsData]);


    return (
        <div>
            <Navbar lang={lang} />
            <div className='mx-[56px] my-[56px] flex flex-col'>
                <Hero />
                <SearchBar lang={lang} />
                {articles &&
                    <Body
                        articleJSON={articles}
                        lang={lang}
                        tags={tags}
                        authors={authors}
                    />
                }
                <PDFSlider lang={lang} />
                <Footer lang={lang} />
            </div>
        </div>
    )
}

export default Page