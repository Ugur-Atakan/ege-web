import entityType from '../../../assets/data/entityType.json'

export async function GET() {
    return new Response(JSON.stringify(entityType), {
        status: 200
    })
}