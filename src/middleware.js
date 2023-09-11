import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  matcher: '/:lang*'
}

const cookieName = 'i18next'

export function middleware(req) {
  let lang
  if (req.cookies.has(cookieName)) lang = acceptLanguage.get(req.cookies.get(cookieName).value)
  if (!lang) lang = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lang) lang = fallbackLng

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