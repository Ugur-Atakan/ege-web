import { ExclamationCircleIcon, StarIcon } from '@heroicons/react/20/solid'
import React, { useState, useEffect } from 'react'
import HeroImage from '../images/hero.png'
import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const API_ROOT = window.ob.config.apiRoot;

function TypingHeader() {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    t('hero_section_title_message_1'),
    t('hero_section_title_message_2'),
    t('hero_section_title_message_3'),
    t('hero_section_title_message_4'),
    t('hero_section_title_message_5'),
    t('hero_section_title_message_6'),
    t('hero_section_title_message_7'),
    t('hero_section_title_message_8'),
    t('hero_section_title_message_9'),
    t('hero_section_title_message_10'),
  ]

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(messages[messageIndex].substring(0, i));
      i++;
      if (i > messages[messageIndex].length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setText('');
          setMessageIndex((messageIndex + 1) % messages.length);
        }, 1000);
      }
    }, 100);
  }, [messageIndex]);


  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">{t('hero_section_title_1')}</span>
      </h1>
      <h1 className="flex md:justify-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block text-blue-600 xl:inline">{text}</span>
        <span className="text-yellow-500">|</span>
      </h1>
    </>
  );
}

export default function Hero(props) {
  const { t, i18n } = useTranslation();
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 96);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  const [email, setEmail] = useState('');
  const [companyName, setcompanyName] = useState('');
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();
  const landingform = "came from landing form"

  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const onCompanyNameChange = (evt) => {
    setcompanyName(evt.target.value);
  };

  function formSubmitHandler(e) {
    if (email === '' || companyName === '') {
      e.preventDefault();
      setValidation(true);
      return false;
    }
    
    e.preventDefault();
    setValidation(false);
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
          navigate('/onboarding')
        }

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8">
              <div className="sm:text-center lg:text-center pt-16">
                <TypingHeader />
                <p className="mt-5 mb-5 text-base text-gray-800 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-2xl lg:mx-0">
                  {t('hero_section_desc')}
                </p>
                {validation
                  ? <div className='flex justify-center'>
                    <h1 className='text-red-400 text-md flex items-center gap-2'> <ExclamationCircleIcon className='w-8' />Please fill in the blanks</h1>
                  </div>
                  : null}
                {/* <form onSubmit={formSubmitHandler}>
                  <div className=' py-4 md:px-12'>
                    <div className='pb-4'>
                      <label htmlFor="companyName" className="sr-only">
                        companyname
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        value={companyName}
                        onChange={onCompanyNameChange}
                        className="block outline-none w-full rounded-md border-0  px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        placeholder="Enter your preferred company name"
                      />
                    </div>
                    <div className='pb-4'>
                      <label htmlFor="userEmail" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        name="userEmail"
                        id="userEmail"
                        value={email}
                        onChange={onEmailChange}
                        className="block outline-none w-full rounded-md border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Please type your e-mail to contact you"
                      />
                    </div>
                  </div>
                  <div className='flex justify-center'>
                    <button type="submit" id='form-my-company' className="px-16 py-4 relative rounded group overflow-hidden font-medium bg-blue-600 text-white inline-block">
                      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-700 group-hover:h-full opacity-90"></span>
                      <span className="relative group-hover:text-white text-lg">{t('hero_section_button')}</span>
                    </button>
                  </div>
                </form> */}
                <div className="flex flex-col md:flex-row py-3 gap-2 md:gap-0  md:py-0 md:inline-flex items-center mx-auto mt-4">
                  <div className="flex flex-shrink-0 pr-2">
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  </div>
                  <div className=" min-w-0 flex-1 py-1 text-sm text-gray-500 sm:py-3">
                    <span className="font-medium text-gray-900">{t('hero_section_star_1')}</span> {t('hero_section_star_2')}{' '}
                    <span className="font-medium text-blue-600">{t('hero_section_star_3')}</span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src={HeroImage}
            alt=""
          />
        </div>
      </div>
    </>
  )
}
