import { NextResponse } from "next/server";
import logger from '@/app/lib/logger'
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET() {
  return new NextResponse("Nothing to see here", { status: 200 });
}

export async function POST(req) {
  const { data } = await req.json();
  
  const metadata = {
    priceType: data.payload.priceType,
    companyType: data.payload.companyType,
    companyName: data.payload.companyName,
    firstName: data.payload.firstName,
    lastName: data.payload.lastName,
    email: data.payload.email,
    priceID: data.payload.priceID,
    productName: data.payload.productName,
    type: 'product'
  };

  if (data.payload.type === 'registered-agent') {
    metadata.companyState = data.payload.companyState;
    metadata.authorizedOfficerFirstName = data.payload.authorizedOfficerFirstName;
    metadata.authorizedOfficerLastName = data.payload.authorizedOfficerLastName;
    metadata.authorizedOfficerTitle = data.payload.authorizedOfficerTitle;
  } else if (data.payload.type === 'cogs') {
    // Populate metadata specific to cogs
  } else if (data.payload.type === 'renewal-revival') {
    metadata.companyClosureReason = data.payload.companyClosureReason;
  }
  
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [{
        price: data.payload.priceID,
        quantity: 1,
      }],
      mode: metadata.priceType,
      success_url: process.env.SUCCESS_STRIPE_URL,
      cancel_url: process.env.FAIL_STRIPE_URL,
      metadata: metadata,
      customer_email: data.payload.email,
      customer_creation: 'always',
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