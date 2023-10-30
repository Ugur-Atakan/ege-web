'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import searchIcon from '@/assets/images/search.svg'
import { redirect } from '../../../lib/utils'

const SearchBar = ({ lang }) => {
    const [search, setSearch] = useState('')

    const handleClick = () => {
        redirect(`/blogv2/search?search=${search}`, lang)
    }

    return (
        <div className='w-[450px] lg:w-[882px] relative my-10'>
            <input 
                className='w-[450px] lg:w-[882px] h-16 px-6 py-4 bg-white rounded-[20px] border border-stone-300 justify-start items-center gap-2'
                type='text'
                placeholder="Search our blog"  
                onChange={(e) => setSearch(e.target.value)}
                onSubmit={handleClick}
            />
            <button onClick={handleClick} className="cursor-pointer absolute right-0 top-0 bottom-0 flex items-center pr-3">
                <Image src={searchIcon} alt='search-icon' />
            </button>
        </div>
    );
}

export default SearchBar
