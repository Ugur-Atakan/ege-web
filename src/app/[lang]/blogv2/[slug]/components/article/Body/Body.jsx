import React from 'react'
import parse from 'html-react-parser'

const Body = ({ excerpt, html }) => {
    return (
        <div className='mr-10'>
            <div className="pb-4 leading-7 text-justify text-black text-lg font-medium">
                {excerpt}
            </div>

            <div className="text-justify text-black text-lg font-medium leading-7">
                {parse(html)}
            </div>

        </div>
    );
};

export default Body;
