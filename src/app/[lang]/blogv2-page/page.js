import React from 'react'
import Navbar from '../blogv2/components/Navbar'
import BackButton from './components/Backbutton'
import Header from './components/article/Header'
import Body from './components/article/Body/Body'
import Right from './components/article/Body/Right'

const Page = ({ params: { lang } }) => {

    return (
        <div>
            <Navbar lang={lang} />
            <BackButton lang={lang} />

            <div className='mx-[168px] my-[56px]'>
                <Header />
                <div className='flex mt-[56px]'>
                    <div className='flex-2/3'>
                        <Body />
                    </div>
                    <div className='flex-1/3'>
                        <Right />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
