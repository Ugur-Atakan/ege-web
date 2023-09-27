import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { headers } from 'next/headers'
import { createCustomer, createCustomerRequest, resendInvitation } from '../../utils/jira'

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

        const summary = `Start my Company - ${session.metadata.companyName}`
        const description = `Please start my company - ${session.metadata.companyName}`
        const email = session.customer_details.email
        const address = session.metadata.address
        const zipCode = parseInt(session.metadata.zipCode)
        const city = session.metadata.city
        const country = session.metadata.country

        const accountId = await createCustomer(session.customer_details.name, session.customer_details.email);
        const customerReq = await createCustomerRequest(
            accountId, description, summary, session.metadata.companyName,
            session.metadata.companyState, session.metadata.companyType, 
            email, address, zipCode, city, country
        );

        // console.log(customerReq)

        // const invite = await resendInvitation(session.customer_details.email);
        // console.log(customerReq)
        // console.log(invite)

        // DB CALLS HERE
        return new NextResponse(session.url, { status: 200 });
    } else {
        return new NextResponse('No action taken', { status: 400 });
    }
};