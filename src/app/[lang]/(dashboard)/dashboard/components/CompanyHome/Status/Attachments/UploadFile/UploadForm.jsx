import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { getFileUploadList } from '../../util';
import axios from 'axios';

const UploadForm = ({ companyID }) => {
    const fileUploadList = getFileUploadList(companyID);
    const [fileName, setFileName] = useState(fileUploadList[0]);

    const sendToBackend = async (acceptedFiles) => {
        try {
            console.log('inside send to backend ' + acceptedFiles[0]);
            const formData = new FormData();
            formData.append('file', acceptedFiles[0]);
            formData.append('fileName', fileName);

            const res = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }
    }


    const { open, acceptedFiles} = useDropzone({
        noClick: true,
        noKeyboard: true,
        onDrop: (acceptedFiles) => {
            sendToBackend(acceptedFiles);
        }
    });

    const handleUploadClick = () => {
        open();

    }

    return (
        <div className="flex flex-row mb-4">
            <select
                id="company-type"
                name="companyType"
                autoComplete="country-type"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                className="py-1.5 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
                {fileUploadList.map((file, index) => (
                    <option value={file.fileName} key={index}>{file.name}</option>
                ))}
            </select>
            <button 
                type="button"
                className="ml-4 rounded-md bg-[#0B2347] px-4 text-white font-medium"
                onClick={handleUploadClick}
            >
                Upload
            </button>
        </div>
    );
};

export default UploadForm;
