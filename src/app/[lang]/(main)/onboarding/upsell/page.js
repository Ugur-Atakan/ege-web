
import React from 'react'
import Pricing from './components/Pricing'
import OneTimePackages from './components/OneTimePackages'
import { 
  getEIN, getComplianceReminder, getApostille,
  getOfficeSpaceMonthly, getOfficeSpaceYearly, getVirtualMailBoxYearly, getVirtualMailBoxMonthly
} from './api/index'
import Content from './components/Content'

const Page = async ({ params: { lang } }) => {
  const officeSpaceMonthly = await getOfficeSpaceMonthly();
  const officeSpaceYearly = await getOfficeSpaceYearly();
  const virtualMailBoxYearly = await getVirtualMailBoxYearly();
  const virtualMailBoxMonthly = await getVirtualMailBoxMonthly();

  const EIN = await getEIN();
  const apostille = await getApostille();
  // const complianceReminder = await getComplianceReminder();


  return (
    <main className='bg-[#111827]'>
        <Pricing 
          lang={lang}
          virtualMailBoxMonthly={virtualMailBoxMonthly}
          virtualMailBoxYearly={virtualMailBoxYearly}
          officeSpaceMonthly={officeSpaceMonthly}
          officeSpaceYearly={officeSpaceYearly}
          EIN={EIN}
          apostille={apostille}
        />
    </main>
  )
}

export default Page