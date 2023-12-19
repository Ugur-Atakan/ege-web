import axios from 'axios'

//! Monthly and Yearly Payment
export const getVirtualMailBoxYearly = async () => {
    try {
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_PD5qzXIw3sTvdq' AND lookup_key:'virtual-mailbox-yearly'`, {
            headers: {
                'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
            }
        });
        return res.data;
    }
    catch(err) {
        console.log('Error getting virtualMailBox', err)
    }
}

export const getVirtualMailBoxMonthly = async () => {
    try {
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_PD5qzXIw3sTvdq' AND lookup_key:'virtual-mailbox-monthly'`, {
            headers: {
                'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
            }
        });
        return res.data;
    }
    catch(err) {
        console.log('Error getting virtualMailBox', err)
    }
}

export const getOfficeSpaceYearly= async () => {
    try {
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_PD5p1V4izG3HdZ' AND lookup_key:'office-space-yearly'`, {
            headers: {
                'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
            }
        });
        return res.data;
    }
    catch(err) {
        console.log('Error getting getOfficeSpace', err)
    }
}

export const getOfficeSpaceMonthly = async () => {
    try {
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_PD5p1V4izG3HdZ' AND lookup_key:'office-space-monthly'`, {
            headers: {
                'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
            }
        });
        return res.data;
    }
    catch(err) {
        console.log('Error getting getOfficeSpace', err)
    }
}

//! Get one time payment
export const getEIN = async () => {
    try {
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_PD5p0LvcijzpwV'`, {
            headers: {
                'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
            }
        });
        return res.data;
    }
    catch(err) {
        console.log('Error getting getEIN', err)
    }
}

export const getComplianceReminder = async () => {
    try {
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_PD5pPJsEJm05tX'`, {
            headers: {
                'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
            }
        });
        return res.data;
    }
    catch(err) {
        console.log('Error getting getComplianceReminder', err)
    }
}

export const getApostille = async () => {
    try {
        const res = await axios.get(`https://api.stripe.com/v1/prices/search?query=product:'prod_PDPV87HVXXu9cj'`, {
            headers: {
                'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
            }
        });
        return res.data;
    }
    catch(err) {
        console.log('Error getting getOfficeSpace', err)
    }
}