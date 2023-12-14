import React from 'react'
import CompanyDetails from './components/CompanyDetails'
import mongoose from 'mongoose'
import Workspace from '@/app/lib/db/models/WorkspaceModel'
import { connectDB } from '@/app/lib/db/mongodb'

// import { getServerSession } from 'next-auth'
// import { options } from '@/app/api/auth/[...nextauth]/options'

const getCompanyData = async (companyID) => {
  await connectDB();
  try {
    const uID = new mongoose.Types.ObjectId(companyID[0]);
    const workspace = await Workspace.findOne({ 'companies._id': uID });
    if (!workspace) return null;

    // Find the company within the workspace
    const company = workspace.companies.find(company => company._id.equals(uID));
    if (!company) return null;
    return company;
  } catch (err) {
    console.error(err);
    return null;
  }
}

const Page = async ({ params: { lang, slug }  }) => {
  const company = await getCompanyData(slug);
  const companyJSON = JSON.stringify(company);

  return(
    <React.Fragment>
      <CompanyDetails lang={lang} company={companyJSON} />
    </React.Fragment>
  )
}

export default Page