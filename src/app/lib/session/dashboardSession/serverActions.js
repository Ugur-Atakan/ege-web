'use server'

import { getServerActionSession } from './session'

export const submitCookieToStorageServerAction = async (cookie) => {
  const session = await getServerActionSession()
  session.cookieVariable = cookie
  await session.save()
}

export const readCookieFromStorageServerAction = async () => {
  const session = await getServerActionSession()
  if (session.cookieVariable) return session.cookieVariable;
  else {
    return null;
  }
}

export const removeCookieFromStorageServerAction = async () => {
  const session = await getServerActionSession()
  session.destroy()
}