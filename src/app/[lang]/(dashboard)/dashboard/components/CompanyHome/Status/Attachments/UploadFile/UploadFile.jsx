'use client'

import React, { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import UploadForm from './UploadForm';

const UploadFile = ({ companyID }) => {
    const [uploadFormCount, setUploadFormCount] = useState(1);

    return (
        <div className='flex flex-col'>
            {Array(uploadFormCount).fill().map((_, i) => (
                <UploadForm key={i} companyID={companyID} />
            ))}
            <button
                className='flex items-center justify-center pt-4'
                onClick={() => setUploadFormCount(uploadFormCount + 1)}
            >
                <CiCirclePlus size={32} className="hover:scale-110 text-[#0B2347]" /> 
            </button>
        </div>
    )
}

export default UploadFile;
