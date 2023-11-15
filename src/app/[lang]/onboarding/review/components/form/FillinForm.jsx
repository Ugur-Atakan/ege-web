'use client'

import { useTranslation } from '@/i18n/client'
import { isNumber } from '../utils/util'
import CompanyDetails from './CompanyDetails'

const FillinForm = (params) => {
    const { lang, zip, setCity ,setCountry, setLastName, setName, country, countryCodes,
            setEmail, setStreet, setZip, setPhone, countries, states, setCountryCode, phone
    } = params;
    
    const { t } = useTranslation(lang);

    return (
        <div className='py-8 px-4 md:pl-10 md:py-8'>
            <h1 className='font-semibold text-[40px] leading-[44px] text-[#222222]'>{t("review_information")}</h1>
            
            <div className='bg-white border rounded-[32px] p-6 my-6'>
                <h2 className='font-semibold text-[24px] leading-[44px] text-[#222222]'>Account Owner</h2>
                <p className='font-bold text-[16px] leading-6 text-[#222222]'>{t("review_company_details_description")}</p>
                <div className='py-4'>
                    <div className='flex item-center gap-4 md:gap-4 pb-4'>
                        <div className="w-1/2">
                            <label htmlFor="firstname" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                {t("review_information_input1")}
                            </label>
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                autoComplete="given-name"
                                required
                                placeholder='Harry'
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                            />
                        </div>

                        <div className="w-1/2">
                            <label htmlFor="lastname" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                {t("review_information_input2")}
                            </label>
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                autoComplete="family-name"
                                placeholder='Potter'
                                required
                                onChange={(e) => setLastName(e.target.value)}
                                className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                            />
                        </div>
                    </div>
                    <div className='flex item-center gap-4 md:gap-4 pb-4'>
                        <div className="w-full">
                            <label htmlFor="emailaddress" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                {t("review_information_input3")}
                            </label>
                            <input
                                type="text"
                                name="emailaddress"
                                id="emailaddress"
                                placeholder='harrypotter@hogwarts.com'
                                autoComplete="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Phone number */}
                    <div className='flex items-center justify-center gap-4 pb-4'>
                        <div className="w-full md:w-1/3" >
                            <label htmlFor="countryCode" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                Country Code
                            </label>
                            <select
                                id="countryCode"
                                name="country-code"
                                autoComplete="country-code"
                                className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                onChange={(e) => setCountryCode(e.target.value)}
                            >
                            <option>Select country code</option>
                                {countryCodes.map((code, index) => (
                                    <option
                                        key={index}
                                        value={code}
                                    >
                                        {code}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        <div className="w-full md:w-2/3">
                            <label htmlFor="phonenumber" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                {t("review_information_input4")}
                            </label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <input
                                    type="tel"
                                    name="phonenumber"
                                    id="phonenumber"
                                    autoComplete="tel"
                                    required
                                    value={phone}
                                    onChange={(e) => {                                   
                                        if (e.target.value === '' || isNumber(e.target.value)) {
                                            setPhone(e.target.value)
                                        }
                                    }}
                                    className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                    placeholder="(123) 111-22-33"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CompanyDetails 
                lang={lang}
                setCity={setCity}
                setCountry={setCountry}
                setLastName={setLastName}
                setName={setName}
                setEmail={setEmail}
                setStreet={setStreet}
                setZip={setZip}
                setPhone={setPhone}
                countries={countries}
                states={states}
                country={country}
            />
        </div>
)}

export default FillinForm;