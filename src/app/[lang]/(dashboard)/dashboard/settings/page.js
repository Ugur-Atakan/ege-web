import React from 'react'
import Settings from './components/Settings'

const Page = async ({ params: { lang } }) => {
  return(
    <React.Fragment>
        <Settings lang={lang} />
    </React.Fragment>
  )
}

export default Page