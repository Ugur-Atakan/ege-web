import React from 'react'
import Login from './components/Login'

const Page = ({ params: { lang } }) => {
  return(
    <Login lang={lang} />
  )
}

export default Page