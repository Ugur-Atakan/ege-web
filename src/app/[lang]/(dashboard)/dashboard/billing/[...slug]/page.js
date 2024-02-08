import React from 'react'
import { getServerSession } from 'next-auth'
import Stripe from "stripe";
import { options } from '@/app/api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

const getStripeBillingDashboard = async (customerID) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try { 
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
        return_url: process.env.DASHBOARD_URL,
        // configuration: configuration.id,
    });

    return session.url;
  } catch (err) {
    console.log(err);
    return process.env.DASHBOARD_URL;
  }
}

const Page = async ({ params: { lang, slug } }) => {
  const session = await getServerSession(options);
  const stripeDashboardURL = await getStripeBillingDashboard('cus_PSoytglWYXlvzf');
  redirect(stripeDashboardURL);

  return (
    <div>
    </div>
  )
}

export default Page