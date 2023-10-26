import React from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import Body from '../Body'

const getAlikeArticles = async (query) => {  
    try {
      const res = await axios.get(`https://blog.registate.com/ghost/api/content/posts?key=1090eec3cc0b57e0b77963a66b&include=authors,tags&filter=title:~${query}`);
      return res.data;
    }
    catch(err) {
      console.log('Error getting getPosts: ', err)
    }
}

const getByTag = async (tag) => {  
    try {
      tag = tag.toLowerCase().replace(/\s/g, '-');
      const res = await axios.get(`https://blog.registate.com/ghost/api/content/posts?key=${process.env.BLOG_API_KEY}&include=authors,tags&filter=tag:${tag}`);
      return res.data;
    }
    catch(err) {
      console.log('Error getting getPosts: ', err)
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
                    />
                }
            </div>
        </div>
    )
}

export default Page