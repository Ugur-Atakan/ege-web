import '@/app/globals.css'
import React from 'react'
import { dir } from 'i18next'
import Navigation from './components/Nav/Navigation'
import { redirect } from 'next/navigation'
import { readCookieFromStorageServerAction } from '@/app/lib/session/dashboardSession/serverActions'
import { getUserData, getUsersCompanies } from './api'
import { getServerSession } from 'next-auth'
import SessionProvider from './SessionProvider'
import { options } from '@/app/api/auth/[...nextauth]/options'

export const metadata = {
  title: 'Registate dashboard',
  description: 'Your personalized dashboard to manage your account.',
}

const DashboardLayout = async (params) => {
    // const cookie = await readCookieFromStorageServerAction();
    const session = await getServerSession(options);
    console.log(session);

    // if (!cookie) {
    //   redirect(`/${params.params.lang}/login`);
    // }
   
    // const { userEmail } = cookie;
    // const userData = await getUserData(userEmail);
    // const userCompanies = await getUsersCompanies(userData.companies);
    // const userJSON = JSON.stringify(userData);
    // const companiesJSON = JSON.stringify(userCompanies);

    return (
      <html dir={dir(params.params.lang)} >
        <body>
          <SessionProvider session={session}>
              {/* <Navigation lang={params.params.lang}  /> */}
              <div className="lg:pl-72">
                <main className="py-10">
                  <div className="px-4 sm:px-6 lg:px-8">
                    {params.children}
                  </div>
                </main>
              </div>
          </SessionProvider>
        </body>
      </html>
    )
}

export default DashboardLayout