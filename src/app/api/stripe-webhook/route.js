import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import logger from '../../lib/logger'
import {
    createCustomer,
    createCustomerRequest,
    resendInvitation
} from '../../lib/jira';

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
        return new NextResponse(`Webhook Error: ${err.message}`, {
            status: 400
        });
    }

    if (event.type === 'checkout.session.completed') {
        console.log('Checkout session completed');

        const session = event.data.object;
        const summary = `Start my Company - ${session.metadata.companyName}`;
        const description = `Please start my company - ${session.metadata.companyName}`;
        const email = session.customer_details.email;
        const address = session.metadata.address;
        const zipCode = parseInt(session.metadata.zipCode);
        const city = session.metadata.city;
        const country = session.metadata.country;

        const accountId = await createCustomer(
            session.customer_details.name,
            session.customer_details.email
        );
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
        console.log(`Jira User with ${accountId} created`);
        console.log(customerReq);

        const invite = await resendInvitation(session.customer_details.email);


        // DB CALLS HERE
        return new NextResponse(session.url, { status: 200 });
    } else {
        logger.error({ message : `No action taken on webhook - FileName: stripe-webhook-route.js` })
        return new NextResponse('No action taken', { status: 400 });
    }
}
