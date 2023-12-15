import React from 'react'
import Stats from './Stats'
import OpenCompany from './OpenCompany'
import CompanyCards from './CompanyCards'

const Home = ({ lang, companies }) => {
  let companiesJSON;
  if (companies) companiesJSON = JSON.parse(companies)

  return (
    <React.Fragment>
      <Stats />
      {
        companies ?  
        <>
          <h2 className='my-10 text-2xl uppercase font-bold border-b-2 border-black tracking-wider sm:text-lg text-center'>
            Your companies
          </h2>
          <CompanyCards lang={lang} companies={companiesJSON} />
        </> : 
        <OpenCompany lang={lang} />
      }
    </React.Fragment>
  )
}

export default Home
