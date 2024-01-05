import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages } from './i18n/settings'

/**
 * @type { middleware }
 * @description This middleware contains the setup for i18n-next package.
 * more info can be found here: https://dev.to/adrai/i18n-with-nextjs-13-and-app-directory-18dm
 */

acceptLanguage.languages(languages)

// export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    "/:lang*",
    "/api/auth/(.*)"
  ]  
}

const cookieName = 'i18next'

export function middleware(req) {
  let lang
  if (req.cookies.has(cookieName)) lang = acceptLanguage.get(req.cookies.get(cookieName).value)
  if (!lang) lang = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lang) lang = fallbackLng

  const pathSegments = req.nextUrl.pathname.split('/').filter(Boolean)
  const firstSegment = pathSegments[0]
  const allowedSegments = ['en', 'tr', 'post-order', '_next', 'api', 'favicon.ico', 'robots.txt', 'sitemap.xml'];

  if (firstSegment && !allowedSegments.includes(firstSegment)) {
    return NextResponse.redirect(new URL(`/${lang}`, req.url));
  }

  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(`/${lang}`, req.url))
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'))
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}