'use client'

import React from 'react'
import Form from './Form'
import Navbar from '../../components/Navbar/Navbar'
import { useTranslation } from '@/i18n/client';

const Content = ({ lang }) => {
    const { t } = useTranslation(lang);

    return (
        <div className='bg-gray-100 px-20 py-20'>
           <Navbar t={t} lang={lang} />
           <h2 className='text-2xl font-bold text-gray-800'>Appoint us as your Registered Agent</h2>
           <Form />
        </div>
    );
};

export default Content;
