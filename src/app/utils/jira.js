// Define JIRA API Credentials
const JIRA_EMAIL = process.env.JIRA_USER_EMAIL;
const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;
const JIRA_BASE_URL = process.env.JIRA_BASE_URL;
const AUTH_STRING = `Basic ${Buffer.from(JIRA_EMAIL + ':' + JIRA_API_TOKEN).toString('base64')}`;

//TODO: To create a customer
// Create a new JIRA Service Desk customer
async function createCustomer(displayName, email) {
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
    return data.accountId;
}

//TODO: To create a customer request
/*Params: 
accountId: getting from jira
city,
zipCode,
address
summary: Start my Company - ${companyName}
description: 'Please start my company'
*/

async function createCustomerRequest(accountId, description, summary, companyName, companyState, companyType) {
    const response = await fetch(`${JIRA_BASE_URL}/rest/servicedeskapi/request`, {
        method: 'POST',
        headers: {
            'Authorization': AUTH_STRING,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            requestTypeId: "16", //TODO: env variable
            serviceDeskId: "1", //TODO: env variable
            raiseOnBehalfOf: accountId,
            requestFieldValues: {
                description,
                summary,
                customfield_10047: companyName,
                customfield_10046: { value: companyState },
                customfield_10045: { value: companyType },
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

export { createCustomer, createCustomerRequest, resendInvitation };