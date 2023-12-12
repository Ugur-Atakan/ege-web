import React from 'react'
import SignUp from './SignUp'

const Page = ({ params: { lang } }) => {
  return(
    <SignUp lang={lang} />
  )
}

export default Page