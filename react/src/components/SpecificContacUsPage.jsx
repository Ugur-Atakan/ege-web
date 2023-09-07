import { useParams } from "react-router-dom"
import productData from '../assets/productData'
import Footer from "./Footer"
import { Navbar } from "./Navbar"
import Contact from './Contact'

export default function SpecificContacUsPage() {
  const { productlink } = useParams()
  const newProductName = productlink.replace(/-/g," ");
  return (
    <main>
      <Navbar />
      <Contact title={newProductName} subject={newProductName} />
      <Footer />
    </main>
  )
}
