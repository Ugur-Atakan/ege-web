import entityType from '@/assets/json/entityType.json'

/**
 * @type {GET route}
 * @returns {JSON entityType}
 */

export async function GET() {
    return new Response(JSON.stringify(entityType), {
        status: 200
    })
}