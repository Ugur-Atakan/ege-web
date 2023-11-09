/* eslint-disable */
'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useTranslation } from '@/i18n/client'

import BackButton from './BackButton'
import FillinForm from './FillinForm'
import CompanyDetails from './CompanyDetails'
import Features from './Features'
import OrderReview from './OrderReview'

/**
 * Main content component
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {client}
 * @returns {JSX.Element} 
*/

const Content = ({ lang }) => {
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
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [couponcode, setCouponCode] = useState('');

    const [renderCount, setRenderCount] = useState(0);
    const [companyName, setCompanyName] = useState('');
    const [companyState, setCompanyState] = useState('');
    const [companyType, setCompanyType] = useState('');
    const [selectedPackage, setSelectedPackage] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            let storedPackage = window.localStorage.getItem('selectedPackage');

            setSelectedPackage(
                storedPackage ? JSON.parse(storedPackage) : null
            );

            setCompanyName(window.localStorage.getItem('companyName'));
            setCompanyState(window.localStorage.getItem('companyState'));
            setCompanyType(window.localStorage.getItem('companyType'));

            // Company Type is not set in the first render so it automatically redirects to formation page
            // In order to prevent this, we check if the render count is 1 and if the company type, state and name are set
            if (renderCount == 1) {
                if (!(companyType && companyState && companyName)) {
                    window.location.href = `/${lang}/onboarding/formation`;
                }
            }
        }

        setRenderCount(renderCount + 1);
    }, []);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const companyContactName = name + ' ' + lastname;
        const companyContactEmail = email;
        const companyContactPhone = phone;
        const companyContactAddress =
            street + ', ' + city + ', ' + zip + ', ' + country;

        const packageDetails =
            typeof window !== 'undefined'
                ? JSON.parse(window.localStorage.getItem('selectedPackage'))
                : null;

        let payload = {
            companyName: companyName,
            companyType: companyType,
            companyState: companyState,
            companyContactName: companyContactName,
            companyContactEmail: companyContactEmail,
            companyContactPhone: companyContactPhone,
            companyContactAddress: companyContactAddress,
            companyZipCode: zip,
            companyCity: city,
            companyCountry: country,
            selectedPackage: packageDetails
        };  

        axios
            .post(`/${lang}/stripe/api`, { data: { payload } })
            .then((response) => {
                let stripeURL = response.data;

                if (stripeURL) {
                    if (typeof window !== 'undefined' && window.localStorage)
                        window.localStorage.setItem('stripeUrl', stripeURL);
                    if (typeof window !== 'undefined' && window.location)
                        window.location.href = stripeURL;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        formSubmitHandler(e);
    };

    // API Call useEffect
    useEffect(() => {
        const fetchData = async () => {
            const countriesRes = await axios.get('/api/countries');
            setCountries(countriesRes.data);

            const statesRes = await axios.get('/api/states');
            setStates(statesRes.data);
        };
        fetchData();
    }, []);

    return (
        <div className="block md:flex items-start gap-12 bg-[#ECEFF1]">
            <BackButton lang={lang} />
            <div className="w-full md:w-[45%]">
                {displayForm ? (
                    <FillinForm
                        lang={lang}
                        setCity={setCity}
                        setCountry={setCountry}
                        setLastName={setLastName}
                        setName={setName}
                        setEmail={setEmail}
                        setStreet={setStreet}
                        setZip={setZip}
                        setPhone={setPhone}
                        countries={countries}
                        states={states}
                        country={country}
                    />
                ) : (
                    <div className="py-8 px-4 md:pl-10 md:py-8">
                        <h1 className="font-semibold text-[26px] md:text-[40px] leading-[44px] text-[#222222]">
                            {t('review_title')}
                        </h1>
                        <CompanyDetails
                            lang={lang}
                            companyType={companyType}
                            companyName={companyName}
                            companyState={companyState}
                        />
                        <Features selectedPackage={selectedPackage} />
                    </div>
                )}
            </div>

            <div className="w-full py-0 px-4 md:px-0 -mt-6 md:mt-0 mb-12 md:mb-0 md:w-[55%]">
                <OrderReview
                    lang={lang}
                    selectedPackage={selectedPackage}
                    couponcode={couponcode}
                    setCouponCode={setCouponCode}
                    displayForm={displayForm}
                    handleSubmit={handleSubmit}
                    setDisplayForm={setDisplayForm}
                />
            </div>
        </div>
    );
}

export default Content