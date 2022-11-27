/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Navbar } from "./Navbar"
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import { FormationSteps } from '../components/FormationSteps'

const companyTypes = [
    { id: 'llc', value: 'LLC', title: 'LLC' },
    { id: 'corporation', value: 'Corporation', title: 'Corporation' },
    { id: 'partnership', value: 'Partnership', title: 'Partnership' },
  ]


function ContactInformationForm() {
    let [searchParams, setSearchParams] = useSearchParams();
    let onboardingId = searchParams.get("onboardingId");
    let packageType = searchParams.get("packageType");

    function handleSubmit(event) {
        event.preventDefault()

        console.log('Form submitted')
        let companyContactFirstName = document.getElementById('first-name').value;
        let companyContactLastName = document.getElementById('last-name').value;
        let companyContactEmail = document.getElementById('email').value;
        let companyContactPhone = document.getElementById('phone-number').value;
        let companyContactAddress = document.getElementById('address').value;

        let payload = {
            "companyContactName": companyContactFirstName + " " + companyContactLastName,
            "companyContactEmail": companyContactEmail,
            "companyContactPhone": companyContactPhone,
            "companyContactAddress": companyContactAddress,
            "onBoardId": onboardingId,
            "packageType": packageType
        }
        console.log(payload);

        //Complete Onboarding Order with backend
        axios.post('https://api.registate.net/api/onboard-order', payload, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
        }})
        .then(function (response) {
            //Parse the returned json data
            var jsonData = JSON.parse(JSON.stringify(response.data));
            console.log(jsonData)
            // If the status is true, then redirect to the payment page
            if (jsonData.Status) {
                let stripeUrl = jsonData.data.stripeUrl;
                window.location.href = stripeUrl;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative mx-auto max-w-4xl">
            <svg className="absolute left-full translate-x-1/2 transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
            <defs>
                <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
            </svg>
            <svg className="absolute right-full bottom-0 -translate-x-1/2 transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
            <defs>
                <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
            </svg>
            <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Company Contact Information</h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">This is the company contact information where you can physically receive mails.</p>
            </div>
            <div className="mt-12">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                <div className="mt-1">
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></input>
                </div>
                </div>
                <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                <div className="mt-1">
                    <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></input>
                </div>
                </div>
                <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1">
                    <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></input>
                </div>
                </div>
                <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">Country</label>
                    <select id="country" name="country" className="h-full rounded-md border-transparent bg-transparent py-0 pl-4 pr-8 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500">
                        <option>US</option>
                        <option>CA</option>
                        <option>EU</option>
                    </select>
                    </div>
                    <input type="text" name="phone-number" id="phone-number" autoComplete="tel" className="block w-full rounded-md border-gray-300 py-3 px-4 pl-20 focus:border-indigo-500 focus:ring-indigo-500" placeholder="+1 (555) 987-6543"></input>
                </div>
                </div>
                <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <div className="mt-1">
                    <textarea id="address" name="address" rows="4" className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
                </div>
                </div>
                <div className="sm:col-span-2">
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Review and Pay</button>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
}

export function FormYourCompanyStep2() {

    let [searchParams, setSearchParams] = useSearchParams();
    let companyType = searchParams.get("companyType");
    let companyName = searchParams.get("companyName");
    let companyState = searchParams.get("companyState");

    //based on companyType, set the Type title
    let typeTitle = '';
    for (let i = 0; i < companyTypes.length; i++) {
        if (companyTypes[i].value === companyType) {
            typeTitle = companyTypes[i].title;
        }
    }

    return (
      <div className="relative bg-white">
        <Navbar />
        <FormationSteps />
        <div className="bg-gray-50 py-6 sm:pt-12">
          <div className="mx-auto max-w-md pl-4 pr-8 sm:max-w-lg sm:px-4 lg:max-w-6xl lg:px-8">
            <h1 className="text-center text-4xl font-bold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
            I want to form <span className="text-indigo-500">{companyName}</span> as <span className="text-indigo-500">{typeTitle}</span> in the state of <span className="text-indigo-500 ">{companyState}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-normal text-gray-500">
            </p>
          </div>
        </div>
        <ContactInformationForm />
      </div>
    )
  }
  