import countries from '../../../assets/data/countries.json'

/**
 * @type {GET route}
 * @returns {JSON countries}
 */

export async function GET() {
    return new Response(JSON.stringify(countries), {
        status: 200
    })
}