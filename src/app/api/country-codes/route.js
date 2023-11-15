import countryCodes from '@/assets/json/countryCodes.json'

/**
 * @typedef {object} countriesRoute
 * @returns {Response}
 */

export async function GET() {
    const codes = countryCodes.map((country) => country.code);

    return new Response(JSON.stringify(codes), {
        status: 200
    })
}