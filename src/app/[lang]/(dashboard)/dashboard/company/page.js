import React from 'react'
import CompanyDetails from './components/CompanyDetails'

const Page = async ({ params: { lang } }) => {
//   const userData = await getUserData(userEmail);
//   const userJSON = JSON.stringify(userData);

  return(
    <React.Fragment>
        <CompanyDetails lang={lang} />
    </React.Fragment>
  )
}

export default Page