import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET() {
  return new NextResponse("Nothing to see here", { status: 200 });
}

export async function POST(req) {
  const { data } = await req.json();

  const selectedPackage = data.payload.selectedPackage
  const companyName = data.payload.companyName
  const companyState = data.payload.companyState
  const companyType = data.payload.companyType
  const customerEmail = data.payload.companyContactEmail
  const address = data.payload.companyContactAddress
  const zipCode = data.payload.companyZipCode
  const city = data.payload.companyCity
  const country = data.payload.companyCountry

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'USD',
            product_data: {
              name: selectedPackage[0].orderPackage
            },
            unit_amount: selectedPackage[0].orderPackagePrice,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: process.env.SUCCESS_STRIPE_URL,
      cancel_url: process.env.FAIL_STRIPE_URL,
      metadata: { 
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

    return new NextResponse(session.url, { status: 200 });
  } catch (error) {
    return new NextResponse(error, {
      status: 400,
    });
  }
}