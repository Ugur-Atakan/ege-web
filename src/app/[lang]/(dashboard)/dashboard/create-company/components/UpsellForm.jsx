import React from 'react';

const UpsellForm = () => {
    return (
        <React.Fragment>
            <div className="sm:col-span-3">
                <label htmlFor="company-type" className="block text-md font-medium leading-6 text-gray-900">
                    Upsell 
                </label>
                <div className="mt-2">
                    <select
                        id="company-type"
                        name="companyType"
                        autoComplete="country-type"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option>Virtual Mailbox</option>
                        <option>Office Address</option>
                    </select>
                </div>
            </div>

            <div className="sm:col-span-3 py-3">
                <label htmlFor="company-type" className="block text-md font-medium leading-6 text-gray-900">
                    Reccurence 
                </label>
                <div className="mt-2">
                    <select
                    id="company-type"
                    name="companyType"
                    autoComplete="country-type"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option>Monthly</option>
                        <option>Annually</option>
                        <option>One Time</option>
                    </select>
                </div>
            </div>
      </React.Fragment>
    );
};

export default UpsellForm;
