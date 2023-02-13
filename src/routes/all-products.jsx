import React from 'react'
import Footer from '../components/Footer'
import { Navbar } from '../components/Navbar'
import AllProductsSection from '../components/AllProducts'

export default function AllProducts() {
  return (
    <main>
        <Navbar/>
        <AllProductsSection/>
        <Footer/>
    </main>
  )
}
