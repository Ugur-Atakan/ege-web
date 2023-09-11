import React from 'react'
import Header from './components/Header'
import Posts from './components/Posts'
import Footer from '../../common/Footer'

export default function Blog() {
  return (
    <main>
      <Header/>
      <Posts />
      <Footer/>
    </main>
  )
}