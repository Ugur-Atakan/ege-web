import React from 'react'
import { redirect } from 'next/navigation'
import Companies from './components/Companies'
import { getUserData } from '../api'
import { readCookieFromStorageServerAction } from '@/app/lib/session/dashboardSession/serverActions'

const Page = async ({ params: { lang } }) => {
  const cookie = await readCookieFromStorageServerAction();
  const { userEmail } = cookie;

  const userData = await getUserData(userEmail);
  if (userData.userAccessLevel !== 'superadmin') {
    redirect(`/${lang}/dashboard/`);
  }

  return(
    <React.Fragment>
        <Companies lang={lang} />
    </React.Fragment>
  )
}

export default Page