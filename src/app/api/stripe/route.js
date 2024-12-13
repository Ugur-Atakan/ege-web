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

  const packageName = data.payload.selectedPackage.tierName;
  const companyName = data.payload.companyName;
  const companyState = data.payload.companyState;
  const companyType = data.payload.companyType;
  const customerName = data.payload.customerName;
  const customerEmail = data.payload.companyContactEmail;
  const address = data.payload.companyContactAddress;
  const zipCode = data.payload.companyZipCode;
  const city = data.payload.companyCity;
  const country = data.payload.companyCountry;
  const selectedPackage = data.payload.selectedPackage;
  const subscriptionFlag = data.payload.subscriptionFlag;
  const upsells = data.payload.upsells;
  const upsellsStr = JSON.stringify(upsells); // to send as metadata for webhook
  const totalPrice = data.payload.totalPrice;

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
                name: selectedPackage.tierName,
              },
              unit_amount: totalPrice,
            },
            quantity: 1,
          }
        ],
        mode: 'payment',
        billing_address_collection: 'required',
        success_url: process.env.SUCCESS_STRIPE_URL,
        cancel_url: process.env.FAIL_STRIPE_URL,
        custom_fields: [
          {
            key: 'customer_name',
            label: { 
              type: 'custom',
              custom: 'Customers name'
            },
            type: 'text'
          }
        ],
        invoice_creation: {
          enabled: true,
        },
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
          custom_fields: [
            {
              key: 'customer_name',
              label: { 
                type: 'custom',
                custom: 'Customers name'
              },
              type: 'text'
            }
          ],
          mode: 'subscription',
          billing_address_collection: 'required',
          success_url: process.env.SUCCESS_STRIPE_URL,
          cancel_url: process.env.FAIL_STRIPE_URL,
          invoice_creation: {
            enabled: true,
          },
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
            custom_fields: [
              {
                key: 'customer_name',
                label: { 
                  type: 'custom',
                  custom: 'Customers name'
                },
                type: 'text'
              }
            ],
            mode: 'payment',
            billing_address_collection: 'required',
            success_url: process.env.SUCCESS_STRIPE_URL,
            cancel_url: process.env.FAIL_STRIPE_URL,
            invoice_creation: {
              enabled: true,
            },
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
            custom_fields: [
              {
                key: 'customer_name',
                label: { 
                  type: 'custom',
                  custom: 'Customers name'
                },
                type: 'text'
              }
            ],
            mode: 'payment',
            billing_address_collection: 'required',
            success_url: process.env.SUCCESS_STRIPE_URL,
            cancel_url: process.env.FAIL_STRIPE_URL,
            invoice_creation: {
              enabled: true,
            },
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
}