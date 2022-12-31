import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline'
import mert from '../images/avatars/mert.png'
import ufuk from '../images/avatars/ufuk.png'
import screenshotPrimary1 from '../images/screenshots/features1.png'
import screenshotPrimary2 from '../images/screenshots/features2.png'
import screenshotPrimary3 from '../images/screenshots/features3.png'
import screenshotPrimary4 from '../images/screenshots/features4.png'
import screenshotPrimary5 from '../images/screenshots/features5.png'

export default function Features() {

  const scrollHandler = () => {
    // select all the feature divs
    const featureDivs = document.querySelectorAll('div[id^="feature"]');

    // helper function to calculate the opacity based on the position of the element
    const calculateOpacity = (element) => {
      // get the position of the element relative to the viewport
      const rect = element.getBoundingClientRect();
  
      let opacity;
      const divisor = 0.7;
      if (rect.top > window.innerHeight || rect.bottom < 0) {
          // the element is completely out of the viewport
          opacity = 0;
      } else if (rect.top < 0) {
          // the element is partially above the viewport
          opacity = 1 + rect.top / rect.height;
          opacity = opacity / divisor - 0.2;
      } else if (rect.bottom > window.innerHeight) {
          // the element is partially below the viewport
          opacity = 1 - (rect.bottom - window.innerHeight) / rect.height;
          opacity = opacity / divisor;
      } else {
          // the element is fully within the viewport
          opacity = 1;
      }
  
      return opacity;
  };

    // for each feature div, calculate the opacity and update the style
    featureDivs.forEach((div) => {
        const opacity = calculateOpacity(div);
        div.style.opacity = opacity;
    });
  };
  
  // add a scroll event listener to the window
  window.addEventListener('scroll', () => {
    requestAnimationFrame(scrollHandler);
  }, { passive: true });

  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32">
      <div className="mx-auto max-w-7xl text-center mb-20">
      <h2
            id="features-title"
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
            >
            Everything you need to start...
        </h2>
        <p className="mt-6 text-lg text-slate-700">
            From developing an idea, to making it official, to turning it into a money-making business, our platform have you covered from A to Z.
        </p>
      </div>
      <div id="feature1" className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                  <InboxIcon className="h-8 w-8 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Business Formation and EIN</h2>
                <p className="mt-4 text-lg text-gray-500">
                Fast and simple company formation with worry free services and expert support to help you get filed accurately and on time. We'll also help you get your EIN for US residents and non-residents.
                </p>
                <div className="mt-6">
                  <a
                    href="/pricing/form-my-company"
                    className="inline-flex rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                  >
                    Form My Company
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;They registered my company, got EIN instantly, assisted me opening a bank account and help notarization of couple of documents. 5 stars service and a great team!.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src={mert}
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">Mert Yildiz, Founder at Bonded Technologies Inc.</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={screenshotPrimary1}
                alt="Dashboard user interface"
              />
            </div>
          </div>
        </div>
      </div>      
      <div id="feature2" className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                  <SparklesIcon className="h-8 w-8 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Post-Incorporation Documents</h2>
                <p className="mt-4 text-lg text-gray-500">
                We provide a full suite of post-incorporation documents to help you complete your business formation. Stock Issuance to Owners, Corporate Resolutions, Operating Agreement for LLCs, and Bylaws for Corporations, and more.
                </p>
                <div className="mt-6">
                  <a
                    href="/pricing/post-incorporation-documents"
                    className="inline-flex rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={screenshotPrimary2}
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="feature3" className="mt-24 relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                  <InboxIcon className="h-8 w-8 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Virtual Mailbox</h2>
                <p className="mt-4 text-lg text-gray-500">
                A virtual mailbox makes it easier to manage your mail & packages remotely. We'll provide you with a mailbox address in US. You can use this address to receive mail and packages. We'll scan and email you the documents
                </p>
                <div className="mt-6">
                  <a
                    href="/pricing/virtual-mailbox"
                    className="inline-flex rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                  >
                    Get a US Address
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;We use Registate's mailbox services and they have helped us to obtain certified copies of some State documents. Smooth, fast and high quality service. Highly recommend them.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src={ufuk}
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">Ufuk Dag, CEO at Cameralyze Inc.</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={screenshotPrimary3}
                alt="Dashboard user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="feature4" className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                  <SparklesIcon className="h-8 w-8 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Apostille and Notarization Services</h2>
                <p className="mt-4 text-lg text-gray-500">
                We provide apostille and notarization services for documents that need to be used in foreign countries. We'll notarize your documents and get them apostilled by the Secretary of State.,
                </p>
                <div className="mt-6">
                  <a
                    href="/pricing/apostille-and-notarization-services"
                    className="inline-flex rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={screenshotPrimary4}
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="feature5" className="mt-24 relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                  <InboxIcon className="h-8 w-8 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">US Bank Account Assistance</h2>
                <p className="mt-4 text-lg text-gray-500">
                Our team is here to make the process of setting up a US bank account as quick and easy as possible. We will assist you every step of the way, answering any questions you may have and providing all necessary corporate documents for the bank. With our expertise and support, you can have your US bank account up and running in no time.                </p>
                <div className="mt-6">
                  <a
                    href="/pricing/virtual-mailbox"
                    className="inline-flex rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                  >
                    Open a US Bank Account
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Registate made the process of opening a bank account in the US quick and easy. Their team provided expert guidance and all necessary documents, resulting in a stress-free experience.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src={ufuk}
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">Cihan Sahin, CEO of OpsBeacon Inc.</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={screenshotPrimary5}
                alt="Dashboard user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
