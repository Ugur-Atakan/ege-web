
import React from 'react'
import Content from './components/Content'

const Page = async ({ params: { lang } }) => {
  return (
    <main className='bg-[#111827]'>
        <Content lang={lang} />
    </main>
  )
}

export default Page