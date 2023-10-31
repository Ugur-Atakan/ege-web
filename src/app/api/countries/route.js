import countries from '@/assets/json/countries.json'

/**
 * @typedef {object} countriesRoute
 * @returns {Response}
 */

export async function GET() {
    return new Response(JSON.stringify(countries), {
        status: 200
    })
}