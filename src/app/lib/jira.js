// Define JIRA API Credentials
const JIRA_EMAIL = process.env.JIRA_USER_EMAIL;
const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;
const JIRA_BASE_URL = process.env.JIRA_BASE_URL;
const AUTH_STRING = `Basic ${Buffer.from(JIRA_EMAIL + ':' + JIRA_API_TOKEN).toString('base64')}`;

// Create a new JIRA Service Desk customer
async function createCustomer(displayName, email) {
    try {
        const response = await fetch(`${JIRA_BASE_URL}/rest/servicedeskapi/customer`, {
            method: 'POST',
            headers: {
                'Authorization': AUTH_STRING,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                displayName,
                email,
            }),
        });

        const data = await response.json();
        console.log('Customer created')
        return data.accountId;
    }
    catch {
        console.log('Error creating customer, trying to find existing customer')
        const response = await fetch(`${JIRA_BASE_URL}/rest/servicedeskapi/customer`, {
            method: 'GET',
            headers: {
                'Authorization': AUTH_STRING,
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();

        for (let i = 0; i < data.values.length; i++) {
            if (data.values[i].emailAddress === email) {
                return data.values[i].accountId;
            }
        }

        return null;
    }
}

async function createCustomerRequest(
    accountId, description, summary, 
    companyName, companyState, companyType,
    email, address, zipCode, city, country
){
    const addressParts = address.split(',');
    const addressFirstHalf = addressParts.slice(0, addressParts.length / 2).join(',');
    const addressSecondHalf = addressParts.slice(addressParts.length / 2).join(',');

    const response = await fetch(`${JIRA_BASE_URL}/rest/servicedeskapi/request`, {
        method: 'POST',
        headers: {
            'Authorization': AUTH_STRING,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            requestTypeId: process.env.JIRA_REQUEST_TYPE_ID, 
            serviceDeskId: process.env.JIRA_SERVICE_DESK_ID,
            raiseOnBehalfOf: accountId,
            requestFieldValues: {
                description,
                summary,
                customfield_10047: companyName,
                customfield_10046: { value: companyState },
                customfield_10045: { value: companyType },
                customfield_10049:  email,
                customfield_10050:  addressFirstHalf,
                customfield_10051:  addressSecondHalf,
                customfield_10052:  city,
                customfield_10053:  zipCode,
                customfield_10054:  country 
            },
        }),
    });

    const data = await response.json();
    return data;
}

// Create createContactUsRequest
async function createContactUsRequest(
    accountId, description, displayName
){
    const summary = `Contact Us Form - ${displayName}`;

    const response = await fetch(`${JIRA_BASE_URL}/rest/servicedeskapi/request`, {
        method: 'POST',
        headers: {
            'Authorization': AUTH_STRING,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            requestTypeId: 2, 
            serviceDeskId: process.env.JIRA_SERVICE_DESK_ID,
            raiseOnBehalfOf: accountId,
            requestFieldValues: {
                description,
                summary
            },
        }),
    });

    const data = await response.json();
    return data;
}

// Resend invitation
async function resendInvitation(email) {
    const response = await fetch(`${JIRA_BASE_URL}/rest/servicedesk/1/pages/people/customers/pagination/REQ/invite/resend`, {
        method: 'POST',
        headers: {
            'Authorization': AUTH_STRING,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
        }),
    });

    if (response.ok) {
        return { success: true };
    } else {
        const data = await response.json();
        throw new Error(data.errorMessages.join(', '));
    }
}

export { createCustomer, createCustomerRequest, createContactUsRequest, resendInvitation };