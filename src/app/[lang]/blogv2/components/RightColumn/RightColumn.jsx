'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Popular from './Popular'
import Authors from './Authors'
import AttorneyCard from '../articles/AttorneyCard'
import Tags from '../common/Tags'

import { redirect } from '../../../../lib/utils'

import { useSearchParams } from 'next/navigation'

const RightColumn = ({ selectedTag, setSelectedTag, lang, tags, authors }) => {
    const searchParams = useSearchParams();
    const [activeButton, setActiveButton] = useState(searchParams.get('tag') || 'All');

    const handleTagClick = (tag) => {
        if (tag === 'All') {
            setSelectedTag(tag);
            setActiveButton(tag);
            redirect(`/blogv2`, lang);
        }

        if (selectedTag != tag) {
            setSelectedTag(tag);
            setActiveButton(tag);
            redirect(`/blogv2/search?tag=${tag}`, lang);
        }
    }

    return (
        <div className='mx-10'>
            <Tags tags={tags} handleTagClick={handleTagClick} activeButton={activeButton} />
            
            <Popular />
            <Authors authors={authors} lang={lang} />
            <AttorneyCard />
        </div>
    );
}

export default RightColumn
