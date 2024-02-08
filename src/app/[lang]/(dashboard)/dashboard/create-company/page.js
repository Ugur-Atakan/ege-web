import React from 'react';
import Content from './components/Content'

const Page = ({ params: { slug }}) => {
    
    return (
        <div>
            <Content />
        </div>
    );
};

export default Page;
