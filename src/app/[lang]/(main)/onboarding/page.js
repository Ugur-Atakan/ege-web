'use server'

import React from 'react'
import BackButton from './components/common/BackButton'
import Content from './components/Content'
import { readCookieFromStorageServerAction, removeCookieFromStorageServerAction } from '@/app/lib/session/serverActions'
import { useTranslation } from '@/i18n/server'
import NewContent from './components/NewContent'
/**
 * Page route for the company type page
 * @type {function}
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} Rendered content for the page
*/

const Page = async ({ params: { lang } }) => {
  // const cookie = await readCookieFromStorageServerAction();
  
  return (  
    <NewContent lang={lang}  />
  )
}

export default Page