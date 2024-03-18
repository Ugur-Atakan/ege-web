'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [form , setForm] = useState({
    companyName: '',
    companyType: '',
    companyType: 'LLC',
    firstName: '',
    lastName: '',
    email: '',
    authorizedOfficerFirstName: '',
    authorizedOfficerLastName: '',
    authorizedOfficerTitle: '',
    recurrencePeriod: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (form.recurrencePeriod === '' || form.companyName === '' || form.companyType === '' || form.firstName === '' || form.lastName === '' || form.email === '') {
      toast.error('Please fill in the form!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    const payload = {
      companyName: form.companyName,
      companyType: form.companyType,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      authorizedOfficerFirstName: form.authorizedOfficerFirstName,
      authorizedOfficerLastName: form.authorizedOfficerLastName,
      authorizedOfficerTitle: form.authorizedOfficerTitle,
      type: 'registered-agent',
      recurrencePeriod: form.recurrencePeriod === 'monthly' ? 'price_1OZCQSJuNLcMU2Po2zG3ROGB' : 'price_1OZCXyJuNLcMU2Pojkij8Wk3'
    }

    const submitToStripe = async () => {
      axios
      .post('/api/stripe/products', { data: { payload } })
      .then((response) => {
          console.log(response.data);
      })
      .catch((error) => {
          console.error('There was an error!', error);
      });
    }

    submitToStripe();
  };

  return (
    <form className='py-10'>
      <div className="space-y-12">
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
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900">Reccurence Period</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Please select whether you want the service monthly or annually
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
           <fieldset className="sm:col-span-4">
              <legend className="block text-md font-medium leading-6 text-gray-900">Recurrence Period</legend>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <input
                    id="monthly"
                    name="recurrencePeriod"
                    type="radio"
                    value="monthly"
                    onChange={(e) => setForm({...form, recurrencePeriod: e.target.value})}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="monthly" className="ml-3 block text-sm font-medium text-gray-700">
                    Monthly
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="annually"
                    name="recurrencePeriod"
                    type="radio"
                    value="annually"
                    onChange={(e) => setForm({...form, recurrencePeriod: e.target.value})}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="annually" className="ml-3 block text-sm font-medium text-gray-700">
                    Annually
                  </label>
                </div>
              </div>
            </fieldset>
            
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900">Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            To appoint us your registered agent we need information regarding your company
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="company-name" className="block text-md font-medium leading-6 text-gray-900">
                Company Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="companyName"
                    id="company-name"
                    autoComplete="companyName"
                    onChange={(e) => setForm({...form, companyName: e.target.value})}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Kittens Co."
                  />
                </div>
              </div>
              <label htmlFor="company-type" className="mt-3 block text-md font-medium leading-6 text-gray-900">
                Company Type
              </label>
              <div className="mt-2">
                <select
                  id="company-type"
                  name="companyType"
                  autoComplete="country-type"
                  onChange={(e) => setForm({...form, companyType: e.target.value})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>LLC</option>
                  <option>Corp</option>
                </select>
              </div>


              <label htmlFor="company-type" className="mt-3 block text-md font-medium leading-6 text-gray-900">
                State
              </label>
              <div className="mt-2">
                <select
                  id="company-type"
                  name="companyType"
                  autoComplete="country-type"
                  onChange={(e) => setForm({...form, companyType: e.target.value})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Delaware</option>
                  <option>New York</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Give us your personal information</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  onChange={(e) => setForm({...form, firstName: e.target.value})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  onChange={(e) => setForm({...form, lastName: e.target.value})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900">Authorized Office Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Please provide information regarding the authorized officer</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  onChange={(e) => setForm({...form, authorizedOfficerFirstName: e.target.value})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="surnae" className="block text-sm font-medium leading-6 text-gray-900">
                Surename
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="surname"
                  id="last-name"
                  autoComplete="family-name"
                  onChange={(e) => setForm({...form, authorizedOfficerLastName: e.target.value})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="title"
                  autoComplete="title"
                  onChange={(e) => setForm({...form, authorizedOfficerTitle: e.target.value})}
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          onClick={handleSubmit}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Buy now
        </button>
      </div>
    </form>
  )
}

export default Form 