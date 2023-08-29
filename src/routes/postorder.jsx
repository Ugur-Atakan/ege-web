import React, { useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import bigstar from '../images/big-star.webp'
import blurstar from '../images/blur-star.png'
import smallstar from '../images/small-star.png'
import darkstar from '../images/dark-star.png'
import {
  useSearchParams
} from "react-router-dom";

import axios from "axios";

export function PostOrder() {
  //Read order id from query string
  let [searchParams, setSearchParams] = useSearchParams();
  let orderId = searchParams.get("orderId");
  let paymentReceived = searchParams.get("success");
  let [successPayment, setsuccessPayment] = useState(false);
  const { i18n } = useTranslation();

  const API_ROOT = window.ob.config.apiRoot;
  const APP_ROOT = window.ob.config.appRoot;


  const handleExitSuccess = (e) => {
    console.log("handleExit: " + e);
    setsuccessPayment(false)
    localStorage.clear()
    //redirect to dashboard
    window.open(APP_ROOT + "/login")
  }
  const handleExitFailed = (e) => {
    console.log("handleExit: " + e);
    setsuccessPayment(false)
    localStorage.clear()

    //go to previous browser page
    window.history.back();
  }
  useEffect(() => {
    console.log("orderId: " + orderId);
    console.log("paymentReceived: " + paymentReceived);

    //If payment is received
    if (paymentReceived == 1) {
      console.log("Assuming the order is processed by Stripe successfully");
      //Post order to backend
      let payload = {
        "orderId": orderId,
        "success": true
      }
      console.log(payload);
      console.log("Checking if the order exists in backend")

      axios.get(API_ROOT + '/api/order/' + orderId, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
        }
      })
        .then(function (response) {
          //if order exists, then update the order status

          var jsonData = JSON.parse(JSON.stringify(response.data));
          console.log("1.then")
          console.log(jsonData)

          axios.post(API_ROOT + '/api/order-process', payload, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
            }
          })
            .then(function (response) {
              //Parse the returned json data
              var jsonData = JSON.parse(JSON.stringify(response.data));
              console.log("2.then")
              console.log(jsonData.Status)
              if (jsonData.Status) {
                console.log("Order status saved to backend successfully");
                setsuccessPayment(true)
              }
              else {
                console.log("Order status could not be saved to backend");
                setsuccessPayment(false)
              }
            })
            .catch(function (error) {
              setsuccessPayment(false)
              console.log(error);
              alert(JSON.stringify(error))
            })
        })
        .catch(function (error) {
          setsuccessPayment(false)
          console.log(error);
          return
        })
    }
  }, [paymentReceived]);

  return (
    <main className="mt-16 sm:mt-24">
      <div className="mx-auto max-w-7xl bg-white py-24 px-4 sm:px-6 lg:px-8">
        {
          successPayment && (
            <div className="md:min-h-screen block md:flex items-center justify-center bg-cover bg-center bg-image relative">
              <img src={bigstar} className='h-64 md:h-auto' alt='' />
              <div className="md:absolute text-center top-1/2 left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 max-w-xl px-4 md:px-0">
                <h1 className="text-black md:text-white text-xl md:text-[64px] leading-[64px] text-center font-bold md:mb-6">
                  Congratulations, your company is almost reality!
                </h1>
                <p className="text-black md:text-white text-lg md:text-[22px] leading-[26px] text-center font-semibold mb-8 md:mb-16 md:px-20">
                  We confirmed your payment and we’ll get in touch as soon as possible.
                </p>
                <Link to={`/${i18n.language}/`} className='rounded-[20px] bg-[#1649FF] md:bg-white text-white md:text-[#222222] font-semibold text-lg md:text-[22px] leading-[26px] py-3 md:py-6 px-6 md:px-12'>
                  Go to the main page
                </Link>
              </div>
              <div className="hidden md:block absolute right-48 top-48 transform -translate-y-1/2 animate-bounce">
                <img src={smallstar} alt="" className="h-36" />
              </div>
              <div className="hidden: md:block absolute left-[28rem] top-48 transform -translate-y-1/2 animate-bounce">
                <img src={darkstar} alt="" className="h-12" />
              </div>
              <div className="hidden md:block absolute left-[28rem] bottom-[38%] transform -translate-y-1/2 animate-bounce">
                <img src={darkstar} alt="" className="h-12" />
              </div>
            </div>
          )
        }
        {
          !successPayment && (
            <div className="md:min-h-screen block md:flex items-center justify-center bg-cover bg-center bg-image relative">
              <img src={bigstar} className='h-64 md:h-auto' alt='' />
              <div className="md:absolute text-center top-1/2 left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 max-w-xl px-4 md:px-0">
                <h1 className="text-black md:text-white text-xl md:text-[64px] leading-[64px] text-center font-bold md:mb-6">
                  Payment has not been cleared
                </h1>
                <p className="text-black md:text-white text-lg md:text-[22px] leading-[26px] text-center font-semibold mb-8 md:mb-16 md:px-20">
                  Plesae go back and try again
                </p>
                <Link onClick={handleExitFailed} className='rounded-[20px] bg-[#1649FF] md:bg-white text-white md:text-[#222222] font-semibold text-lg md:text-[22px] leading-[26px] py-3 md:py-6 px-6 md:px-12'>
                  Go to the payment page
                </Link>
              </div>
              <div className="hidden md:block absolute right-48 top-48 transform -translate-y-1/2 animate-bounce">
                <img src={smallstar} alt="" className="h-36" />
              </div>
              <div className="hidden: md:block absolute left-[28rem] top-48 transform -translate-y-1/2 animate-bounce">
                <img src={darkstar} alt="" className="h-12" />
              </div>
              <div className="hidden md:block absolute left-[28rem] bottom-[38%] transform -translate-y-1/2 animate-bounce">
                <img src={darkstar} alt="" className="h-12" />
              </div>
            </div>
          )
        }
      </div>
    </main>
  )
}


