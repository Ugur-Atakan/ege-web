'use client'

export const submitCookieToStorageRouteHandler = async (cookie) => {
  await fetch('/api/set', {
    method: 'POST',
    body: JSON.stringify({
      cookie,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const readCookieFromStorageRouteHandler = async () => {
  const responseWithCookieFromStorage = await fetch('http://localhost:3000/api/get', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await responseWithCookieFromStorage.json();
  const cookieValue = data?.cookieInStorage || 'No Cookie In Storage'
  return cookieValue
}