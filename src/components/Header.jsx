import { Transition, Menu, Dialog } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import whitelogo from '../images/logos/registate-white-logo.png'
import bluelogo from '../images/logo-blue.webp'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const changeLanguage = (lang) => {
        if (lang === "en" || lang === "tr") {
            setCurrentLang(lang);
            i18n.changeLanguage(lang);
            const newPathname = location.pathname.replace(`/${currentLang}`, `/${lang}`);
            navigate(newPathname, { replace: true });
        } else {
            navigate(`/${i18n.language}/notfound/`, { replace: true });
        }
    };
    return (
        <header className='inset-x-0 top-0 z-50 !fixed !bg-[#ECEFF1]'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-2 border-b border-[#C8C8C8] lg:p-4' aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Registate</span>
                        <img className="w-[116px] h-[34px]" src= {bluelogo} alt="" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:hidden lg:gap-x-12">
                    <Link to={`/${i18n.language}/company-type`} className="text-sm font-semibold leading-6 text-white">
                        {t('menu1_title')}
                    </Link>
                    <Link to='#.' className="text-sm font-semibold leading-6 text-white">
                        {t('menu2_title')}
                    </Link>
                    <Link to='#.' className="text-sm font-semibold leading-6 text-white">
                        {t('menu3_title')}
                    </Link>
                    <Link to={`/${i18n.language}/blog`} className="text-sm font-semibold leading-6 text-white">
                        {t('menu4_title')}
                    </Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className='hidden lg:flex items-center gap-4'>
                        <div>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className={`uppercase text-[14px]  font-semibold leading-5 !text-black`}>
                                        {i18n.language}
                                    </Menu.Button>
                                </div>
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
                                                    <div className={i18n.language === 'en' ? 'block cursor-pointer bg-slate-100 rounded-md' : 'block cursor-pointer hover:bg-slate-200'} onClick={() => changeLanguage("en")}>
                                                        <div className='flex items-center justify-center gap-2 p-3'>
                                                            <button className='text-gray-700'>English</button>
                                                        </div>
                                                    </div>
                                                    <div className={i18n.language === 'tr' ? 'block cursor-pointer bg-slate-100 rounded-md' : 'block cursor-pointer hover:bg-slate-200'} onClick={() => changeLanguage("tr")}>
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
                        </div>
                        <Link
                            to={`/${i18n.language}/company-type`}
                            id="header-fmc"
                            className='py-2 px-4 rounded-xl  font-semibold text-[14px] leading-5 !bg-blue-600 !text-white'
                        >
                            {t('menu_top_right_handcorner_button')}
                        </Link>
                    </div>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Registate</span>
                            <img
                                className="h-8 w-auto bg-cover"
                                src={whitelogo}
                                alt="registate hero section"
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-400"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/25">
                            <div className="space-y-2 py-6">
                                <Link to={`/${i18n.language}/state`} className="text-sm font-semibold leading-6 text-white">
                                    {t('menu1_title')}
                                </Link>
                                <Link to='#.' className="text-sm font-semibold leading-6 text-white">
                                    {t('menu2_title')}
                                </Link>
                                <Link to='#.' className="text-sm font-semibold leading-6 text-white">
                                    {t('menu3_title')}
                                </Link>
                                <Link to={`/${i18n.language}/blog`} className="text-sm font-semibold leading-6 text-white">
                                    {t('menu4_title')}
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    to={`/${i18n.language}/company-type`}
                                    id="header-fmc"
                                    className={'bg-white py-2 px-4 rounded-xl text-[#132F8E] font-semibold text-[14px] leading-5'}
                                >
                                    {t('menu_top_right_handcorner_button')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
