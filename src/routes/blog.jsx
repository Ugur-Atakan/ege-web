import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import { Blogs } from '../components/Blogs'
function Blog() {
  return (
    <main>
      <Navbar/>
      <Blogs/>
      <Footer/>
    </main>
  )
}

export default Blog