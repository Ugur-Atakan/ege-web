import { connectDB } from '@/app/lib/db/mongodb';
import User from '@/app/lib/db/models/UserModel';
import { compare } from 'bcryptjs';

export async function POST(request) {
    const { email, password } = await request.json();
    await connectDB();

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return new Response('User not found', {
                status: 404 
            });
        }

        const isMatch = await compare(password, user.password);
        if (!isMatch) {
            return new Response('Invalid password', {
                status: 401 
            });
        }

        // (return some user data or a token here)
        return new Response(JSON.stringify({ message: 'Login successful' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        console.error(err);
        return new Response('Error logging in', {
            status: 500
        });
    }
}
