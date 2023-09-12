'use client';

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import tick from '../../../../images/tick.png'

const states = [
    { id: 1, name: 'Alabama' },
    { id: 2, name: 'Alaska' },
    { id: 3, name: 'Arizona' },
    { id: 4, name: 'Arkansas' },
    { id: 5, name: 'California' },
    { id: 6, name: 'Colorado' },
    { id: 7, name: 'Connecticut' },
    { id: 8, name: 'Delaware' },
    { id: 9, name: 'Florida' },
    { id: 10, name: 'Georgia' },
    { id: 11, name: 'Hawaii' },
    { id: 12, name: 'Idaho' },
    { id: 13, name: 'Illinois' },
    { id: 14, name: 'Indiana' },
    { id: 15, name: 'Iowa' },
    { id: 16, name: 'Kansas' },
    { id: 17, name: 'Kentucky' },
    { id: 18, name: 'Louisiana' },
    { id: 19, name: 'Maine' },
    { id: 20, name: 'Maryland' },
    { id: 21, name: 'Massachusetts' },
    { id: 22, name: 'Michigan' },
    { id: 23, name: 'Minnesota' },
    { id: 24, name: 'Mississippi' },
    { id: 25, name: 'Missouri' },
    { id: 26, name: 'Montana' },
    { id: 27, name: 'Nebraska' },
    { id: 28, name: 'Nevada' },
    { id: 29, name: 'New Hampshire' },
    { id: 30, name: 'New Jersey' },
    { id: 31, name: 'New Mexico' },
    { id: 32, name: 'New York' },
    { id: 33, name: 'North Carolina' },
    { id: 34, name: 'North Dakota' },
    { id: 35, name: 'Ohio' },
    { id: 36, name: 'Oklahoma' },
    { id: 37, name: 'Oregon' },
    { id: 38, name: 'Pennsylvania' },
    { id: 39, name: 'Rhode Island' },
    { id: 40, name: 'South Carolina' },
    { id: 41, name: 'South Dakota' },
    { id: 42, name: 'Tennessee' },
    { id: 43, name: 'Texas' },
    { id: 44, name: 'Utah' },
    { id: 45, name: 'Vermont' },
    { id: 46, name: 'Virginia' },
    { id: 47, name: 'Washington' },
    { id: 48, name: 'Washington DC' },
    { id: 49, name: 'West Virginia' },
    { id: 50, name: 'Wisconsin' },
    { id: 51, name: 'Wyoming' }
]

