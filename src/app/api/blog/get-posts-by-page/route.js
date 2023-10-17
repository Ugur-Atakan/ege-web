import axios from 'axios'

export async function GET(request) {
    try {
        const page = request.nextUrl.searchParams.get('page')

        // const response = await fetch
        // (`https://blog.registate.com/ghost/api/content/posts?key=${process.env.BLOG_API_KEY}&include=authors,tags&page=${page}`)

        const response = await axios.get(`https://blog.registate.com/ghost/api/content/posts?key=${process.env.BLOG_API_KEY}&include=authors,tags&page=${page}`);
        const data = response.data;

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (err) {
        return new Response(`Get Posts by Page Entry Error: ${err.message}`, {
            status: 400
        });
    }
}