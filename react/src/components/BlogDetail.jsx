import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import {Navbar} from './Navbar';

export default function BlogDetail() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const apiKey = "ee68e8bb6af2d0038b4d1daa49";
        const apiUrl = `https://blog.opsbeacon.com/ghost/api/content/posts/slug/${slug}`;

        axios.get(apiUrl, {
            params: {
                key: apiKey
            }
        })
        .then(response => {
            setPost(response.data.posts[0]);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [slug]);

    return (
     <>
     <Navbar/>
     <div>
            {post && (
                <div className='relative mx-auto max-w-4xl py-12'>
                     <img src={post.feature_image} alt="" className='w-full shadow-xl rounded-xl h-128 object-cover' />
                    <h1 className='py-6 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>{post.title}</h1>
                    <div className='text-lg text-gray-500 py-2' dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            )}
        </div>
     <Footer/>
     </>
    );
}
