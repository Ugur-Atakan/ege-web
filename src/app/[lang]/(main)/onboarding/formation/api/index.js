import axios from 'axios'
import { getStateKey } from '@/app/lib/stateLookUp';

const getLLCSilver = async (state) => {  
    try {
      console.log('State from cookie in getLLCSilver func: ', state);
      const stateKey = getStateKey(state);
      const reqURL = `https://api.stripe.com/v1/prices/search?query=product:'${process.env.LLC_SILVER_ID}' AND lookup_key:'${stateKey}-llc-silver'`
      
      const res = await axios.get(reqURL, {
        headers: {
            'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
        }
      });


      if (res.data.data && res.data.data.length > 0) {
        res.data.data[0].product = 'Silver';
        return res.data.data[0];
      } else {
        console.error("No data received from Stripe API");
      }
      
      return stateInfo.data;
    }
    catch(err) {
      console.log('Error getting getLLCSilver func ', err)
    }
}

const getLLCGold = async (state) => {
    try {
        console.log('State from cookie in getLLCGold func: ', state);
        const stateKey = getStateKey(state);
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'${process.env.LLC_GOLD_ID}' AND lookup_key:'${stateKey}-llc-gold'`, {
          headers: {
              'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
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
        console.log('State from cookie in getCorpSilver func: ', state);
        const stateKey = getStateKey(state);
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'${process.env.CORP_SILVER_ID}' AND lookup_key:'${stateKey}-corp-silver'`, {
          headers: {
              'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
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
        console.log('State from cookie in getCorpGold func: ', state);
        const stateKey = getStateKey(state);
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'${process.env.CORP_GOLD_ID}' AND lookup_key:'${stateKey}-corp-gold'`, {
          headers: {
              'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
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
        console.log('State from cookie in getCorpPlat func: ', state);
        const stateKey = getStateKey(state);
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'${process.env.CORP_PLAT_ID}' AND lookup_key:'${stateKey}-corp-plat'`, {
          headers: {
              'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
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