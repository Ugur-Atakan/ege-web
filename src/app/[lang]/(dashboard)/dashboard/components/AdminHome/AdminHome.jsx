import React from 'react'
import Card from './Card'

const AdminHome = ({ lang }) => {
  return (
    <React.Fragment>
        <h2 className='my-10 text-2xl uppercase font-bold border-b-2 border-black tracking-wider sm:text-lg text-center'>
            Welcome to admin dashboard!
        </h2>
        <div className="flex flex-wrap justify-start">
            <Card lang={lang} title='Search Companies' description='Manage companies' href={`/${lang}/dashboard/search-companies`} />
            <Card lang={lang} title='Users' description='Manage users' href={`/${lang}/dashboard/search-companies`}  />
            <Card lang={lang} title='Packages' description='Manage packages' href={`/${lang}/dashboard/search-companies`} />
        </div>
    </React.Fragment>
  )
}

export default AdminHome
