import statesJSON from '@/assets/json/states.json'

/**
 * @GET /states/api
 * @type {route}
 * @type {API}
 * @description - Returns states JSON
*/

export async function GET() {
    return new Response(JSON.stringify(statesJSON), {
        status: 200
    })
}