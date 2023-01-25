import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import Incorporation from '../components/Incorporation'
import Stats from '../components/Stats'
import Price from '../components/Price'
import ExclusiveSolution from '../components/ExclusiveSolution'

function postincorporation() {
  return (
    <main>
    <Navbar/>
    <Incorporation/>
    <Stats/>
    <Price/>
    <ExclusiveSolution/>
    <Footer/>
    </main>
  )
}

export default postincorporation