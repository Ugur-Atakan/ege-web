import { connectDB } from '@/app/lib/db/mongodb'
import mongoose from 'mongoose'
import User from '@/app/lib/db/models/UserModel'
import Workspace from '@/app/lib/db/models/WorkspaceModel'

// Add a new user to workspace if workspace doesn't exist create one
export async function POST(request) {
    const { userEmail, firstName, lastName, companyID } = await request.json();
    await connectDB();
    // console.log(userEmail, firstName, lastName, workspaceID)
   
    try {
        // find a user if exists then add then if not create and add to workspace 
        const cID = new mongoose.Types.ObjectId(companyID);
        const user = await User.findOne({ email: userEmail });
        const workspace = await Workspace.findOne({ 'companies._id': cID });
        if (!workspace) { return new Response('Workspace not found', { status: 404 })}

        let newUser; 
        if (!user) {
            newUser = new User({
                email: userEmail,
                firstName: firstName,
                lastName: lastName
            });
            await newUser.save();
        }

        workspace.users.push(user._id);
        await workspace.save();
        
        return new Response('User added to workspace', {
            status: 200
        })
    }
    catch (err) {
        console.log(err)
        return new Response('Error creating user', {
            status: 500
        })
    }
}   