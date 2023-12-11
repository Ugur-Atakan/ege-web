import React from 'react'
import { readCookieFromStorageServerAction } from '@/app/lib/session/dashboardSession/serverActions'
import { redirect } from 'next/navigation'
import Login from './components/Login'

const Page = async ({ params: { lang } }) => {
  // const cookie = await readCookieFromStorageServerAction();

  // if (cookie) {
  //   redirect(`/${lang}/dashboard`);
  // }
  
  return(
    <Login lang={lang} />
  )
}

export default Page