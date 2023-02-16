import { ArrowUturnDownIcon, CheckBadgeIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import PolicyContent from './PolicyContent'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function StartOnbarding() {
    const [modal, setModal] = useState(true);
    const [page, setPage] = useState(0)

    const toggleModal = () => {
        setModal(!modal);
    }

    const PageDisplay = () => {
        if (page === 0) {
            return
        }
        else if (page === 1) {
            return <h1>hello world</h1>
        }
    }
    return (
        <>
            {modal &&
                <div className='fixed left-1/2 top-1/2 bg-img rounded-lg -translate-x-1/2 -translate-y-1/2 w-1/2 h-[550px]'>
                    <div className='pt-12'>
                        <h1 className='text-center text-white text-2xl font-bold'>Are you deciding the best company type for your case?</h1>
                    </div>
                    <div className='flex items-center gap-2 p-8'>
                        <div className='w-1/2'>
                            <div className='shadow-lg shadow-blue-900 bg-black bg-opacity-[0.6] rounded-lg p-8 relative hover:bg-opacity-[0.2]'>
                                <div>
                                    <h1 className='font-bold text-white text-lg border-b border-gray-400'>LLC</h1>
                                </div>
                                <div className='block py-1'>
                                    <ul className='text-white'>
                                        <li className='flex items-center gap-2 text-sm'><div className='w-[10%]'><CheckBadgeIcon className='w-4 text-green-500' /></div><div className='w-3/4'><p>Great for small businesses due to more flexibility</p></div></li>
                                        <li className='flex items-center gap-2 text-sm'><div className='w-[10%]'><CheckBadgeIcon className='w-4 text-green-500' /></div><div className='w-3/4'><p>Simple management structure and easier to operate</p></div></li>
                                        <li className='flex items-center gap-2 text-sm'><div className='w-[10%]'><CheckBadgeIcon className='w-4 text-green-500' /></div><div className='w-3/4'><p>Less paperwork, corporate restrictions, no meeting requirements</p></div></li>
                                        <li className='flex items-center gap-2 text-sm'><div className='w-[10%]'><ExclamationCircleIcon className='w-4 text-red-500' /></div><div className='w-3/4'><p>Ownership represented by members (LLCs cannot issue stock)</p></div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <span className='text-white'>vs</span>
                        <div className='w-1/2'>
                            <div className='shadow-lg shadow-blue-900 bg-black bg-opacity-[0.6] rounded-lg p-8 relative hover:bg-opacity-[0.2]'>
                                <div>
                                    <h1 className='font-bold text-white text-lg border-b border-gray-400'>C-Corp</h1>
                                </div>
                                <div className='block py-1'>
                                    <ul className='text-white'>
                                        <li className='flex items-center text-sm'><div className='w-[10%]'><CheckBadgeIcon className='w-4 text-green-500' /></div><div className='w-3/4'><p>Great for startups fundraising from investors</p></div></li>
                                        <li className='flex items-center text-sm'><div className='w-[10%]'><CheckBadgeIcon className='w-4 text-green-500' /></div><div className='w-3/4'><p>Ability to raise capital by issuing stock; ownership represented by shareholders</p></div></li>
                                        <li className='flex items-center text-sm'><div className='w-[10%]'><CheckBadgeIcon className='w-4 text-green-500' /></div><div className='w-3/4'><p>Management structure with more operating requirements</p></div></li>
                                        <li className='flex items-center text-sm'><div className='w-[10%]'><ExclamationCircleIcon className='w-4 text-red-500' /></div><div className='w-3/4'><p>More paperwork and corporate requirements such as annual meetings and minutes</p></div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <a onClick={() => { setPage((currPage) => currPage + 1) }} className='bg-black bg-opacity-[0.6] text-white rounded-lg text-center py-4 px-12 font-semibold text-md hover:bg-white hover:text-black cursor-pointer'>Take the surwey</a>
                    </div>
                    <div className='flex items-center justify-center mt-2'>
                        <a onClick={toggleModal} className='text-white cursor-pointer'>Go back</a>
                    </div>
                </div>
            }
            {page === 1 &&
                <div className='fixed left-1/2 top-1/2 bg-img rounded-lg -translate-x-1/2 -translate-y-1/2 w-1/2 h-[550px]'>
                    <div className='ml-4 mt-4 flex items-center gap-2 cursor-pointer' onClick={() => { setPage((currPage) => currPage - 1) }} >
                        <ArrowUturnDownIcon className='w-4 text-white rotate-90' />
                        <button className='text-white'>Back</button>
                    </div>
                    <div className='pt-12'>
                        <h1 className='text-center text-white text-2xl font-bold'>Are you planning to raise money or go through an accelerator/incubator program?</h1>
                    </div>
                    <div className='flex justify-center pt-8'>
                        <button className='shadow-lg shadow-blue-900 bg-black bg-opacity-[0.6] rounded-lg hover:bg-opacity-[0.2] text-white w-96 h-16'>Yes</button>
                    </div>
                    <div className='flex justify-center pt-5'>
                        <button className='shadow-lg shadow-blue-900 bg-black bg-opacity-[0.6] rounded-lg hover:bg-opacity-[0.2] text-white w-96 h-16'>No</button>
                    </div>
                    <div className='flex justify-center pt-5'>
                        <button className='shadow-lg shadow-blue-900 bg-black bg-opacity-[0.6] rounded-lg hover:bg-opacity-[0.2] text-white w-96 h-16'>Not Sure</button>
                    </div>
                    <div className='flex justify-center pt-5' >
                        <button onClick={() => { setPage((currPage) => currPage + 1) }} className='shadow-lg border border-blue-900 bg-black bg-opacity-[0.6] rounded-lg hover:bg-opacity-[0.2] text-white w-96 h-16 hover:bg-white hover:text-black hover:bg-opacity-[1] hover:border-none '>Next</button>
                    </div>
                </div>
            }
        </>
    )
}
