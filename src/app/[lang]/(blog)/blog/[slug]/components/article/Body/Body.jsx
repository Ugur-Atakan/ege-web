import React from 'react'
import parse from 'html-react-parser'

const Body = ({ html }) => {
    return (
        <div className='mr-10 mb-10'>
            <articles className="prose prose-img:rounded-2xl text-justify text-black text-lg font-medium leading-7"> 
                {parse(html)}
            </articles>
        </div>
    );
};

export default Body;
