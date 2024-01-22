import React from 'react'
import Stats from './Stats'
import Status from './Status/Status'

const Home = ({ lang, company }) => {
  const companyJSON = JSON.parse(company);
  
  return (
    <React.Fragment>
      <div className='my-10'>
        <h1 className='text-2xl uppercase font-bold  tracking-wider text-center'>
            {companyJSON.companyName + ' '} Dashboard
        </h1>
        <Stats />
        <Status company={companyJSON} />
      </div>
    </React.Fragment>
  )
}

export default Home
