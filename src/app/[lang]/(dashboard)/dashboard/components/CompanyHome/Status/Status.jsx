'use client'

import React from 'react'
import CompanyDetail from './CompanyDetail';
import AttachmentList from './Attachments/AttachmentList';
import { getCompanyDetails, attachments, getAttachments } from './util';
import { useSession } from 'next-auth/react'
import UploadFile from './Attachments/UploadFile/UploadFile';

const Status = ({ company }) => {
  const { data } = useSession();
  const isAdmin = data.user.level === 'admin';
  
  // For testing purposes
  // let modifiedCompany = company;
  // modifiedCompany['products'] = [
  //   {  
  //     "name": "Virtual Mailbox Monthly",
  //     "price": 25,
  //     "stripePriceID": "price_1OOfeQJuNLcMU2PopMecvhvJ",
  //     "frequency": "monthly",
  //     "_id": "65a83d9f8bf329556a370821"
  //   },
  //   {
  //     "name": "Apostill OneTime",
  //     "price": 500,
  //     "stripePriceID": "price_1OOygbJuNLcMU2PoXYAj3EiT",
  //     "frequency": "oneTime",
  //     "_id": "65a83d9f8bf329556a370822"
  //   }
  // ]
  // const docs = [
  //   'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  //   'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  // ]

  const companyDetails = getCompanyDetails(company);
  // console.log(company)
  const attachments = getAttachments(company.documents) || null;

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
            {attachments && attachments.length > 0 &&
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">Attachments</dt>
                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <AttachmentList attachments={attachments} />
                </dd>
              </div>
            }

            {isAdmin && 
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-md font-medium leading-6 text-gray-900">File Upload</dt>
                  <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <UploadFile  companyID={company._id} />
                  </dd>
              </div>
            }
        </div>
    </div>
  );
};

export default Status;
