import React from 'react'
import Content from './components/Content'

const Page = ({ params: { lang } }) => {
  return(
    <React.Fragment>
        <Content lang={lang} />
    </React.Fragment>
  )
}

export default Page