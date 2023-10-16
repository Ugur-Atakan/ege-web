/**
 * @typedef {object} blogRoute
 * @returns {Response}
 */

export async function GET(request) {
    try {
        const tag = request.nextUrl.searchParams.get('tag')
        const response = await fetch
        (`https://blog.registate.com/ghost/api/content/posts?key=${process.env.BLOG_API_KEY}&include=authors,tags&filter=tag:${tag}`)
        const resJSON = await response.json()
        const stringfyJSON = JSON.stringify(resJSON)
        return new Response(stringfyJSON, {
            status: 200
        })
    } catch (err) {
        return new Response(`Webhook Error: ${err.message}`, {
            status: 400
        });
    }
}