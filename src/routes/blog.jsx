import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import Blog  from '../components/BlogDetails'
export default function BlogPage() {
  return (
    <main>
      <Navbar/>
      <Blog/>
      <Footer/>
    </main>
  )
}