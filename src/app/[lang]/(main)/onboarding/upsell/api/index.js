//! Monthly and Yearly Payment
export const getVirtualMailBoxYearly = async () => {
    try {
        const res = await fetch(
            `https://api.stripe.com/v1/prices/search?query=product:'prod_PD5qzXIw3sTvdq' AND lookup_key:'virtual-mailbox-yearly'`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
                },
                cache: 'no-cache'
            }
        );
        const data = await res.json();
        return data;
    } catch (err) {
        console.log('Error getting virtualMailBox', err);
    }
};

export const getVirtualMailBoxMonthly = async () => {
    try {
        const res = await fetch(
            `https://api.stripe.com/v1/prices/search?query=product:'prod_PD5qzXIw3sTvdq' AND lookup_key:'virtual-mailbox-monthly'`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
                },
                cache: 'no-cache'
            }
        );
        const data = await res.json();
        return data;
    } catch (err) {
        console.log('Error getting virtualMailBox', err);
    }
};

export const getOfficeSpaceYearly = async () => {
    try {
        const res = await fetch(
            `https://api.stripe.com/v1/prices/search?query=product:'prod_PD5p1V4izG3HdZ' AND lookup_key:'office-space-yearly'`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
                },
                cache: 'no-cache'
            }
        );
        const data = await res.json();
        return data;
    } catch (err) {
        console.log('Error getting getOfficeSpace', err);
    }
};

export const getOfficeSpaceMonthly = async () => {
    try {
        const res = await fetch(
            `https://api.stripe.com/v1/prices/search?query=product:'prod_PD5p1V4izG3HdZ' AND lookup_key:'office-space-monthly'`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
                },
                cache: 'no-cache'
            }
        );
        const data = await res.json();
        return data;
    } catch (err) {
        console.log('Error getting getOfficeSpace', err);
    }
};

//! Get one-time payment
export const getEIN = async () => {
    try {
        const res = await fetch(
            `https://api.stripe.com/v1/prices/search?query=product:'prod_PD5p0LvcijzpwV'`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
                },
                cache: 'no-cache'
            }
        );
        const data = await res.json();
        return data;
    } catch (err) {
        console.log('Error getting getEIN', err);
    }
};

export const getComplianceReminder = async () => {
    try {
        const res = await fetch(
            `https://api.stripe.com/v1/prices/search?query=product:'prod_PD5pPJsEJm05tX'`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
                },
                cache: 'no-cache'
            }
        );
        const data = await res.json();
        return data;
    } catch (err) {
        console.log('Error getting getComplianceReminder', err);
    }
};

export const getApostille = async () => {
    try {
        const res = await fetch(
            `https://api.stripe.com/v1/prices/search?query=product:'prod_PDPV87HVXXu9cj'`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
                },
                cache: 'no-cache'
            }
        );
        const data = await res.json();
        return data;
    } catch (err) {
        console.log('Error getting getOfficeSpace', err);
    }
};
