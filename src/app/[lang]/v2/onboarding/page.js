
import React from 'react'
import BackButton from './components/common/BackButton'
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
        <BackButton buttonText={t('company_type_leftcorner_button')} linkHref={'/'} />
        <Content lang={lang} />
    </React.Fragment>
  )
}

export default Page