import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import Price from '../components/Price'
import ExclusiveSolution from '../components/ExclusiveSolution'
import LeftTextRightImg from '../components/Incorporation'
import LeftImgRightText from '../components/LeftImgRightText'

function postincorporation() {
  return (
    <main>
    <Navbar/>
    <LeftImgRightText img="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" heading="Start Your Business" desc="Once your company has gone through the formation process, it exists and its internal affairs are then governed by the Delaware corporate laws. But this doesn’t mean business set-up is truly over. This process involves certain additional steps, namely drafting a number of legal documents neccessary for your business to be ready to operate and take on investment." title="Post Incorporation" button="Contact Us" href="/contact" />
    <LeftTextRightImg title="Why you need this"/>
    <Stats />
    <Price/>
    <ExclusiveSolution/>
    <Footer/>
    </main>
  )
}

export default postincorporation