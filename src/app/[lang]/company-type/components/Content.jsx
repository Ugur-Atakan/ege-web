'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from '../../../i18n/client'
import { submitCookieToStorageServerAction } from '../../../lib/session/serverActions'
import { redirect } from '../../../lib/util'

import Header from './Header'
import Cards from './Cards/Cards'
import Comparison from './Comparison/Comparison'
import Footer from './Footer'

/**
 * Content component for the page
 * @type {function} Content React component
 * @param {object} lang - Language object from useTranslation hook
 * @type {client}
 * @returns {JSX.Element} Rendered content for the page
*/

const Content = ({ lang }) => {
    const { t } = useTranslation(lang);
    const [companyType, setCompanyType] = useState('');

    useEffect(() => {
        window.localStorage.setItem('companyType', companyType);
    }, [companyType])

    const handleSelectLlc = () => {
        setCompanyType('LLC');
        redirect('/state', lang);
    }

    const handleSelectCcorp = () => {
        setCompanyType('Corporation');
        redirect('/state', lang);
    }

    const takeQuizForm = () => { redirect(`/${lang}/quiz`) }

    return (
        <div className='relative'>
            <Header t={t} lang={lang} />
            <Cards t={t} lang={lang} handleSelectLlc={handleSelectLlc} handleSelectCcorp={handleSelectCcorp} />

            <div className='bg-white'>
                <div className='mx-auto max-w-5xl p-6 lg:px-8 '>
                    <div className='text-left md:text-center'>
                        <h1 className='text-[#222222] text-[26px] leading-8 md:text-[2.5rem] font-semibold md:leading-[2.75rem]'>{t('company_type_comparing_title')}</h1>
                    </div>

                   <Comparison t={t} handleSelectCcorp={handleSelectCcorp} handleSelectLlc={handleSelectLlc}/>
                   <Footer t={t} takeQuizForm={takeQuizForm} lang={lang} />
                </div>
            </div>
        </div>
    )
}

export default Content