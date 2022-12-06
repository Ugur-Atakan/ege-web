import { Navbar } from '../components/Navbar'
import React from "react";

import OnboardingForm from '../components/OnboardingForm'

//Define Pricing component
export function Onboarding () {
  return (
    <main>
        <Navbar />
        <OnboardingForm />
    </main>
  )
}
