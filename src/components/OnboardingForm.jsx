
import React, { useState, useEffect, useRef, useReducer } from 'react'
import axios from "axios";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const OrderInformationPanel = ({ companyName, packageName, packagePrice}) => {

    return (
        <div className="bg-blue-50 shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <div className="sm:flex sm:items-start sm:justify-between">
                    <div>
                        {packageName && packagePrice && (
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Selected Package: <span className="text-blue-700">{packageName} - ${packagePrice}</span></h3>
                        )}
                        {companyName && (
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Company Name: <span className="text-blue-700">{companyName}</span></h3>
                        )}
                    </div>
                    <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:flex-shrink-0 sm:items-center">
                        <button
                            type="button" 
                            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                            onClick={() => {
                                localStorage.clear()
                                window.location.href = "/pricing"
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



const CompanyNameEmailForm = ({ setCompanyName }) => {


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
        axios.post('https://api.registate.net/api/onboard', payload, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
        }})
        .then(function (response) {
            //Parse the returned json data
            var jsonData = JSON.parse(JSON.stringify(response.data));
            if (jsonData.Status) {
                console.log("Company registered successfully with id: " + jsonData.data.id);
                localStorage.setItem('onboardingId', jsonData.data.id);
                localStorage.setItem('companyName', new_company_name);
                setCompanyName(new_company_name);
                        
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
            <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Select a company name</h3>
            <div className="mt-2 max-w-4xl text-sm text-gray-500">
              <p>Enter your preferred business name here. We will do a extensive company name search and let you know if its available or not. Your email address will be used to create an account with us so that you can check the status of your application.</p>
            </div>
            <form className="mt-5 sm:flex sm:items-center" onSubmit={formSubmitHandler}>
                <div className="w-full sm:max-w-sm">
                    <div className="mt-4">
                        <label htmlFor="companyName" className="sr-only">Company Name</label>
                        <input type="text" name="companyName" id="companyName" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Company Name"></input>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="userEmail" className="sr-only">Email</label>
                        <input type="email" name="userEmail" id="userEmail" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="you@example.com"></input>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-16 py-3 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Submit</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
      )
  }

const CompanyContactInfoForm = () => {

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log('CompanyContactInfoForm submitted,', e)

        let companyContactName = e.target.firstname.value + " " + e.target.lastname.value;
        let companyContactEmail = e.target.emailaddress.value;
        let companyContactPhone = e.target.phonenumber.value;
        let companyContactAddress = e.target.streetaddress.value + ", " + e.target.city.value + ", " + e.target.region.value + " " + e.target.postalcode.value + ", " + e.target.country.value;

        let onboardingId = localStorage.getItem('onboardingId')
        let packageType = localStorage.getItem('packageType')


        let payload = {
            "companyContactName": companyContactName,
            "companyContactEmail": companyContactEmail,
            "companyContactPhone": companyContactPhone,
            "companyContactAddress": companyContactAddress,
            "onBoardId": onboardingId,
            "packageType": packageType
        }
        console.log(payload)

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
        <form className="space-y-6" onSubmit={formSubmitHandler}>  
            <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Company Contact Information</h3>
                    <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                autoComplete="given-name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                            </div>
            
                            <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                                Last name
                            </label>
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                autoComplete="family-name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                            </div>
            
                            <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                            <label htmlFor="emailaddress" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                type="text"
                                name="emailaddress"
                                id="emailaddress"
                                autoComplete="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                                <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <input
                                    type="text"
                                    name="phonenumber"
                                    id="phonenumber"
                                    autoComplete="tel"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="+1 (123) 111-22-33"
                                    />
                                </div>
                            </div>

                            <div className="col-span-6">
                            <label htmlFor="streetaddress" className="block text-sm font-medium text-gray-700">
                                Street address
                            </label>
                            <input
                                type="text"
                                name="streetaddress"
                                id="streetaddress"
                                autoComplete="street-address"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                            </div>
            
                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                autoComplete="address-level2"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                            </div>
            
                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                State / Province
                            </label>
                            <input
                                type="text"
                                name="region"
                                id="region"
                                autoComplete="address-level1"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                            </div>
            
                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="postalcode" className="block text-sm font-medium text-gray-700">
                                ZIP / Postal code
                            </label>
                            <input
                                type="text"
                                name="postalcode"
                                id="postalcode"
                                autoComplete="postalcode"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Country
                            </label>
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end">

            <button
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Save
            </button>
            </div>

      </form>
    );
};




const OnboardingForm = () => {
    let [packageName, setPackageName] = useState(localStorage.getItem('packageName'))
    let [packagePrice, setPackagePrice] = useState(localStorage.getItem('packagePrice'))
    let [companyName, setCompanyName] = useState(localStorage.getItem('companyName'))
    let [packageType, setPackageType] = useState(localStorage.getItem('packageType'))

    useEffect(() => {
        console.log("OnboardingForm useEffect")
        //Check if packageType is defined in local storage, if not redirect to /pricing
        let packageType = localStorage.getItem('packageType')
        if (!packageType) {
            console.log("packageType not defined, redirecting to /pricing")
            window.location.href = "/pricing"
        }

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
        <div className="mx-auto max-w-4xl">
            <div id="description" className="px-6 text-center">
                <h2 className="mt-6 font-bold tracking-tight text-gray-900 text-4xl">
                Complete forming <span className="text-blue-700">{
                                        localStorage.getItem('companyType') === 'LLC' ? 'an LLC' : 'a Corporation'
                }</span> in <span className="text-blue-600">{localStorage.getItem('companyState')}</span>
                </h2>
            </div>
            <div id="OrderInformationDiv" className="mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <OrderInformationPanel companyName={companyName} packageName={packageName} packagePrice={packagePrice} />
            </div>
            <div id="CompanyNameEmailFormDiv" className="mx-auto px-4 sm:px-6 lg:px-8 mt-10">            
                <CompanyNameEmailForm setCompanyName={setCompanyName}/>
            </div>
            <div id="CompanyContactInfoFormDiv" className="px-6 py-6">
                <CompanyContactInfoForm />
            </div>
        </div>
    )
}





export default OnboardingForm