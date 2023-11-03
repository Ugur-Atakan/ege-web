import React from 'react'
import Posts from './Posts'
import { getAuthorPosts } from '../../api/index'

const Page = async ({ params: { lang, slug } }) => {
    const authorPosts = getAuthorPosts(slug)
    const [articles] = await Promise.all([authorPosts]);

    return (
        <div className='mx-[56px] my-[56px] flex flex-col'>
            {articles && <Posts lang={lang} entry={articles} />}
        </div>
    );
};

export default Page
