import React from 'react'
import Stats from './Stats'
import Status from './Status/Status'

const Home = ({ lang, company, usersInfo }) => {
  const companyJSON = JSON.parse(company);
  const usersJSON = JSON.parse(usersInfo);
  if (companyJSON === null) return (<div>Company not found</div>);

  return (
    <React.Fragment>
      <div className='my-10'>
        <h1 className='text-2xl uppercase font-bold  tracking-wider text-center'>
            {companyJSON.companyName + ' '} Dashboard
        </h1>
        <Stats />
        <Status company={companyJSON} users={usersJSON} />
      </div>
    </React.Fragment>
  )
}

export default Home
