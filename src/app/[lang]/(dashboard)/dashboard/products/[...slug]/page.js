import React from 'react'
import mongoose from 'mongoose'
import Workspace from '@/app/lib/db/models/WorkspaceModel'
import ComplianceReminder from './compliance-reminder/ComplianceReminder'
import RegisteredAgent from './registered-agent/RegisteredAgent'
import COFG from './cofg/COFG'
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
//   console.log(companyJSON);
  console.log(slug);

  return(
    <React.Fragment>
      {slug[0] === 'compliance-reminder' && <ComplianceReminder lang={lang} company={companyJSON} />}
      {slug[0] === 'registered-agent' && <RegisteredAgent lang={lang} company={companyJSON} />}
      {slug[0] === 'cofg' && <COFG lang={lang} company={companyJSON} />}
        Products Page
    </React.Fragment>
  )
}

export default Page