'use client'

import React from 'react'
import CompanyDetail from './CompanyDetail';
import AttachmentList from './Attachments/AttachmentList';
import { getCompanyDetails, attachments } from './util';
import { useSession } from 'next-auth/react'

const Status = ({ company }) => {
  const { data } = useSession();

  const isAdmin = data.user.level === 'admin';
  const companyDetails = getCompanyDetails(company);

  return (
    <div className='pt-10'>
        <h2 className='text-2xl font-bold text-gray-900'>Status</h2>

        <div className="px-4 sm:px-0">
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Your company{"'"}s information and documents.</p>
        </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
            {companyDetails.map((detail, index) => (
                <CompanyDetail key={index} isAdmin={isAdmin} detail={detail} companyID={company._id} />
            ))}
        </dl>

        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <AttachmentList attachments={attachments} />
                </dd>
            </div>
        </div>
    </div>
  );
};

export default Status;
