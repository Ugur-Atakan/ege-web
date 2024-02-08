import React from 'react'
import Companies from './components/Users'
import { connectDB } from '@/app/lib/db/mongodb'
import mongoose from 'mongoose'
import Workspace from '@/app/lib/db/models/WorkspaceModel'
import User from '@/app/lib/db/models/UserModel'

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
  console.log(slug)
  const usersInfo = await getUsersInfo(slug);
  const usersJSON = JSON.stringify(usersInfo);

  return(
    <React.Fragment>
        <Companies lang={lang} users={usersJSON} workspaceID={slug[0]} />
    </React.Fragment>
  )
}

export default Page