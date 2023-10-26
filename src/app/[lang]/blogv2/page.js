import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import Body from './Body'

import axios from 'axios'

const getArticles = async () => {  
    try {
      const res = await axios.get(`https://blog.registate.com/ghost/api/content/posts?key=${process.env.BLOG_API_KEY}&include=authors,tags`);
      return res.data;
    }
    catch {
      console.log('Error getting getPosts')
    }
}

const getTags = async () => {
    try {
        const response = await axios.get(`https://blog.registate.com/ghost/api/content/tags?key=${process.env.BLOG_API_KEY}`)
        const data = response.data;
        const tags = data.tags;
        const names = tags.map(tag => tag.name);
        names.push('All');
        names.sort((a, b) => a.localeCompare(b)); 
        return names;
    }
    catch {
        console.log('Error getting getTags')
    }
}

const Page = async ({ params: { lang } }) => {
    const articlesData = getArticles();
    const [articles] = await Promise.all([articlesData]);

    const tagsData = getTags();
    const [tags] = await Promise.all([tagsData]);

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
                    />
                }
            </div>
        </div>
    );
}

export default Page
