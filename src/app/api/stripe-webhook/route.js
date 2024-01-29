import Stripe from 'stripe';
import { headers } from 'next/headers';
import logger from '@/app/lib/logger'
import { 
    sendMail, createUserWithUpsells, mailBody,
    createUserWithoutUpsells, userAlreadyExists } from './util';

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

        const session = event.data.object;

        const currentUnixTimestamp = Math.floor(Date.now() / 1000);
        const nextYearUnixTimestamp = currentUnixTimestamp + (365 * 24 * 60 * 60);

        //* Create registered agent subscription in Stripe starting from next year
        const registeredAgentSub = await stripe.subscriptionSchedules.create({
            customer: session.customer,
            start_date: nextYearUnixTimestamp,
            end_behavior: 'release',
            phases: [
              {
                items: [
                  {
                    price: 'price_1OCRAeJuNLcMU2PocOGe0qJs',
                    quantity: 1,
                  },
                ],
                iterations: 12,
              },
            ],
        });
    
        const summary = `Start my Company - ${session.metadata.companyName}`;
        const description = `Please start my company - ${session.metadata.companyName}`;
        const customerStripeID = session.customer;
        const name = session.metadata.customerName;
        const email = session.metadata.customerEmail;
        const address = session.metadata.address;
        const companyType = session.metadata.companyType;
        const zipCode = parseInt(session.metadata.zipCode) || 1234;
        const city = session.metadata.city;
        const country = session.metadata.country;
        const multiBilling = session.metadata.multiBilling;
        let upsells = JSON.parse(session.metadata.upsellsStr);
        // check if upsells json is empty then nullify it 
        if (upsells.length === 0) { upsells = null; }
        
        //* Check if required fields are present
        if (!email || !name || !address || !zipCode || !city || !country) {
            logger.error({ message : `Missing required fields for creating Jira customer - FileName: stripe-webhook-route.js` })
            return new Response('Missing required fields', { status: 400 });
        }

        //* Adding upsells to the subscription if multiBilling is true
        if (multiBilling && upsells) {   
          const monthlyUpsells = upsells.filter(upsell => upsell.frequency === 'monthly');
          const annualUpsells = upsells.filter(upsell => upsell.frequency === 'annually');

          if (monthlyUpsells.length > 0) {
              // create a subscription for monthly upsells
              const monthlySub = await stripe.subscriptionSchedules.create({
                  customer: session.customer,
                  start_date: currentUnixTimestamp,
                  end_behavior: 'release',
                  phases: monthlyUpsells.map(upsell => ({
                      items: [{ price: upsell.id, quantity: 1 }],
                      iterations: 12,  // assuming a 12-month subscription
                  })),
              });
          }
      
          if (annualUpsells.length > 0) {
              // create a subscription for annual upsells
              const annualSub = await stripe.subscriptionSchedules.create({
                  customer: session.customer,
                  start_date: currentUnixTimestamp,
                  end_behavior: 'release',
                  phases: annualUpsells.map(upsell => ({
                      items: [{ price: upsell.id, quantity: 1 }],
                      iterations: 1,  // assuming a 1-year subscription
                  })),
              });
          }
      }

        //* Jira User Creation
        // const accountId = await createCustomer(
        //     name,
        //     email
        // );

        // if (accountId === null) {
        //     logger.error({ message : `Error creating customer in Jira - FileName: stripe-webhook-route.js` })
        //     return new Response('Error creating customer in Jira', {
        //         status: 500
        //     });
        // }
        // console.log('Customer with id: ', accountId, ' created')

        // const customerReq = await createCustomerRequest(
        //     accountId,
        //     description,
        //     summary,
        //     session.metadata.companyName,
        //     session.metadata.companyState,
        //     session.metadata.companyType,
        //     email,
        //     address,
        //     zipCode,
        //     city,
        //     country
        // );

        // if (!customerReq) {
        //     logger.error({ message : `Stripe webhook Error: ${err.message}` })
        //     return new Response('Error creating customer req in Jira', {
        //         status: 500
        //     });
        // } else {
        //     logger.info({ message : `Jira User with ${accountId} created` })
        // }
        
        //* DB User creation
        let enableToken = null;
        if (upsells) {
            enableToken = await createUserWithUpsells(name, email, session.metadata.companyName, session.metadata.companyState, companyType, session.metadata.packageName, address, zipCode, city, country, upsells, customerStripeID, session.amount_total/100);
            logger.info({ message : `User created with upsells` })
        } else {
            enableToken = await createUserWithoutUpsells(name, email, session.metadata.companyName, session.metadata.companyState, companyType, session.metadata.packageName, address, zipCode, city, country, customerStripeID, session.amount_total/100);
            logger.info({ message : `User created without upsells` })
        }

        // // console.log('enableToken ', enableToken);
        if (enableToken.status === 409) {
            console.log('User already exists');
            const mBody = userAlreadyExists();
            const mail = sendMail("Registate@gmail.com", email, "Congratulations on your company creation!", mBody);
        } else if (enableToken.status === 200) {
            const token = await enableToken.text();
            const mBody = mailBody(token);
            const mail = sendMail("Registate@gmail.com", email, "Congratulations! Your dashboard access", mBody);
            console.log('User created successfully')
            console.log(mail)
        }

        // const invite = await resendInvitation(session.customer_details.email);
        return new Response(session.url, { status: 200 });
    } else {
        logger.error({ message : `No action taken on webhook - FileName: stripe-webhook-route.js` })
        return new Response('No action taken', { status: 400 });
    }
}