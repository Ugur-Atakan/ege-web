import { createCustomer, createContactUsRequest } from '../../../lib/jira'

/**
 * @type {POST route}
 * @returns {object} Response object with status code and message
 */

export async function POST(request) {
    const requestBody = await request.json()
    const { fullName, email, message } = requestBody
    console.log(email)

    const customerId = await createCustomer(displayName, email)
    const req = await createContactUsRequest(customerId, message, fullName)
    // console.log(req)
    
    return new Response('Request created', {
        status: 200
    });
}
