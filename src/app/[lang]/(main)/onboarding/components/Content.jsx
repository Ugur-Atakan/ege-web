/* eslint-disable */
'use client'

import React, { useEffect, useState } from 'react'
import { useTranslation } from '@/i18n/client'
import { submitCookie } from '@/app/lib/session/clientActions'
import { completelyClearLocalStorage, localStorageDataExists, redirectToLastNotNullFunnelLink } from '@/app/lib/utils'
import { removeCookieFromStorageServerAction } from '@/app/lib/session/serverActions'
import { useRouter } from 'next/navigation'

import Cards from './Cards/Cards'
import Comparison from './Comparison/Comparison'
import Footer from './Footer'
import Modal from './Modal'

/**
 * Content component for the page
 * @type {function} Content React component
 * @param {object} lang - Language object from useTranslation hook
 * @type {client}
 * @returns {JSX.Element} Rendered content for the page
*/

const Content = ({ lang, cookie }) => {
    useEffect(() => {
        if (cookie) {
            removeCookieFromStorageServerAction();
        }
    }, []);
    
    
    const { t } = useTranslation(lang);
    const router = useRouter();

    const [showModal, setShowModal] = useState(false);
    const [restartFunnel, setRestartFunnel] = useState(false);
    const [resumeFunnel, setResumeFunnel] = useState(false);
    
    // useEffect(() => {
    //     const checkLocalStorage = localStorageDataExists();
    
    //     if (checkLocalStorage) {
    //         setShowModal(true);
    //     }

    //     if (resumeFunnel) {
    //         const redirectionLink = redirectToLastNotNullFunnelLink();
    //         router.push(`/${lang}/onboarding/${redirectionLink}`);
    //     }

    //     if (restartFunnel) {
    //         setShowModal(false);
    //         completelyClearLocalStorage();
    //     }
    // }, [restartFunnel, resumeFunnel]);


    const sendCookie = async (companyType) => {
        await submitCookie({ 'companyType': companyType });
    };
    
    const handleSelectLlc = async () => {
        await sendCookie('LLC');
        router.push(`/${lang}/onboarding/state`);
    }

    const handleSelectCcorp = async () => {
        await sendCookie('C-Corp');
        router.push(`/${lang}/onboarding/state`);
    }

    return (
        <div className='relative'>
            {showModal && 
                <Modal
                    setRestartFunnel={setRestartFunnel}
                    setResumeFunnel={setResumeFunnel}
                />
            }
            <Cards t={t} lang={lang} handleSelectLlc={handleSelectLlc} handleSelectCcorp={handleSelectCcorp} />

            <div className='bg-white'>
                <div className='mx-auto max-w-5xl p-6 lg:px-8 '>
                    <div className='text-left md:text-center'>
                        <h1 className='text-[#222222] text-[26px] leading-8 md:text-[2.5rem] font-semibold md:leading-[2.75rem]'>{t('company_type_comparing_title')}</h1>
                    </div>

                   <Comparison t={t} handleSelectLlc={handleSelectLlc} handleSelectCcorp={handleSelectCcorp} />
                   <Footer t={t} takeQuizForm={() => router.push(`/${lang}/quiz`)} lang={lang} />
                </div>
            </div>
        </div>
    )
}

export default Content