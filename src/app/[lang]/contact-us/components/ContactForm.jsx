'use client'

import React, { useState } from 'react'  
import Image from 'next/image'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import megaphone from '@/assets/images/megaphone.png'

import { useTranslation } from '@/i18n/client'

/**
 * ContactForm component
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {client}
 * @returns {JSX.Element} Rendered ContactForm component
*/

const ContactForm = ({ lang }) => {
  const { t } = useTranslation(lang);
  
  const [subjects, setSubjects] = useState(['Help / Support Question', 'Complaint']);


  const [message, setMessage] = useState('');

  const messageonChange = (e) => {
    setMessage(e.target.value)
  }

  if (message?.length >= 500) {
    toast("Maximum number of characters 500");
  }

  const submitHandler = (e) => {
    e.preventDefault();

    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;
    let fullName = firstName + ' ' + lastName;
    let email = e.target.email.value;
    let message = e.target.message.value;

    const createJIRAReq = async () => {
      try {
        await axios.post('/api/jira/create-customer-req', {
          fullName,
          email,
          message,
        })

        toast.success('Request sent!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      catch(err) {
            toast.error('Customer request failed', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
      }
    }

    createJIRAReq();
  }
  
  return (
    <div className='bg-white'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className='max-w-7xl px-6 py-12'>
        <div className='lg:flex items-start'>
          <div className='hidden lg:block w-full -mt-24'>
            <Image src={megaphone} alt='contact us' />
          </div>
          <div className='w-full lg:w-2/3'>
            <h1 className='font-semibold text-[26px] lg:text-[40px] leading-[32px] lg:leading-[44px] text-[#222222]'>{t('contact_form_title')}</h1>
            <p className='font-semibold text-[16px] lg:text-lg leading-[22px] lg:leading-6 text-[#222222] py-4'>{t('contact_form_desc')}</p>
            <form id='contactform' onSubmit={submitHandler} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="firstName" className="block leading-6 text-[16px] sm:text-sm pb-2.5 sm:py-0 text-[#222222] font-semibold">
                  {t('contact_us_header3_blank_1')} <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    autoComplete="given-name"
                    className="block w-full text-sm font-semibold rounded-[20px] border-[#C8C8C8] py-3 px-4 text-[#222222] shadow-sm focus:border-blue-600"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="lastName" className="block leading-6 text-[16px] sm:text-sm pb-2.5 sm:py-0 text-[#222222] font-semibold">
                    {t('contact_us_header3_blank_2')} 
                  </label>
                  
                  <span id="phone-optional" className="text-[16px] pb-2.5 sm:py-0 sm:text-[11px] sm:mt-1 text-gray-400">
                      {t('contact_form_input_optional')}
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    className="block w-full text-sm font-semibold rounded-[20px] border-[#C8C8C8] py-3 px-4 text-[#222222] shadow-sm focus:border-blue-600"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block leading-6 text-[16px] sm:text-sm pb-2.5 sm:py-0 text-[#222222] font-semibold">
                  {t('contact_form_input_email')} <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full text-sm font-semibold rounded-[20px] border-[#C8C8C8] py-3 px-4 text-[#222222] shadow-sm focus:border-blue-600"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="phone" className="block leading-6 text-[16px] sm:text-sm pb-2.5 sm:py-0 text-[#222222] font-semibold">
                    {t('contact_form_input_phone')}
                  </label>
                  <span id="phone-optional" className="text-[16px] pb-2.5 sm:py-0 sm:text-[11px] sm:mt-1 text-gray-400">
                    {t('contact_form_input_optional')}
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    maxLength="12" 
                    title="Ten digits code"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full text-sm font-semibold rounded-[20px] border-[#C8C8C8] py-3 px-4 text-[#222222] shadow-sm focus:border-blue-600"
                    aria-describedby="phone-optional"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block leading-6 text-[16px] sm:text-sm pb-2.5 sm:py-0 text-[#222222] font-semibold">
                  {t('contact_form_input_help')}
                </label>
                <div className="mt-1">
                  <select
                    id="subject"
                    name="subject"
                    value={'Help / Support Question'}
                    readOnly
                    className="font-semibold border-[#C8C8C8] text-[#222222] text-[16px] sm:text-sm w-full my-2 rounded-[20px] p-4 "
                  >
                    {subjects.map((sub, index) => (
                      <option
                        key={index}
                        value={sub}
                      >
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label htmlFor="message" className="block text-[16px] sm:text-sm pb-2.5 sm:py-0 font-medium focus:border-blue-600">
                    {t('contact_form_input_message')}
                  </label>
                </div>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    maxLength="500"
                    onChange={messageonChange}
                    className="block text-sm font-semibold w-full rounded-[20px] border-[#C8C8C8] py-3 px-4 text-[#222222] shadow-sm focus:border-blue-600"
                    aria-describedby="message-max"
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <button
                  type="submit"
                  className="mt-2 font-semibold inline-flex w-full items-center justify-center rounded-[20px] border border-transparent bg-[#1649FF] text-white py-4"
                >
                  {t('contact_form_submit_button')}
                </button>
              </div>
            </form>
            <div className='flex flex-col lg:flex-row items-center gap-1 lg:gap-2 py-5 lg:py-3'>
              <p className='text-[#8A8A8A] font-semibold text-[16px] sm:text-sm leading-6'>{t('contact_form_footer_white_text')} </p> <span className='text-[#1649FF] lg:pl-0 font-semibold text-[16px] sm:text-sm leading-6'>{t('contact_form_footer_blue_text')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm