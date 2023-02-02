import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import LeftImgRightText from "../components/LeftImgRightText";
import topnoch from '../images/topnotch.jpg';

export default function Company() {
  return (
    <main>
        <Navbar/>
        <LeftImgRightText img={topnoch} title='Unique Solutions For Your Business' desc='Our services are not be limited to only those that we offer now. Aside from perfection, we seek innovation and controlled expansion of our services. So, check back for our ever-expanding service portfolio!' reverse='true' />
        <LeftImgRightText img={topnoch} heading='Welcome to Registate' title='A Place Where Ideas Stand' desc='Your number one address for company formation, registered agent services and more in the State of Delaware. Here, we are dedicated to giving you the very best of us, with a focus on promptness, reliability and transparency. For many people who want to start a successful business in Delaware, while staying fully compliant, we are here to serve. Our expert solutions deliver quick and reliable outcomes. We strive to help our customers  realize their goals in business.' bgblue='true' />
        <LeftImgRightText img={topnoch} title='Registate has come a long way from its humble beginnings' desc='Its founders, coming from various backgrounds (including legal, financial and business management), know the difficulties of starting a company from scratch, and maintaining that company through its lifecycle. Now serving customers from all across the world, making the most of our many years of experience, we are thrilled to offer these services to others. Born from the entrepreneurial spirits of the founders’, Registate is here to open doors and make opportunities in the same manner for those that are willing to seize the initiative.' reverse='true' />
        <Footer/>
    </main>
  )
}
