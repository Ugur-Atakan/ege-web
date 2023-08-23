import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import megaphone from '../images/megaphone.png';

export default function Contact(props) {
  const API_ROOT = window.ob.config.apiRoot;
  const notify = () => {
    toast("Form submitted successfully");
  }
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
    let email = e.target.email.value;
    let phone = e.target.phone.value;
    let subject = e.target.subject.value;
    let message = e.target.message.value;

    let payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      subject: subject,
      message: message
    }
    console.log(payload)
    axios.post(API_ROOT + '/api/contact', payload, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
      }
    })
      .then(function (response) {
        var jsonData = JSON.parse(JSON.stringify(response.data));
        console.log(jsonData)
        notify();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const { t } = useTranslation();
  return (
    <div className='bg-white'>
      <div className='max-w-7xl px-6 py-12'>
        <div className='lg:flex items-center'>
          <div className='w-full'>
            <img src={megaphone} className='w-[42rem] h-[42rem]' alt='contact us' />
          </div>
          <div className='w-2/3'>
            <h1 className='font-semibold text-[40px] leading-[44px] text-[#222222]'>Questions about plans, pricing, or availability? </h1>
            <p className='font-semibold text-lg leading-6 text-[#222222] py-4'>One of our services experts will reach out to you based on your communication preferences.</p>
            <form id='contactform' onSubmit={submitHandler} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="firstName" className="block leading-6 text-sm text-[#222222] font-semibold">
                  {t('contact_us_header3_blank_1')}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    autoComplete="given-name"
                    className="block w-full rounded-[20px] border-[#C8C8C8] py-3 px-4 text-[#222222] shadow-sm focus:border-blue-600"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block leading-6 text-sm text-[#222222] font-semibold">
                  {t('contact_us_header3_blank_2')}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="lastN ame"
                    id="lastName"
                    autoComplete="family-name"
                    className="block w-full rounded-[20px] border-[#C8C8C8] py-3 px-4 text-[#222222] shadow-sm focus:border-blue-600"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block leading-6 text-sm text-[#222222] font-semibold">
                  {t('contact_us_header3_blank_3')}
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-[20px] border-[#C8C8C8] py-3 px-4 text-[#222222] shadow-sm focus:border-blue-600"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="phone" className="block leading-6 text-sm text-[#222222] font-semibold">
                    {t('contact_us_header3_blank_4')}
                  </label>
                  <span id="phone-optional" className="text-sm text-warm-gray-500">
                    {t('contact_us_header3_blank_4_1')}
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-[20px] border-[#C8C8C8] py-3 px-4 text-[#222222] shadow-sm focus:border-blue-600"
                    aria-describedby="phone-optional"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block leading-6 text-sm text-[#222222] font-semibold">
                  {t('contact_us_header3_blank_5')}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="block w-full capitalize rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-blue-600"
                    value={props.subject ? props.subject : null}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label htmlFor="message" className="block text-sm font-medium focus:border-blue-600">
                    {t('contact_us_header3_blank_6')}
                  </label>
                  <span id="message-max" className="text-sm text-warm-gray-500">
                    {t('contact_us_header3_blank_6_1')}
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    maxlength="500"
                    onChange={messageonChange}
                    className="block w-full rounded-[20px] border-[#C8C8C8] py-3 px-4 text-[#222222] shadow-sm focus:border-blue-600"
                    aria-describedby="message-max"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 sm:flex sm:justify-end">
                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white focus:outline-none hover:text-blue-600 hover:border-blue-600 sm:w-auto"
                >
                  {t('contact_us_header3_button')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
