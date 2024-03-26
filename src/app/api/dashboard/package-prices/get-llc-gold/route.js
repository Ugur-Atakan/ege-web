import axios from 'axios'
import { getStateKey } from '@/app/lib/stateLookUp';

export async function GET(request) {
    try {
      const state = request.nextUrl.searchParams.get('state');
      const stateKey = getStateKey(state);
      
      const reqURL = `https://api.stripe.com/v1/prices/search?query=product:'${process.env.LLC_GOLD_ID}' AND lookup_key:'${stateKey}-llc-gold'`
      
      const res = await axios.get(reqURL, {
        headers: {
            'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
        }
      });


      if (res.data.data && res.data.data.length > 0) {
        res.data.data[0].product = 'Gold';
        return new Response(JSON.stringify(res.data.data[0]), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
      } else {
        console.error("No data received from Stripe API");
        return new Response(JSON.stringify('No data received from Stripe API'), {
            status: 404,
            headers: {
                'Content-Type': 'application/json'
            }
        });
      }
    }
    catch(err) {
      console.log('Error getting getLLCSilver func ', err)
      return new Response(JSON.stringify('Error getting getLLCSilver func'), {
        status: 500,
        headers: {
            'Content-Type': 'application/json'
        }  
      });
    }
}