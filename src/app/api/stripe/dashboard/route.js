import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    const { customerID } = await req.json();

    const configuration = await stripe.billingPortal.configurations.create({
        business_profile: {
            headline: 'Registate partners with Stripe for simplified billing.',
        },
        features: {
            invoice_history: {
                enabled: true,
            },
        }
    })

    const session = await stripe.billingPortal.sessions.create({
        customer: customerID,
        return_url: 'https://tailwindui.com/components/ecommerce/page-examples/storefront-pages',
        // configuration: configuration.id,
    });

    return new Response(session.url, { status: 200 });
}