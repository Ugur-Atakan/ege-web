
import React, { useState, useEffect, useRef, useReducer } from 'react'
import axios from "axios"
import { CheckIcon } from '@heroicons/react/24/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

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

const API_ROOT = window.ob.config.apiRoot;
function OrderInformationPanel(props) {
    let packageName = localStorage.getItem('packageName');
    let packagePrice = localStorage.getItem('packagePrice');
    return (
        <div className="bg-green-50 shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-4 py-1">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        {packageName && packagePrice && (
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Selected Package: <span className="text-green-700">{packageName} - ${packagePrice}</span></h3>
                        )}
                        {props.companyName && (
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Selected Name: <span className="text-green-700">{props.companyName}</span></h3>
                        )}
                        <h2 className="block md:hidden font-medium tracking-tight text-gray-900 text-lg">
                            You are forming <span className="text-blue-700">{
                                localStorage.getItem('companyType') === 'LLC' ? 'an LLC' : 'a Corporation'
                            }</span> in <span className="text-blue-600">{localStorage.getItem('companyState')}</span>
                        </h2>
                    </div>
                    <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:flex-shrink-0 sm:items-center">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                            onClick={() => {
                                localStorage.clear()
                                window.location.href = "/pricing/form-my-company"
                            }}
                        >
                            Start Over
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
function CompanyNameEmailForm(props) {
    const [email, setEmail] = useState('');
    const [companyName, setcompanyName] = useState('');

    const onEmailChange = (evt) => {
        setEmail(evt.target.value);
    };

    const onCompanyNameChange = (evt) => {
        setcompanyName(evt.target.value);
    };
    function formSubmitHandler(e) {
        e.preventDefault();
        let new_company_name = e.target.companyName.value;
        console.log("companyName: " + new_company_name)

        let userEmail = e.target.userEmail.value;
        let companyType = localStorage.getItem('companyType')
        let companyState = localStorage.getItem('companyState')

        let payload = {
            companyName: new_company_name,
            userEmail: userEmail,
            companyType: companyType,
            companyState: companyState
        }
        console.log(payload)
        axios.post(API_ROOT + '/api/onboard', payload, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
            }
        })
            .then(function (response) {
                //Parse the returned json data
                var jsonData = JSON.parse(JSON.stringify(response.data));
                console.log(jsonData)
                if (jsonData.Status) {
                    console.log("Company registered successfully with id: " + jsonData.data.id);
                    localStorage.setItem('onboardingId', jsonData.data.id);
                    localStorage.setItem('companyName', new_company_name);
                    localStorage.setItem('userEmail', userEmail);
                    props.setCompanyName(new_company_name);

                    //hide the form element and show the next step
                    document.getElementById("CompanyNameEmailFormDiv").style.display = "none";
                    document.getElementById("CompanyContactInfoFormDiv").style.display = "block";
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-5 mb-12">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Select a company name</h3>
                <div className="mt-2 max-w-4xl text-sm text-gray-500">
                    <p>Enter your preferred business name here. We will do a extensive company name search and let you know if its available or not. Your email address will be used to create an account with us so that you can check the status of your application.</p>
                </div>
                <form className="mt-5 sm:flex sm:items-center" onSubmit={formSubmitHandler}>
                    <div className="w-full sm:max-w-md">
                        <div className="mt-0">
                            <label htmlFor="companyName" className="sr-only">Company Name</label>
                            <input type="text" value={companyName} onChange={onCompanyNameChange} name="companyName" id="companyName" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Company Name" required></input>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="userEmail" className="sr-only">Email</label>
                            <input type="email" value={email} onChange={onEmailChange} name="userEmail" id="userEmail" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="you@example.com" required></input>
                        </div>
                        <div className="mt-4">
                            <button id='scn-btn' type="submit" className={email === '' || companyName === '' ? "inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-300 px-16 py-3 font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm pointer-events-none" : "inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-16 py-3 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"}>
                                Select Company Name
                            </button>
                            <p className="text-xs leading-5 text-gray-500">
                                By submitting this form, you agree to our{' '}
                                <a href="#" className="font-medium text-gray-900 hover:underline">
                                    Terms
                                </a>
                                ,{' '}
                                <a href="#" className="font-medium text-gray-900 hover:underline">
                                    Data Policy
                                </a>{' '}
                                and{' '}
                                <a href="#" className="font-medium text-gray-900 hover:underline">
                                    Cookies Policy
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
function CompanyContactInfoForm(props) {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');

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

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log('CompanyContactInfoForm submitted,', e)

        let companyContactName = e.target.firstname.value + " " + e.target.lastname.value;
        let companyContactEmail = e.target.emailaddress.value;
        let companyContactPhone = e.target.phonenumber.value;
        let companyContactAddress = e.target.streetaddress.value + ", " + e.target.city.value + ", " + e.target.region.value + " " + e.target.postalcode.value + ", " + e.target.country.value;
        let onboardingId = localStorage.getItem('onboardingId')
        let packageType = localStorage.getItem('packageType')
        let couponCode = e.target.coupon.value

        let payload = {
            "companyContactName": companyContactName,
            "companyContactEmail": companyContactEmail,
            "companyContactPhone": companyContactPhone,
            "companyContactAddress": companyContactAddress,
            "onBoardId": onboardingId,
            "packageType": packageType,
            "couponCode": couponCode
        }

        //Complete Onboarding Order with backend
        axios.post(API_ROOT + '/api/onboard-order', payload, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
            }
        })
            .then(function (response) {
                //Parse the returned json data
                var jsonData = JSON.parse(JSON.stringify(response.data));
                console.log(jsonData)
                // If the status is true, then redirect to the payment page
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


    return (
        <form className="space-y-6" onSubmit={formSubmitHandler} p>
            <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Company Contact Information</h3>
                        <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <div>
                            <div className='flex item-center gap-4 md:gap-12 pb-4'>
                                <div className="w-1/2">
                                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        autoComplete="given-name"
                                        required
                                        onChange={onNameChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    />
                                </div>

                                <div className="w-1/2">
                                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        autoComplete="family-name"
                                        required
                                        onChange={onlastNameChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className='flex item-center gap-4 md:gap-12 pb-4'>
                                <div className="w-1/2">
                                    <label htmlFor="emailaddress" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <input
                                        type="text"
                                        name="emailaddress"
                                        id="emailaddress"
                                        autoComplete="email"
                                        required
                                        onChange={onEmailChange}
                                        value={localStorage.getItem('userEmail')}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    />
                                </div>

                                <div className="w-1/2">
                                    <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <div className="relative mt-1 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="phonenumber"
                                            id="phonenumber"
                                            autoComplete="tel"
                                            required
                                            onChange={onPhoneChange}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                            placeholder="+1 (123) 111-22-33"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6 pb-4">
                                <label htmlFor="streetaddress" className="block text-sm font-medium text-gray-700">
                                    Street address
                                </label>
                                <input
                                    type="text"
                                    name="streetaddress"
                                    id="streetaddress"
                                    required
                                    onChange={onStreetChange}
                                    autoComplete="street-address"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                            </div>
                            <div className='flex-col md:flex-row flex item-center gap-4 md:gap-2 pb-4'>
                                <div className="w-full md:w-1/4">
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                        Country
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
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
                                <div className="w-full md:w-1/4">
                                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                        State / Province
                                    </label>
                                    <select
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
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
                                <div className="w-full md:w-1/4">
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        required
                                        onChange={onCityChange}
                                        autoComplete="address-level2"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    />
                                </div>

                                <div className="w-full md:w-1/4" >
                                    <label htmlFor="postalcode" className="block text-sm font-medium text-gray-700">
                                        ZIP / Postal code
                                    </label>
                                    <input
                                        type="text"
                                        name="postalcode"
                                        id="postalcode"
                                        autoComplete="postalcode"
                                        required
                                        onChange={onZipChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className='block md:flex items-end justify-between'>
                                <div className="col-span-6">
                                    <label htmlFor="coupon" className="block text-sm font-medium text-gray-700">
                                        Apply Coupon
                                    </label>
                                    <input
                                        type="text"
                                        name="coupon"
                                        id="coupon"
                                        className="mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    />
                                </div>
                                <div className='mt-4 md:mt-0'>
                                    <button
                                        id='pay-btn'
                                        type="submit"
                                        className={name === '' || lastname === '' || street === '' || zip === '' || phone === '' || city === '' ? "bg-blue-300 py-3 px-6 rounded-md text-white pointer-events-none" : "mt-3 md:mt-0 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-3 px-6 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"}
                                    >
                                        Review and Pay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    );
};

function Steps(props) {
    const steps = [
        { id: '01', name: 'Select Your Package', href: '#', status: 'complete' },
        { id: '02', name: 'Select Company Name', href: '#', status: 'current' },
        { id: '03', name: 'Provide Contact Information', href: '#', status: 'upcoming' },
    ]

    if (localStorage.getItem('companyName')) {
        steps[1].status = 'complete'
        steps[2].status = 'current'
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <div className="lg:border-t lg:border-b lg:border-gray-200 ">
            <nav aria-label="Progress">
                <ol
                    role="list"
                    className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
                >
                    {steps.map((step, stepIdx) => (
                        <li key={step.id} className="relative overflow-hidden lg:flex-1">
                            <div
                                className={classNames(
                                    stepIdx === 0 ? 'border-b-0 rounded-t-md' : '',
                                    stepIdx === steps.length - 1 ? 'border-t-0 rounded-b-md' : '',
                                    'border border-gray-200 overflow-hidden lg:border-0'
                                )}
                            >
                                {step.status === 'complete' ? (
                                    <a href={step.href} onClick={() => {
                                        localStorage.clear()
                                        window.location.href = "/pricing/form-my-company"
                                    }} className="group">
                                        <span
                                            className="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                            aria-hidden="true"
                                        />
                                        <span
                                            className={classNames(
                                                stepIdx !== 0 ? 'lg:pl-9' : '',
                                                'px-6 py-5 flex items-center text-sm font-medium'
                                            )}
                                        >
                                            <span className="flex-shrink-0">
                                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                                                    <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                                </span>
                                            </span>
                                            <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                                                <span className="text-sm font-medium">{step.name}</span>
                                            </span>
                                        </span>
                                    </a>
                                ) : step.status === 'current' ? (
                                    <a aria-current="step">
                                        <span
                                            className="absolute top-0 left-0 h-full w-1 bg-blue-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                            aria-hidden="true"
                                        />
                                        <span
                                            className={classNames(
                                                stepIdx !== 0 ? 'lg:pl-9' : '',
                                                'px-6 py-5 flex items-center text-sm font-medium'
                                            )}
                                        >
                                            <span className="flex-shrink-0">
                                                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-600">
                                                    <span className="text-indigo-600">{step.id}</span>
                                                </span>
                                            </span>
                                            <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                                                <span className="text-sm font-medium text-blue-600">{step.name}</span>
                                                <span className="text-sm font-medium text-gray-500">{step.description}</span>
                                            </span>
                                        </span>
                                    </a>
                                ) : (
                                    <a href={step.href} className="group">
                                        <span
                                            className="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                            aria-hidden="true"
                                        />
                                        <span
                                            className={classNames(
                                                stepIdx !== 0 ? 'lg:pl-9' : '',
                                                'px-6 py-5 flex items-start text-sm font-medium'
                                            )}
                                        >
                                            <span className="flex-shrink-0">
                                                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
                                                    <span className="text-gray-500">{step.id}</span>
                                                </span>
                                            </span>
                                            <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                                                <span className="text-sm font-medium text-gray-500">{step.name}</span>
                                                <span className="text-sm font-medium text-gray-500">{step.description}</span>
                                            </span>
                                        </span>
                                    </a>
                                )}

                                {stepIdx !== 0 ? (
                                    <>
                                        {/* Separator */}
                                        <div className="absolute inset-0 top-0 left-0 hidden w-3 lg:block" aria-hidden="true">
                                            <svg
                                                className="h-full w-full text-gray-300"
                                                viewBox="0 0 12 82"
                                                fill="none"
                                                preserveAspectRatio="none"
                                            >
                                                <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                                            </svg>
                                        </div>
                                    </>
                                ) : null}
                            </div>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    )
}




export default function OnboardingForm() {
    let [companyName, setCompanyName] = useState(localStorage.getItem('companyName'))

    useEffect(() => {
        console.log("OnboardingForm useEffect")
        //Check if packageType is defined in local storage, if not redirect to /pricing

        //This function has been disabled because a new form has been added to the home page.
        // let packageType = localStorage.getItem('packageType')
        // if (!packageType) {
        //     console.log("packageType not defined, redirecting to /pricing/form-my-company")
        //    window.location.href = "/pricing/form-my-company"
        // }

        let onboardingId = localStorage.getItem('onboardingId')
        if (onboardingId) {
            //Display onboarding info panel
            document.getElementById("CompanyNameEmailFormDiv").style.display = "none";
            document.getElementById("CompanyContactInfoFormDiv").style.display = "block";
        }
        else {
            document.getElementById("CompanyNameEmailFormDiv").style.display = "block";
            document.getElementById("CompanyContactInfoFormDiv").style.display = "none";
        }
    }, [localStorage.getItem('packageType')]);



    return (
        <div className="mx-auto max-w-5xl">
            <div id="OrderInformationDiv" className="mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
                <OrderInformationPanel companyName={companyName} />
            </div>
            <div id="steps" className="mx-auto px-4 sm:px-6 lg:px-8 mt-2">
                <Steps />
            </div>
            <div id="description" className="hidden md:block px-6 text-center">
                <h2 className="mt-6 font-bold tracking-tight text-gray-900 text-5xl">
                    You are forming <span className="text-blue-700">{
                        localStorage.getItem('companyType') === 'LLC' ? 'an LLC' : 'a Corporation'
                    }</span> in <span className="text-blue-600">{localStorage.getItem('companyState')}</span>
                </h2>
            </div>
            <div id="CompanyNameEmailFormDiv" className="mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <CompanyNameEmailForm setCompanyName={setCompanyName} />
            </div>
            <div id="CompanyContactInfoFormDiv" className="px-6 py-6">
                <CompanyContactInfoForm />
            </div>
        </div>
    )
}