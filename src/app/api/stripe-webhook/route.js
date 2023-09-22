import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { headers } from 'next/headers'

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

        // Create JIRA customer and request
        // const accountId = await createCustomer('Display Name', 'email@example.com');
        // await createCustomerRequest(accountId, 'description', 'summary', 'companyName', 'companyState', 'companyType');
        // // Note: Fill in actual data above as per your needs.

        console.log(session)
        return new NextResponse(session.url, { status: 200 });
    } else {
        return new NextResponse('No action taken', { status: 400 });
    }
};