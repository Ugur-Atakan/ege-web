import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { login, registerGoogleUser } from '../db'

export const options = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {
                const res = await login(credentials.email, credentials.password, 'local');
    
                if (res.status === 200) {
                    const user = await res.json();
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],

    // Optional: Customize the authentication flow
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account.provider === "google") {
                const res = await login(profile.email, '', 'google');

                if (res.status === 404) {
                    const res = await registerGoogleUser(profile.given_name, profile.family_name, profile.email);
                } else if (res.status === 200) {
                    const data = await res.json();
                    console.log('data ', data);
                    user._id = data._id;
                    user.firstName = data.firstName;
                    user.lastName = data.lastName;
                    user.level = data.level;
                }
            }
            else if (account.provider === "credentials") {
                // do anything for credentials login
            }
            return true;
        },
        async jwt({ token, user }){
            // Assign the userid and role from the user object
            if (user) { 
                token.uid = user._id;
                token.level = user.level;
                token.firstName = user.firstName;
                token.lastName = user.lastName;
                token.email = user.email;  
                token.name = user.firstName + ' ' + user.lastName;
            }
            return token;
        },
        async session({ session, user, token }){
            // Assign the userid and role from the jwt callback below
            if (session?.user) { 
                session.user.uid = token.uid;
                session.user.level = token.level;
                session.user.firstName = token.firstName;
                session.user.lastName = token.lastName;
                session.user.email = token.email;
                session.user.name = token.firstName + ' ' + token.lastName;
            }
            return session;
        }
    },

    // Optional: Customize the JWT token
    jwt: {
        // ...
    },

    // Optional: Customize the session
    session: {
        strategy:'jwt'
    },
    pages: {
        signIn: "/en/login"
    }, 
    secret: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
};
