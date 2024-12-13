import React from 'react'
import Content from './components/Content'
import { readCookieFromStorageServerAction } from '@/app/lib/session/serverActions'

/**
 * Page route for review page
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} 
*/

const Page = async ({ params: { lang } }) => {
  return (
    <Content 
      lang={lang}
    />
  )
}

export default Page