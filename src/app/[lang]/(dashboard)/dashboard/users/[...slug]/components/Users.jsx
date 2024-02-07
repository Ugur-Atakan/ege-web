'use client'

import React, { useState } from 'react';
import AddUserModal from './AddUserModal';
import axios from 'axios';
import { inviteMailBody } from './mailBody';

const Users = ({ lang, users, workspaceID }) => {
  const [openModal, setOpenModal] = useState(false)
  const usersJSON = JSON.parse(users);

  const inviteToLogin = async (enableToken, email, firstName, lastName) => {
    // console.log(enableToken, email, firstName, lastName)  
    const emailBody = inviteMailBody(enableToken);

    const payload = {
      sender_email: 'Registate@gmail.com',
      receiver_email: email,
      email_subject: 'Your Registate dashboard access!',
      email_body: emailBody
    }
    try {
        await axios.post('/api/mailgun', payload)
    } catch (err) {
        console.log(err);
    }
  } 

  return (
    <div>
        {openModal && <AddUserModal open={openModal} setOpen={setOpenModal} workspaceID={workspaceID} />}
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
                <h1 className="text-lg font-semibold leading-6 text-gray-900">Company users</h1>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                    type="button"
                    onClick={() => setOpenModal(true)}
                    className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Add user
                </button>
            </div>
            </div>
            <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                            Name
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Email
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Active
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Address
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                        <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {usersJSON.map((user) => (
                        <tr key={user.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-md font-medium text-gray-900 sm:pl-0">
                            {user.firstName} {user.lastName}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">{user.email}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">{user.active === false ? '🔴 Inactive' : '🟢 Active'}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">{user.address.country === null ? '-' : user.address.country}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-md font-medium sm:pr-0">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                            Edit<span className="sr-only">, {user.name}</span>
                            </a>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-md font-medium sm:pr-0">
                            <button 
                                onClick={() => inviteToLogin(user.enableToken, user.email, user.firstName, user.lastName)}
                                className="text-indigo-600 hover:text-indigo-900"
                            >
                                Send invite<span className="sr-only">, {user.name}</span>
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Users