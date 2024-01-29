import React from 'react';
import Content from './components/Content';

const Page = ({ params: { lang }}) => {
    return (
        <div>
            <Content lang={lang} />
        </div>
    );
};

export default Page;
