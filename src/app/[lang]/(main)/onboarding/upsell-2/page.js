import React from 'react'
import AddOns from './components/AddOns'

const Page = async ({ params: { lang } }) => {
  return (
    <main className='bg-[#111827] h-screen '>
        <AddOns lang={lang}
        />
    </main>
  )
}

export default Page