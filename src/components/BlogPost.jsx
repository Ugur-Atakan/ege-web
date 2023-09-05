import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function BlogPost() {
    const [entry, setEntry] = useState(null);
    const { i18n } = useTranslation();

    useEffect(() => {
        const apiKey = "ee68e8bb6af2d0038b4d1daa49";
        const apiUrl = "https://blog.opsbeacon.com/ghost/api/content/posts";

        axios.get(apiUrl, {
            params: {
                key: apiKey
            }
        })
            .then(response => {
                setEntry(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="bg-white py-24 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-[#222222] sm:text-6xl">From the blog</h2>
                    <p className="mt-4 text-xl leading-8 text-[#222222]">
                        Read the latest posts from our blog. All articles are written by our team of experts, so you know you're getting the best advice.
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                    {entry?.posts.map((post) => (
                        <Link to={`/${i18n.language}/blog/${post.slug}`} key={post.id} className="flex flex-col items-start justify-between shadow-lg">
                           <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
                                <div className='flex-shrink-0'>
                                <img
                                    src={post.feature_image}
                                    alt=""
                                    className="aspect-[16/9] w-full rounded-tl-[20px] rounded-tr-[20px] bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                </div>
                                <div className='flex flex-1 flex-col justify-between bg-white p-6'>
                                    <div className='flex-1'>
                                    <h1 className='text-xl font-semibold text-[#222222]'>{post.title}</h1>
                                    <p className='mt-3 text-base text-[#222222]'> {post.excerpt.slice(0,120  )}...</p>
                                    </div>
                                    <div className='mt-6 flex items-center'>
                                    <div className='flex-shrink-0 bg-gray-100 rounded-[20px] text-xs px-2 py-1 text-[#222222] font-bold'>
                                    {post.created_at.slice(0,10)}
                                    </div>
                                    </div>
                                </div>
                           </div>
                        </Link>
                    ))}
            </div>
        </div>
        </div >
    );
}