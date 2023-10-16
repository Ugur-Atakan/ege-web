'use client'

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Articles from './Articles'

const Page = ({ params: { lang } }) => {
    // Call articles API here.
    const [selectedTag, setSelectedTag] = React.useState('All')

    return (
        <div>
            <Navbar lang={lang} />
            <div className='mx-[56px] my-[56px] flex flex-col'>
                <Hero selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
                <Articles lang={lang} />
            </div>
        </div>
    );
}

export default Page;
