/* eslint-disable */
'use client'

import React, { useState } from 'react'
import Heading from './Heading'
import Cards from './Cards'
import Button from './Button'

import packageDataEN from '@/assets/json/packageDataEN.json'
import packageDataTR from '@/assets/json/packageDataTR.json'
import { useTranslation } from '@/i18n/client'

/**
 * Formation Content component
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {client}
 * @returns {JSX.Element} 
*/

const Content = ({ lang, cookie, silverProduct, goldProduct, platProduct }) => {
  const { t } = useTranslation(lang);
  // const pathname = usePathname();

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(-1);
  const selectedCompanyType = cookie.companyType === 'LLC' ? 'LLC' : 'C-corp';
  const selectedCompanyTypesEN = packageDataEN.packages.find((item) => item[selectedCompanyType]);
  const selectedCompanyTypesTR = packageDataTR.packages.find((item) => item[selectedCompanyType]);
  const selectedPackageVar = lang === 'en' ? selectedCompanyTypesEN : selectedCompanyTypesTR;
  const titles = selectedPackageVar[selectedCompanyType].map((item) => item.title);

  const handlePackageSelection = (selectedPackage, selectedIndex) => {
    setSelectedPackage(selectedPackage);
    setSelectedPackageIndex(selectedIndex);
  }

  return (
    <div className='mx-auto max-w-5xl p-4'>
      <Heading title={t('formation_title')} />

      <Cards 
        silverProduct={silverProduct}
        goldProduct={goldProduct}
        platProduct={platProduct}
        handlePackageSelection={handlePackageSelection}
        selectedPackageIndex={selectedPackageIndex}
        titles={titles}
      />

      <Button
          selectedPackage={selectedPackage}
          selectedCompanyType={selectedCompanyType}
          selectedPackageVar={selectedPackageVar}
          lang={lang}
          buttonText={t('formation_continue')}
          bottomText={t('formation_card_footer')}
      />
    </div>
  )
}

export default Content