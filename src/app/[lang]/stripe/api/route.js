import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { data } = await req.json();
  const selectedPackage = data.payload.selectedPackage
  
  try {
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: Number(amount) * 100,
    //   currency: "USD",
    // });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'USD',
            product_data: {
              name: selectedPackage[0].orderPackage,
            },
            unit_amount: selectedPackage[0].orderPackagePrice,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      //TODO: query params for success and cancel, check the query param on the success || cancel
      //TODO: and do.
      success_url: 'http://localhost:3000/en/test', 
      cancel_url: 'http://localhost:3000/en/test',
    });

    return new NextResponse(session.url, { status: 200 });
  } catch (error) {
    return new NextResponse(error, {
      status: 400,
    });
  }
}