import React, { Fragment } from 'react'
import { Transition, Menu } from '@headlessui/react'

const LanguageChange = ({ lang, isSticky, changeLanguage, renderWhite }) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className={`uppercase text-[14px]  font-medium leading-5 ${renderWhite ? 'text-white': 'text-black'} ${isSticky && '!text-black'}`}>
                {lang}
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute -right-16 z-10 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        {({ active }) => (
                            <div className='block'>
                                <div className={lang === 'en' ? 'block cursor-pointer bg-slate-100 rounded-md' : 'block cursor-pointer hover:bg-slate-200'} onClick={() => changeLanguage("en")}>
                                    <div className='flex items-center justify-center gap-2 p-3'>
                                        <button className='text-gray-700'>English</button>
                                    </div>
                                </div>
                                <div className={lang === 'tr' ? 'block cursor-pointer bg-slate-100 rounded-md' : 'block cursor-pointer hover:bg-slate-200'} onClick={() => changeLanguage("tr")}>
                                    <div className='flex items-center justify-center gap-2 p-3'>
                                        <button className='text-gray-700'>Turkish</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export default LanguageChange
