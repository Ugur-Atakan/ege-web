import React from 'react'
import SignUp from './SignUp'
import { connectDB } from '@/app/lib/db/mongodb'
import User from '@/app/lib/db/models/UserModel'

const getUserFromServer = async (id) => {
  await connectDB();
  const user = await User.findOne({ enableToken: id }).select('-password');
  return user;
}

const Page = async ({ params: { lang }, searchParams }) => {
  if (!searchParams.id) {
    return <p>Invalid link</p>
  }
  
  const user = await getUserFromServer(searchParams.id);

  if (user.enableToken !== searchParams.id) {
    return <p>Invalid link</p>
  }

  if (user.active) {
    return <p>Account already activated</p>
  }

  return(
    <SignUp lang={lang} email={user.email} id={searchParams.id} />
  )
}

export default Page