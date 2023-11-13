
import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { useTranslation } from '@/i18n/server'

/**
 * Page route for the company type page
 * @type {function}
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} Rendered content for the page
*/

const Page = async ({ params: { lang } }) => {
  const { t } = await useTranslation(lang)

  return (
    <React.Fragment>
        <Header heading={t('company_type_leftcorner_button')} lang={lang} />
        <Content lang={lang} />
    </React.Fragment>
  )
}

export default Page