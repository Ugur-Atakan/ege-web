import products from './products.json'
import axios from 'axios'
import { Product } from '../classes/Product'

//# Change the prices w.r.t to production 

export const getProduct = async (slug) => {
    const productJSON = products.find(product => product.slug === slug);
    const product = new Product(productJSON.id, productJSON.name, productJSON.description, 
        productJSON.slug, productJSON.state, productJSON.type,
        {
            monthly: productJSON.pricing?.monthly || -1,
            yearly: productJSON.pricing?.yearly || -1,
            allStates: productJSON.pricing?.allStates || -1
        }, productJSON.features, productJSON.pricingFeatures, productJSON.faq, productJSON.hiw);

    if (slug == 'registered-agent') {
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_P0S4rDwBGueBoq'`, {
            headers: {
                'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
            }
        });

        const price = await res.data;
        for (let i = 0; i < price.data.length; i++) {
            if (price.data[i].lookup_key == 'delaware-monthly') {
                product.pricing.monthly = price.data[i].unit_amount/100;
            }
            else if (price.data[i].lookup_key == 'delaware-yearly') {
                product.pricing.yearly = price.data[i].unit_amount/100;
            }
            else if (price.data[i].lookup_key == 'all-states') {
                product.pricing.allStates = price.data[i].unit_amount/100;
            }
        }
    } else if (slug == 'certificate-of-good-standing') {
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_PNySiwdUDEYyM3'`, {
            headers: {
                'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
            }
        });
        const price = await res.data.data[0];
        product.pricing.oneTime = price.unit_amount/100;
    } else if (slug == 'renewal-and-revival') {
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_POGfU3L6JHrAzH'`, {
            headers: {
                'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
            }
        });
        const price = await res.data.data[0];
        product.pricing.oneTime = price.unit_amount/100;
    }
    return product;
}