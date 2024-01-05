import React from 'react'
import Content from './components/Content'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'

const Page = async ({ params: { lang } }) => {
  const session = await getServerSession(options);

  return (
    <Content 
      cookie={session}
      lang={lang}
    />
  )
}

export default Page