import { connectDB } from '@/app/lib/db/mongodb'
import User from '@/app/lib/db/models/UserModel'
import Workspace from '@/app/lib/db/models/WorkspaceModel'
import crypto from 'crypto'

//* Creating a user in workspace without a company
export async function POST(request) {
    const { firstName, lastName , email, password  } = await request.json();
    await connectDB();

    try {
        // Check if an existing user exists and then return the user
        const existingUser = await User.findOne({ email: email }).select('-password');
        if (existingUser) return new Response('User found in another workspace', { status: 409 });
        
        //! Create new admin user 
        await User.create({ firstName, lastName, email, password: password, level: 'admin', active: true, type: 'local' });

        // Create a new workspace
        return new Response('Admin created', {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (err) {
        console.log(err)
        return new Response('Error creating admin user', {
            status: 500
        })
    }
}   
