'use server'

import { getServerActionSession } from './session'
import { cookies } from 'next/headers';

export const submitCookieToStorageServerAction = async (cookie) => {
  const session = await getServerActionSession()
  session.cookieVariable = cookie
  await session.save()
}

export const readCookieFromStorageServerAction = async () => {
  const session = await getServerActionSession()
  return session.cookieVariable || 'No Cookie Stored!'
}

export const removeCookieFromStorageServerAction = async () => {
  const session = await getServerActionSession()
  session.destroy()
}
