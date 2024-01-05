import { connectDB } from '@/app/lib/db/mongodb';
import User from '@/app/lib/db/models/UserModel';
import { hash } from 'bcryptjs';

// Login route
export async function POST(request) {
    const { email, id, password, confirmPassword } = await request.json();
    await connectDB();

    try {
        const user = await User.findOne({ email: email });
     
        if (id !== user.enableToken) {
            return new Response('Invalid enable token', {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        if (password !== confirmPassword) {
            return new Response('Password do not match', {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const hashedPassword = await hash(password, 10);
        user.password = hashedPassword;
        user.active = true;
        await user.save();
        
        return new Response('User is activated', {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });

    } catch (err) {
        console.error(err);
        return new Response(`Error activating a user ${err}`, {
            status: 500
        });
    }
}
