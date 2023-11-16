'use client'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTranslation } from '../i18n/client'

const Footer = ({ lang }) => {
  const { t } = useTranslation(lang);

  const navigation = {
    solutions: [
      {
        name: t('footer_col1_submenu1'),
        href: `/${lang}/onboarding`,
      },
      {
        name: t('footer_col1_submenu2'),
        href: `/${lang}/contact-us`,
      },
      {
        name: t('footer_col1_submenu3'),
        href: `/${lang}/contact-us`,
      },
      {
        name: t('footer_col1_submenu4'),
        href: `/${lang}/contact-us`,
      },
    ],
    support: [
      { name: t('footer_col2_submenu1'), href: `/${lang}/contact-us`, },
      { name: t('footer_col2_submenu2'), href: `/${lang}/contact-us`, }
    ],
    company: [
      { name: t('footer_col3_submenu1'), href: `/${lang}/contact-us`, },
      { name: t('footer_col3_submenu2'), href: `/${lang}/blog`, },
      { name: t('footer_col3_submenu3'), href: `/${lang}/contact-us`, }
    ],
    legal: [
      { name: t('footer_col4_submenu1'), href: `/${lang}/contact-us` },
      { name: t('footer_col4_submenu2'), href: `/${lang}/contact-us` }
    ],
    social: [
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/registatedelaware/',
        icon: (props) => (
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="30" height="30" viewBox="0 0 24 24" {...props}>
              <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/registatedelaware/',
        icon: (props) => (
          <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" {...props}>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        ),
      },
    ],
  }

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-semibold py-3 text-lg leading-[24px] text-black">{t('footer_col1_title')}</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="font-semibold text-lg leading-[24px] text-[#545454]">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="font-semibold py-3 text-lg leading-[24px] text-black">{t('footer_col2_title')}</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="font-semibold text-lg leading-[24px] text-[#545454]">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-semibold text-lg py-2 leading-[24px] text-black">{t('footer_col3_title')}</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="font-semibold text-lg leading-[24px] text-[#545454]">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <p className="mt-4 pb-3 font-semibold text-lg leading-[24px] text-black">
              {t('footer_col5_desc')}
            </p>
            <form className="mt-4">
              <label htmlFor="email-address" className="mb-2 text-sm font-medium sr-only"> Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  placeholder={t('footer_col5_input_placeholder')}
                  className="block w-full p-6 pl-6 text-lg text-[#8A8A8A] rounded-[20px] bg-[#ECEFF1] focus:outline-none border-none focus:border-none focus:ring-0" />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#1649FF] py-4 px-7 rounded-2xl">{t('footer_col5_button')}</button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-24 border-t border-black border-opacity-[0.2] pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-[1.125rem] font-semibold leading-[1.5rem] text-[#8A8A8A] md:order-1 md:mt-0">
            {t('footer_bottom_left')}
          </p>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        toastClassName={() =>
          "bg-[#1649FF] text-white items-center flex p-4 shadow-lg rounded-lg"
        }
        closeButton={() => "x"}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </footer>
  )
}

export default Footer