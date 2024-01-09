import axios from 'axios'
import { getStateKey } from '@/app/lib/stateLookUp';

export async function GET(request) {
    const state = request.nextUrl.searchParams.get('state');

    try {
        const stateKey = getStateKey(state);
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_P0RY5nExt2q8nE' AND lookup_key:'${stateKey}-corp-silver'`, {
            headers: {
                'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
            }
        });
        res.data.data[0].product = 'Silver';
        return res.data;
    }
    catch(err) {
        console.log('Error getting getPosts', err)
    }
}