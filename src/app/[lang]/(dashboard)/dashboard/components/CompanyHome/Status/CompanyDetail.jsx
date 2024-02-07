// CompanyDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyDetail = ({ detail, companyID, isAdmin }) => {
  const [valueState, setValueState] = useState(detail.value);
  const [isEditing, setIsEditing] = useState(false);
  const [states, setStates] = useState([]);

  const updateField = async () => {
    setIsEditing(false);

    const res = await axios.put(`/api//dashboard/workspace/update-company`, { 
        companyID: companyID, 
        label: detail.dbLabel,
        value: valueState
    });
    //? Add fail check here
  }

  useEffect(() => {
    const getStates = async () => {
      await axios.get('/api/states')
        .then((response) => {
            setStates(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    getStates();
  },[]);

  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-md font-medium leading-6 text-gray-900">{detail.label}</dt>
      <dd className="mt-1 flex text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        {!isEditing && <span className="flex-grow">{valueState} </span>}

        {(isEditing && detail.dbLabel === 'status') &&  (
            <select 
                className="flex-grow shadow-sm focus:ring-indigo-500 focus:border-indigo-500  w-full sm:text-sm border-gray-300 rounded-md"
            >
                <option>🟡 Payment Pending</option>
                <option>🟡 In Progress</option>
                <option>🟢 Active</option>
                <option>🔴 Inactive</option>
                <option>🔴 Disapproved</option>
            </select>
        )}
        
        {detail.dbLabel === 'status' && (
            <button 
                type="button"
                className="mr-8 rounded-md text-white bg-[#0B2347] px-5 py-2 font-medium hover:scale-105"
            >
                Payment Link
            </button>
        )}
    
        {(isEditing && detail.dbLabel === 'companyName') &&  (
            <input
                type="text"
                className="flex-grow shadow-sm focus:ring-indigo-500 focus:border-indigo-500  w-full sm:text-sm border-gray-300 rounded-md"
                value={valueState}
                onChange={(e) => setValueState(e.target.value)}
            />
        )}

        {(isEditing && detail.dbLabel === 'companyType') && (
            <select className="flex-grow shadow-sm focus:ring-indigo-500 focus:border-indigo-500  w-full sm:text-sm border-gray-300 rounded-md">
                <option>LLC</option>
                <option>Corp</option>
            </select>
        )}
        
        {(isEditing && detail.dbLabel === 'companyPackage') && (
            <select className="flex-grow shadow-sm focus:ring-indigo-500 focus:border-indigo-500  w-full sm:text-sm border-gray-300 rounded-md">
                <option>Silver</option>
                <option>Gold</option>
                <option>Platinum</option>
            </select>
        )}

        {(isEditing && detail.dbLabel === 'state') && (
            <select className="text-black flex-grow shadow-sm focus:ring-indigo-500 focus:border-indigo-500  w-full sm:text-sm border-gray-300 rounded-md">
                {/* <option value="">Select a state</option> */}
                {states.map((state) => (
                    <option key={state.id} value={state.id}>
                        {state.state}
                    </option>
                ))}
            </select>
        )}

        {(isAdmin && !isEditing) ? (
            <span className="flex-shrink-0">
                <button 
                    type="button"
                    className="rounded-md text-white bg-[#0B2347] px-5 py-2 font-medium hover:scale-105" 
                    onClick={() => setIsEditing(true)}
                >
                    Edit
                </button>
            </span>
            ) : (
            isAdmin && <span className="ml-4 flex-shrink-0">
                <button 
                    type="button"
                    className="rounded-md text-white bg-red-500 px-5 py-2 font-medium hover:scale-105" 
                    onClick={() => setIsEditing(false)} 
                >
                    Cancel
                </button>
            </span>
        )}

        {(isAdmin && isEditing) && (
            <span className="ml-4 flex-shrink-0">
                <button 
                    type="button"
                    className="rounded-md text-white bg-gray-600 px-5 py-2 font-medium hover:scale-105" 
                    onClick={() => updateField()}
                >
                    Update
                </button>
            </span>
        )}
      </dd>
    </div>
  );
};

export default CompanyDetail;