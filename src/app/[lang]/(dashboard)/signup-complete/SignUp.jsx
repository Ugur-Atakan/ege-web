'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'

import { bluelogo } from '@/assets/images'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = ({ lang, id, email }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: email,
        id: id,
        password: '',
        confirmPassword: ''
    });

    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!agreedToTerms) {
            toast.error('You must agree to the terms and conditions');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        console.log(formData);
        const signup = async () => {
            try {
                const res = await axios.post('/api/dashboard/signup/complete-signup', formData);

                if (res.status == 200) {
                  toast.success('Success!');
                  router.push(`/${lang}/login`);
                }
            } catch (err) {
                toast.error('Something went wrong');
                console.log(err);
            }
        };

        signup();
    };

    return (
        <React.Fragment>
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
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image
                        width={48}
                        height={48}
                        className="mx-auto h-10 w-auto"
                        src={bluelogo}
                        alt="Your Company"
                    />

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Complete account Registration
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                          Password <span className="text-red-500">*</span>
                      </label>
                      <input
                          id="password"
                          name="password"
                          type="password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          value={formData.password}
                          onChange={handleChange}
                      />
                  </div>

                  <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                          Confirm Password <span className="text-red-500">*</span>
                      </label>
                      <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                      />
                  </div>
                    <div className="mt-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox"
                                checked={agreedToTerms}
                                onChange={(e) => setAgreedToTerms(e.target.checked)}
                            />
                            <sub className="ml-2">
                                By continuing, you agree to the <Link href={`/${lang}/terms-of-service`} className="text-indigo-600 hover:text-indigo-500">Terms of Service</Link> and <Link href={`/${lang}/privacy-policy`} className="text-indigo-600 hover:text-indigo-500">Privacy Policy</Link>
                            </sub>
                        </label>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Complete Sign Up
                        </button>
                    </div>
                  </form>
               </div>
            </div>
        </React.Fragment>
    );
};

export default SignUp;
