import axios from 'axios'
import { getStateKey } from '@/app/lib/stateLookUp';

export async function GET(request) {
    const state = request.nextUrl.searchParams.get('state');

    try {
        const stateKey = getStateKey(state);
        const stateInfo = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_P0QsJHkXZg2yQB' AND lookup_key:'${stateKey}-llc-silver'`, {
            headers: {
                'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
            }
        });

        stateInfo.data.data[0].product = 'Silver';
        
        const productInfo = await axios.get(`https://api.stripe.com/v1/products/search?query=metadata['type']:'llc-silver'`,
        {
            headers: {
                'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
            }
        });
        stateInfo.data.data[0].features = productInfo.data.data[0].features;
        
        return stateInfo.data;
    }
    catch(err) {
        console.log('Error getting getPosts', err)
    }
}