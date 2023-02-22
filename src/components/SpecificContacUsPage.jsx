import {useParams} from "react-router-dom"
import productData from '../assets/productData'
import Footer from "./Footer"
import { Navbar } from "./Navbar"
import Contact from './Contact'

export default function SpecificContacUsPage() {
  const {productlink} = useParams()
  return (
    <main>
    <Navbar/>
    <Contact/>
    <Footer/>
    </main>
  )
}
