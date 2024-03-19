import { NextResponse } from "next/server";
import logger from '@/app/lib/logger'
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET() {
  return new NextResponse("Nothing to see here", { status: 200 });
}

export async function POST(req) {
  const { data } = await req.json();
  console.log(data.payload)
  
  let priceID; 
  if (data.payload.type == 'registered-agent') {
    priceID = data.payload.recurrencePeriod;
    const companyType = data.payload.companyType;
    const firstName = data.payload.firstName;
    const lastName = data.payload.lastName;
    const email = data.payload.email;
    const authorizedOfficerFirstName = data.payload.authorizedOfficerFirstName;
    const authorizedOfficerLastName = data.payload.authorizedOfficerLastName;
    const authorizedOfficerTitle = data.payload.authorizedOfficerTitle;
  }
  
  try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
            {
              price: priceID,
              quantity: 1,
            }
          ],
          mode: 'subscription',
          success_url: process.env.SUCCESS_STRIPE_URL,
          cancel_url: process.env.FAIL_STRIPE_URL,
          metadata: {
              // packageName,
              // customerebru ucak Name,
              // companyName,
              // companyState,
              // companyType,
              // customerEmail,
              // address,
              // zipCode,
              // city,
              // country,
              // mutliBilling: false
            },
            // customer_creation: 'always',
            customer_email: 'waasiqmasood@gmail.com',
            allow_promotion_codes: true
      });
    
    logger.info({ message: `Stripe checkout session created - ${session.url}` })
    return new NextResponse(session.url, { status: 200 });
  } catch (error) {
    logger.error({ message: `Error in creating Stripe checkout session , filename: /api/stripe/route.js - ${error.message}` })
    return new NextResponse(error, {
      status: 400,
    });
   }
}