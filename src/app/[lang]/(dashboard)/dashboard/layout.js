import '@/app/globals.css'
import React from 'react'
import { dir } from 'i18next'
import Navigation from './components/Nav/Navigation'

import { redirect } from 'next/navigation'
import SessionProvider from './SessionProvider'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'

export const metadata = {
  title: 'Registate dashboard',
  description: 'Your personalized dashboard to manage your account.',
}

const DashboardLayout = async (params) => {
  const session = await getServerSession(options);
  
  if (!session) {
    redirect(`/${params.params.lang}/login`);
  }
  
  return (
    <html dir={dir(params.params.lang)} >
      <body>
        <SessionProvider session={session} >
            <Navigation lang={params.params.lang}  />
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