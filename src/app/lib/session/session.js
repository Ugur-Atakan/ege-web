import { getIronSession, getServerActionIronSession } from 'iron-session'
import { cookies } from 'next/headers';

export const onboardingSessionOptions = {
    password: process.env.IRONAUTH_SECRET,
    cookieName: 'registateOnboarding',
    cookieOptions: {
        // secure: process.env.NODE_ENV === 'production',
        maxAge: 1 * 60 * 30 //! 30 minutes expiration duration
    }
}

const getOnboardingSession = async (req, res) => {
    const session = getIronSession(req, res, onboardingSessionOptions)
    return session
}

const getServerActionSession = async () => {
    const session = getServerActionIronSession(onboardingSessionOptions, cookies())
    return session
}

export {
    getOnboardingSession as getSession,
    getServerActionSession
}
  