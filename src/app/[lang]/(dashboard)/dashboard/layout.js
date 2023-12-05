import '@/app/globals.css'
import { dir } from 'i18next'
import TopNavbar from './components/Nav/TopNavbar'
import Sidebar from './components/Nav/Sidebar'

export const metadata = {
  title: 'Registate dashboard',
  description: 'Your personalized dashboard to manage your account.',
}

const DashboardLayout = (params) => {
    return (
      <html dir={dir(params.params.lang)} >
        <body>
          <Sidebar lang={params.params.lang} />
          <TopNavbar lang={params.params.lang} />
          <div className="lg:pl-72">
            <main className="py-10">
              <div className="px-4 sm:px-6 lg:px-8">{params.children}</div>
            </main>
          </div>
        </body>
      </html>
    )
}

export default DashboardLayout