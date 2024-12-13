'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import 'react-toastify/dist/ReactToastify.css'

import packageDataEN from '@/assets/json/packageDataEN.json'
import packageDataTR from '@/assets/json/packageDataTR.json'

import { tick, tickblue, bishop, queen, bishopcolor, 
         kingblack, arrowblack, arrowblue, noinclude,
} from '@/assets/images'

import Step4Header from './Step4Header'
import { useTranslation } from '@/i18n/client'

/**
 * Step4 component
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {client}
 * @returns {JSX.Element} 
*/

const Step4 = ({ lang }) => {
  const { t } = useTranslation(lang);

  const [isChecked, setIsChecked] = useState(false);
  const selectedCompanyType = isChecked === false ? 'LLC' : 'C-corp';
  const selectedCompanyTypesEN = packageDataEN.packages.find((item) => item[selectedCompanyType]);
  const selectedCompanyTypesTR = packageDataTR.packages.find((item) => item[selectedCompanyType]);
  const selectedPackagesLLC = lang === 'en' ? selectedCompanyTypesEN['LLC'] : selectedCompanyTypesTR['LLC'];
  const selectedPackagesCorporation = lang === 'en' ? selectedCompanyTypesEN['C-corp'] : selectedCompanyTypesTR['C-corp'];
  const [showAllDifferences, setShowAllDifferences] = useState(false);
  const [selectedPackagesNameLLC, setSelectedPackagesNameLLC] = useState('gold');
  const [selectedPackagesNameCorp, setSelectedPackagesNameCorp] = useState('starter');

  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className={`pt-12 pb-0 lg:py-12 lg:pt-24 lg:pb-0 px-6 bg-[#ECEFF1] ${showAllDifferences && '!pb-12'}`}>
        <Step4Header
          isChecked={isChecked}
          toggleChecked={toggleChecked}
          t={t}
        />
        <div className='mx-auto max-w-[1120px] py-0 lg:py-12 lg:px-4 lg:pb-0'>
          {isChecked ?
            <div className='flex-col lg:flex-row flex items-stretch justify-center gap-4'>
              <div className='w-full bg-white rounded-[32px] p-6 relative overflow-hidden'>
                <div className='flex flex-col gap-4'>
                  <h3 className='font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-[#222222]'>Silver</h3>
                  <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-[24px] text-[#222222] lg:w-2/3'>{t('how_it_works_step_4_silver_description')}</p>
                </div>
                <div className='py-8'>
                  <ul className='flex flex-col gap-3'>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8 w-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>{t('registered_agent')}</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8 w-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>{t('expedited_ein')}</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8 w-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>{t('all_formation_documents')}</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8 w-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>{t('access_to_registate_dashboard')}</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8 w-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>{t('lifetime_support')}</p>
                    </li>
                  </ul>
                  <div className='float-right -mb-56'>
                    <div className='hidden lg:block relative -right-6 bottom-12'>
                      <Image src={bishop} alt='premium package' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full bg-[#1649FF] rounded-[32px] p-6 relative overflow-hidden'>
                <div className='flex flex-col gap-4'>
                  <h4 className='font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-white'>Gold</h4>
                  <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-[24px] text-white lg:w-2/3'>
                    {t('how_it_works_step_4_gold_description')}</p>
                </div>
                <div className='py-8'>
                  <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white pb-4'>{t('everything_in_silver')}</p>
                  <ul className='flex flex-col gap-3'>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8 w-8' alt='Compliance Reminder' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t('compliance_reminder')}</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8 w-8' alt='Membership Certificates' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t('membership_certificates')}</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8 w-8' alt='Expedited filling' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t('expedited_filling')}</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8 w-8' alt='Free mailbox' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t('free_mailbox')}</p>
                    </li>
                  </ul>
                </div>
                <div className='float-right -mb-56'>
                  <div className='hidden lg:block relative -right-4 bottom-12'>
                    <Image src={bishopcolor} alt='premium package' />
                  </div>
                </div>
              </div>
              <div className='w-full bg-[#222222] rounded-[32px] p-6 relative overflow-hidden'>
                <div className='flex flex-col gap-4'>
                  <h5 className='font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-white'>Platinum</h5>
                  <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-[24px] text-white lg:w-2/3'>{t('how_it_works_step_4_platinum_description')}</p>
                </div>
                <div className='py-8'>
                  <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white pb-4'>{t('everything_in_silver')}</p>
                  <ul className='flex flex-col gap-3'>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8 w-8' alt='Compliance Reminder' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t('compliance_reminder')}</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8 w-8' alt='Membership Certificates' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t('membership_certificates')}</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8 w-8' alt='Expedited filling' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t('expedited_filling')}</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8 w-8' alt='Free mailbox' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t('free_mailbox')}</p>
                    </li>
                  </ul>
                </div>
                <div className='float-right -mb-56'>
                  <div className='hidden lg:block relative right-0 bottom-12'>
                    <Image src={kingblack} alt='premium package' />
                  </div>
                </div>
              </div>
            </div>
            :
            <div className='flex-col lg:flex-row flex items-stretch justify-center gap-6'>
              <div className='bg-white rounded-[32px] p-6 relative overflow-hidden'>
                <div className='flex flex-col gap-4'>
                  <h6 className='font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-[#222222]'>Silver</h6>
                  <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-[24px] text-[#222222] lg:w-2/3'>{t('how_it_works_step_4_silver_llc_description')}</p>
                </div>
                <div className='py-8'>
                  <ul className='flex flex-col gap-3'>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8 w-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>{t('registered_agent')}</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8 w-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>{t('expedited_ein')}</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8 w-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>{t('all_formation_documents')}</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8 w-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>{t('access_to_registate_dashboard')}</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tick} className='h-8 w-8' alt='Registered Agent' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>{t('lifetime_support')}</p>
                    </li>
                  </ul>
                  <div className='float-right -mb-56'>
                    <div className='hidden lg:block relative right-0 bottom-24'>
                      <Image src={bishop} alt='premium package' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-[#1649FF] rounded-[32px] p-6 relative overflow-hidden'>
                <div className='flex flex-col gap-4'>
                  <h2 className='font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-white'>Gold</h2>
                  <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-[24px] text-white lg:w-2/3'>{t('how_it_works_step_4_gold_llc_description')}</p>
                </div>
                <div className='py-8'>
                  <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white pb-4'>{t('every_thing_in_silver')}</p>
                  <ul className='flex flex-col gap-3'>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8 w-8' alt='Compliance Reminder' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t('compliance_reminder')}</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8 w-8' alt='Membership Certificates' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t('membership_certificates')}</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8 w-8' alt='Expedited filling' />
                      <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t('expedited_filling')}</p>
                    </li>
                    <li className='flex items-center gap-3'>
                      <Image src={tickblue} className='h-8 w-8' alt='Free mailbox' />
                        <p className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t('free_mailbox')}</p>
                    </li>
                  </ul>
                </div>
                <div className='float-right -mb-56'>
                  <div className='hidden lg:block relative right-0 bottom-24'>
                    <Image src={queen} alt='premium package' />
                  </div>
                </div>
              </div>
            </div>
          }
          <div className="hidden lg:block !overflow-hidden px-0 lg:border-2 lg:border-white lg:rounded-t-3xl lg:px-8 overflow-x-scroll overflow-y-hidden mt-12">
            <div className={`inline-block min-w-full py-2 align-middle overflow-hidden ${showAllDifferences ? ' h-full' : ' h-96'}`}>
              <table className="min-w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="w-2/5 sticky top-0 z-10 border-b border-white py-3.5 pr-3 text-left text-[26px] md:text-3xl font-semibold text-[#222222] leading-6 md:leading-[44px] backdrop-blur backdrop-filter"
                    >
                      Compare hat{"'"}s included <br /> per package
                    </th>
                    {isChecked === false ? (
                      <>
                        <th
                          scope="col"
                          className="w-1/5 sticky top-0 z-10 border-b border-white whitespace-nowrap md:whitespace-normal px-3 py-3.5 text-center text-2xl font-semibold text-[#222222] backdrop-blur backdrop-filter sm:table-cell"
                        >
                          Silver
                        </th>
                        <th
                          scope="col"
                          className="w-1/5 sticky top-0 z-10 border-b border-white whitespace-nowrap md:whitespace-normal px-3 py-3.5 text-center text-2xl font-semibold text-[#1649FF] backdrop-blur backdrop-filter sm:table-cell"
                        >
                          Gold
                        </th>
                      </>
                    )
                      : (
                        <>
                          <th
                            scope="col"
                            className="w-1/5 sticky top-0 z-10 border-b border-white whitespace-nowrap md:whitespace-normal px-3 py-3.5 text-center text-2xl font-semibold text-[#222222] backdrop-blur backdrop-filter sm:table-cell"
                          >
                            Silver
                          </th>
                          <th
                            scope="col"
                            className="w-1/5 sticky top-0 z-10 border-b border-white whitespace-nowrap md:whitespace-normal px-3 py-3.5 text-center text-2xl font-semibold text-[#222222] backdrop-blur backdrop-filter sm:table-cell"
                          >
                            Gold
                          </th>
                          <th
                            scope="col"
                            className="w-1/5 sticky top-0 z-10 border-b border-white whitespace-nowrap md:whitespace-normal px-3 py-3.5 text-center text-2xl font-semibold text-[#1649FF] backdrop-blur backdrop-filter sm:table-cell"
                          >
                            Platinum
                          </th>
                        </>
                      )}
                  </tr>
                </thead>
                <tbody>
                  {isChecked === false ? (
                    selectedPackagesLLC.map((packageItem, packageIndex) => (
                      <React.Fragment key={packageIndex}>
                        <tr>
                          <td
                            colSpan="2"
                            className="text-2xl font-semibold leading-8 text-[#222222] pb-8 pt-16 pr-96"
                          >
                            {packageItem.title}
                          </td>
                        </tr>
                        {packageItem.features.map((feature, featureIndex) => (
                          <tr key={featureIndex}>
                            <td className='font-semibold text-lg text-left leading-6 text-[#222222] py-4 pr-36'>
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
                    selectedPackagesCorporation.map((packageItem, packageIndex) => (
                      <React.Fragment key={packageIndex}>
                        <tr>
                          <td colSpan="2" className="text-2xl font-semibold leading-8 text-[#222222] pb-8 pt-16 pr-[21rem]">
                            {packageItem.title}
                          </td>
                        </tr>
                        {packageItem.features.map((features, detailIndex) => (
                          <tr key={detailIndex}>
                            <td className="font-semibold text-lg text-left leading-6 text-[#222222] lg:pr-12 py-4 pr-36">
                              {features.title}
                            </td>
                            <td className='font-semibold text-lg text-center leading-6 text-[#222222] py-4 lg:border-l-[1px] lg:border-[#C8C8C8]'>
                              <div className='flex items-center justify-center'>
                                <Image src={features.silver ? arrowblack : noinclude} className='h-6 w-6' alt='tick' />
                              </div>
                            </td>
                            <td className='font-semibold text-lg text-center leading-6 text-[#222222] py-4 lg:border-l-[1px] lg:border-[#C8C8C8]'>
                              <div className='flex items-center justify-center'>
                                <Image src={features.gold ? arrowblack : noinclude} className='h-6 w-6' alt='tick' />
                              </div>
                            </td>
                            <td className='font-semibold text-lg text-center leading-6 !text-[#1649FF] py-4 lg:border-l-[1px] lg:border-[#C8C8C8]'>
                              <div className='flex items-center justify-center'>
                                <Image src={features.platinum ? arrowblue : noinclude} className='h-6 w-6' alt='tick' />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className={`block overflow-hidden lg:hidden ${showAllDifferences ? ' h-full' : ' h-[32rem]'}`}>
            <div className='text-center py-8'>
              <h2 className='font-semibold text-[20px] leading-[22px] text-[#222222]'>Compare what{"'"}s included per package</h2>
            </div>
            <div className='flex items-center justify-around border border-[#222222] rounded-2xl'>
              {isChecked === false ?
                (
                  <>
                    <div onClick={() => setSelectedPackagesNameLLC('silver')} className={`w-full text-center p-4 border-r border-[#222222] font-semibold text-[18px] leading-6 text-[#222222] rounded-tl-2xl rounded-bl-2xl ${selectedPackagesNameLLC === 'silver' && 'bg-[#1649FF] text-white'}`}>Gold</div>
                    <div onClick={() => setSelectedPackagesNameLLC('gold')} className={`w-full text-center p-4 font-semibold text-[18px] leading-6 text-[#222222] rounded-tr-2xl rounded-br-2xl ${selectedPackagesNameLLC === 'gold' && 'bg-[#1649FF] text-white'}`}>Premium</div>
                  </>
                ) :
                (
                  <>
                    <div onClick={() => setSelectedPackagesNameCorp('silver')} className={`w-full text-center p-4 border-r border-[#222222] font-semibold text-[18px] leading-6 text-[#222222] rounded-tl-2xl rounded-bl-2xl ${selectedPackagesNameCorp === 'silver' && 'bg-[#1649FF] text-white'}`}>Silver</div>
                    <div onClick={() => setSelectedPackagesNameCorp('gold')} className={`w-full text-center p-4 border-r border-[#222222] font-semibold text-[18px] leading-6 text-[#222222] ${selectedPackagesNameCorp === 'gold' && 'bg-[#1649FF] text-white'}`}>Gold</div>
                    <div onClick={() => setSelectedPackagesNameCorp('platinum')} className={`w-full text-center p-4 border-r border-[#222222] font-semibold text-[18px] leading-6 text-[#222222] rounded-tr-2xl rounded-br-2xl ${selectedPackagesNameCorp === 'platinum' && 'bg-[#1649FF] text-white'}`}>Platinum</div>
                  </>
                )
              }
            </div>
            <div className='relative'>
              {isChecked === false ? (
                selectedPackagesLLC.map((packageItem, packageIndex) => (
                  <React.Fragment key={packageIndex}>
                      <div key={packageIndex} className='py-8'>
                        <div className='font-semibold text-[18px] leading-6 text-[#222222]'>
                          {packageItem.title}
                        </div>
                      </div>
                      {packageItem.features.map((features, detailIndex) => (
                        <div key={detailIndex}>
                          {selectedPackagesNameLLC === 'silver' && features.silver &&
                            <div className="font-semibold text-lg text-left leading-6 text-[#222222] py-3">
                              <div className='flex items-center gap-4'>
                                <Image src={arrowblack} className='h-6 w-6' alt='tick' />
                                {features.title}
                              </div>
                            </div>
                          }
                          {selectedPackagesNameLLC === 'gold' && features.gold &&
                            <div className="font-semibold text-lg text-left leading-6 text-[#222222] py-3">
                              <div className='flex items-center gap-4'>
                                <Image src={arrowblack} className='h-6 w-6' alt='tick' />
                                {features.title}
                              </div>
                            </div>
                          }
                        </div>
                      ))}
                  </React.Fragment>
                ))) : (
                  selectedPackagesCorporation.map((packageItem, packageIndex) => (
                    <React.Fragment key={packageIndex}>
                        <div key={packageIndex} className='py-8'>
                          <div className='font-semibold text-[18px] leading-6 text-[#222222]'>
                            {packageItem.title}
                          </div>
                        </div>
                        {packageItem.features.map((features, detailIndex) => (
                          <div key={detailIndex}>
                            {selectedPackagesNameCorp === 'silver' && features.silver &&
                              <div className="font-semibold text-lg text-left leading-6 text-[#222222] py-3">
                                <div className='flex items-center gap-4'>
                                  <Image src={arrowblack} className='h-6 w-6' alt='tick' />
                                  {features.title}
                                </div>
                              </div>
                            }
                            {selectedPackagesNameCorp === 'gold' && features.gold &&
                              <div className="font-semibold text-lg text-left leading-6 text-[#222222] py-3">
                                <div className='flex items-center gap-4'>
                                  <Image src={arrowblack} className='h-6 w-6' alt='tick' />
                                  {features.title}
                                </div>
                              </div>
                            }
                             {selectedPackagesNameCorp === 'platinum' && features.platinum &&
                              <div className="font-semibold text-lg text-left leading-6 text-[#222222] py-3">
                                <div className='flex items-center gap-4'>
                                  <Image src={arrowblack} className='h-6 w-6' alt='tick' />
                                  {features.title}
                                </div>
                              </div>
                            }
                          </div>
                        ))}
                    </React.Fragment>
                  )))}
            </div>
          </div>
          <div className={`relative ${showAllDifferences ? 'hidden' : 'block'}`} aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[50%] lg:pt-[20%]" />
            </div>
            <div className="relative" aria-hidden="true">
              <div
                onClick={() => setShowAllDifferences(true)}
                className={`w-full lg:w-auto cursor-pointer absolute px-4 py-3 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white hover:bg-[#9EE248] text-[#1649FF] font-semibold text-[18px] leading-6 rounded-[16px] -top-12 left-1/2 ${showAllDifferences ? 'hidden' : 'block'}`}>
                {t('show_all_differences')}
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Step4