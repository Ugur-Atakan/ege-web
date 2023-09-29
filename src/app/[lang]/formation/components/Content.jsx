/* eslint-disable */
'use client';

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { bishopwhite, queencolor, kingblack, noinclude, arrowblack, arrowblue } from '../../../../images'

import packageDataEN from '../../../../assets/packageDataEN.json'
import packageDataTR from '../../../../assets/packageDataTR.json'

import { getRandomPackages } from '../utils/util'
import { useTranslation } from '../../../i18n/client'

export default function Content({ lang }) {
  const { t } = useTranslation(lang);

  let [packagePrices, setPackagePrices] = useState([]);
  let [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(-1);
  const companyTypePlaceHolder = typeof window !== 'undefined' ? window.localStorage.getItem('companyType') : null;

  const selectedCompanyType = companyTypePlaceHolder === 'LLC' ? 'LLC' : 'C-corp';
  const selectedCompanyTypesEN = packageDataEN.packages.find((item) => item[selectedCompanyType]);
  const selectedCompanyTypesTR = packageDataTR.packages.find((item) => item[selectedCompanyType]);
  const selectedPackageVar = lang === 'en' ? selectedCompanyTypesEN : selectedCompanyTypesTR;
  
  const titles = selectedPackageVar[selectedCompanyType].map((item) => item.title);
  const [isLoading, setIsLoading] = useState(true);

  const handlePackageSelection = (selectedPrice, selectedIndex) => {
    setSelectedPackage(selectedPrice);
    setSelectedPackageIndex(selectedIndex);
  }

  const continueWithSelectedPackage = (index) => {
    if (packagePrices.length > 0) {
      setSelectedPackage(packagePrices[index]);

      const packages = getRandomPackages(packagePrices[index], selectedCompanyType , selectedPackageVar);
      
      if (selectedPackage) {
        if (typeof window !== 'undefined' && window.localStorage && window.location)
          window.localStorage.setItem('selectedPackage', JSON.stringify([{...packagePrices[index], features: packages}]));
          window.location.href = `/${lang}/review`;
      }
    }
  }
  

  let companyState = ''
  let companyType = ''
  let companyName = ''

  useEffect(() => {
    companyState = window.localStorage.getItem('companyState');
    companyType = window.localStorage.getItem('companyType');
    companyName = window.localStorage.getItem('companyName');

    const fetchData = async () => {
      try {
        const res = await axios.get(`/${lang}/state/api/`);
        const statesJSON = res.data;

        const entityRes = await axios.get('/api/entityType');
        const entityTypeJSON = entityRes.data;

        if (companyState && companyType && companyName && statesJSON.length > 0 && entityTypeJSON.length > 0) {
          let foundState = statesJSON.find((s) => s.state === companyState);
          let foundType = entityTypeJSON.find((t) => t.entityType === companyType);

          if (foundState && foundType) {
            const response = await axios.get('/api/prices', {
              params: {
                stateID: foundState.id,
                entityTypeID: foundType.id,
            }});

            const JSONData = response.data;
            setPackagePrices(JSONData);
          }
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [companyState, companyType, companyName, lang]);

  if (isLoading) {
    return (
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-[#1649FF] border-8 h-64 w-64"></div>
      </div>
    )
  }

  return (
    <div className='bg-white'>
      <div className="mx-auto p-6 lg:px-8">
        <Link className='flex items-center gap-2' href={`/${lang}/company-name`}>
          <ArrowLeftIcon className='text-[#1649FF] h-[18px] w-[18px]' />
          <span className='text-[#1649FF] text-lg font-semibold'>{t('formation_back_button')}</span>
        </Link>
      </div>
     
      <div className='mx-auto max-w-5xl p-4'>
        <div className='text-left md:text-center'>
          <h1 className='font-semibold text-[26px] md:text-[40px] leading-[44px] text-[#222222]'>{t('formation_title')}</h1>
        </div>
        
        <div className={packagePrices.length < 3 ? 'grid md:grid-cols-2 gap-5 py-12' : 'grid md:grid-cols-3 gap-5 py-12'}>
          {packagePrices.map((prices, index) => (
            <div
              key={index}
              className={`flex flex-col gap-5 p-12 rounded-[20px] h-[35rem] overflow-hidden cursor-pointer ${index === selectedPackageIndex ? '!border-[3px] border-[#9EE248]' : ''
                } ${index === 0
                  ? 'border border-[#9EE248] hover:bg-[#9EE248]'
                  : index === 1
                    ? 'bg-[#1649FF] hover:border-[#9EE248] hover:border'
                    : index === 2
                      ? 'border bg-[#222222] hover:border-[#9EE248] hover:border' : ''
                }`}
              onClick={() => handlePackageSelection(prices, index)}
            >
              <h2 className={index === 0 ? 'font-semibold text-[40px] leading-[44px] text-[#222222]' : 'font-semibold text-[40px] leading-[44px] text-white'}>{prices.orderPackage.replace('Registate', '')}</h2>
              <p className={index === 0 ? 'text-lg font-semibold leading-6 text-[#222222]' : 'text-lg font-semibold leading-6 text-white'}>
                {titles[index]}
              </p>  
              <p className={index === 0 ? 'font-semibold text-[28px] leading-8 text-[#222222]' : 'font-semibold text-[28px] leading-8 text-white'}>{'$' + (prices.orderPackagePrice / 100).toFixed(0)}</p>
              <Image src={index === 0 && bishopwhite || index === 1 && queencolor || index === 2 && kingblack} className='' alt='llc package' />
            </div>
          ))}
        </div>
      </div>
      <div className='mx-auto max-w-xs'>
        <div
          className='w-full flex flex-col items-center justify-center font-semibold bg-[#1649FF] text-white rounded-[20px] p-5 cursor-pointer'
          onClick={() => {
            const packages = getRandomPackages(selectedPackage,selectedCompanyType,selectedPackageVar);
            
            if (selectedPackage) {
              if (typeof window !== 'undefined' && window.localStorage && window.location)
                window.localStorage.setItem('selectedPackage', JSON.stringify([{...selectedPackage, features: packages}]));
                window.location.href = `/${lang}/review`;
            }
          }}
        >
          {t('formation_continue')}
        </div>
        <div className='w-full flex flex-col items-center justify-center'>
          <p className="md:py-6 font-semibold  text-[22px] leading-[26px] text-[#1649FF]">{t('formation_card_footer')}</p>
        </div>
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
                      {packagePrices.map((price, index) => (
                        <th
                          key={index}
                          scope="col"
                          className={index === packagePrices.length - 1
                            ? "w-1/5 sticky top-0 z-10 border-b border-gray-300 bg-white px-3 py-3.5 text-center whitespace-nowrap md:whitespace-normal text-2xl font-semibold text-[#1649FF] backdrop-blur backdrop-filter sm:table-cell"
                            : "w-1/5 sticky top-0 z-10 border-b border-gray-300 bg-white whitespace-nowrap md:whitespace-normal px-3 py-3.5 text-center text-2xl font-semibold text-[#222222] backdrop-blur backdrop-filter sm:table-cell"}
                        >
                          {price.orderPackage.replace('Registate', '')}
                          <span className='text-lg md:text-[16px] block font-semibold'>{'$' + (price.orderPackagePrice / 100).toFixed(0)}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                    <tbody>         
                    {selectedCompanyType === 'LLC' ? (
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
                          {packageItem.features.map((feature, featureIndex) => (
                            <tr key={featureIndex}>
                              <td className='font-semibold text-lg text-left leading-6 text-[#222222] py-4'>
                                {feature.title}
                              </td>
                              <td className='font-semibold text-lg text-center leading-6 text-[#222222] py-4 lg:border-l-[1px] lg:border-[#C8C8C8]'>
                                <div className='flex items-center justify-center'>
                                  <Image src={feature.gold ? arrowblack : noinclude} className='h-6 w-6' alt='tick' />
                                </div>
                              </td>
                              <td className='font-semibold text-lg text-center leading-6 text-[#222222] py-4 lg:border-l-[1px] lg:border-[#C8C8C8]'>
                                <div className='flex items-center justify-center'>
                                  <Image src={feature.premium ? arrowblue : noinclude} className='h-6 w-6' alt='tick' />
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
                                    <Image src={features.starter ? arrowblack : noinclude} className='h-6 w-6' alt='tick' />
                                  </div>
                                </td>
                                <td className='font-semibold text-lg text-center leading-6 text-[#222222] py-4 lg:border-l-[1px] lg:border-[#C8C8C8]'>
                                  <div className='flex items-center justify-center'>
                                    {packagePrices.length < 3 ? (
                                      <Image src={features.startup ? arrowblue : noinclude} className='h-6 w-6' alt='tick' />
                                    ) : (
                                      <Image src={features.startup ? arrowblack : noinclude} className='h-6 w-6' alt='tick' />
                                    )}
                                  </div>
                                </td>
                                {packagePrices.length >= 3 &&
                                  <td className='font-semibold text-lg text-center leading-6 !text-[#1649FF] py-4 lg:border-l-[1px] lg:border-[#C8C8C8]'>
                                    <div className='flex items-center justify-center'>
                                      <Image src={features.scaleup ? arrowblue : noinclude} className='h-6 w-6' alt='tick' />
                                    </div>
                                  </td>
                                }
                              </tr>
                            ))}
                        </React.Fragment>
                      ))
                    )}
                  </tbody>

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
                            Start with Premium
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
                            Starter
                          </div>
                        </td>
                        <td>
                          <div
                            onClick={() => {continueWithSelectedPackage(1)}}
                            className='flex items-center justify-center bg-[#1649FF] text-white font-semibold rounded-2xl p-2.5 m-5 cursor-pointer'>
                            Start Up
                          </div>
                        </td>
                        {packagePrices.length >= 3 && <td>
                          <div
                            onClick={() => {continueWithSelectedPackage(2)}}
                            className='flex items-center justify-center bg-[#222222] text-white font-semibold rounded-2xl p-2.5 m-5 cursor-pointer'>
                            Scale Up
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