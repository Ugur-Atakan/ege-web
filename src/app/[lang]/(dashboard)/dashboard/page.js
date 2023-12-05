import React from 'react'
import Home from './components/Home'
import { redirect } from 'next/navigation'
import { readCookieFromStorageServerAction } from '@/app/lib/session/dashboardSession/serverActions'

const Page = async ({ params: { lang } }) => {
  const cookie = await readCookieFromStorageServerAction();
  
  if (!cookie) {
    redirect(`/${lang}/login`);
  }

  return(
    <React.Fragment>
        <Home lang={lang} />
    </React.Fragment>
  )
}

export default Page