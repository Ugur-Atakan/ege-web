import { NextResponse } from "next/server";
import logger from '@/app/lib/logger'
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * @GET /api/stripe
 * @type {route}
 * @type {API}
 * @description - Returns static String
*/

export async function GET() {
  return new NextResponse("Nothing to see here", { status: 200 });
}

/**
 * @POST /api/states
 * @type {route}
 * @type {API}
 * @description - Opens a Stripe checkout session
 * @param {object} req - Request object
 * @param {object} selectedPackage - Selected package object
 * @param {string} companyName - Company name
 * @param {string} companyState - Company state
 * @param {string} companyType - Company type
 * @param {string} customerEmail - Customer email
 * @param {string} address - Company address
 * @param {string} zipCode - Company zip code
 * @param {string} city - Company city
 * @param {string} country - Company country
 * @returns {String} - Returns Stripe checkout session URL
*/

export async function POST(req) {
  const { data } = await req.json();

  const selectedPackage = data.payload.selectedPackage;
  const companyName = data.payload.companyName;
  const companyState = data.payload.companyState;
  const companyType = data.payload.companyType;
  const customerName = data.payload.customerName;
  const customerEmail = data.payload.companyContactEmail;
  const address = data.payload.companyContactAddress;
  const zipCode = data.payload.companyZipCode;
  const city = data.payload.companyCity;
  const country = data.payload.companyCountry;

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'USD',
            product_data: {
              name: selectedPackage[0].type
            },
            unit_amount: selectedPackage[0].price * 100, // Stripe requires price in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: process.env.SUCCESS_STRIPE_URL,
      cancel_url: process.env.FAIL_STRIPE_URL,
      metadata: { 
        customerName,
        companyName,
        companyState,
        companyType,
        customerEmail,
        address,
        zipCode,
        city,
        country
      },
      customer_creation: 'always',
      customer_email: customerEmail
    });

    logger.info({ message: `Stripe checkout session created - ${session.url}` })
    return new NextResponse(session.url, { status: 200 });
  } catch (error) {
    logger.error({ message: `Error in creating Stripe checkout session - ${error.message}` })
    return new NextResponse(error, {
      status: 400,
    });
  }
}