import Footer from "../components/Footer"
import LeftImgRightText from "../components/LeftImgRightText"
import { Navbar } from "../components/Navbar"
import topnotch from '../images/topnotch.jpg'
import Price from "../components/Price"

export default function OurPackages() {
    return (
        <main>
            <Navbar />
            <LeftImgRightText heading='Our Packages' title='Costs For Maintaining Your Business' desc="We are always available for a chat with our customers to help you make the best decision when it comes to our products. If you have a question or just want to keep in touch with us, we're always here to listen." button='Get Started Now' href='contact' img={topnotch} />
            <Price />
            <LeftImgRightText title='We offer extensive procedures for our clients.' desc="We are more than a regular registered agent service company. We know starting a business can prove to be a hassle. Maintaining a business is also another story and can be burdensome. If not done properly or timely, even a small omission could be fatal for your business – and thus, your dreams. We strive to take this burden off from your shoulders and be a contributor to your success. Having the expertise, we are committed to assist you in achieving your goals and in this thriving business ecosystem, we offer our services for your various needs." button='Contact Us' href='contact' img={topnotch} reverse='true' />
            <Footer />
        </main>
    )
}
