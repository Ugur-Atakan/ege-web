import React from 'react'
import Home from './components/Home'

const Page = async ({ params: { lang } }) => {
  return(
    <React.Fragment>
        <Home lang={lang} />
    </React.Fragment>
  )
}

export default Page