import Stripe from 'stripe';
import { headers } from 'next/headers';
import logger from '@/app/lib/logger'
import { sendMail, mailBody, createUser, userAlreadyExists } from './util';

import {
    createCustomer,
    createCustomerRequest,
    resendInvitation
} from '@/app/lib/jira';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * @description Stripe webhook configured from stripe dashboard makes a post call to this
 * route. This route is responsible for creating a customer in Jira and sending an invitation
 * to the customer. It also creates a customer request in Jira.
 * @param {Headers} stripe-signature - Stripe Signature
 * @returns {string} url - Redirect URL (Either success of failure)
*/

export async function POST(req) {
    const headersList = headers();
    const sig = headersList.get('stripe-signature');

    const body = await req.text();
    let event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET_KEY
        );
    } catch (err) {
        logger.error({ message : `Stripe webhook Error: ${err.message}` })
        return new Response(`Webhook Error: ${err.message}`, {
            status: 400
        });
    }

    if (event.type === 'checkout.session.completed') {
        logger.info({ message: 'Checkout session completed.' })
        console.log('Checkout session completed');

        const session = event.data.object;
        const summary = `Start my Company - ${session.metadata.companyName}`;
        const description = `Please start my company - ${session.metadata.companyName}`;
        const name = session.metadata.customerName;
        const email = session.metadata.customerEmail;
        const address = session.metadata.address;
        const zipCode = parseInt(session.metadata.zipCode) || 1234;
        const city = session.metadata.city;
        const country = session.metadata.country;

        if (!email || !name || !address || !zipCode || !city || !country) {
            logger.error({ message : `Missing required fields for creating Jira customer - FileName: stripe-webhook-route.js` })
            return new Response('Missing required fields', { status: 400 });
        }

        const accountId = await createCustomer(
            name,
            email
        );

        if (accountId === null) {
            logger.error({ message : `Error creating customer in Jira - FileName: stripe-webhook-route.js` })
            return new Response('Error creating customer in Jira', {
                status: 500
            });
        }
        console.log('Customer with id: ', accountId, ' created')
        console.log('companyType ', session.metadata.companyType);

        const customerReq = await createCustomerRequest(
            accountId,
            description,
            summary,
            session.metadata.companyName,
            session.metadata.companyState,
            session.metadata.companyType,
            email,
            address,
            zipCode,
            city,
            country
        );

        if (!customerReq) {
            logger.error({ message : `Stripe webhook Error: ${err.message}` })
            return new Response('Error creating customer req in Jira', {
                status: 500
            });
        } else {
            logger.info({ message : `Jira User with ${accountId} created` })
        }
        
        console.log('Customer request with id');
        const enableToken = await createUser(name, email, session.metadata.companyName, session.metadata.companyState, session.metadata.packageName);
        
        //! PROBLEM HERE
        if (enableToken.status === 409) {
            console.log('User already exists');
            const mBody = userAlreadyExists();
            sendMail("Registate@gmail.com", email, "Congratulations on your company creation!", mBody);
        } else if (enableToken.status === 200) {
            const token = await enableToken.text();
            const mBody = mailBody(token);
            const sendEmail = sendMail("Registate@gmail.com", email, "Congratulations! Your dashboard access", mBody);
        }

        const invite = await resendInvitation(session.customer_details.email);
        // Future DB calls here.
        return new Response(session.url, { status: 200 });
    } else {
        logger.error({ message : `No action taken on webhook - FileName: stripe-webhook-route.js` })
        return new Response('No action taken', { status: 400 });
    }
}