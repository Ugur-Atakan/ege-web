'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
import Navbar from './components/Navbar'

export default function OnboardingLayout(params) {
  const pathname = usePathname();
  
  const steps  = [
    { id: '01', name: 'Company Type', pathname: `/${params.params.lang}/dashboard/onboarding`, status: 'current' },
    { id: '02', name: 'State', pathname: `/${params.params.lang}/dashboard/onboarding/state`, status: 'upcoming' },
    { id: '03', name: 'Formation', pathname: `/${params.params.lang}/dashboard/onboarding/formation`, status: 'upcoming' },
    { id: '04', name: 'Company Name', pathname: `/${params.params.lang}/dashboard/onboarding/company-review`, status: 'upcoming' },
    { id: '05', name: 'Review', pathname: `/${params.params.lang}/dashboard/onboarding/review`, status: 'upcoming' }
 ];

 const currentStepIndex = steps.findIndex(step => pathname === step.pathname);
 const parseSteps = steps.map((step, index) => {
    if (index < currentStepIndex) {
      step.status = 'complete';
    } else if (index === currentStepIndex) {
      step.status = 'current';
    } else {
      step.status = 'upcoming';
    }

    return step;
 });

 return (
    <section>
        <Navbar steps={parseSteps} />
        {params.children}
    </section>
  )
}
