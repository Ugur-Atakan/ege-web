import { Navbar } from '../components/Navbar'
import React from "react";

import OnboardingForm from '../components/OnboardingForm'

//Define Pricing component
export function Onboarding () {
  return (
    <main className="mt-16 sm:mt-24">
        <Navbar />
        <div className="mx-auto max-w-7xl bg-white py-24 px-4 sm:px-6 lg:px-8">
             <div id="description">
                <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
                Simple and clear pricing plans
                </h2>
                <h2 className="mt-8 font-bold tracking-tight text-gray-600 ">
                We make pricing simple and clear to ensure you are never caught off guard by any hidden fees
                </h2>
            </div>
            <div id="onboardingForm" className="mt-24 space-y-12 lg:grid lg:grid-cols-1 lg:gap-x-8 lg:space-y-0">
                <div className="relative flex flex-col rounded-6xl border border-gray-200 bg-white p-8 shadow-sm">
                    <div className="flex-1">
                        <h3 className="text-3xl text-center font-semibold text-gray-900">Onboarding Form</h3>
                        <p className="mt-6 text-gray-500">Fill out the form below to get started</p>
                        <OnboardingForm />
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
