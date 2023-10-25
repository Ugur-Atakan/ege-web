import { createCustomer, createContactUsRequest } from '../../../lib/jira'

/**
 * @type {POST route}
 * @returns {object} Response object with status code and message
 */

// Uses createCustomer and createContactUsRequest from lib/jira.js

export async function POST(request) {
    try{ 
        const requestBody = await request.json()
        const { fullName, email, message } = requestBody

        const customerId = await createCustomer(fullName, email)
        if (customerId === null) {
            return new Response('Error creating customer in Jira', {
                status: 500
            });
        }
        
        const req = await createContactUsRequest(customerId, message, fullName)
        if (req === null) {
            return new Response('Error creating Contact Us request', {
                status: 500
            });
        }
        
        return new Response('Request created', {
            status: 200
        });
    }
    catch { 
        return new Response('Error creating request', {
            status: 500
        });
    }

}
