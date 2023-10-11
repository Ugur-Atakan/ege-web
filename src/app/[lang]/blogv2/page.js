import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const Page = ({ params: { lang } }) => {
    return (
        <div>
            <Navbar lang={lang} />
            <div className='mx-[56px] my-[56px] flex'>
                <Hero />
            </div>
        </div>
    );
}

export default Page;
