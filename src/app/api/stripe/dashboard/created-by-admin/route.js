import { NextResponse } from "next/server";
import logger from '@/app/lib/logger'
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create stripe checkout session for 
export async function POST(req) {
  const data = await req.json();
  console.log(data)

  const subscriptionFlag = data.subscriptionFlag;
  const upsells = data.upsells || null;
  const priceID = data.priceID;
  const customerEmail = data.customerEmail;

  // Extract the upsell IDs  from upsell 
  let upsellsIDs = null;
  if (upsells != null) {
    upsellsIDs = upsells.map(upsell => upsell.id);
  }

  const hasMultipleBillingInterval = upsells.some(item => item.frequency === "monthly") && upsells.some(item => item.frequency === "annually");  

  if (hasMultipleBillingInterval) {
    try{
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: data,
              },
              unit_amount: totalPrice,
            },
            quantity: 1,
          }
        ],
        mode: 'payment',
        success_url: process.env.SUCCESS_STRIPE_URL,
        cancel_url: process.env.FAIL_STRIPE_URL,
        metadata: {
          createdByAdmin: true,
          multiBilling: true
        },
        customer_creation: 'always',
        customer_email: customerEmail,
        allow_promotion_codes: true
      });

      return new NextResponse(session.url, { status: 200 });
    }
    catch(error) {
      logger.error({ message: `Error in creating Stripe checkout session , filename: /api/stripe/route.js - ${error.message}` })
      return new NextResponse(error, {
        status: 400,
      });
    }
  }
  else {
    try {
      let session;
      if (subscriptionFlag === true) {
        session = await stripe.checkout.sessions.create({
          line_items: [
            {
              price: priceID,
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
            createdByAdmin: true,
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
                price: priceID,
                quantity: 1,
              }
            ],
            mode: 'payment',
            success_url: process.env.SUCCESS_STRIPE_URL,
            cancel_url: process.env.FAIL_STRIPE_URL,
            metadata: {
              createdByAdmin: true,
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
                price: priceID,
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
              createdByAdmin: true,
              mutliBilling: false
            },
            customer_creation: 'always',
            customer_email: customerEmail,
            allow_promotion_codes: true
          });
        }
    }
    logger.info({ message: `Admin company Stripe checkout session created - ${session.url}` })
    return new NextResponse(session.url, { status: 200 });
  } catch (error) {
    logger.error({ message: `Error in creating Stripe checkout session , filename: /api/stripe/created-by-admin/route.js - ${error.message}` })
    return new NextResponse(error, {
      status: 400,
    });
   }
  }
}