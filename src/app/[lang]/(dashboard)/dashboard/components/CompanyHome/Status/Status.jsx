'use client'

import React from 'react'
import CompanyDetail from './CompanyDetail';
import AttachmentList from './Attachments/AttachmentList';
import { getCompanyDetails, attachments, getAttachments } from './util';
import { useSession } from 'next-auth/react'
import UploadFile from './Attachments/UploadFile/UploadFile';
import Products from './Products/Products'

const Status = ({ company }) => {
  const { data } = useSession();
  const isAdmin = data.user.level === 'admin';

  const companyDetails = getCompanyDetails(company);
  const attachments = getAttachments(company.documents) || null;

//  console.log(company);

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
                    <AttachmentList attachments={attachments}  />
                </dd>
              </div>
            }

            {company.products && company.products.length > 0 &&
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">Products</dt>
                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <Products products={company.products} companyID={company._id} />
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
