import clsx from 'clsx'
import { Container } from '../components/Container'
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import axios from "axios";
import { Link } from 'react-router-dom';
import Topbar from './Topbar';

const API_ROOT = window.ob.config.apiRoot;


export function Pricing() {
  let [companyState, setCompanyState] = useState("");
  let [companyType, setCompanyType] = useState("");
  let [showPricingPackages, setShowPricingPackages] = useState(false);
  let [packagePrices, setPackagePrices] = useState([]);
  let [states, setStates] = useState([]);
  let [companyTypes, setCompanyTypes] = useState([]);
  const pricingPackagesRef = useRef(null);
  const {t, i18n} = useTranslation();


  const updatePricing = () => {
    companyState = localStorage.getItem('companyState')
    companyType = localStorage.getItem('companyType')

    if (companyType && companyState) {
      let companyTypeId = companyTypes.find(x => x.entityType === companyType).id
      let companyStateId = states.find(x => x.state === companyState).id
      let langs = i18n.language ==="en" ? "en" : "tr"
      let payload = {
        stateId: companyStateId,
        entityTypeId: companyTypeId,
        lang:langs,
      }

      axios.post(API_ROOT + '/api/fe/prices', payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
        }
      })
        .then(function (response) {
          var jsonData = JSON.parse(JSON.stringify(response.data));
          console.log("Response from prices API:")
          //let prices = jsonData.map(x => x.orderPackagePrice.toString().slice(0, -2))
          //console.log(prices)

          //set package prices
          setPackagePrices(jsonData)
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    if (companyState !== "" && companyType !== "") {
      setShowPricingPackages(true);
    } else {
      setShowPricingPackages(false);
    }
  }

  useEffect(() => {
    //get the states from backend api via axios
    axios.get(API_ROOT + '/api/fe/states', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
      }
    })
      .then(function (response) {
        var jsonData = JSON.parse(JSON.stringify(response.data));
        setStates(jsonData)
      })
      .catch(function (error) {
        console.log(error);
      });

    //get the states from backend api via axios
    axios.get(API_ROOT + '/api/settings/entityType', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
      }
    })
      .then(function (response) {
        var jsonData = JSON.parse(JSON.stringify(response.data));
        setCompanyTypes(jsonData)
      })
      .catch(function (error) {
        console.log(error);
      });

    localStorage.setItem('companyState', companyState)
    localStorage.setItem('companyType', companyType)
    updatePricing()
  }, [i18n.language])

  const handleCompanyTypeChange = (name) => {
    console.log("handleCompanyTypeChange", name)
    setCompanyType(name)
    localStorage.setItem('companyType', name)
    updatePricing()
    if (companyState !== "") {
      // Wait for the pricingPackages element to be available in the DOM
      setTimeout(() => {
        document.getElementById("pricingPackages").scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }

  const handleCompanyStateChange = (name) => {
    console.log("handleCompanyStateChange", name)
    setCompanyState(name)
    localStorage.setItem('companyState', name)
    updatePricing()
  }


  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <h2 id="pricing-title" className="sr-only">
        Pricing
      </h2>
      <Container>
        <Topbar/>
        <div className="md:text-center">
          <p className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <svg
                aria-hidden="true"
                viewBox="0 0 281 40"
                className="absolute top-1/2 left-0 h-[1em] w-full fill-blue-400"
                preserveAspectRatio="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
                />
              </svg>
              <span className="relative">{t('pricing_header1_uptitle_1')}</span>
            </span>{' '}
            {t('pricing_header1_uptitle_2')}
          </p>
          <p className="mt-4 text-lg text-slate-400 max-w-6xl justify-center">
          {t('pricing_header1_text')}
          </p>
        </div>
        <div className="flex flex-col md:grid grid-cols-2 mx-auto py-12 max-w-4xl">
          <div id="companyStateDiv" className="flex flex-col md:pr-1">
            <div>
              <select
                id="companyState"
                name="companyState"
                value={companyState}
                placeholder={t('pricing_header1_button_1')}
                className="mt-1 block w-full rounded-md px-4 py-3 pl-3 pr-10 text-2xl focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 h-18 border-blue-400 border-4"
                onChange={(e) => handleCompanyStateChange(e.target.value)}
              >
                <option value="">{t('pricing_header1_button_1')} </option>
                {states.map((state) => (
                  <option
                    key={state.id}
                    value={state.state}
                  >
                    {state.state}
                  </option>
                ))}
              </select>

            </div>
          </div>
          <div id="companyTypeDiv" className="flex flex-col md:pl-1">
            <select
              id="companyType"
              name="companyType"
              value={companyType}
              className="mt-1 block w-full rounded-md px-4 py-3 pl-3 pr-10 text-2xl focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 h-18 border-4 border-blue-400"
              onChange={(e) => handleCompanyTypeChange(e.target.value)}
            >
              <option value="">{t('pricing_header1_button_2')}</option>
              {companyTypes.map((type) => (
                <option
                  key={type.id}
                  value={type.entityType}
                >
                  {type.entityType}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='flex justify-center items-center'><Link to={`/${i18n.language}/start-my-business`} className='bg-blue-600 text-white border border-blue-600 p-3 rounded-md hover:bg-white hover:text-blue-600  font-semibold'>{t('pricing_header3_question_link')}</Link></div>
        {showPricingPackages && (
          <div id="pricingPackages" className="flex flex-col-reverse lg:flex-row lg:flex lg:justify-center mx-4 mt-12 pt-24  max-w-2xl gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
            {
              packagePrices.map((packagePrice, index) => {
                if (companyState !== "Delaware") {
                  if (index === 0) {
                    //if item.features doesn't include Business Address Fee, add it
                    if (!packagePrice.features.includes("1 Year Business Address Fee")) {
                      packagePrice.features.splice(1, 0, "1 Year Business Address Fee")
                    }
                  }
                  if (index === 1) {
                    //if item.features includes it remove it
                    if (packagePrice.features.includes("1 Year Virtual Mailbox Fee")) {
                      packagePrice.features.splice(1, 2)
                    }
                  }
                }
                if (companyState === "Delaware") {
                  if (index === 0) {
                    //if item.features include it remove it
                    if (packagePrice.features.includes("1 Year Business Address Fee")) {
                      packagePrice.features.splice(1, 1)
                    }
                  }
                  if (index === 1) {
                    if (!packagePrice.features.includes("1 Year Virtual Mailbox Fee")) {
                      packagePrice.features.splice(1, 0, "1 Year Virtual Mailbox Fee")
                    }
                    if (!packagePrice.features.includes("1 Year Business Address Fee")) {
                      packagePrice.features.splice(2, 0, "1 Year Business Address Fee")
                    }
                  }
                }
                console.log("packageDetail[" + packagePrice.orderPackageId + "]")
                console.log(packagePrice)
                return (
                  <div key={packagePrice.id + index}>
                    <Plan
                      name={packagePrice.orderPackage}
                      price={packagePrice.orderPackagePrice.toString().slice(0, -2)}
                      description={packagePrice.description}
                      description2={packagePrice.description2}
                      href={`/${i18n.language}/onboarding`}
                      features={packagePrice.features}
                      featured={index === 1}
                      keyName={packagePrice.id + index}
                      packageType={packagePrice.id}
                    />
                  </div>
                )
              })
            }
          </div>
        )}
      </Container>
    </section>
  )
  function Plan(props) {
    const clickHandler = () => {
      localStorage.setItem("packageName", props.name)
      localStorage.setItem("packageType", props.packageType)
      localStorage.setItem("packagePrice", props.price)
      window.location.href = props.href
    }

    return (
      <section
        className={clsx('flex flex-col rounded-3xl px-6 sm:px-8 relative', {
          'order-first bg-blue-600 py-8 lg:order-none': props.featured,
          'lg:py-8': !props.featured,
        })}
      >
       {props.featured && <span className='absolute right-4 top-4 text-blue-600 rounded-lg px-4 py-1 bg-white text-sm font-semibold '>Most popular</span>}
        <h3 className="mt-5 font-display text-lg text-white">{props.name}</h3>
        <p
          className={clsx('mt-2 text-base', {
            'text-white': props.featured,
            'text-slate-400': !props.featured,
          })}
        >
          {props.description}
          {props.description2}
        </p>
        <p className="order-first font-display text-5xl font-light tracking-tight text-white">
          ${props.price}
        </p>
        {/* if not selected */}
        {props.name === 'Starter' && <button id='starter-package' className="bg-white text-black lg:bg-transparent font-semibold group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 lg:text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8" aria-label="Get started with the Starter plan for ${price}" onClick={clickHandler.bind(this)}>{i18n.language==="en" ? "Get Started" : "Bu Paketi Seçin"}</button>}
        {/* if corp3 is selected */}
        {props.name === 'Start Up' && <button id='startup-package' className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-8" aria-label="Get started with the Small business plan for $15" onClick={clickHandler.bind(this)} >{i18n.language==="en" ? "Get Started" : "Bu Paketi Seçin"}</button>}
         {/* if selected */}
         {props.name === 'Scale Up' && <button id='scaleup-package' className="bg-white text-black lg:bg-transparent font-semibold group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 lg:text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8" aria-label="Get started with the Starter plan for ${price}" onClick={clickHandler.bind(this)}>{i18n.language==="en" ? "Get Started" : "Bu Paketi Seçin"}</button>}
         {props.name === 'Registate LLC Gold' && <button id='gold-package' className="bg-white text-black lg:bg-transparent font-semibold group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 lg:text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8" aria-label="Get started with the Starter plan for ${price}" onClick={clickHandler.bind(this)}>{i18n.language==="en" ? "Get Started" : "Bu Paketi Seçin"}</button>}
         {props.name === 'Registate LLC Premium' && <button id='preimum-package'className="bg-white text-black lg:bg-white lg:text-black font-semibold group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none  hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8" aria-label="Get started with the Starter plan for ${price}" onClick={clickHandler.bind(this)}>{i18n.language==="en" ? "Get Started" : "Bu Paketi Seçin"}</button>}
        {console.log(props.name)}
        <ul
          className={clsx('order-last mt-10 space-y-3 text-sm', {
            'text-white': props.featured,
            'text-slate-200': !props.featured,
          })}
        >
          {props.features.map((feature) => (
            <li key={feature} className="flex">
              <svg
                aria-hidden="true"
                className={clsx('h-6 w-6 flex-none', {
                  'fill-white stroke-white': props.featured,
                  'fill-slate-400 stroke-slate-400': !props.featured,
                })}
              >
                <path
                  d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                  strokeWidth={0}
                />
                <circle
                  cx={12}
                  cy={12}
                  r={8.25}
                  fill="none"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-4" >{feature}</span>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default Pricing