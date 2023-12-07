import { connectDB } from '@/app/lib/db/mongodb';
import User from '@/app/lib/db/models/UserModel';
import { hash } from 'bcryptjs';

export async function GET() {
    return new Response('Signup route', {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
// Login route
export async function POST(request) {
    const { firstName, lastName, email, confirmEmail, password , confirmPassword } = await request.json();
    await connectDB();

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return new Response('Current user exists', {
                status: 409,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // check if email and confirm email match and if password and confirm password match
        if (email !== confirmEmail || password !== confirmPassword) {
            return new Response('Email or password do not match', {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const hashedPassword = await hash(password, 10);
        await User.create({ firstName, lastName, email, password: hashedPassword, level: 'user' });
        return new Response('New user created', {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });

    } catch (err) {
        console.error(err);
        return new Response('Error creating a user', {
            status: 500
        });
    }
}
