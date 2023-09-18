'use client';
import Navbar from '../components/common/Navbar'
import Pricing from './components/Pricing'

export default function State ({ params: { lang } }) {
  return (
    <main>
        <Navbar lang={lang} />
        <Pricing lang={lang} />
    </main>
  )
}
