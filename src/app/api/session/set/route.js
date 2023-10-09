import { getSession } from '../../../../lib/session'

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
