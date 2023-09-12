'use client';
import Hero from './components/Hero'
import Content from './components/Content'
import Footer from '../components/common/Footer';

export default function Page({ params: { lang } }) {
  return (
    <>
      <div className="hiw-section h-screen">
        <Hero lang={lang} />
        <Content lang={lang} />
        <Footer lang={lang} />
      </div>
    </>
  )
}