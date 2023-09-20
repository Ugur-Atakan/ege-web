import countries from '../../../assets/data/countries.json'

export async function GET() {
    return new Response(JSON.stringify(countries), {
        status: 200
    })
}