import React from 'react'
import Home from '../components/CompanyHome/Home'
import { connectDB } from '@/app/lib/db/mongodb'
import mongoose from 'mongoose'
import Workspace from '@/app/lib/db/models/WorkspaceModel'
import User from '@/app/lib/db/models/UserModel'

const getCompanyInfo = async (companyID) => {
    await connectDB();
    try {
      const uID = new mongoose.Types.ObjectId(companyID[0]);
      const workspace = await Workspace.findOne({ 'companies._id': uID });
      const company = workspace.companies.find(company => company._id.equals(uID));
      return company;
    } catch (err) {
        return null;
    }
}

const getUsersInfo = async (companyID) => {
    await connectDB();
    try {
      const uID = new mongoose.Types.ObjectId(companyID[0]);
      const workspace = await Workspace.findOne({ 'companies._id': uID });
      const workspaceUsers =  workspace.users;
      const users = await User.find({ _id: { $in: workspaceUsers } });
      return users;
    } catch (err) {
        return null;
    }
}

const Page = async ({ params: { lang, slug } }) => {
  const company = await getCompanyInfo(slug);
  const companyJSON = JSON.stringify(company);
  const usersInfo = await getUsersInfo(slug);
  const usersJSON = JSON.stringify(usersInfo);

  return(
    <React.Fragment>
        <Home lang={lang} company={companyJSON} usersInfo={usersJSON} />
    </React.Fragment>
  )
}

export default Page