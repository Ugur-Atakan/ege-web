/* eslint-disable */
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { submitCookie } from '@/app/lib/session/clientActions' 

import { noinclude, arrowblack, arrowblue } from '@/assets/images'
import BackButton from '../../components/common/BackButton'
import Heading from './Heading'
import Cards from './Cards'
import CardsFooter from './CardsFooter'

import packageDataEN from '@/assets/json/packageDataEN.json'
import packageDataTR from '@/assets/json/packageDataTR.json'

import { usePathname, useRouter } from 'next/navigation'
import { redirectToLastNullInternalFunnel, checkEqualPathName, clearPathnameLocalStorage } from '@/app/lib/utils'
import { getRandomPackages } from '../utils/util'
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
  const router = useRouter();


  const [packagePrices, setPackagePrices] = useState([]);
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

  //! LOGIC HATASI VAR
  const continueWithSelectedPackage = (index) => {
    if (packagePrices.length > 0) {
      setSelectedPackage(packagePrices[index]);

      const packages = getRandomPackages(packagePrices[index], selectedCompanyType , selectedPackageVar);      
      if (selectedPackage) {
        const cke = {
          ...cookie,
          selectedPackage: JSON.stringify([{ ...packagePrices[index], features: packages }])
        };

        const sendCookie = async () => { await submitCookie(cke) }
        sendCookie();
        router.push(`/${lang}/onboarding/company-name`);
        // router.refresh();
      }
    }
  }

  return (
    <div className='bg-white'>
      <BackButton linkHref={`/${lang}/onboarding/state`} buttonText={t('formation_back_button')} />
 
      <div className='mx-auto max-w-5xl p-4'>
        <Heading title={t('formation_title')} />

        <Cards 
          silverProduct={silverProduct}
          goldProduct={goldProduct}
          platProduct={platProduct}
          packagePrices={packagePrices}
          handlePackageSelection={handlePackageSelection}
          selectedPackageIndex={selectedPackageIndex}
          titles={titles}
        />

        <CardsFooter
            cookie={cookie}
            selectedPackage={selectedPackage}
            selectedCompanyType={selectedCompanyType}
            selectedPackageVar={selectedPackageVar}
            lang={lang}
            buttonText={t('formation_continue')}
            bottomText={t('formation_card_footer')}
        />
      </div>
          
      <div className='mx-auto max-w-5xl p-4'>
        <div className="px-6 lg:px-8 overflow-x-scroll overflow-y-hidden">
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle">
                <table className="min-w-full border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="w-2/5 sticky top-0 z-10 border-b border-gray-300 bg-white py-3.5 pr-3 text-left text-[26px] md:text-4xl font-semibold text-[#222222] leading-6 md:leading-[44px] backdrop-blur backdrop-filter"
                      >
                        {t('formation_detail_title')}
                        <span className='text-base leading-4 md:leading-normal pt-2 md:pt-0 md:text-lg block font-semibold'>{t('formation_detail_description')}</span>
                      </th>
                      {packagePrices.map((value, index) => (
                        <th
                          key={index}
                          scope="col"
                          className={index === packagePrices.length - 1
                            ? "capitalize w-1/5 sticky top-0 z-10 border-b border-gray-300 bg-white px-3 py-3.5 text-center whitespace-nowrap md:whitespace-normal text-2xl font-semibold text-[#1649FF] backdrop-blur backdrop-filter sm:table-cell"
                            : "capitalize w-1/5 sticky top-0 z-10 border-b border-gray-300 bg-white whitespace-nowrap md:whitespace-normal px-3 py-3.5 text-center text-2xl font-semibold text-[#222222] backdrop-blur backdrop-filter sm:table-cell"}
                        >
                          {value.type}
                          <span className='text-lg md:text-[16px] block font-semibold'>{'$' + (value.price)}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  
                  {/* Table body */}
                  <tbody>         
                    { selectedCompanyType === 'LLC' ? (
                      selectedPackageVar['LLC'].map((packageItem, packageIndex) => (
                        <React.Fragment key={packageIndex}>
                          <tr>
                            <td
                              colSpan="2"
                              className="text-2xl font-semibold leading-8 text-[#222222] pb-8 pt-16"
                            >
                              {packageItem.title}
                            </td>
                          </tr>
                          { packageItem.features.map((feature, featureIndex) => (
                            <tr key={featureIndex}>
                              <td className='font-semibold text-lg text-left leading-6 text-[#222222] py-4'>
                                {feature.title}
                              </td>
                              <td className='font-semibold text-lg text-center leading-6 text-[#222222] py-4 lg:border-l-[1px] lg:border-[#C8C8C8]'>
                                <div className='flex items-center justify-center'>
                                  <Image src={feature.silver ? arrowblack : noinclude} className='h-6 w-6' alt='tick' />
                                </div>
                              </td>
                              <td className='font-semibold text-lg text-center leading-6 text-[#222222] py-4 lg:border-l-[1px] lg:border-[#C8C8C8]'>
                                <div className='flex items-center justify-center'>
                                  <Image src={feature.gold ? arrowblue : noinclude} className='h-6 w-6' alt='tick' />
                                </div>
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))
                    ) : (
                      selectedPackageVar['C-corp'].map((packageItem, packageIndex) => (
                        <React.Fragment key={packageIndex}>
                          <tr>
                            <td colSpan="2" className="text-2xl font-semibold leading-8 text-[#222222] pb-8 pt-16">
                              {packageItem.title}
                            </td>
                          </tr>
                          {packageItem.features.map((features, detailIndex) => (
                            <tr key={detailIndex}>
                              <td className="font-semibold text-lg text-left leading-6 text-[#222222] lg:pr-12 py-4">
                                  {features.title}
                                </td>
                                <td className='font-semibold text-lg text-center leading-6 text-[#222222] py-4 lg:border-l-[1px] lg:border-[#C8C8C8]'>
                                  <div className='flex items-center justify-center'>
                                    <Image src={features.silver ? arrowblack : noinclude} className='h-6 w-6' alt='tick' />
                                  </div>
                                </td>
                                <td className='font-semibold text-lg text-center leading-6 text-[#222222] py-4 lg:border-l-[1px] lg:border-[#C8C8C8]'>
                                  <div className='flex items-center justify-center'>
                                    {packagePrices.length < 3 ? (
                                      <Image src={features.gold ? arrowblue : noinclude} className='h-6 w-6' alt='tick' />
                                    ) : (
                                      <Image src={features.gold ? arrowblack : noinclude} className='h-6 w-6' alt='tick' />
                                    )}
                                  </div>
                                </td>
                                {packagePrices.length >= 3 &&
                                  <td className='font-semibold text-lg text-center leading-6 !text-[#1649FF] py-4 lg:border-l-[1px] lg:border-[#C8C8C8]'>
                                    <div className='flex items-center justify-center'>
                                      <Image src={features.platinum ? arrowblue : noinclude} className='h-6 w-6' alt='tick' />
                                    </div>
                                  </td>
                                }
                              </tr>
                            ))}
                        </React.Fragment>
                      ))
                    )}
                  </tbody>
                  
                  {/* Bottom buttons */}
                  {selectedCompanyType === 'LLC' ? (
                      <tbody>
                        <tr>
                          <td>
                          </td>
                          <td>
                            <div
                              onClick={() => {continueWithSelectedPackage(0)}} 
                              className='flex items-center justify-center bg-[#9EE248] text-[#222222] font-semibold rounded-2xl p-2.5 m-5 cursor-pointer'>
                              Start with Gold
                            </div>
                          </td>
                          <td>
                            <div
                              onClick={() => {continueWithSelectedPackage(1)}}
                              className='flex items-center justify-center bg-[#1649FF] text-white font-semibold rounded-2xl p-2.5 m-5 cursor-pointer'>
                              Start with Silver
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ) : (
                      <tbody>
                        <tr>
                          <td>
                          </td>
                          <td>
                            <div
                              onClick={() => {continueWithSelectedPackage(0)}}
                              className='flex items-center justify-center bg-[#9EE248] text-[#222222] font-semibold rounded-2xl p-2.5 m-5 cursor-pointer'>
                              Silver
                            </div>
                          </td>
                          <td>
                            <div
                              onClick={() => {continueWithSelectedPackage(1)}}
                              className='flex items-center justify-center bg-[#1649FF] text-white font-semibold rounded-2xl p-2.5 m-5 cursor-pointer'>
                              Gold
                            </div>
                          </td>
                          {packagePrices.length >= 3 && <td>
                            <div
                              onClick={() => {continueWithSelectedPackage(2)}}
                              className='flex items-center justify-center bg-[#222222] text-white font-semibold rounded-2xl p-2.5 m-5 cursor-pointer'>
                              Platinum
                            </div>
                          </td>}
                        </tr>
                      </tbody>
                    )
                  }
                </table>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div >
  )
}

export default Content