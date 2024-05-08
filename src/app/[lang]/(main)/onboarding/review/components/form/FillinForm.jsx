'use client'

import { useTranslation } from '@/i18n/client'
import { isNumber } from '../utils/util'
import { customStyles , CustomOption } from './selectFormStyles'
import ReactSelect from 'react-select'

const FillinForm = (params) => {
    const { lang, setLastName, setName, countryCodes, setEmail, setPhone, setCountryCode, phone } = params;
    const { t } = useTranslation(lang);

    const options = countryCodes.map(country => ({
        value: country.code,
        label: `+${country.code}`,
        flagURL: country.flagURL
    }));

    const handleChange = selectedOption => {
        setCountryCode(selectedOption.value);
    };

    

    return (
        <div>
            <h2 className='font-semibold text-[40px] leading-[44px] text-white'>{t("review_information")}</h2>

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

                    {/* Country code + phone number */}
                    <div className='flex items-center justify-center gap-4 pb-4'>
                        <div className="w-1/2" >
                            <label htmlFor="countryCode" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                {t("review_fill_in_form_country_code")}
                            </label>
                            <ReactSelect
                                options={options}
                                styles={customStyles}
                                placeholder="Select country code"
                                onChange={handleChange}
                                // isSearchable={false}
                                components={{ Option: CustomOption }}
                            />
                        </div>
                        
                        <div className="w-1/2">
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
                                    // regex 
                                    const regex = /^\d{0,10}$/;
                                    const { value } = e.target;
                                    if (value === '' || regex.test(value.replace(/\D/g, ''))) {
                                        setPhone(value)
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
        </div>
)}

export default FillinForm;