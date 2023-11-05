'use client'

import React, { useState } from 'react'
import Popular from './Popular'
import Authors from './Authors'
import AttorneyCard from '../articles/AttorneyCard'
import Tags from '../common/Tags'

import { redirect } from '../../../../lib/utils'

import { useSearchParams } from 'next/navigation'

const RightColumn = ({ selectedTag, setSelectedTag, lang, tags, authors, popular }) => {
    const searchParams = useSearchParams();
    const [activeButton, setActiveButton] = useState(searchParams.get('tag') || 'All');

    const handleTagClick = (tag) => {
        if (tag === 'All') {
            setSelectedTag(tag);
            setActiveButton(tag);
            redirect(`/blog`, lang);
        }

        if (selectedTag != tag) {
            setSelectedTag(tag);
            setActiveButton(tag);
            redirect(`/blog/search?tag=${tag}`, lang);
        }
    }

    return (
        <div className='mx-10'>
            <Tags tags={tags} handleTagClick={handleTagClick} activeButton={activeButton} />
            <Popular popular={popular} lang={lang} />
            <Authors authors={authors} lang={lang} />
            <AttorneyCard />
        </div>
    );
}

export default RightColumn
