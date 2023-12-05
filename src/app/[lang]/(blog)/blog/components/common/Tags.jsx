import React from 'react'

const Tags = ({ tags , handleTagClick, activeButton }) => {
    return (
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
    );
};

export default Tags
