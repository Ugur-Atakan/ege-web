import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


export default function Footer() {
  const API_ROOT = window.ob.config.apiRoot;
  const {t, i18n} = useTranslation();
  const navigation = {
    solutions: [
      {
        name: t('footer_col1_submenu1'),
        href: `/${i18n.language}/form-your-company`,
      },
      {
        name: t('footer_col1_submenu2'),
        href: `/${i18n.language}/registered-agent`,
      },
      {
        name: t('footer_col1_submenu3'),
        href: `/${i18n.language}/virtual-mailbox`,
      },
      {
        name: t('footer_col1_submenu4'),
        href: `/${i18n.language}/apostille`,
      },
    ],
    support: [
      { name: t('footer_col2_submenu1'), href: `/${i18n.language}/pricing`, },
      { name:  t('footer_col2_submenu2'), href: `/${i18n.language}/contact`, }
    ],
    company: [
      { name:  t('footer_col3_submenu1'), href: `/${i18n.language}/company`, },
      { name:  t('footer_col3_submenu2'), href: `/${i18n.language}/blog`, },
      { name:  t('footer_col3_submenu3'), href: `/${i18n.language}/#.`, }
    ],
    legal: [
      { name:  t('footer_col4_submenu1'), href: `/${i18n.language}/privacy-policy`},
      { name:  t('footer_col4_submenu2'), href: `/${i18n.language}/terms-of-service`}
    ],
    social: [
      {
        name: 'Twitter',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" {...props}>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        ),
      },
    ],
  }

  const notify = () => {
    toast("Successfully subscribed");
  }
  const submitHandler = (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let payload = {
      "email": email,
    }
    console.log(payload)
    axios.post(API_ROOT +'/api/newsletter', payload, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
      },
      body: JSON.stringify(payload),
    })
      .then(function (response) {
        var jsonData = JSON.parse(JSON.stringify(response.data));
        console.log(jsonData)
        notify();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <footer className="bg-white border-t" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">{t('footer_col1_title')}</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                  <div>
                    <Link to={`/${i18n.language}/all-products`} className="text-blue-600 text-base">{t('footer_col1_all_products')}
                      <span aria-hidden="true"> &rarr;</span></Link>
                  </div>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">{t('footer_col2_title')}</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">{ t('footer_col3_title')}</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">{ t('footer_col4_title')}</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-base font-medium text-gray-900">{ t('footer_col5_title')}</h3>
            <p className="mt-4 text-base text-gray-500">
              { t('footer_col5_desc')}
            </p>
            <form onSubmit={submitHandler} className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:placeholder-gray-400 focus:outline-none focus:ring-blue-500"
                placeholder={ t('footer_col5_input_placeholder')}
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-base font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  { t('footer_col5_button')}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
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
            toastClassName={()=>
              "bg-green-600 text-white items-center flex p-4 shadow-lg rounded-lg"
            }
            closeButton={()=>"x"}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
    </footer>
  )
}
