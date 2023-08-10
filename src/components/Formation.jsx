import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import i18n from '../i18n'
import bishopwhite from '../images/bishop-white.png'
import quencolor from '../images/queen-color.png'
import kingblack from '../images/king-black.png'
import axios from 'axios'
import packageData from '../assets/packageData.json'
import arrowblack from '../images/arrow-black.png'
import arrowblue from '../images/arrow-blue.png'
import noinclude from '../images/no-include.png'

const API_ROOT = window.ob.config.apiRoot;

export default function Formation() {
  let [companyState, setCompanyState] = useState("");
  let [companyType, setCompanyType] = useState("");
  companyState = localStorage.getItem('companyState');
  companyType = localStorage.getItem('companyType');
  let [packagePrices, setPackagePrices] = useState([]);
  let [states, setStates] = useState([]);
  let [companyTypes, setCompanyTypes] = useState([]);

  useEffect(() => {
    const updatePricing = () => {
      let foundState = states.find((s) => s.state === companyState);
      let foundType = companyTypes.find((t) => t.entityType === companyType);
      if (companyType && companyState && foundState && foundType) {
        let langs = i18n.language === "en" ? "en" : "tr"
        let payload = {
          stateId: foundState.id,
          entityTypeId: foundType.id,
          lang: langs,
        }

        axios.post(API_ROOT + '/api/fe/prices', payload, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
          }
        })
          .then(function (response) {
            var jsonData = response.data;
            setPackagePrices(jsonData);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
    if (companyState !== "" && companyType !== "") {
      updatePricing();
    } else {
      window.location.href = `/${i18n.language}/company-type`;
    }
  }, [companyType, companyState, states]);

  useEffect(() => {
    //get the states from backend api via axios
    axios.get(API_ROOT + '/api/fe/states', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
      }
    })
      .then(function (response) {
        var jsonData = response.data;
        setStates(jsonData)
      })
      .catch(function (error) {
        console.log(error);
      });

    //get the states from backend api via axios
    axios.get(API_ROOT + '/api/settings/entityType', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
      }
    })
      .then(function (response) {
        var jsonData = response.data;
        setCompanyTypes(jsonData)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className='bg-white'>
      <div className="mx-auto p-6 lg:px-8">
        <Link className='flex items-center gap-2' to={`/${i18n.language}/company-name`}>
          <ArrowLeftIcon className='text-[#1649FF] h-[18px] w-[18px]' />
          <span className='text-[#1649FF] text-lg font-semibold'>Back</span>
        </Link>
      </div>
      <div className='mx-auto max-w-5xl p-4'>
        <div className='text-center'>
          <h1 className='font-semibold text-[40px] leading-[44px] text-[#222222]'>Choose your package</h1>
        </div>
        <div className={packagePrices.length < 3 ? 'grid grid-cols-2 gap-5 py-12' : 'grid grid-cols-3 gap-5 py-12'}>
          {packagePrices.map((prices, index) => (
            <div className={index === 0 && 'flex flex-col gap-5 border border-[#9EE248] p-12 rounded-[20px] h-[35rem] overflow-hidden cursor-pointer' || index === 1 && 'flex flex-col gap-5 bg-[#1649FF] p-12 rounded-[20px] h-[35rem] overflow-hidden cursor-pointer' || index === 2 && 'flex flex-col gap-5 border bg-[#222222] p-12 rounded-[20px] h-[35rem] overflow-hidden cursor-pointer'}
              onClick={() => {
                if (index === 0) {
                  localStorage.setItem('selectedPackage', JSON.stringify([prices]));
                  window.location.href = `/${i18n.language}/review`;
                }
                if (index === 1) {
                  localStorage.setItem('selectedPackage', JSON.stringify([prices]));
                  window.location.href = `/${i18n.language}/review`;
                }
                if (index === 2) {
                  localStorage.setItem('selectedPackage', JSON.stringify([prices]));
                  window.location.href = `/${i18n.language}/review`;
                }
              }}
            >
              <h2 className={index === 0 ? 'font-semibold text-[40px] leading-[44px] text-[#222222]' : 'font-semibold text-[40px] leading-[44px] text-white'}>{prices.orderPackage.replace('Registate', '')}</h2>
              <p className={index === 0 ? 'text-lg font-semibold leading-6 text-[#222222]' : 'text-lg font-semibold leading-6 text-white'}>{prices.description + ' ' + prices.description2}</p>
              <p className={index === 0 ? 'font-semibold text-[28px] leading-8 text-[#222222]' : 'font-semibold text-[28px] leading-8 text-white'}>{'$' + (prices.orderPackagePrice / 100).toFixed(0)}</p>
              <img src={index === 0 && bishopwhite || index === 1 && quencolor || index === 2 && kingblack} className='' alt='llc package' />
            </div>
          ))}
        </div>
      </div>
      <div className='mx-auto max-w-xs'>
        <div className='w-full flex flex-col items-center justify-center'>
          <Link to={`/${i18n.language}/formation`} className='w-full bg-[#1649FF] text-white text-center py-4 rounded-[20px] font-semibold text-[22px] leading-[26px] cursor-pointer'>
            Continue
          </Link>
          <p className='py-6 font-semibold  text-[22px] leading-[26px] text-[#1649FF]'>What’s included per package</p>
        </div>
      </div>
      <div className='mx-auto max-w-5xl p-4'>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle">

                <table className="min-w-full border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="w-2/5 sticky top-0 z-10 border-b border-gray-300 bg-white py-3.5 pr-3 text-left text-4xl font-semibold text-[#222222] leading-[44px] backdrop-blur backdrop-filter"
                      >
                        Compare Packages
                        <span className='text-lg block font-semibold'>What’s included per package</span>
                      </th>
                      {packagePrices.map((price, index) => (
                        <th
                          scope="col"
                          className={index === 2
                            ? "w-1/5 sticky top-0 z-10 hidden border-b border-gray-300 bg-white px-3 py-3.5 text-center text-2xl font-semibold text-[#1649FF] backdrop-blur backdrop-filter sm:table-cell"
                            : "w-1/5 sticky top-0 z-10 hidden border-b border-gray-300 bg-white px-3 py-3.5 text-center text-2xl font-semibold text-[#222222] backdrop-blur backdrop-filter sm:table-cell"}
                        >
                          {price.orderPackage}
                          <span className='text-[16px] block font-semibold'>{'$' + (price.orderPackagePrice / 100).toFixed(0)}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {packageData.packages.map((packageItem, packageIndex) => (
                      <>
                        {Object.keys(packageItem).map((packageTitle, titleIndex) => (
                          <React.Fragment key={titleIndex}>
                            {packageTitle === 'details' && packageItem[packageTitle].map((detailItem, detailIndex) => (
                              <>
                                <tr>
                                  <td
                                    colSpan="2"
                                    className="text-2xl font-semibold leading-8 text-[#222222] pb-8 pt-16"
                                  >
                                    {detailItem.title}
                                  </td>
                                </tr>
                                {detailItem.details.map((detail, index) => (
                                  <tr key={detailIndex}>
                                    <td className='font-semibold text-lg text-left leading-6 text-[#222222] py-4'>
                                      {detail.title}
                                    </td>
                                    <td className='font-semibold text-lg text-center leading-6 text-[#222222] py-4'>
                                      <div className='flex items-center justify-center'>
                                        <img src={detail.starter ? arrowblack : noinclude} className='h-6 w-6' alt='tick' />
                                      </div>
                                    </td>
                                    <td className='font-semibold text-lg text-center leading-6 text-[#222222] py-4'>
                                      <div className='flex items-center justify-center'>
                                        <img src={detail.startup ? arrowblack : noinclude} className='h-6 w-6' alt='tick' />
                                      </div>
                                    </td>
                                    <td className='font-semibold text-lg text-center leading-6 text-[#222222] py-4'>
                                      <div className='flex items-center justify-center'>
                                        <img src={detail.scaleup ? arrowblue : noinclude} className='h-6 w-6' alt='tick' />
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </>
                            ))}
                          </React.Fragment>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}