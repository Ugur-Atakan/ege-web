import { NextResponse } from 'next/server'
import { getSession } from '../../../../lib/session'

export async function GET(request, response) {
  try {
    const session = await getSession(request, response)
    const cookeValue = session.cookieVariable || 'No Cookie Stored!'
    return NextResponse.json({ cookieInStorage: cookeValue })
  } catch (error) {
    console.error((error).message)
    return new Response(JSON.stringify({ message: (error).message }), { status: 500 })
  }
}
