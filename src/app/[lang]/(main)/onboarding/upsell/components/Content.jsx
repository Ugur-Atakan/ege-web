'use client'

import React, { useEffect, useState } from 'react'
import PricingCard from './PricingCard'
import { getPricing } from './one-time'
import { readCookie } from '@/app/lib/session/clientActions'  
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/i18n/client'
import Pricing from './Pricing'
import OneTimePackages from './OneTimePackages'

const Content = (props) => {
  const { lang, complianceReminder, EIN, apostille, virtualMailBoxMonthly, virtualMailBoxYearly, officeSpaceMonthly, officeSpaceYearly } = props;
  

  return (
    <main className="bg-[#111827]">
        {/* <OneTimePackages lang={lang} EIN={EIN} apostille={apostille} /> */}
    </main>
  )
}

export default Content