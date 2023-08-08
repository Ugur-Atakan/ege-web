import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const API_ROOT = window.ob.config.apiRoot;

export default function HeroForm(props) {
    const { t, i18n } = useTranslation();
    const [email, setEmail] = useState('');
    const [companyName, setcompanyName] = useState('');
    const [validation, setValidation] = useState(false);
    const navigate = useNavigate();

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
            companyType: "Corporation",
            companyState: "Delaware"
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
                    navigate(`/${i18n.language}/state`);
                    props.setCompanyName(new_company_name);
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            {validation
                ? <div className='flex justify-center'>
                    <h1 className='text-red-400 text-md flex items-center gap-2'> <ExclamationCircleIcon className='w-8' />Please fill in the blanks</h1>
                </div>
                : null}
            <form onSubmit={formSubmitHandler}>
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
                            placeholder={t('home_page_hero_section_form_input1_placeholder')}
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
                            placeholder={t('home_page_hero_section_form_input2_placeholder')}
                        />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button type="submit" id='form-my-company' className="px-16 py-4 relative rounded group overflow-hidden font-medium bg-blue-600 text-white inline-block">
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-700 group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white text-lg">{t('hero_section_button')}</span>
                    </button>
                </div>
            </form>
        </>
    )
}