const countries = [
    { id: 1, name: 'United States' },
    { id: 2, name: 'Canada' },
    { id: 3, name: 'France' },
    { id: 4, name: 'Afghanistan' },
    { id: 5, name: 'Albania' },
    { id: 6, name: 'Algeria' },
    { id: 7, name: 'American Samoa' },
    { id: 8, name: 'Andorra' },
    { id: 9, name: 'Angola' },
    { id: 10, name: 'Anguilla' },
    { id: 11, name: 'Antarctica' },
    { id: 12, name: 'Antigua and Barbuda' },
    { id: 13, name: 'Argentina' },
    { id: 14, name: 'Armenia' },
    { id: 15, name: 'Aruba' },
    { id: 16, name: 'Australia' },
    { id: 17, name: 'Austria' },
    { id: 18, name: 'Azerbaijan' },
    { id: 19, name: 'Bahamas' },
    { id: 20, name: 'Bahrain' },
    { id: 21, name: 'Bangladesh' },
    { id: 22, name: 'Barbados' },
    { id: 23, name: 'Belarus' },
    { id: 24, name: 'Belgium' },
    { id: 25, name: 'Belize' },
    { id: 26, name: 'Benin' },
    { id: 27, name: 'Bermuda' },
    { id: 28, name: 'Bhutan' },
    { id: 29, name: 'Bolivia, Plurinational State of' },
    { id: 30, name: 'Bonaire, Sint Eustatius and Saba' },
    { id: 31, name: 'Bosnia and Herzegovina' },
    { id: 32, name: 'Botswana' },
    { id: 33, name: 'Bouvet Island' },
    { id: 34, name: 'Brazil' },
    { id: 35, name: 'British Indian Ocean Territory' },
    { id: 36, name: 'Brunei Darussalam' },
    { id: 37, name: 'Bulgaria' },
    { id: 38, name: 'Burkina Faso' },
    { id: 39, name: 'Burundi' },
    { id: 40, name: 'Cambodia' },
    { id: 41, name: 'Cameroon' },
    { id: 42, name: 'Cape Verde' },
    { id: 43, name: 'Cayman Islands' },
    { id: 44, name: 'Central African Republic' },
    { id: 45, name: 'Chad' },
    { id: 46, name: 'Chile' },
    { id: 47, name: 'China' },
    { id: 48, name: 'Christmas Island' },
    { id: 49, name: 'Cocos (Keeling) Islands' },
    { id: 50, name: 'Colombia' },
    { id: 51, name: 'Comoros' },
    { id: 52, name: 'Congo' },
    { id: 53, name: 'Congo, the Democratic Republic of the' },
    { id: 54, name: 'Cook Islands' },
    { id: 55, name: 'Costa Rica' },
    { id: 56, name: 'Côte d\'Ivoire' },
    { id: 57, name: 'Croatia' },
    { id: 58, name: 'Cuba' },
    { id: 59, name: 'Curaçao' },
    { id: 60, name: 'Cyprus' },
    { id: 61, name: 'Czech Republic' },
    { id: 62, name: 'Denmark' },
    { id: 63, name: 'Djibouti' },
    { id: 64, name: 'Dominica' },
    { id: 65, name: 'Dominican Republic' },
    { id: 66, name: 'Ecuador' },
    { id: 67, name: 'Egypt' },
    { id: 68, name: 'El Salvador' },
    { id: 69, name: 'Equatorial Guinea' },
    { id: 70, name: 'Eritrea' },
    { id: 71, name: 'Estonia' },
    { id: 72, name: 'Ethiopia' },
    { id: 73, name: 'Falkland Islands (Malvinas)' },
    { id: 74, name: 'Faroe Islands' },
    { id: 75, name: 'Fiji' },
    { id: 76, name: 'Finland' },
    { id: 78, name: 'French Guiana' },
    { id: 79, name: 'French Polynesia' },
    { id: 80, name: 'French Southern Territories' },
    { id: 81, name: 'Gabon' },
    { id: 82, name: 'Gambia' },
    { id: 83, name: 'Georgia' },
    { id: 84, name: 'Germany' },
    { id: 85, name: 'Ghana' },
    { id: 86, name: 'Gibraltar' },
    { id: 87, name: 'Greece' },
    { id: 88, name: 'Greenland' },
    { id: 89, name: 'Grenada' },
    { id: 90, name: 'Guadeloupe' },
    { id: 91, name: 'Guam' },
    { id: 92, name: 'Guatemala' },
    { id: 93, name: 'Guernsey' },
    { id: 94, name: 'Guinea' },
    { id: 95, name: 'Guinea-Bissau' },
    { id: 96, name: 'Guyana' },
    { id: 97, name: 'Haiti' },
    { id: 98, name: 'Heard Island and McDonald Islands' },
    { id: 99, name: 'Holy See (Vatican City State)' },
    { id: 100, name: 'Honduras' },
    { id: 101, name: 'Hong Kong' },
    { id: 102, name: 'Hungary' },
    { id: 103, name: 'Iceland' },
    { id: 104, name: 'India' },
    { id: 105, name: 'Indonesia' },
    { id: 106, name: 'Iran, Islamic Republic of' },
    { id: 107, name: 'Iraq' },
    { id: 108, name: 'Ireland' },
    { id: 109, name: 'Japan' },
    { id: 110, name: 'Jersey' },
    { id: 111, name: 'Jordan' },
    { id: 112, name: 'Kazakhstan' },
    { id: 113, name: 'Kenya' },
    { id: 114, name: 'Kiribati' },
    { id: 115, name: "Korea, Democratic People's Republic of" },
    { id: 116, name: 'Korea, Republic of' },
    { id: 117, name: 'Kuwait' },
    { id: 118, name: 'Kyrgyzstan' },
    { id: 119, name: "Lao People's Democratic Republic" },
    { id: 120, name: 'Latvia' },
    { id: 121, name: 'Lebanon' },
    { id: 122, name: 'Lesotho' },
    { id: 123, name: 'Liberia' },
    { id: 124, name: 'Libya' },
    { id: 125, name: 'Liechtenstein' },
    { id: 126, name: 'Lithuania' },
    { id: 127, name: 'Luxembourg' },
    { id: 128, name: 'Macao' },
    { id: 129, name: 'Macedonia, the former Yugoslav Republic of' },
    { id: 130, name: 'Madagascar' },
    { id: 131, name: 'Malawi' },
    { id: 132, name: 'Malaysia' },
    { id: 133, name: 'Maldives' },
    { id: 134, name: 'Mali' },
    { id: 135, name: 'Malta' },
    { id: 136, name: 'Marshall Islands' },
    { id: 137, name: 'Martinique' },
    { id: 138, name: 'Mauritania' },
    { id: 139, name: 'Mauritius' },
    { id: 140, name: 'Mayotte' },
    { id: 141, name: 'Mexico' },
    { id: 142, name: 'Micronesia, Federated States of' },
    { id: 143, name: 'Moldova, Republic of' },
    { id: 144, name: 'Monaco' },
    { id: 145, name: 'Mongolia' },
    { id: 146, name: 'Montenegro' },
    { id: 147, name: 'Montserrat' },
    { id: 148, name: 'Morocco' },
    { id: 149, name: 'Mozambique' },
    { id: 150, name: 'Myanmar' },
    { id: 151, name: 'Namibia' },
    { id: 152, name: 'Nauru' },
    { id: 153, name: 'Nepal' },
    { id: 154, name: 'Netherlands' },
    { id: 155, name: 'New Caledonia' },
    { id: 156, name: 'New Zealand' },
    { id: 157, name: 'Nicaragua' },
    { id: 158, name: 'Niger' },
    { id: 159, name: 'Nigeria' },
    { id: 160, name: 'Niue' },
    { id: 161, name: 'Norfolk Island' },
    { id: 162, name: 'Northern Mariana Islands' },
    { id: 163, name: 'Norway' },
    { id: 164, name: 'Oman' },
    { id: 165, name: 'Pakistan' },
    { id: 166, name: 'Palau' },
    { id: 167, name: 'Palestinian Territory, Occupied' },
    { id: 168, name: 'Panama' },
    { id: 169, name: 'Papua New Guinea' },
    { id: 170, name: 'Paraguay' },
    { id: 171, name: 'Peru' },
    { id: 172, name: 'Philippines' },
    { id: 173, name: 'Pitcairn' },
    { id: 174, name: 'Poland' },
    { id: 175, name: 'Portugal' },
    { id: 176, name: 'Puerto Rico' },
    { id: 177, name: 'Qatar' },
    { id: 178, name: 'Réunion' },
    { id: 179, name: 'Romania' },
    { id: 180, name: 'Russian Federation' },
    { id: 181, name: 'Rwanda' },
    { id: 182, name: 'Saint Barthélemy' },
    { id: 183, name: 'Saint Helena, Ascension and Tristan da Cunha' },
    { id: 184, name: 'Saint Kitts and Nevis' },
    { id: 185, name: 'Saint Lucia' },
    { id: 186, name: 'Saint Martin (French part)' },
    { id: 187, name: 'Saint Pierre and Miquelon' },
    { id: 188, name: 'Saint Vincent and the Grenadines' },
    { id: 189, name: 'Samoa' },
    { id: 190, name: 'San Marino' },
    { id: 191, name: 'Sao Tome and Principe' },
    { id: 192, name: 'Saudi Arabia' },
    { id: 193, name: 'Senegal' },
    { id: 194, name: 'Serbia' },
    { id: 195, name: 'Seychelles' },
    { id: 196, name: 'Sierra Leone' },
    { id: 197, name: 'Singapore' },
    { id: 198, name: 'Sint Maarten (Dutch part)' },
    { id: 199, name: 'Slovakia' },
    { id: 200, name: 'Slovenia' },
    { id: 201, name: 'Solomon Islands' },
    { id: 202, name: 'Somalia' },
    { id: 203, name: 'South Africa' },
    { id: 204, name: 'South Georgia and the South Sandwich Islands' },
    { id: 205, name: 'South Sudan' },
    { id: 206, name: 'Spain' },
    { id: 207, name: 'Sri Lanka' },
    { id: 208, name: 'Sudan' },
    { id: 209, name: 'Suriname' },
    { id: 210, name: 'Svalbard and Jan Mayen' },
    { id: 211, name: 'Swaziland' },
    { id: 212, name: 'Sweden' },
    { id: 213, name: 'Switzerland' },
    { id: 214, name: 'Syrian Arab Republic' },
    { id: 215, name: 'Taiwan, Province of China' },
    { id: 216, name: 'Tajikistan' },
    { id: 217, name: 'Tanzania, United Republic of' },
    { id: 218, name: 'Thailand' },
    { id: 219, name: 'Timor-Leste' },
    { id: 220, name: 'Togo' },
    { id: 221, name: 'Tokelau' },
    { id: 222, name: 'Tonga' },
    { id: 223, name: 'Trinidad and Tobago' },
    { id: 224, name: 'Tunisia' },
    { id: 225, name: 'Turkey' },
    { id: 226, name: 'Turkmenistan' },
    { id: 227, name: 'Turks and Caicos Islands' },
    { id: 228, name: 'Tuvalu' },
    { id: 229, name: 'Uganda' },
    { id: 230, name: 'Ukraine' },
    { id: 231, name: 'United Arab Emirates' },
    { id: 232, name: 'United Kingdom' },
    { id: 233, name: 'United States Minor Outlying Islands' },
    { id: 234, name: 'Uruguay' },
    { id: 235, name: 'Uzbekistan' },
    { id: 236, name: 'Vanuatu' },
    { id: 237, name: 'Venezuela, Bolivarian Republic of' },
    { id: 238, name: 'Viet Nam' },
    { id: 239, name: 'Virgin Islands, British' },
    { id: 240, name: 'Virgin Islands, U.S.' },
    { id: 241, name: 'Wallis and Futuna' },
    { id: 242, name: 'Western Sahara' },
    { id: 243, name: 'Yemen' },
    { id: 244, name: 'Zambia' },
    { id: 245, name: 'Zimbabwe' }
]

