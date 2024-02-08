import axios from 'axios'
import { getStateKey } from '@/app/lib/stateLookUp';

const getLLCSilver = async (state) => {
    try {
      const stateKey = getStateKey(state);
      const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_P0QsJHkXZg2yQB' AND lookup_key:'${stateKey}-llc-silver'`, {
        headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
        }
      });

      if (res.data.data && res.data.data.length > 0) {
        res.data.data[0].product = 'Silver';
        return res.data.data[0];
      } else {
        // Handle the case where data is not available
        console.error("No data received from Stripe API ");
      }
      
      return stateInfo.data;
    }
    catch(err) {
      console.log('Error getting getLLCSilver func ', err)
    }
}

const getLLCGold = async (state) => {
    try {
        const stateKey = getStateKey(state);
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_OhftO77vwfaxjp' AND lookup_key:'${stateKey}-llc-gold'`, {
          headers: {
              'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
          }
        });
        if (res.data.data && res.data.data.length > 0) {
            res.data.data[0].product = 'Silver';
            return res.data.data[0];
          } else {
            // Handle the case where data is not available
            console.error("No data received from Stripe API ");
        }
    }
    catch(err) {
        console.log('Error getting getLLCGold func ', err)
    }
}

const getCorpSilver = async (state) => {
    try {
        const stateKey = getStateKey(state);
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_P0RY5nExt2q8nE' AND lookup_key:'${stateKey}-corp-silver'`, {
          headers: {
              'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
          }
        });

        if (res.data.data && res.data.data.length > 0) {
            res.data.data[0].product = 'Silver';
            return res.data.data[0];
          } else {
            console.error("No data received from Stripe API ");
        
        }
    }
    catch(err) {
        console.log('Error getting getCorpSilver func ', err)
    }
}

const getCorpGold = async (state) => {
    try {
        const stateKey = getStateKey(state);
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_Oj65yZwYrReuES' AND lookup_key:'${stateKey}-corp-gold'`, {
          headers: {
              'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
          }
        });

        if (res.data.data && res.data.data.length > 0) {
            res.data.data[0].product = 'Gold';
            return res.data.data[0];
        } else {
            console.error("No data received from Stripe API ");
        }
    }
    catch(err) {
        console.log('Error getting getCorpGold func', err)
    }
}

const getCorpPlat = async (state) => {
    try {
        const stateKey = getStateKey(state);
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_Oj67AQ1Qc24s5x' AND lookup_key:'${stateKey}-corp-plat'`, {
          headers: {
              'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
          }
        });

        if (res.data.data && res.data.data.length > 0) {
            res.data.data[0].product = 'Platinum';
            return res.data.data[0];
        } 
        else {
            console.error("No data received from Stripe API ");
        }
    }
    catch(err) {
        console.log('Error getting getCorpPlat func', err)
    }
}

export {
    getLLCSilver,
    getLLCGold,
    getCorpSilver,
    getCorpGold,
    getCorpPlat
}