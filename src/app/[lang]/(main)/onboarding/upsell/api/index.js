//! Monthly and Yearly Payment
export const getVirtualMailBoxYearly = async () => {
    try {
        const res = await fetch(
            `https://api.stripe.com/v1/prices/search?query=product:'${process.env.VIRTUAL_MAILBOX_ID}' AND lookup_key:'virtual-mailbox-yearly'`,
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
            `https://api.stripe.com/v1/prices/search?query=product:'${process.env.VIRTUAL_MAILBOX_ID}' AND lookup_key:'virtual-mailbox-monthly'`,
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
            `https://api.stripe.com/v1/prices/search?query=product:'${process.env.OFFICE_SPACE_ID}' AND lookup_key:'office-space-yearly'`,
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
            `https://api.stripe.com/v1/prices/search?query=product:'${process.env.OFFICE_SPACE_ID}' AND lookup_key:'office-space-monthly'`,
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
            `https://api.stripe.com/v1/prices/search?query=product:'${process.env.EIN_ID}'`,
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
            `https://api.stripe.com/v1/prices/search?query=product:'${process.env.COMPLIANCE_REMINDER_ID}'`,
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
            `https://api.stripe.com/v1/prices/search?query=product:'${process.env.APOSTILLE_ID}'`,
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
