import { connectDB } from '@/app/lib/db/mongodb'
import Company from '@/app/lib/db/models/CompanySchema'
import User from '@/app/lib/db/models/UserModel'
import Workspace from '@/app/lib/db/models/WorkspaceModel'

// Add a new user to workspace if workspace doesn't exist create one
export async function POST(request) {
    const { userEmail } = await request.json();
    await connectDB();

    try {
        //* check workspaces for an existing user if user exists return error
        //! if user doesn't exist do what? 
        //* 

    }
    catch (err) {
        console.log(err)
        return new Response('Error creating user', {
            status: 500
        })
    }
}   