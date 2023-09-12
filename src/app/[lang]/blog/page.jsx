import React from 'react'
import Header from './components/Header'
import Posts from './components/Posts'
import Footer from '../components/common/Footer'

export default function Blog({ params: { lang } }) {
  return (
    <main>
      <Header lang={lang} />
      <Posts />
      <Footer lang={lang} />
    </main>
  )
}