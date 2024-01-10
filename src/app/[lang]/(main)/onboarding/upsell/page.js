
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
  const complianceReminder = await getComplianceReminder();
  const apostille = await getApostille();

  return (
    <React.Fragment>
        <Content
          lang={lang} 
          officeSpaceMonthly={officeSpaceMonthly}
          officeSpaceYearly={officeSpaceYearly}
          virtualMailBoxYearly={virtualMailBoxYearly}
          virtualMailBoxMonthly={virtualMailBoxMonthly}
          EIN={EIN}
          complianceReminder={complianceReminder}
          apostille={apostille}
        />
    </React.Fragment>
  )
}

export default Page