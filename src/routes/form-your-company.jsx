import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import LeftImgRightText from '../components/LeftImgRightText'
import topnotch from '../images/topnotch.jpg'
import WhyStartACorporation from '../components/WhyStartACorporation'
function formyourcompany() {
    return (
        <main>
            <Navbar />
            <Hero />
            <LeftImgRightText img={topnotch} title="Top-Notch Quality Service For Your Company" desc="Count on our services for assistance! Our specialists will prepare your company formation documents, coordinate with state’s filing process, and notify you once the documents are filed and have been approved.
 Enjoy peace of mind while we take care of everything for you!"/>
            <WhyStartACorporation/>
            <Footer />
        </main>
    )
}

export default formyourcompany