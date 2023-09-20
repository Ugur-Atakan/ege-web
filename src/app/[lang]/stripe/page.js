"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './components/PaymentForm';

const stripePromise = loadStripe(
    process.env.STRIPE_PUBLISHABLE_KEY
);

export default function Home({ params: { lang } }) {
    return (
      <Elements stripe={stripePromise}>
        <PaymentForm lang={lang} />
      </Elements>
    );
}
