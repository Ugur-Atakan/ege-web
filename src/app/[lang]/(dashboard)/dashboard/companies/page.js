import React from 'react'
import { redirect } from 'next/navigation'
import Companies from './components/Companies'
import { getUserData } from '../api'
import { readCookieFromStorageServerAction } from '@/app/lib/session/dashboardSession/serverActions'
import { getServerSession } from 'next-auth'

const Page = async ({ params: { lang } }) => {
  const cookie = await readCookieFromStorageServerAction();
  const { userEmail } = cookie;
  // const session = await getServerSession();
  // console.log(session)
  const userData = await getUserData(userEmail);

  // console.log(userData.userAccessLevel)
  // if (userData.userAccessLevel !== 'superadmin') {
  //   redirect(`/${lang}/dashboard/`);
  // }

  return(
    <React.Fragment>
        <Companies lang={lang} />
    </React.Fragment>
  )
}

export default Page