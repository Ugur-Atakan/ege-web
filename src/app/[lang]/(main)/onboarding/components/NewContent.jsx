'use client'

import React, { useEffect } from 'react'

import { removeCookieFromStorageServerAction } from '@/app/lib/session/serverActions'
import { readCookie, submitCookie } from '@/app/lib/session/clientActions'
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/i18n/client'

import Cards from './Cards/Cards'
import Comparison from './Comparison/Comparison'
import Footer from './Footer'

const NewContent = ({ lang }) => {
  // useEffect(() => {
  //   const readCkie = async () => {
  //     const ckie = await readCookie();
  //     if (ckie) {
  //       removeCookieFromStorageServerAction();
  //     }
  //   }
  //   readCkie();
  // }, []);

  const { t } = useTranslation(lang);
  const router = useRouter();

  const handleSelectLlc = () => {
    const ckie = {companyType: 'LLC'};
    const setCookie = async (ckie) => {
      await submitCookie(ckie);
      router.refresh();
    }
    setCookie(ckie);
    router.push(`/${lang}/onboarding/state`);
  }

  const handleSelectCcorp = () => {
    const ckie = {companyType: 'C-Corp'};
    const setCookie = async (ckie) => {
      await submitCookie(ckie);
      router.refresh();
    }
    setCookie(ckie);
    router.push(`/${lang}/onboarding/state`);
  }

  return (
    <div className="bg-white">

      <main>
        {/* Pricing section */}
        <div className="isolate overflow-hidden">
          <div className="flow-root bg-gray-900 py-16 sm:pt-18 lg:pb-0">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="relative z-10">
                <h1 className="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">
                  Choose a company type!
                </h1>
              </div>
              <div className="flex items-center justify-center relative mt-10">
                <svg
                  viewBox="0 0 1208 1024"
                  aria-hidden="true"
                  className="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
                >
                  <ellipse cx={604} cy={512} fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" rx={604} ry={512} />
                  <defs>
                    <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                      <stop stopColor="#1649FF" />
                      <stop offset={1} stopColor="#1649FF" />
                    </radialGradient>
                  </defs>
                </svg>
                  <div
                    className={'relative rounded-2xl mb-12 z-10  items-center bg-white shadow-xl ring-1 ring-gray-900/10'}
                  >
                    <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                        <div className='relative'>
                            <Cards t={t} lang={lang} handleSelectLlc={handleSelectLlc} handleSelectCcorp={handleSelectCcorp} />

                            <div className='bg-white'>
                                <div className='mx-auto max-w-5xl p-6 lg:px-8 '>
                                    <div className='text-left md:text-center'>
                                        <h1 className='text-[#222222] text-[26px] leading-8 md:text-[2.5rem] font-semibold md:leading-[2.75rem]'>{t('company_type_comparing_title')}</h1>
                                    </div>

                                  <Comparison t={t} handleSelectLlc={handleSelectLlc} handleSelectCcorp={handleSelectCcorp} />
                                  <Footer t={t} takeQuizForm={() => router.push(`/${lang}/quiz`)} lang={lang} />
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NewContent