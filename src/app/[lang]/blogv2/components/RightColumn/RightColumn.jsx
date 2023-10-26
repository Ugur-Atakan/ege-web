'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Popular from './Popular'
import Authors from './Authors'
import AttorneyCard from '../articles/AttorneyCard'
import { redirect } from '../../../../lib/utils'

import { useSearchParams } from 'next/navigation'

const RightColumn = ({ selectedTag, setSelectedTag, lang, tags }) => {
    const searchParams = useSearchParams();
    const [activeButton, setActiveButton] = useState(searchParams.get('tag'));

    const authors = [
        {
            id: 1,
            name: 'John Doe',
            bio: 'Expert',
            avatar: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
        },
        {
            id: 2,
            name: 'Jane Doe',
            bio: 'Expert',
            avatar: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
        },
        {
            id: 3,
            name: 'John Doe',
            bio: 'Expert',
            avatar: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
        }
    ]   

    const handleTagClick = (tag) => {
        if (selectedTag === tag) {
            setSelectedTag(null)
            setActiveButton('All');
        } else {
            setSelectedTag(tag)
            setActiveButton(tag);
            redirect(`/blogv2/search?tag=${tag}`, lang);
        }
    }

    return (
        <div className='mx-10'>
            <div className='my-10'>
                <h1 className="text-2xl font-semibold leading-normal mb-5">Tags</h1>
                <div className="flex flex-wrap">
                    {tags && tags.map(tag => (
                        <div 
                            key={tag} 
                            className={`mr-2 my-2 px-3 cursor-pointer py-1 border border-black rounded-lg ${activeButton === tag ? 'bg-blue-600' : ''}`}
                            onClick={() => handleTagClick(tag)}
                        >
                            <div className={` text-lg font-semibold leading-normal ${activeButton === tag ? 'text-white' : 'text-neutral-800'}`}>{tag}</div>
                        </div>
                    ))}
                </div>
            </div>

            <Popular />
            <Authors authors={authors} />
            <AttorneyCard />
        </div>
    );
}

export default RightColumn
