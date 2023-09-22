import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { headers } from 'next/headers'
import { createCustomer, createCustomerRequest } from '../../utils/jira'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST (req, res)  {
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
        return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }
    
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        // console.log(session)// 
        console.log(session.customer_details.name , session.customer_details.email)
        const accountId = await createCustomer(session.customer_details.name, session.customer_details.email);
        // await createCustomerRequest(accountId, 'description', 'summary', 'companyName', 'companyState', 'companyType');
        // // Note: Fill in actual data above as per your needs.

        // DB CALLS HERE
        console.log(accountId)
        return new NextResponse(session.url, { status: 200 });
    } else {
        return new NextResponse('No action taken', { status: 400 });
    }
};