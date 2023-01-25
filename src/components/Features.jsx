import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import mert from '../images/avatars/mert.png'
import ufuk from '../images/avatars/ufuk.png'

export default function Features() {

  useEffect(() => {
    const container = document.getElementById("feature");
    const stickyImage = document.getElementById("stickyImage");
    let tempY;
    window.addEventListener("scroll", (e) => {
      //watch how image moves with scrolleing
      if (window.pageYOffset >= container.offsetTop && window.pageYOffset <= container.offsetTop + container.offsetHeight - window.innerHeight) {
        stickyImage.style.position = "fixed";
        stickyImage.style.top = "0vh";
        stickyImage.style.marginTop = "";
        tempY = window.pageYOffset;
      } else if (window.pageYOffset <= container.offsetTop) {
        stickyImage.style.position = "absolute";
        stickyImage.style.top = "";
        stickyImage.style.marginTop = "";
      } else {
        stickyImage.style.position = "absolute";
        stickyImage.style.marginTop = tempY + "px";
      }

      //change images while scroll
      if (window.pageYOffset < document.getElementById("feature1").offsetTop) {
        stickyImage.innerHTML = `<img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:w-auto" src="https://registate.net/static/media/features1.d255ca96e53a44272c7f.png" />`
      }
      if (window.pageYOffset > document.getElementById("feature1").offsetTop) {
        stickyImage.innerHTML = `<img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:w-auto" src="https://registate.net/static/media/features2.fe27dab0a08de2622778.png" />`
      }
      if (window.pageYOffset > document.getElementById("feature2").offsetTop) {
        stickyImage.innerHTML = `<img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:w-auto" src="https://registate.net/static/media/features3.ebda8a6565549499575f.png" />`
      }
      if (window.pageYOffset > document.getElementById("feature3").offsetTop) {
        stickyImage.innerHTML = `<img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:w-auto" src="https://registate.net/static/media/features4.d28d6567c82c0ce9e37a.png" />`
      }
      if (window.pageYOffset > document.getElementById("feature4").offsetTop) {
        stickyImage.innerHTML = `<img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:w-auto" src="https://registate.net/static/media/features5.93f29623d0c52e21a5fd.png" />`
      }
    })
  })

  return (
    <>

      <div className="mx-auto max-w-7xl py-24 px-8" id="feature">
        <div id="stickyImage" className="w-[39%] h-full absolute pt-[30vh] right-0"><img src="https://peppy.health/wp-content/uploads/2022/08/wh-1400x950.jpg" /></div>
        <div className="w-[45%] pt-[30vh]">
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
        </div>
        <div className="w-[45%] pt-[30vh]" id="feature1">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
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
                    href="/pricing/form-my-company"
                    className="inline-flex rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[45%] pt-[30vh]" id="feature2">
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
                    href="/pricing/form-my-company"
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
        </div>
        <div className="w-[45%] pt-[30vh]" id="feature3">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                  <SparklesIcon className="h-8 w-8 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Apostille and Notarization Services</h2>
                <p className="mt-4 text-lg text-gray-500">
                  We provide apostille and notarization services for documents that need to be used in foreign countries. We'll notarize your documents and get them apostilled by the Secretary of State.
                </p>
                <div className="mt-6">
                  <a
                    href="/pricing/form-my-company"
                    className="inline-flex rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[45%] pt-[30vh]" id="feature4">
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
                  Our team is here to make the process of setting up a US bank account as quick and easy as possible. We will assist you every step of the way, answering any questions you may have and providing all necessary corporate documents for the bank. With our expertise and support, you can have your US bank account up and running in no time.
                </p>
                <div className="mt-6">
                  <a
                    href="/pricing/form-my-company"
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
                        src={mert}
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">Cihan Sahin, CEO of OpsBeacon Inc.</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}