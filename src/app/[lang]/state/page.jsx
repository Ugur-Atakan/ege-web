'use client';
import { useEffect } from 'react'
import Navbar from '../../common/Navbar'
import Pricing from './components/Pricing'

export default function State ({ params: { lang } }) {
  return (
    <main>
        <Navbar />
        <Pricing lang={lang} />
    </main>
  )
}
