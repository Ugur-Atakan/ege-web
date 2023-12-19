
import React from 'react'
import { readCookieFromStorageServerAction, removeCookieFromStorageServerAction } from '@/app/lib/session/serverActions'
import Pricing from './components/Pricing'
import OneTimePackages from './components/OneTimePackages'
import { 
  getEIN, getComplianceReminder, getApostille,
  getOfficeSpaceMonthly, getOfficeSpaceYearly, getVirtualMailBoxYearly, getVirtualMailBoxMonthly
} from './api/index'

const Page = async ({ params: { lang } }) => {
  const cookie = await readCookieFromStorageServerAction();

  const officeSpaceMonthly = await getOfficeSpaceMonthly();
  const officeSpaceYearly = await getOfficeSpaceYearly();
  const virtualMailBoxYearly = await getVirtualMailBoxYearly();
  const virtualMailBoxMonthly = await getVirtualMailBoxMonthly();

  const EIN = await getEIN();
  const complianceReminder = await getComplianceReminder();
  const apostille = await getApostille();
  
  return (
    <React.Fragment>
        <Pricing 
          lang={lang}
          companyState={cookie.companyState}
          complianceReminder={complianceReminder}
          virtualMailBoxMonthly={virtualMailBoxMonthly}
          virtualMailBoxYearly={virtualMailBoxYearly}
          officeSpaceMonthly={officeSpaceMonthly}
          officeSpaceYearly={officeSpaceYearly}
        />
        <OneTimePackages 
          lang={lang}
          companyState={cookie.companyState}
          apostille={apostille}
          EIN={EIN}
        />
    </React.Fragment>
  )
}

export default Page