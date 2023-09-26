/* eslint-disable */
'use client';

import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import tick from '../../../../images/tick.png'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useTranslation } from '../../../i18n/client'

export default function Content({ lang }) {
    const { t } = useTranslation(lang);

    const [displayForm, setDisplayForm] = useState(false);
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');
    const [couponcode, setCouponCode] = useState('');
  
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);

    const [companyType, setCompanyType] = useState(typeof window !== 'undefined' ? window.localStorage.getItem('companyType') : null);
    const [companyState, setCompanyState] = useState(typeof window !== 'undefined' ? window.localStorage.getItem('companyState') : null);
    const [companyName, setCompanyName] = useState(typeof window !== 'undefined' ? window.localStorage.getItem('companyName') : null);
    const [storedPackage, setStoredPackage] = useState(typeof window !== 'undefined' ? window.localStorage.getItem('selectedPackage') : null);
    let selectedPackage = storedPackage ? JSON.parse(storedPackage) : null;


    const formSubmitHandler = (e) => {
        e.preventDefault();
      
        const companyContactName = name + " " + lastname;
        const companyContactEmail = email;
        const companyContactPhone = phone;
        const companyContactAddress = street + ", " + city + ", " + zip + ", " + country;
        const selectedPackage = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('selectedPackage')) : null;

        let payload = {
            "companyName": companyName,
            "companyType": companyType,
            "companyState": companyState,
            "companyContactName": companyContactName,
            "companyContactEmail": companyContactEmail,
            "companyContactPhone": companyContactPhone,
            "companyContactAddress": companyContactAddress,
            "selectedPackage": selectedPackage,
        }

        console.log(payload);
        axios.post(`/${lang}/stripe/api`, { data: { payload }})
        .then((response) => {
            let stripeURL = JSON.parse(JSON.stringify(response.data));
            
            if (stripeURL) {
                window.localStorage.setItem('stripeUrl', stripeURL);
                if (typeof window !== 'undefined' && window.location)
                    window.location.href = stripeURL;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        formSubmitHandler(e);
    };

    // API Call useEffect 
    useEffect(() => {
        const fetchData = async () => {
            const countriesRes = await axios.get('/api/countries');
            setCountries(countriesRes.data);

            const statesRes = await axios.get(`/${lang}/state/api`);
            setStates(statesRes.data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (!(companyType && companyState && companyName)) {
            if (typeof window !== 'undefined' && window.location)
                window.location.href = `/${lang}/formation`;
        }
    }, [companyType, companyState, companyName]);

    return (
        <div className='block md:flex items-start gap-12 bg-[#ECEFF1]'>
            <div className="block md:hidden py-6 px-4">
                <Link href={`/${lang}/formation`} className='flex items-center gap-2' >
                    <ArrowLeftIcon className='text-[#1649FF] h-[18px] w-[18px]' />
                    <span className='text-[#1649FF] text-lg font-semibold'>{t("formation_back_button")}</span>
                </Link>
            </div>
            <div className='w-full md:w-[45%]'>
                {displayForm ?
                    <div className='py-8 px-4 md:pl-10 md:py-8'>
                        <h1 className='font-semibold text-[40px] leading-[44px] text-[#222222]'>{t("review_information")}</h1>
                        <div className='bg-white border rounded-[32px] p-6 my-6'>
                            <h2 className='font-semibold text-[24px] leading-[44px] text-[#222222]'>{t("review_company_details_title")}</h2>
                            <p className='font-normal text-[16px] leading-6 text-[#222222]'>{t("review_company_details_description")}</p>
                            <div className='py-4'>
                                <div className='flex item-center gap-4 md:gap-4 pb-4'>
                                    <div className="w-1/2">
                                        <label htmlFor="firstname" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                            {t("review_information_input1")}
                                        </label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            id="firstname"
                                            autoComplete="given-name"
                                            required
                                            onChange={(e) => setName(e.target.value)}
                                            className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                        />
                                    </div>

                                    <div className="w-1/2">
                                        <label htmlFor="lastname" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                            {t("review_information_input2")}
                                        </label>
                                        <input
                                            type="text"
                                            name="lastname"
                                            id="lastname"
                                            autoComplete="family-name"
                                            required
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                        />
                                    </div>
                                </div>
                                <div className='flex item-center gap-4 md:gap-4 pb-4'>
                                    <div className="w-full">
                                        <label htmlFor="emailaddress" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                            {t("review_information_input3")}
                                        </label>
                                        <input
                                            type="text"
                                            name="emailaddress"
                                            id="emailaddress"
                                            autoComplete="email"
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                        />
                                    </div>
                                </div>
                                <div className='flex item-center gap-4 md:gap-4 pb-4'>
                                    <div className="w-full">
                                        <label htmlFor="phonenumber" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                            {t("review_information_input4")}
                                        </label>
                                        <div className="relative mt-1 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="phonenumber"
                                                id="phonenumber"
                                                autoComplete="tel"
                                                required
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                                placeholder="+1 (123) 111-22-33"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center gap-4 pb-4'>
                                    <div className="w-full md:w-1/2">
                                        <label htmlFor="country" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                            {t("review_information_input5")}
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                            onChange={(e) => setCountry(e.target.value)}
                                        >
                                            <option>{t("review_information_input5_placeholder")}</option>
                                            {countries.map((country, index) => (
                                                <option
                                                    key={index}
                                                    value={country.name}
                                                    id={country.id}
                                                    selected={country.value}
                                                >
                                                    {country.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <label htmlFor="region" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                            {t("review_information_input6")}
                                        </label>
                                        <select
                                            name="region"
                                            id="region"
                                            autoComplete="address-level1"
                                            className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                        >

                                            <option value=""> {country === 'United States' ? 'Select State' : 'No State'}</option>
                                            {country === 'United States' &&
                                                states.map((state, index) => (
                                                    <option
                                                        key={index}
                                                        value={state.name}
                                                    >
                                                        {state.name}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center gap-4 pb-4'>
                                    <div className="w-full md:w-2/4" >
                                        <label htmlFor="postalcode" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                            {t("review_information_input7")}
                                        </label>
                                        <input
                                            type="text"
                                            name="postalcode"
                                            id="postalcode"
                                            autoComplete="postalcode"
                                            required
                                            onChange={(e) => setZip(e.target.value)}
                                            className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                        />
                                    </div>
                                    <div className="w-full md:w-2/4">
                                        <label htmlFor="city" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                            {t("review_information_input8")}
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            required
                                            onChange={(e) => setCity(e.target.value)}
                                            autoComplete="address-level2"
                                            className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="streetaddress" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                        {t("review_information_input9")}
                                    </label>
                                    <input
                                        type="text"
                                        name="streetaddress"
                                        id="streetaddress"
                                        onChange={(e) => setStreet(e.target.value)}
                                        required
                                        autoComplete="street-address"
                                        className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='py-8 px-4 md:pl-10 md:py-8'>
                        <h1 className='font-semibold text-[26px] md:text-[40px] leading-[44px] text-[#222222]'>{t('review_title')}</h1>
                        <div className='bg-white border rounded-[32px] p-6 my-6'>
                            <h2 className='font-semibold text-[24px] leading-[44px] text-[#222222]'>{t("review_company_details_title")}</h2>
                            <div className='flex items-center justify-between py-2'>
                                <div className='flex items-center gap-4'>
                                    <p className='font-semibold text-sm leading-6 text-[#8A8A8A]'>{t("review_company_details_entity_type")}</p>
                                    <span className='font-semibold text-sm leading-6 text-[#222222]'>{companyType}</span>
                                </div>
                                <Link href={`/${lang}/company-type`} className='font-semibold text-sm leading-6 text-[#1649FF]'  >
                                    {t("review_edit_button")}
                                </Link>
                            </div>
                            <div className='flex items-center justify-between py-2'>
                                <div className='flex items-center gap-4'>
                                    <p className='font-semibold text-sm leading-6 text-[#8A8A8A]'>{t("review_company_details_company_name")}</p>
                                    <span className='font-semibold text-sm leading-6 text-[#222222]'>{companyName}</span>
                                </div>
                                <Link href={`/${lang}/company-name`} className='font-semibold text-sm leading-6 text-[#1649FF]' >
                                    {t("review_edit_button")}
                                </Link>
                            </div>
                            <div className='flex items-center justify-between py-2'>
                                <div className='flex items-center gap-4 '>
                                    <p className='font-semibold text-sm leading-6 text-[#8A8A8A]'>{t("review_company_details_filing_juristiction")}</p>
                                    <span className='font-semibold text-sm leading-6 text-[#222222]'>{companyState}</span>
                                </div>
                                <Link href={`/${lang}/state`} className='font-semibold text-sm leading-6 text-[#1649FF]' >
                                    {t("review_edit_button")}
                                </Link>
                            </div>
                        </div>
                        <div className='bg-white border rounded-[32px] p-6 my-6'>
                            {selectedPackage && selectedPackage.map((price, index) => (
                                <React.Fragment key={index}>
                                    <div className='flex items-center justify-between'>
                                        <h2 className='font-semibold text-[24px] leading-[44px] text-[#222222]'>{price.orderPackage}</h2>
                                        <h2 className='font-semibold text-[24px] leading-[44px] text-[#222222]'>{'$' + (price.orderPackagePrice / 100).toFixed(0)}</h2>
                                    </div>
                                    {/* Features here */}
                                    <div className='block py-6'>
                                        {price.features && price.features.map((feature, index) => (
                                            <div key={index} className='flex items-center gap-4 py-2'>
                                                <Image src={tick} className='w-5 h-5' alt='list' />
                                                <p className='font-semibold text-lg leading-6 text-[#222222]'>{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </React.Fragment>
                            ))} 
                        </div>
                    </div>
                }
            </div>
            <div className='w-full py-0 px-4 md:px-0 -mt-6 md:mt-0 mb-12 md:mb-0 md:w-[55%]'>
                <div className='bg-white rounded-[32px] md:rounded-none p-6 relative'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-semibold text-lg leading-[44px] text-[#222222]'>{t("review_order_summary")}</h2>
                        <h2 className='font-semibold text-lg leading-[44px] text-[#1649FF]'>USD</h2>
                    </div>
                    <div className='pt-6 py-4 border-b border-[#C8C8C8]'>
                        <h4 className='font-semibold text-[15px] leading-6 text-[#545454]'>{t("review_preview")}</h4>
                    </div>
                    <div className='flex items-center justify-between py-4'>
                        {selectedPackage && selectedPackage.map((price, index) => (
                            <React.Fragment key={index}>
                                <div>
                                    <h1 className='font-semibold text-[16px] leading-6 text-[#222222]'>{t("review_payment_type")}</h1>
                                    <p className='font-semibold text-[16px] leading-6 text-[#222222]'>{price.orderPackage}</p>
                                </div>
                                <div><h1 className='font-semibold text-[16px] leading-6 text-[#222222]'>{'$' + (price.orderPackagePrice / 100).toFixed(0)}</h1></div>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className='md:mt-96'>
                        <div className='flex flex-col gap-6'>
                            <button className='font-semibold  text-left text-[16px] leading-6 text-[#1649FF]' onClick={() => setCouponCode(true)}>{t("review_coupon_code")}</button>
                            {couponcode && <input type='text' name="couponCode" id="couponCode" className="-mt-2 mb-4 md:mb-0 md:mt-1 block w-full md:w-1/2 rounded-[20px] border-[#C8C8C8] py-2 shadow-sm" onChange={couponcode} />}
                        </div>
                        <div className='flex items-center justify-between py-4'>
                            <div>
                                <h1 className='font-semibold text-lg leading-6 text-[#222222]'>{t("review_total")}</h1>
                            </div>
                            {selectedPackage && selectedPackage.map((price, index) => (
                                <div key={index}><h1 className='font-semibold text-lg leading-6 text-[#222222]'>{'$' + (price.orderPackagePrice / 100).toFixed(0)}</h1></div>
                            ))}
                        </div>
                        <div className='flex items-center justify-center py-4'>
                            <Link href="#" onClick={displayForm ? handleSubmit : () => {setDisplayForm(true)} } className='bg-[#1649FF] w-full text-center text-white font-semibold text-lg py-2 rounded-[20px]'>{t("review_continue")}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
