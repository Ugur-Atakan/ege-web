import { getIronSession, getServerActionIronSession } from 'iron-session'
  
import { cookies } from 'next/headers';

export const sessionOptions = {
    password: '2291cff1e7f253020407813e9a41fa5425cf6a174aa1d3020b3d661cb846d648',
    cookieName: 'session-cookie',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production'
    }
}

const getSession = async (req, res) => {
    const session = getIronSession(req, res, sessionOptions)
    return session
}

const getServerActionSession = async () => {
    const session = getServerActionIronSession(sessionOptions, cookies())
    return session
}

export {
    getSession,
    getServerActionSession
}
  