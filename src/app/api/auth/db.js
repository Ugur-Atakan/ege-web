import { connectDB } from '@/app/lib/db/mongodb';
import User from '@/app/lib/db/models/UserModel';
import { compare } from 'bcryptjs';

// Login route
export const login = async (email, password, type) => {
    await connectDB();

    try {
        const user = await User.findOne({ email: email, type:type });

        if (!user) {
            return new Response(JSON.stringify('User not found'), {
                status: 404 
            });
        }

        if (user.active === false) {
            return new Response(JSON.stringify('User not active'), {
                status: 401
            });
        }
        
        const isMatch = await compare(password, user.password);
        if (!isMatch) {
            return new Response(JSON.stringify('Invalid credentials'), {
                status: 401,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        return new Response(JSON.stringify(user), {
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

export const registerGoogleUser = async (firstName, lastName, email) => {
    await connectDB();
    
    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return new Response('Email in use', {
                status: 409,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const user = await User.create({ firstName, lastName, email, password: '', level: 'user', type: 'google' });
        return new Response(user, {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        console.error(err);
        return new Response('Error creating a Google user', {
            status: 500
        });
    }
}
