import axios from 'axios'

/**
 * @typedef {object} blogRoute
 * @returns {Response}
 */

export async function GET() {
    try {
        // Use axios instead of fetch as fetch is giving build error on EC2 Linux Machine.
        // const response = await fetch(`https://blog.registate.com/ghost/api/content/posts?key=${process.env.BLOG_API_KEY}&include=authors,tags`);
        const response = await axios.get(`https://blog.registate.com/ghost/api/content/posts?key=${process.env.BLOG_API_KEY}&include=authors,tags`);
        const data = response.data;

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (err) {
        return new Response(`Get all posts: ${err.message}`, {
            status: 400
        });
    }
}