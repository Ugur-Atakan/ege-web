import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Posts from './Posts'
import Footer from '@/components/common/Footer';
import { getAuthorPosts } from '../../api/index'

const Page = async ({ params: { lang, slug } }) => {
    const authorPosts = getAuthorPosts(slug)
    const [articles] = await Promise.all([authorPosts]);

    return (
        <div>
            <Navbar lang={lang} />
            <div className='mx-[56px] my-[56px] flex flex-col'>
                {articles && <Posts lang={lang} entry={articles} />}
            </div>
            <Footer lang={lang} />
        </div>
    );
};

export default Page
