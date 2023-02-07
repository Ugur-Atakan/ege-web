import React,{useState, Fragment, useEffect} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

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

    const handleExitSuccess = (e) => {
        console.log("handleExit: " + e);                                                                                        
        setsuccessPayment(false)
        localStorage.clear()
        //redirect to dashboard
        window.open("https://app.registate.net/login")
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
 
            axios.get('https://api.registate.net/api/order/' + orderId, {
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

                axios.post('https://api.registate.net/api/order-process', payload, {
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
                    <Transition.Root show={successPayment} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={handleExitSuccess}>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                      </Transition.Child>
              
                      <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                              <div>
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                  <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                </div>
                                <div className="mt-3 text-center sm:mt-5">
                                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Payment successful
                                  </Dialog.Title>
                                  <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        You can now access your dashboard by following the link in your email
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 sm:mt-6">
                                <button
                                  type="button"
                                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                                  onClick={() => handleExitSuccess(false)}
                                >
                                  Check your inbox
                                </button>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition.Root>
                    )
        }
        {
                !successPayment && (
                    <Transition.Root show={!successPayment} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={handleExitFailed}>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                      </Transition.Child>
              
                      <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                              <div>
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                                  <CheckIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                </div>
                                <div className="mt-3 text-center sm:mt-5">
                                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Payment has not been cleared
                                  </Dialog.Title>
                                  <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Plesae go back and try again
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 sm:mt-6 flex flex-col gap-4">
                                <button
                                  type="button"
                                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                                  onClick={() => handleExitFailed(false)}
                                >
                                  Finish Payment
                                </button>
                                  <a href='registate.com'>
                                  <button
                                  type="button"
                                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                                  
                                >Go back to home page </button>
                                  </a>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition.Root>
                    )
        }
        </div>
    </main>
    )
}


