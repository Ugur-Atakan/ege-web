import { Container } from '../components/Container'
import backgroundImage from '../images/background-call-to-action.jpg'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function CallToAction() {
  const { t, i18n } = useTranslation();

  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <img
          src={backgroundImage}
          alt=""
          width={2347}
          height={1244}
          layout="fixed"
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
             {t('section6_title')}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            {t('section6_desc')}
          </p>
          <Link to={`/${i18n.language}/state`} className="px-36 mt-8 py-4 relative rounded group overflow-hidden font-medium bg-purple-50 text-blue-600 inline-block">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-slate-50 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-blue-600 text-lg">{t('section6_button')}</span>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default CallToAction