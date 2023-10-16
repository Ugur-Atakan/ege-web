/**
 * @typedef {object} blogRoute
 * @returns {Response}
 */

export async function GET() {
    try {
        const response = await fetch(`https://blog.registate.com/ghost/api/content/posts?key=${process.env.BLOG_API_KEY}&include=authors,tags`);
        const resJSON = await response.json();
        return new Response(JSON.stringify(resJSON), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        return new Response(`Webhook Error: ${err.message}`, {
            status: 400
        });
    }
}