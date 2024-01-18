import React from 'react'
import Card from './Card'

const AdminHome = ({ lang }) => {
  return (
    <React.Fragment>
        <h2 className='my-10 text-2xl uppercase font-bold border-b-2 border-black tracking-wider sm:text-lg text-center'>
            Welcome to admin dashboard!
        </h2>
        <div className="flex flex-wrap justify-start">
            <Card lang={lang} title='Search Companies' description='Manage companies' href='/admin/companies' />
            <Card lang={lang} title='Users' description='Manage users' href='/admin/users' />
            <Card lang={lang} title='Packages' description='Manage packages' href='/admin/packages' />
        </div>
    </React.Fragment>
  )
}

export default AdminHome
