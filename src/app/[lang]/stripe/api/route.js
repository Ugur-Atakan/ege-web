import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export async function POST(req) {
  const { data } = await req.json();
  // const { amount } = data;

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
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
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