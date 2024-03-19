import React from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const options = [
  { id: 'business-insurance', name: 'Business insurance' },
  { id: 'trademark-registration', name: 'Trademark Registration' },
  { id: 'accounting-tax-services', name: 'Accounting tax services' },
  { id: 'bookkeeping-services', name: 'Bookkeeping Services' },
  { id: 'web-design-development', name: 'Web Design and Development' },
];

export default function AddOns({ lang }) {
  return (
    <div className="flex items-center justify-center pt-36">
      <form className="w-full max-w-lg bg-white rounded-lg shadow-md p-8 text-gray-700">
        <h2 className="text-xl font-semibold leading-6 text-gray-900 mb-6">
          Do you want us to contact you regarding the following as well?
        </h2>
        <div className="space-y-4">
          {options.map((option) => (
            <div key={option.id} className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id={option.id}
                  name={option.id}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#1649FF] focus:ring-[#1649FF]"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor={option.id} className="font-medium text-gray-700">
                  {option.name}
                </label>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-4">
          <button
            type="submit"
            className="py-2 px-4 bg-[#1649FF] text-sm font-semibold text-white rounded-lg shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
