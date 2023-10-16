import React, { useState } from 'react';

const Hero = ({ selectedTag, setSelectedTag }) => {
    const [activeButton, setActiveButton] = useState('All');

    const tags = [
        'All',
        'Franchise Tax',
        'Business Tips',
        'Registered Agent',
        'LLC',
        'Incorporations'
    ]

    const handleTagClick = (tag) => {
        if (selectedTag === tag) {
            setSelectedTag(null)
            setActiveButton('All');
        } else {
            setSelectedTag(tag)
            setActiveButton(tag);
        }
    }

    return (
        <div>
            <div className="w-[432px] h-40 flex-col justify-center items-start gap-6 inline-flex">
                <div className="text-black text-[64px] font-bold font-['Inter'] leading-[64px]">Blog</div>
                <div className="self-stretch text-neutral-800 text-lg font-semibold  leading-normal">Read the latest posts from our blog. All articles are written by our team of experts, so you know you{"'"}re getting the best advice.</div>
            </div>

            <div className="flex items-center space-x-2.5 py-10">
                {tags.map(tag => (
                    <div 
                        key={tag} 
                        className={`px-3 cursor-pointer py-1 border border-black rounded-lg ${activeButton === tag ? 'bg-blue-600' : ''}`}
                        onClick={() => handleTagClick(tag)}
                    >
                        <div className={` text-lg font-semibold leading-normal ${activeButton === tag ? 'text-white' : 'text-neutral-800'}`}>{tag}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hero
