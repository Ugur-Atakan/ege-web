import { getSession } from '../../lib/session/session'

export async function GET(request, response) {
  try {
    const session = await getSession(request, response)
    const cookeValue = session.cookieVariable || 'No Cookie Stored!'
    return new Response (JSON.stringify({ cookieInStorage: cookeValue }), { status: 200 })
  } catch (error) {
    console.error((error).message)
    return new Response(JSON.stringify({ message: (error).message }), { status: 500 })
  }
}

export async function POST(request) {
  try {
    const requestBody = await request.json()
    const { cookie } = requestBody
    const response = new Response()
    const session = await getSession(request, response)
    session.cookieVariable = cookie
    await session.save()
    return response
  } catch (error) {
    console.error((error).message)
    return new Response(JSON.stringify({ message: (error).message }), { status: 500 })
  }
}
