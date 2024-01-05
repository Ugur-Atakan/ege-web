import { connectDB } from '@/app/lib/db/mongodb'
import User from '@/app/lib/db/models/UserModel'
import Workspace from '@/app/lib/db/models/WorkspaceModel'
import { hash } from 'bcryptjs'

const saltRounds = 10; // for bcryptjs

//* Creating a user
export async function POST(request) {
    const { firstName, lastName , email , password, level } = await request.json();
    await connectDB();

    try {
        // Check if an existing user exists and then return the user
        const existingUser = await User.findOne({ email: email }).select('-password');
        if (existingUser) return new Response('User found in another workspace', { status: 409 });
        
        //! Create a new user 
        const hashedPassword = await hash(password, saltRounds);
        const user = await User.create({ firstName, lastName, level, email, password: hashedPassword });
        
        // Create a new workspace
        // Add the user to the workspace
        await Workspace.create({ users: [user._id] });
        return new Response('New workspace created', {
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
