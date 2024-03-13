import { NextResponse } from "next/server";
import logger from '@/app/lib/logger'
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET() {
  return new NextResponse("Nothing to see here", { status: 200 });
}

export async function POST(req) {
  const { data } = await req.json();

  const packageName = data.payload;
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
      let session;
      if (subscriptionFlag === true) {
        session = await stripe.checkout.sessions.create({
          line_items: [
            {
              price: selectedPackage.priceID,
              quantity: 1,
            }
            ,...upsellsIDs.map(upsell => {
              return {
                price: upsell,
                quantity: 1,
              }
            })
          ],
          mode: 'subscription',
          success_url: process.env.SUCCESS_STRIPE_URL,
          cancel_url: process.env.FAIL_STRIPE_URL,
          metadata: {
            packageName,
            customerName,
            companyName,
            companyState,
            companyType,
            customerEmail,
            address,
            zipCode,
            city,
            country,
            upsellsStr,
            mutliBilling: false,
          },
          // customer_creation: 'if_required',
          customer_email: customerEmail,
          allow_promotion_codes: true
        });
      } else {
        if (upsellsIDs == null) {
          session = await stripe.checkout.sessions.create({
            line_items: [
              {
                price: selectedPackage.priceID,
                quantity: 1,
              }
            ],
            mode: 'payment',
            success_url: process.env.SUCCESS_STRIPE_URL,
            cancel_url: process.env.FAIL_STRIPE_URL,
            metadata: {
              packageName,
              customerName,
              companyName,
              companyState,
              companyType,
              customerEmail,
              address,
              zipCode,
              city,
              country,
              mutliBilling: false
            },
            customer_creation: 'always',
            customer_email: customerEmail,
            allow_promotion_codes: true
          });
        } else {
          session = await stripe.checkout.sessions.create({
            line_items: [
              {
                price: selectedPackage.priceID,
                quantity: 1,
              },...upsellsIDs.map(upsell => {
                return {
                  price: upsell,
                  quantity: 1,
                }
              })
            ],
            mode: 'payment',
            success_url: process.env.SUCCESS_STRIPE_URL,
            cancel_url: process.env.FAIL_STRIPE_URL,
            metadata: {
              packageName,
              customerName,
              companyName,
              companyState,
              companyType,
              customerEmail,
              address,
              zipCode,
              city,
              country,
              upsellsStr,
              mutliBilling: false
            },
            customer_creation: 'always',
            customer_email: customerEmail,
            allow_promotion_codes: true
          });
        }
    }
    logger.info({ message: `Stripe checkout session created - ${session.url}` })
    return new NextResponse(session.url, { status: 200 });
  } catch (error) {
    logger.error({ message: `Error in creating Stripe checkout session , filename: /api/stripe/route.js - ${error.message}` })
    return new NextResponse(error, {
      status: 400,
    });
   }
}