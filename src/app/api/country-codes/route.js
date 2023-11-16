import countryCodes from '@/assets/json/countryCodes.json'


/**
 * @typedef {object} countriesRoute
 * @returns {Response}
 */

export async function GET() {
    const CDNURL = 'https://flagcdn.com/'
    const combined = countryCodes.map(country => ({
        code: country.code,
        iso: country.iso,
        flagURL: `${CDNURL}${country.iso.toLowerCase()}.svg`
    }));
    
    
    const jsonResponse = JSON.stringify(combined);
 
    return new Response(jsonResponse, {
        status: 200
    })
}