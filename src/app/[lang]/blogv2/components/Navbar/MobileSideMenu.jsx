'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import whitelogo from '@/assets/images/logos/registate-white-logo.png'
import LanguageChange from '@/components/Hero/LanguageChange'

const MobileSideMenu = ({ lang, t, isSticky, changeLanguage, mobileMenuOpen, setMobileMenuOpen }) => {
    return (
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Registate</span>
                            <Image
                                className="h-8 w-auto bg-cover"
                                src={whitelogo}
                                alt="registate-logo"
                            />
                        </Link>
                        <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-400"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="flex flex-col space-y-5 py-6">
                        <Link href={`/${lang}/company-type`} className="text-3xl font-extrabold leading-6 text-white">
                            {t('menu1_title')}
                        </Link>
                        <Link href={`/${lang}/how-it-works`} className="text-2xl leading-6 text-white">
                            {t('menu2_title')}
                        </Link>
                        <Link href={`/${lang}/blog`} className="text-2xl leading-6 text-white">
                            {t('menu3_title')}
                        </Link>

                        <div className="text-white">
                            <LanguageChange lang={lang} isSticky={isSticky} changeLanguage={changeLanguage} />
                        </div>
                    </div>
            </Dialog.Panel>
        </Dialog>
    );
};

export default MobileSideMenu
