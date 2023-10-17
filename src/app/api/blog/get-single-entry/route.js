import axios from 'axios'

export async function GET(request) {
    try {
        const slug = request.nextUrl.searchParams.get('slug')

        // const response = await fetch(`https://blog.registate.com/ghost/api/content/posts?key=${process.env.BLOG_API_KEY}&include=authors,tags&filter=slug: ${slug}`)
        const response = await axios.get(`https://blog.registate.com/ghost/api/content/posts?key=${process.env.BLOG_API_KEY}&include=authors,tags&filter=slug: ${slug}`);
        const data = response.data;
  
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (err) {
        return new Response(`Get Single Blog Entry Error: ${err.message}`, {
            status: 400
        });
    }
}