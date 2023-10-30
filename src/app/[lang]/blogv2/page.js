import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import Body from './components/Body'
import Footer from '@/components/common/Footer'
import { getArticles, getTags, getAuthors } from './api/index'

const Page = async ({ params: { lang } }) => {
    const articlesData = getArticles();
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
                        tags={tags}
                        lang={lang}
                        authors={authors}
                    />
                }
                <Footer lang={lang} />
            </div>
        </div>
    );
}

export default Page
