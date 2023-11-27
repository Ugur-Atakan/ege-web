import axios from 'axios'

const getLLCSilver = async () => {  
    try {
      const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_P0QsJHkXZg2yQB' AND lookup_key:'WY-llc-silver'`, {
        headers: {
            'Authorization': `Bearer sk_test_51JOBwPJuNLcMU2Po0lqfI76r66Y2l7iSCY5y9YhiRL4aTLa0CoclZfxLbncpu6WDTnRhrmxFGnCB3iRrE2w1RgMf00dI72pw8P`
        }
      });
      return res.data;
    }
    catch(err) {
      console.log('Error getting getPosts', err)
    }
}

const getLLCGold = async () => {
    try {
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_OhftO77vwfaxjp' AND lookup_key:'DC-llc-gold'`, {
          headers: {
              'Authorization': `Bearer sk_test_51JOBwPJuNLcMU2Po0lqfI76r66Y2l7iSCY5y9YhiRL4aTLa0CoclZfxLbncpu6WDTnRhrmxFGnCB3iRrE2w1RgMf00dI72pw8P`
          }
        });
        return res.data;
    }
    catch(err) {
        console.log('Error getting getPosts', err)
    }
}

const getCorpSilver = async () => {
    try {
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_P0RY5nExt2q8nE' AND lookup_key:'WY-corp-silver'`, {
          headers: {
              'Authorization': `Bearer sk_test_51JOBwPJuNLcMU2Po0lqfI76r66Y2l7iSCY5y9YhiRL4aTLa0CoclZfxLbncpu6WDTnRhrmxFGnCB3iRrE2w1RgMf00dI72pw8P`
          }
        });
        return res.data;
    }
    catch(err) {
        console.log('Error getting getPosts', err)
    }
}

const getCorpGold = async () => {
    try {
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_Oj65yZwYrReuES' AND lookup_key:'WI-corp-gold'`, {
          headers: {
              'Authorization': `Bearer sk_test_51JOBwPJuNLcMU2Po0lqfI76r66Y2l7iSCY5y9YhiRL4aTLa0CoclZfxLbncpu6WDTnRhrmxFGnCB3iRrE2w1RgMf00dI72pw8P`
          }
        });
        return res.data;
    }
    catch(err) {
        console.log('Error getting getPosts', err)
    }
}

const getCorpPlat = async () => {
    try {
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_Oj67AQ1Qc24s5x' AND lookup_key:'DE-corp-plat'`, {
          headers: {
              'Authorization': `Bearer sk_test_51JOBwPJuNLcMU2Po0lqfI76r66Y2l7iSCY5y9YhiRL4aTLa0CoclZfxLbncpu6WDTnRhrmxFGnCB3iRrE2w1RgMf00dI72pw8P`
          }
        });
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