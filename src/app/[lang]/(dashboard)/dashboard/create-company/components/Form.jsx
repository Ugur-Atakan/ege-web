'use client'

import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import clipboardCopy from 'clipboard-copy';

import  { getLLCSilver, getLLCGold, getCorpSilver, getCorpGold, getCorpPlat } from '../api'
import { MdContentCopy } from "react-icons/md";
import UpsellForm from './UpsellForm'
import { stripeURLEmailBody } from '../api/mailgun'
import { useSession } from 'next-auth/react';

const Form = () => {
  const { data } = useSession();
  const [upsellForms, setUpsellForms] = useState([]);
  const [disableCreateButton, setDisableCreateButton] = useState(false);

  // Fetch states from state API 
  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getStatesAndCountries = async () => {
      const states = await axios.get('/api/states/');
      setStates(states.data);
      const countries = await axios.get('/api/countries/');
      setCountries(countries.data);
    }
    getStatesAndCountries();
  }, []);

  const [stripeURL, setStripeURL] = useState('');
  const [formValues, setFormValues] = useState({
    companyName: '',
    companyType: 'LLC',
    package: 'Silver',
    state: 'Delaware',
    upsells: [],
    firstName: '',
    lastName: '',
    email: '',
    country: 'United States',
    streetAddress: '',
    city: '',
    region: '',
    postalCode: ''
  });


  const upsellOptions = [
    'Virtual Mailbox',
    'Office Space'
  ]

  const handleAddUpsellForm = () => {
    setUpsellForms(prevForms => [...prevForms, <UpsellForm upsellOptions={upsellOptions} formValues={formValues} setFormValues={setFormValues} key={prevForms.length} />]);
    // if upsell is already added, don't add it again
    
    // if (!formValues.upsells.some((upsell) => upsell.upsell === 'Virtual Mailbox')) {
    //   setFormValues((prev) => ({ 
    //     ...prev,
    //     upsells: [
    //       ...prev.upsells,
    //       {
    //         upsell: 'Virtual Mailbox',
    //         frequency: 'Monthly',
    //       },
    //     ],
    //   }));
    // }
  };
  
  const handleRemoveUpsellForm = (index) => {
    setUpsellForms(prevForms => [...prevForms.filter((_, i) => i !== index)]);
    // remove the duplicate upsell from the formValues
  };

  const handleUpsellFormSubmit = async () => {
    // if any form value is empty
    if (Object.values(formValues).includes('')) {
      toast.error('Please fill in all the fields');
      console.log(formValues)
      return; 
    }
    
    //* Get the prices from stripe API to fetch the priceID
    //? Change to API internal later on
    const getStripePrice = async () => {
      let stripePrice = '';
      if (formValues.companyType === 'LLC') {
        if (formValues.package === 'Silver') {
          stripePrice = await getLLCSilver(formValues.state);
        } else if (formValues.package === 'Gold') {
          stripePrice = await getLLCGold(formValues.state);
        }
      } else if (formValues.companyType === 'Corp') {
        if (formValues.package === 'Silver') {
          stripePrice = await getCorpSilver(formValues.state);
        } else if (formValues.package === 'Gold') {
          stripePrice = await getCorpGold(formValues.state);
        } else if (formValues.package === 'Platinum') {
          stripePrice = await getCorpPlat(formValues.state);
        }
      }
      return stripePrice;
    }
    const stripePrice = await getStripePrice();

    const sendFormValues = async () => {
      const stripePayload = {
        subscriptionFlag: false,
        upsells: formValues.upsells || null,
        priceID: stripePrice.id,
        customerEmail: formValues.email,
      }

      const companyPayload = {
        companyName: formValues.companyName,
        companyType: formValues.companyType,
        companyPackage: formValues.package,
        mainState: formValues.state,
        upsells: formValues.upsells,
        customerFirstName: formValues.firstName,
        customerLastName: formValues.lastName,
        email: formValues.email,
        userID: data.user.uid,
        address: {
          country: formValues.country,
          streetAddress: formValues.streetAddress,
          city: formValues.city,
          state: formValues.region,
          zipCode: formValues.postalCode 
        }
      }

      try {
        const companyRES = await axios.post('/api/dashboard/workspace/create-company-by-admin', companyPayload);
        setDisableCreateButton(true);
        if (companyRES.status === 200) {
          stripePayload.companyID = companyRES.data.companyID;
          const stripeRES = await axios.post('/api/stripe/dashboard/created-by-admin', stripePayload);
          const url = stripeRES.data;
          setStripeURL(url);
          toast.success('Company created successfully');
        }
      } catch (error) {
        console.log(error)
        toast.error('An error occured while creating the company');
      }
    }

    sendFormValues();
  }

  const sendStripeURLByEmail = async () => {
    const emailBody = stripeURLEmailBody(stripeURL);
    const payload = {
      sender_email: 'Registate@gmail.com',
      receiver_email: formValues.email,
      email_subject: 'Complete your company registration with Registate',
      email_body: emailBody
    }

    axios.post('/api/mailgun', payload)
      .then(() => {
        console.log('Email sent successfully')
        toast.success('Email sent successfully');
      })
      .catch(() => {
        console.log('An error occured while sending the email');
        toast.error('An error occured while sending the email');
      });
  }

  return (
    <React.Fragment>
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
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900">Create a company</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Fill in the form below to create a new company
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="company-name" className="block text-sm font-medium leading-6 text-gray-900">Company Name</label>
                    <div className="mt-2">
                        <input 
                          type="text"
                          name="company-name"
                          id="company-name"
                          autoComplete="given-name"
                          placeholder='Kittens Co.'
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B2347] sm:text-sm sm:leading-6" 
                          onChange={(e) => setFormValues({...formValues, companyName: e.target.value})}
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="company-type" className="block text-md font-medium leading-6 text-gray-900">
                    Company Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="company-type"
                      name="companyType"
                      autoComplete="country-type"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B2347] sm:text-sm sm:leading-6"
                      onChange={(e) => setFormValues({...formValues, companyType: e.target.value})}
                    >
                      <option>LLC</option>
                      <option>Corp</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="packet" className="block text-sm font-medium leading-6 text-gray-900">Package</label>
                  <div className="mt-2">
                    <select 
                      id="packet" 
                      name="pcaket"
                      autoComplete="packet"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B2347] sm:text-sm sm:leading-6"
                      onChange={(e) => setFormValues({...formValues, package: e.target.value})}
                    >
                      <option>Silver</option>
                      <option>Gold</option>
                      <option>Platinum</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="company-state" className="block text-md font-medium leading-6 text-gray-900">
                    State
                  </label>
                  <div className="mt-2">
                    <select
                      id="company-state"
                      name="companyState"
                      autoComplete="country-state"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B2347] sm:text-sm sm:leading-6"
                      onChange={(e) => setFormValues({...formValues, state: e.target.value})}
                    >
                      {states.map((state, index) => (
                        <option key={index}>{state.state}</option>
                      ))}
                    </select>
                  </div>
                </div>
          </div>
          <button 
              onClick={handleAddUpsellForm}
              type="button"
              className='text-sm py-2 px-4 rounded mt-4 font-semibold leading-6 bg-[#0B2347] text-white'
            >
              Add Upsell
          </button>
          {upsellForms.length != 0 && <button 
            onClick={(e) => handleRemoveUpsellForm(upsellForms.length - 1)}
            type="button"
            className='ml-5 text-sm py-2 px-4 rounded mt-4 font-semibold leading-6 bg-[#0B2347] text-white'
          >
            Remove Upsell
          </button>}

          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {upsellForms.map((form, index) => (
              <div key={index}>
                {React.cloneElement(form, {
                  handleUpsellChange: (value) => handleUpsellChange(index, value),
                  handleFreqChange: (value) => handleFreqChange(index, value),
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Customers Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Fill in the customers information</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                    <div className="mt-2">
                        <input 
                          type="text"
                          placeholder='Harry'
                          name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B2347] sm:text-sm sm:leading-6" 
                          onChange={(e) => setFormValues({...formValues, firstName: e.target.value})}
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                    <div className="mt-2">
                        <input 
                          type="text" 
                          placeholder='Potter'
                          name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B2347] sm:text-sm sm:leading-6" 
                          onChange={(e) => setFormValues({...formValues, lastName: e.target.value})}
                        />
                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div className="mt-2">
                        <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B2347] sm:text-sm sm:leading-6" 
                          placeholder='harry@hogwarts.com'
                          onChange={(e) => setFormValues({...formValues, email: e.target.value})}
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                    <div className="mt-2">
                        <select 
                          id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#0B2347] sm:max-w-xs sm:text-sm sm:leading-6"
                          onChange={(e) => setFormValues({...formValues, country: e.target.value})}  
                        > 
                          {countries.map((country, index) => (
                            <option key={index}>{country.name}</option>
                          ))}
                        </select>
                    </div>
                </div>

                <div className="col-span-full">
                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                    <div className="mt-2">
                        <input 
                          type="text" name="street-address" id="street-address" autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B2347] sm:text-sm sm:leading-6"
                          placeholder='4 Privet Drive'
                          onChange={(e) => setFormValues({...formValues, streetAddress: e.target.value})}  
                        />
                    </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                    <div className="mt-2">
                        <input 
                          placeholder='Little Whinging'
                          type="text" name="city" id="city" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B2347] sm:text-sm sm:leading-6" 
                          onChange={(e) => setFormValues({...formValues, city: e.target.value})}
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                    <div className="mt-2">
                        <input 
                          placeholder='Surrey'
                          type="text" name="region" id="region" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B2347] sm:text-sm sm:leading-6" 
                          onChange={(e) => setFormValues({...formValues, region: e.target.value})}
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                    <div className="mt-2">
                        <input
                          placeholder='12345' 
                          type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B2347] sm:text-sm sm:leading-6" 
                          onChange={(e) => setFormValues({...formValues, postalCode: e.target.value})}
                        />
                    </div>
                </div>
            </div>
          </div>
      </div>

      {stripeURL && <div className="border-b border-gray-900/10 pb-12">
            <h2 className="mt-4 text-2xl font-semibold leading-7 text-gray-900">Stripe URL</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Copy Stripe URL or Email them</p>
            <div className="mt-2 col-span-full flex items-center">
              <input 
                type="text" 
                name="stripeUrl" 
                id="stripe-url" 
                autoComplete="stripe-url" 
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0B2347] sm:text-sm sm:leading-6"
                disabled
                value={stripeURL}
              />
              <MdContentCopy className="cursor-pointer text-2xl ml-2" 
                onClick={() => {
                  clipboardCopy(stripeURL);
                  toast.success('Copied to clipboard');
                }}
              />
              <button 
                className='ml-5 text-sm py-2 px-4 rounded font-semibold leading-6 bg-[#0B2347] text-white'
                onClick={() => sendStripeURLByEmail()}
              >
                Email
              </button>
            </div>
      </div> 
      }
      

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          className="rounded-md bg-[#0B2347] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0B2347] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2347]"
          onClick={handleUpsellFormSubmit}
          disabled={disableCreateButton}
        >
          Create Company
        </button>
      </div>
    </React.Fragment>
  )
}

export default Form 