import axios from 'axios'

/**
 * @typedef {object} blogRoute
 * @returns {Response}
 */

export async function GET(request) {
    try {
        const response = await axios.get(`https://blog.registate.com/ghost/api/content/tags?key=${process.env.BLOG_API_KEY}`)
        const data = response.data;
        const tags = data.tags;
        const names = tags.map(tag => tag.name);
        names.push('All');

        return new Response(JSON.stringify(names), { status: 200 });
    } catch (err) {
        return new Response(`Get by tags: ${err.message}`, {
            status: 400
        });
    }
}