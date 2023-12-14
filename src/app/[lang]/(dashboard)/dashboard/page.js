import React from 'react'
import Home from './components/Home/Home'
import { connectDB } from '@/app/lib/db/mongodb'
import mongoose from 'mongoose'
import Company from '@/app/lib/db/models/CompanySchema'
import Workspace from '@/app/lib/db/models/WorkspaceModel'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'

const getWorkspace = async (userID) => {
    await connectDB();
    try {
      const uID = new mongoose.Types.ObjectId(userID);
      const workspace = await Workspace.findOne({ users: { $in: [uID] } });
      if (!workspace) null;
      return workspace;
    } catch (err) {
        return null;
    }
}

const Page = async ({ params: { lang } }) => {
  const session = await getServerSession(options);
  const workspace = await getWorkspace(session.user.uid);
  
  return(
    <React.Fragment>
        <Home lang={lang} companies={workspace.companies} />
    </React.Fragment>
  )
}

export default Page