const API_ROOT = 'API_ROOT';

export default function Content() {
    let companyType = localStorage.getItem('companyType');
    let companyState = localStorage.getItem('companyState');
    let companyName = localStorage.getItem('companyName');
    const storedPackage = localStorage.getItem('selectedPackage');

    const selectedPackage = storedPackage ? JSON.parse(storedPackage) : null;
    const selectedPackageId = selectedPackage && selectedPackage.length > 0 ? selectedPackage[0].id : null;
    
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
    const [couponModal, setCouponModal] = useState(false);

    const onNameChange = (evt) => {
        setName(evt.target.value);
    };
    const onlastNameChange = (evt) => {
        setLastName(evt.target.value);
    };
    const onEmailChange = (evt) => {
        setEmail(evt.target.value);
    };
    const onStreetChange = (evt) => {
        setStreet(evt.target.value);
    };
    const onCountryChange = (evt) => {
        setCountry(evt.target.value);
        console.log(country)
    };
    const onZipChange = (evt) => {
        setZip(evt.target.value);
    };
    const onCityChange = (evt) => {
        setCity(evt.target.value);
    };
    const onPhoneChange = (evt) => {
        setPhone(evt.target.value);
    }

    const onCuponCodechange = (evt) => {
        setCouponCode(evt.target.value);
    }

    const displayHandleForm = () => {
        setDisplayForm(true);
    }

    function formSubmitOnboardingId(e) {
        e.preventDefault();
        let new_company_name = companyName;

        let userEmail = email

        let payload = {
            companyName: new_company_name,
            userEmail: userEmail,
            companyType: companyType,
            companyState: companyState
        }
        axios.post(API_ROOT + '/api/onboard', payload, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
            }
        })
            .then(function (response) {
                var jsonData = JSON.parse(JSON.stringify(response.data));
                if (jsonData.Status) {
                    localStorage.setItem('onboardingId', jsonData.data.id);
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log('CompanyContactInfoForm submitted,', e)

        let companyContactName = name + " " + lastname;
        let companyContactEmail = email;
        let companyContactPhone = phone;
        let companyContactAddress = street + ", " + city + ", " + zip + ", " + country;
        let onboardingId = localStorage.getItem('onboardingId');
        let couponCode = couponcode;
        let langs = i18n.language === "en" ? "en" : "tr";

        let payload = {
            "companyContactName": companyContactName,
            "companyContactEmail": companyContactEmail,
            "companyContactPhone": companyContactPhone,
            "companyContactAddress": companyContactAddress,
            "onBoardId": onboardingId,
            "packageType": selectedPackageId,
            "couponCode": couponCode,
            "lang": langs
        }

        //Complete Onboarding Order with backend
        axios.post(API_ROOT + '/api/onboard-order', payload, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
            }
        })
            .then(function (response) {
                var jsonData = JSON.parse(JSON.stringify(response.data));
                console.log(jsonData)
                if (jsonData.Status) {
                    let stripeUrl = jsonData.data.stripeUrl;
                    console.log(stripeUrl)
                    localStorage.setItem('stripeUrl', stripeUrl);
                    window.location.href = stripeUrl;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await formSubmitOnboardingId(e);
        formSubmitHandler(e);
    };

    useEffect(() => {
        if (!(companyType && companyState && companyName && storedPackage)) {
            window.location.href = `/formation`;
        }
    }, [companyType, companyState, companyName, storedPackage])

    return (
        <div className='block md:flex items-start gap-12'>
             <div className="block md:hidden py-6 px-4">
                            <Link className='flex items-center gap-2' href={`/formation`}>
                                <ArrowLeftIcon className='text-[#1649FF] h-[18px] w-[18px]' />
                                <span className='text-[#1649FF] text-lg font-semibold'>Back</span>
                            </Link>
                        </div>
            <div className='w-full md:w-[45%]'>
                {displayForm
                    ?
                    <div className='py-8 px-4 md:pl-10 md:py-8'>
                        <h1 className='font-semibold text-[40px] leading-[44px] text-[#222222]'>Review your information</h1>
                        <div className='bg-white border rounded-[32px] p-6 my-6'>
                            <h2 className='font-semibold text-[24px] leading-[44px] text-[#222222]'>Company Details</h2>
                            <p className='font-normal text-[16px] leading-6 text-[#222222]'>Make sure your name matches your government issued I.D.</p>
                            <div className='py-4'>
                                <div className='flex item-center gap-4 md:gap-4 pb-4'>
                                    <div className="w-1/2">
                                        <label htmlFor="firstname" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                            {'provide_contact_information_form_input1_placeholder'}
                                        </label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            id="firstname"
                                            autoComplete="given-name"
                                            required
                                            onChange={onNameChange}
                                            className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                        />
                                    </div>

                                    <div className="w-1/2">
                                        <label htmlFor="lastname" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                            {'provide_contact_information_form_input2_placeholder'}
                                        </label>
                                        <input
                                            type="text"
                                            name="lastname"
                                            id="lastname"
                                            autoComplete="family-name"
                                            required
                                            onChange={onlastNameChange}
                                            className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                        />
                                    </div>
                                </div>
                                <div className='flex item-center gap-4 md:gap-4 pb-4'>
                                    <div className="w-full">
                                        <label htmlFor="emailaddress" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                            {'provide_contact_information_form_input3_placeholder'}
                                        </label>
                                        <input
                                            type="text"
                                            name="emailaddress"
                                            id="emailaddress"
                                            autoComplete="email"
                                            required
                                            onChange={onEmailChange}
                                            className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                        />
                                    </div>
                                </div>
                                <div className='flex item-center gap-4 md:gap-4 pb-4'>
                                    <div className="w-full">
                                        <label htmlFor="phonenumber" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                            {'provide_contact_information_form_input4_placeholder'}
                                        </label>
                                        <div className="relative mt-1 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="phonenumber"
                                                id="phonenumber"
                                                autoComplete="tel"
                                                required
                                                onChange={onPhoneChange}
                                                className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                                placeholder="+1 (123) 111-22-33"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center gap-4 pb-4'>
                                    <div className="w-full md:w-1/2">
                                        <label htmlFor="country" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                            {'provide_contact_information_form_input6_placeholder'}
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                            onChange={onCountryChange}
                                        >
                                            <option>Select Country</option>
                                            {countries.map((country) => (
                                                <option
                                                    key={country.name}
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
                                            {'provide_contact_information_form_input7_placeholder'}
                                        </label>
                                        <select
                                            name="region"
                                            id="region"
                                            autoComplete="address-level1"
                                            className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                        >

                                            <option value=""> {country === 'United States' ? 'Select State' : 'No State'}</option>
                                            {country === 'United States' &&
                                                states.map((state) => (
                                                    <option
                                                        key={state.name}
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
                                            {'provide_contact_information_form_input9_placeholder'}
                                        </label>
                                        <input
                                            type="text"
                                            name="postalcode"
                                            id="postalcode"
                                            autoComplete="postalcode"
                                            required
                                            onChange={onZipChange}
                                            className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                        />
                                    </div>
                                    <div className="w-full md:w-2/4">
                                        <label htmlFor="city" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                            {'provide_contact_information_form_input8_placeholder'}
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            required
                                            onChange={onCityChange}
                                            autoComplete="address-level2"
                                            className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="streetaddress" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                        {'provide_contact_information_form_input5_placeholder'}
                                    </label>
                                    <input
                                        type="text"
                                        name="streetaddress"
                                        id="streetaddress"
                                        onChange={onStreetChange}
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
                        <h1 className='font-semibold text-[26px] md:text-[40px] leading-[44px] text-[#222222]'>Order Review</h1>
                        <div className='bg-white border rounded-[32px] p-6 my-6'>
                            <h2 className='font-semibold text-[24px] leading-[44px] text-[#222222]'>Company Details</h2>
                            <div className='flex items-center justify-between py-2'>
                                <div className='flex items-center gap-4'>
                                    <p className='font-semibold text-sm leading-6 text-[#8A8A8A]'>Entity type</p>
                                    <span className='font-semibold text-sm leading-6 text-[#222222]'>{companyType}</span>
                                </div>
                                <Link className='font-semibold text-sm leading-6 text-[#1649FF]' href={`/company-type`} >
                                    Edit
                                </Link>
                            </div>
                            <div className='flex items-center justify-between py-2'>
                                <div className='flex items-center gap-4'>
                                    <p className='font-semibold text-sm leading-6 text-[#8A8A8A]'>Company Name</p>
                                    <span className='font-semibold text-sm leading-6 text-[#222222]'>{companyName}</span>
                                </div>
                                <Link className='font-semibold text-sm leading-6 text-[#1649FF]' href={`/company-name`}>
                                    Edit
                                </Link>
                            </div>
                            <div className='flex items-center justify-between py-2'>
                                <div className='flex items-center gap-4 '>
                                    <p className='font-semibold text-sm leading-6 text-[#8A8A8A]'>Filing Juristiction</p>
                                    <span className='font-semibold text-sm leading-6 text-[#222222]'>{companyState}</span>
                                </div>
                                <Link className='font-semibold text-sm leading-6 text-[#1649FF]' href={`/state`}>
                                    Edit
                                </Link>
                            </div>
                        </div>
                        <div className='bg-white border rounded-[32px] p-6 my-6'>
                            {selectedPackage && selectedPackage.map((price, index) => (
                                <>
                                    <div className='flex items-center justify-between'>
                                        <h2 className='font-semibold text-[24px] leading-[44px] text-[#222222]'>{price.orderPackage}</h2>
                                        <h2 className='font-semibold text-[24px] leading-[44px] text-[#222222]'>{'$' + (price.orderPackagePrice / 100).toFixed(0)}</h2>
                                    </div>
                                    <div className='block py-6'>
                                        {price.features.map((feature, index) => (
                                            <div className='flex items-center gap-4 py-2'>
                                                <Image src={tick} className='w-5 h-5' alt='list' />
                                                <p className='font-semibold text-lg leading-6 text-[#222222]'>{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ))
                            }
                        </div>
                    </div>
                }
            </div>
            <div className='w-full py-0 px-4 md:px-0 -mt-6 md:mt-0 mb-12 md:mb-0 md:w-[55%]'>
                <div className='bg-white rounded-[32px] md:rounded-none p-6 relative'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-semibold text-lg leading-[44px] text-[#222222]'>Order Summary</h2>
                        <h2 className='font-semibold text-lg leading-[44px] text-[#1649FF]'>USD</h2>
                    </div>
                    <div className='pt-6 py-4 border-b border-[#C8C8C8]'>
                        <h4 className='font-semibold text-[15px] leading-6 text-[#545454]'>1 item(s)</h4>
                    </div>
                    <div className='flex items-center justify-between py-4'>
                        {selectedPackage && selectedPackage.map((price, index) => (
                            <>
                                <div>
                                    <h1 className='font-semibold text-[16px] leading-6 text-[#222222]'>One time payment</h1>
                                    <p className='font-semibold text-[16px] leading-6 text-[#222222]'>{price.orderPackage}</p>
                                </div>
                                <div><h1 className='font-semibold text-[16px] leading-6 text-[#222222]'>{'$' + (price.orderPackagePrice / 100).toFixed(0)}</h1></div>
                            </>
                        ))}
                    </div>
                    <div className='md:mt-96'>
                        <div className='flex flex-col gap-6'>
                            <button className='font-semibold  text-left text-[16px] leading-6 text-[#1649FF]' onClick={() => setCouponCode(true)}>Add Coupon Code</button>
                            {couponcode && <input type='text' name="couponCode" id="couponCode" className="-mt-2 mb-4 md:mb-0 md:mt-1 block w-full md:w-1/2 rounded-[20px] border-[#C8C8C8] py-2 shadow-sm" onChange={couponcode} />}
                        </div>
                        <div className='flex items-center justify-between py-4'>
                            <div>
                                <h1 className='font-semibold text-lg leading-6 text-[#222222]'>Today's Total</h1>
                            </div>
                            {selectedPackage && selectedPackage.map((price, index) => (
                                <div><h1 className='font-semibold text-lg leading-6 text-[#222222]'>{'$' + (price.orderPackagePrice / 100).toFixed(0)}</h1></div>
                            ))}
                        </div>
                        <div className='flex items-center justify-center py-4'>
                            <Link href='#' onClick={displayForm ? handleSubmit : displayHandleForm} className='bg-[#1649FF] w-full text-center text-white font-semibold text-lg py-2 rounded-[20px]'>Continue</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
