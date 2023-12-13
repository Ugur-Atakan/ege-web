/* eslint-disable */
'use client'

import React, { useEffect, useState } from 'react'
import { redirectToLastNullInternalFunnel, checkEqualPathName } from '@/app/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { useTranslation } from '@/i18n/client'

import FillInCompany from './form/FillInCompany'
import BackButton from '../../components/common/BackButton'
import FillinForm from './form/FillinForm'

import { checkFormElements } from './utils/util'
import ErrorLogo from './utils/ErrorLogo'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompanyDetails = dynamic(() => import('./CompanyDetails'))
const Features = dynamic(() => import('./Features'))
const OrderReview = dynamic(() => import('./OrderReview'))

/**
 * Main content component
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {client}
 * @returns {JSX.Element} 
*/

const Content = ({ lang, cookie }) => {
    const { t } = useTranslation(lang);

    // const pathname = usePathname();
    // const router = useRouter();
    // useEffect(() => {
    //   const checkRedirection = redirectToLastNullInternalFunnel();
    //   if (checkRedirection && !checkEqualPathName(pathname, checkRedirection)) {
    //     router.push(`/${lang}/onboarding/${checkRedirection}`)
    //   }
    // }, []); 
    
    const [displayForm, setDisplayForm] = useState(false);
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zip, setZip] = useState('');
    const [countryCodes, setCountryCodes] = useState([]);
    const [countryCode, setCountryCode] = useState('');
    const [phone, setPhone] = useState('');
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [couponcode, setCouponCode] = useState('');

    const formSubmitHandler = (e) => {
        e.preventDefault();
        
        // Check if all fields are filled
        const { isFormValid, missingFields } = checkFormElements(name, lastname, email, street, city, country, zip, phone);
        
        // If the form is not valid, show toast messages for each missing field
        if (!isFormValid) {
            missingFields.forEach(field => {
                toast.error(`Please enter ${field}.`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    progressStyle: { background: '#1649FF' },
                    icon: () => <ErrorLogo />
                });
            });
            return;
        }

        const jsonSelectedPkg = JSON.parse(cookie.selectedPackage);
        console.log(jsonSelectedPkg[0])
        let payload = {
            customerName: name + ' ' + lastname,
            companyName: cookie.companyName,
            companyType: cookie.companyType,
            companyState: cookie.companyState,
            companyContactEmail: email,
            companyContactAddress: street + ', ' + city + ', ' + zip + ', ' + country,
            companyZipCode: zip,
            companyCity: city,
            companyCountry: country,
            selectedPackage: jsonSelectedPkg[0]
        };  

        axios
            .post('/api/stripe', { data: { payload } })
            .then((response) => {
                let stripeURL = response.data;

                if (stripeURL) {    
                    if (typeof window !== 'undefined' && window.localStorage && window.location) {
                        window.location.href = stripeURL;
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    // API Calls for data
    useEffect(() => {
        const fetchData = async () => {
            const countriesRes = await axios.get('/api/countries');
            setCountries(countriesRes.data);

            const statesRes = await axios.get('/api/states');
            setStates(statesRes.data);

            const countyCodesRes = await axios.get('/api/country-codes');
            setCountryCodes(countyCodesRes.data);
        };
        fetchData();
    }, []);

    return (
        <div className="block md:flex items-start gap-12 bg-[#ECEFF1]">
            <div className="w-full md:w-[45%]">
                {displayForm ? (
                    <div className='py-8 px-4 md:pl-10 md:py-8'>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />

                        <FillinForm
                            lang={lang}
                            setCity={setCity}
                            setCountry={setCountry}
                            setLastName={setLastName}
                            setName={setName}
                            setEmail={setEmail}
                            setStreet={setStreet}
                            setCountryCode={setCountryCode}
                            zip={zip}
                            setZip={setZip}
                            phone={phone}
                            setPhone={setPhone}
                            countryCodes={countryCodes}
                            countries={countries}
                            states={states}
                            country={country}
                        />
                
                        <FillInCompany 
                            lang={lang}
                            setCity={setCity}
                            setCountry={setCountry}
                            setLastName={setLastName}
                            setName={setName}
                            setEmail={setEmail}
                            setStreet={setStreet}
                            setZip={setZip}
                            zip={zip}
                            setPhone={setPhone}
                            countries={countries}
                            states={states}
                            country={country}
                        />
                    </div>
                ) : (
                    <div className="py-8 px-4 md:pl-10 md:py-8">
                        <h1 className="font-semibold text-[26px] md:text-[40px] leading-[44px] text-[#222222]">
                            {t('review_title')}
                        </h1>
                        <CompanyDetails
                            lang={lang}
                            companyType={cookie.companyType}
                            companyName={cookie.companyName}
                            companyState={cookie.companyState}
                        />
                        <Features selectedPackage={cookie.selectedPackage} />
                    </div>
                )}
            </div>

            <div className="w-full pt-[6%] px-10 md:w-[55%]">
                <OrderReview
                    lang={lang}
                    selectedPackage={cookie.selectedPackage}
                    couponcode={couponcode}
                    setCouponCode={setCouponCode}
                    displayForm={displayForm}
                    handleSubmit={formSubmitHandler}
                    setDisplayForm={setDisplayForm}
                />
            </div>
        </div>
    );
}

export default Content