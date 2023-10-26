
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Body from './Body'
import { ArticleClass } from './classes/Article' 

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

const Page = async ({ params: { lang } }) => {
    const articlesData = getArticles();
    const [articles] = await Promise.all([articlesData]);

    return (
        <div>
            <Navbar lang={lang} />
            <div className='mx-[56px] my-[56px] flex flex-col'>
                {articles && <Body articleJSON={articles} lang={lang} />}``
            </div>
        </div>
    );
}

export default Page
