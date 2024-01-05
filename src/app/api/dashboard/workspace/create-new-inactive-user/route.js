import { connectDB } from '@/app/lib/db/mongodb'
import User from '@/app/lib/db/models/UserModel'
import Workspace from '@/app/lib/db/models/WorkspaceModel'
import crypto from 'crypto'

//* Creating a user
export async function POST(request) {
    const { firstName, lastName , email } = await request.json();
    await connectDB();

    try {
        // Check if an existing user exists and then return the user
        const existingUser = await User.findOne({ email: email }).select('-password');
        if (existingUser) return new Response('User found in another workspace', { status: 409 });
        
        //! Create a new user 
        const enableToken = crypto.randomBytes(32).toString('hex');
        const user = await User.create({ firstName, lastName, email, password: '', level: 'admin', enableToken: enableToken, active: false, type: 'local' });

        // Create a new workspace
        // Add the user to the workspace
        await Workspace.create({ users: [user._id] });
        return new Response(enableToken, {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (err) {
        console.log(err)
        return new Response('Error creating workspace', {
            status: 500
        })
    }
}   
