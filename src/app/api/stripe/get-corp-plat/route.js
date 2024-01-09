import axios from 'axios'
import { getStateKey } from '@/app/lib/stateLookUp';

export async function GET(request) {
    const state = request.nextUrl.searchParams.get('state');

    try {
        const stateKey = getStateKey(state);
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_Oj67AQ1Qc24s5x' AND lookup_key:'${stateKey}-corp-plat'`, {
          headers: {
              'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
          }
        });
        res.data.data[0].product = 'Platinum';
        return res.data;
    }
    catch(err) {
        console.log('Error getting getPosts', err)
    }
}