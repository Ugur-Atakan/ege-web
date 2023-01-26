import React from 'react'

function Corporation(props) {
  return (
    <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="flex-col-reverse md:flex-row flex items-center gap-12">
                <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
                    <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">{props.title}</h3>
                    <p className="mt-4 text-lg text-gray-500">These documents are mainly; </p>
                    <ul className="pl-6 mt-2 list-disc">
                        <li className="text-lg text-gray-500">Bylaws</li>
                        <li className="text-lg text-gray-500">Unanimous written consent in lieu of the first meeting of the board of directors</li>
                        <li className="text-lg text-gray-500">Founders stock purchase agreements</li>
                        <li className="text-lg text-gray-500">IP assignment agreements</li>
                        <li className="text-lg text-gray-500">Indemnification agreements for directors</li>
                        <li className="text-lg text-gray-500">Written consent of stockholders</li>
                        <li className="text-lg text-gray-500">Stock certificates for founders’ shares</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        className="rounded-lg shadow-lg"
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                        alt=""
                    />
                </div>
            </div>
    </div>
  )
}

export default Corporation