/* eslint-disable */
'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { noinclude, arrowblack, arrowblue } from '@/assets/images'
import BackButton from '../../components/common/BackButton'

import axios from 'axios'
//import { readCookie, submitCookie } from '../../../lib/session/clientActions'

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

const Content = ({ lang, silverProduct, goldProduct, platProduct }) => {
  console.log(silverProduct, goldProduct, platProduct)

  const { t } = useTranslation(lang);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    clearPathnameLocalStorage('companyFormationCompleted');

    const checkRedirection = redirectToLastNullInternalFunnel();
    if (checkRedirection && !checkEqualPathName(pathname, checkRedirection)) {
      router.push(`/${lang}/v2/onboarding/${checkRedirection}`)
    }
  }, []);

  const [packagePrices, setPackagePrices] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(-1);
  const companyTypePlaceHolder = typeof window !== 'undefined' ? window.localStorage.getItem('companyType') : null;
  const selectedCompanyType = companyTypePlaceHolder === 'LLC' ? 'LLC' : 'C-corp';
  const selectedCompanyTypesEN = packageDataEN.packages.find((item) => item[selectedCompanyType]);
  const selectedCompanyTypesTR = packageDataTR.packages.find((item) => item[selectedCompanyType]);
  const selectedPackageVar = lang === 'en' ? selectedCompanyTypesEN : selectedCompanyTypesTR;

  const titles = selectedPackageVar[selectedCompanyType].map((item) => item.title);
  const [isLoading, setIsLoading] = useState(true);

  // const [cookie, setCookie] = useState({});
  // useEffect(()=> {
  //   const fetchCookie = async () => {
  //     const awaitCookie = await readCookie();
  //     console.log(awaitCookie)
  //     setCookie(awaitCookie);
  //   }
  //   fetchCookie();
  // },[])

  const handlePackageSelection = (selectedPackage, selectedIndex) => {
    setSelectedPackage(selectedPackage);
    setSelectedPackageIndex(selectedIndex);
  }

  const continueWithSelectedPackage = (index) => {
    if (packagePrices.length > 0) {
      setSelectedPackage(packagePrices[index]);

      const packages = getRandomPackages(packagePrices[index], selectedCompanyType , selectedPackageVar);
      
      if (selectedPackage) {
        if (typeof window !== 'undefined' && window.localStorage && window.location)
          window.localStorage.setItem('selectedPackage', JSON.stringify([{...packagePrices[index], features: packages}]));
          window.localStorage.setItem('companyFormationCompleted', true);
          router.push(`/${lang}/v2/onboarding/company-name`);
      }
    }
  }

  // Fetch Prices
  useEffect(() => {
    const companyState = (typeof window !== 'undefined') ? localStorage.getItem('companyState') : '';
    const companyType = (typeof window !== 'undefined') ? localStorage.getItem('companyType') : '';
  
    const fetchPrices = async () => {
      try {
        const res = await axios.get('/api/prices', {
          params: { 
            state: companyState,
            type: companyType
          }
        });
        
        const JSONData = res.data[0];

        const pricesArray = Object.keys(JSONData).map(key => {
          return { type: key, price: JSONData[key] };
        });

        setPackagePrices(pricesArray);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchPrices();
  }, []);

  if (isLoading) {
    return (
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-[#1649FF] border-8 h-64 w-64"></div>
      </div>
    )
  }

  return (
    <div className='bg-white'>
      <BackButton linkHref={`/${lang}/v2/onboarding/company-name`} buttonText={t('formation_back_button')} />
 
      <div className='mx-auto max-w-5xl p-4'>
        <Heading title={t('formation_title')} />

        <Cards 
          packagePrices={packagePrices}
          handlePackageSelection={handlePackageSelection}
          selectedPackageIndex={selectedPackageIndex}
          titles={titles}
        />

        <CardsFooter
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