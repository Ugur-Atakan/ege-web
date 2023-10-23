import axios from 'axios'
/**
 * @type {GET route}
 * @returns {object} price
 */

export async function POST(request) {
    const name = request.nextUrl.searchParams.get('name')

    if (!name) {
        return new Response('Missing name', {
            status: 400
        });
    }

    const res = await axios.post('https://www.delawareinc.com/include/company_name_lookup/company_lookup_section.cfm', 
        'name=' + encodeURIComponent(name), 
        {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
    );

    if (res.data.includes('No companies with that name could be found.')) {
        return new Response('Available', {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return new Response('Not Available', {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
