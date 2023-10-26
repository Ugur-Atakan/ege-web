import React from 'react'
import Image from 'next/image'
import searchIcon from '../../../../images/search.svg'

const SearchBar = () => {
    return (
        <div className='w-[882px] relative'>
            <input 
                className='w-[882px] h-16 px-6 py-4 bg-white rounded-[20px] border border-stone-300 justify-start items-center gap-2'
                type='text'
                placeholder="Search our blog"  
            />
             <div className="absolute right-0 top-0 bottom-0 flex items-center pr-3">
                <Image src={searchIcon} alt='search-icon' />
            </div>
        </div>
    );
}

export default SearchBar
