import React from 'react'
import Stats from './Stats'
import OpenCompany from './OpenCompany'
import CompanyCards from './CompanyCards'

const Home = ({ lang, companies }) => {
  return (
    <React.Fragment>
      <Stats />
      <OpenCompany lang={lang} />
      <CompanyCards lang={lang} companies={companies} />
    </React.Fragment>
  )
}

export default Home
