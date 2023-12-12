import axios from 'axios'
import { getStateKey } from '@/app/lib/stateLookUp';

const getLLCSilver = async (state) => {  
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

const getLLCGold = async (state) => {
    try {
        const stateKey = getStateKey(state);
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_OhftO77vwfaxjp' AND lookup_key:'${stateKey}-llc-gold'`, {
          headers: {
              'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
          }
        });
        res.data.data[0].product = 'Gold';
        return res.data;
    }
    catch(err) {
        console.log('Error getting getPosts', err)
    }
}

const getCorpSilver = async (state) => {
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

const getCorpGold = async (state) => {
    try {
        const stateKey = getStateKey(state);
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_Oj65yZwYrReuES' AND lookup_key:'${stateKey}-corp-gold'`, {
          headers: {
              'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
          }
        });
        res.data.data[0].product = 'Gold';
        return res.data;
    }
    catch(err) {
        console.log('Error getting getPosts', err)
    }
}

const getCorpPlat = async (state) => {
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

export {
    getLLCSilver,
    getLLCGold,
    getCorpSilver,
    getCorpGold,
    getCorpPlat
}