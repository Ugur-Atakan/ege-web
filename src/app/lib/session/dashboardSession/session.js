import { getIronSession, getServerActionIronSession } from 'iron-session'
import { cookies } from 'next/headers';

export const dashboardSessionOptions = {
    password: 'change-this-this-is-not-a-secure-password',
    cookieName: 'registateDashboard',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production'
    }
}

const getDashboardSession = async (req, res) => {
    const session = getIronSession(req, res, dashboardSessionOptions)
    return session
}

const getServerActionSession = async () => {
    const session = getServerActionIronSession(dashboardSessionOptions, cookies())
    return session
}

export {
    getDashboardSession as getSession,
    getServerActionSession
}
  