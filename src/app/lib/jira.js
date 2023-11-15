import logger from '@/app/lib/logger'

// Define JIRA API Credentials
const JIRA_EMAIL = process.env.JIRA_USER_EMAIL;
const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;
const JIRA_BASE_URL = process.env.JIRA_BASE_URL;
const AUTH_STRING = `Basic ${Buffer.from(JIRA_EMAIL + ':' + JIRA_API_TOKEN).toString('base64')}`;

async function checkCustomerExists(email) {
    try { 
        const response = await fetch(`${JIRA_BASE_URL}/rest/servicedeskapi/servicedesk/1/customer?query=${email}`, {
            method: 'GET',
            headers: {
                'Authorization': AUTH_STRING,
                'X-ExperimentalApi': 'opt-in',
                'Content-Type': 'application/json',
            }
        });
        
        const data = await response.json();
        
        for (let i = 0; i < data.values.length; i++) {
            if (data.values[i].emailAddress === email) {
                return data.values[i].accountId;
            }
        }
    }
    catch (err) {
        logger.error({ message : `Error in finding an already existed Jira user + ${err.message}` })
        return null;
    }
}


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

        
        if (response.status == 400) {
            logger.info({ message : 'A user with current email already found, finding ID of that user.' })
            const accountId = await checkCustomerExists(email);
            return accountId;
        }

        logger.info({ message : 'New user created in JIRA.' })
        const data = await response.json();
        return data.accountId;
    }
    catch (err) {
        logger.error({ message : `Error in creating a Jira user + ${err.message}` })
        return null;
    }
}

async function createCustomerRequest(
    accountId, description, summary, 
    companyName, companyState, companyType,
    email, address, zipCode, city, country
){
    try {
        const addressParts = address.split(' ');

        // Split the address in two halves
        const halfLength = Math.ceil(addressParts.length / 2); 
        const addressFirstHalf = addressParts.slice(0, halfLength).join(' ');
        const addressSecondHalf = addressParts.slice(halfLength).join(' ');

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
        
        logger.info({ message : `Jira customer request for ${email} created.` })
        const data = await response.json();
        return data;
    }
    catch(err) {
        console.log(err.message)
        logger.error({ message : `Error in creating a Jira user + ${err.message}` })
        return null;
    }
}

// Create createContactUsRequest
async function createContactUsRequest(
    accountId, description, displayName
){
    try {
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

        logger.info({ message : `Contact Us report for ${displayName} created.` })
        const data = await response.json();
        return data;
    }
    catch (err) {
        logger.error({ message : `Error creating a contact us report request + ${err.message}` })
        return null;
    }

}

// Resend invitation
async function resendInvitation(email) {
    try {        
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

        if (!response.ok) {
            logger.error({ message : `Error sending in resending invitation` })
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        logger.info({ message : `Invitation sent to ${email}.` })
        return { success: true };
    } catch (err) {
        logger.error({ message : `Error sending invitation + ${err.message}` })
        return null;
    }
}

export { createCustomer, createCustomerRequest, createContactUsRequest, resendInvitation };