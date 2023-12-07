import { connectDB } from '@/app/lib/db/mongodb'
import User from '@/app/lib/db/models/UserModel'
import { hash } from 'bcryptjs'

const saltRounds = 10; // for bcryptjs

//* Creating a user
export async function POST(request) {
    const { firstName, lastName , email , password, level } = await request.json();
    await connectDB();

    try {
        // Check if an existing user exists and then return the user
        const existingUser = await User.findOne({ email: email }).select('-password');
        if (existingUser) {
            return new Response(JSON.stringify(existingUser), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const hashedPassword = await hash(password, saltRounds);
        await User.create({ firstName, lastName, level, email, password: hashedPassword });
        return new Response('New user created', {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (err) {
        console.log(err)
        return new Response('Error creating user', {
            status: 500
        })
    }
}   

//* Get user info 
export async function GET() {
    await connectDB();
    const users = await User.find({}).select('-password');
    return new Response(JSON.stringify(users), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

//* DELETE a single user
export async function DELETE(request){
    const { email } = await request.json();
    await connectDB();

    try {
        // Find by email and delete the user
        const result = await User.findOneAndDelete({ email: email });
        if (!result) {
            return new Response('User not found', {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        return new Response('User deleted', {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    catch (err) {
        console.error(err);
        return new Response('Error deleting user', {
            status: 500
        });
    }
}