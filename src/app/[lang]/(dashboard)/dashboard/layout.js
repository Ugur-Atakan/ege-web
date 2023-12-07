import '@/app/globals.css'
import React from 'react'
import { dir } from 'i18next'
import Navigation from './components/Nav/Navigation'
import { redirect } from 'next/navigation'
import { readCookieFromStorageServerAction } from '@/app/lib/session/dashboardSession/serverActions'
import { getUserData, getUsersCompanies } from './api'

export const metadata = {
  title: 'Registate dashboard',
  description: 'Your personalized dashboard to manage your account.',
}

const DashboardLayout = async (params) => {
    const cookie = await readCookieFromStorageServerAction();
    
    if (!cookie) {
      redirect(`/${params.params.lang}/login`);
    }

    const { userEmail } = cookie;
    const userData = await getUserData(userEmail);
    const userCompanies = await getUsersCompanies(userData.companies);
    const userJSON = JSON.stringify(userData);
    const companiesJSON = JSON.stringify(userCompanies);

    return (
      <html dir={dir(params.params.lang)} >
        <body>
          <Navigation lang={params.params.lang} user={userJSON} companies={companiesJSON} />
          <div className="lg:pl-72">
            <main className="py-10">
              <div className="px-4 sm:px-6 lg:px-8">
                {params.children}
              </div>
            </main>
          </div>
        </body>
      </html>
    )
}

export default DashboardLayout