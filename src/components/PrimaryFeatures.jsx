import Slider from "react-slick";
import calendar from '../images/calendar.png';
import hat from '../images/hat.png';
import folder from '../images/folder.png';
import protectionicon from '../images/protection-icon.png';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import tic from '../images/tick-dynamic.png';
import at from '../images/at-dynamic.png';
import navigator from '../images/navigator.png';
import mail from '../images/mail-dynamic.png';
import phone from '../images/phone-missing-dynamic.png';
import travel from '../images/travel-dynamic.png';
import axe from '../images/axe-dynamic.png';
import wallet from '../images/wallet-dynamic.png';
import filetext from '../images/file-text-dynamic.png';
import sheild from '../images/sheild-dynamic.png';
import dollar from '../images/dollar-dynamic.png';
import locker from '../images/locker-dynamic.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#1649FF" }}
      onClick={onClick}
    />
  );
}


export function SupportYourBusiness() {
  const { i18n } = useTranslation();
  const stayCompliantPackage = [
    { name: 'Compliance Reminder', description: 'Stay in compliance with laws, regulations, and requirements.', button: 'Contact us', href: `/${i18n.language}/contact`, img: hat },
    { name: 'Renewal & Revival', description: 'Services for documents that need to be used in foreign countries.', button: 'Contact us', href: `/${i18n.language}/contact`, img: folder },
    { name: 'Certificate of Good Standing', description: 'Show that your business is in good standing.', button: 'Contact us', href: `/${i18n.language}/contact`, img: calendar },
    { name: 'Registered Agent', description: 'Ensure legal compliance by designating a professional agent for official correspondence and legal notices.', button: 'Contact us', href: `/${i18n.language}/contact`, img: tic },
    { name: 'Virtual Mailbox', description: 'Manage your mail digitally, allowing you to access and organize yoru postal communications from anywhere', button: 'Contact us', href: `/${i18n.language}/contact`, img: at },
    { name: 'Office Address', description: 'Establish a professional business presence with a prime physical address for credibility and communication.', button: 'Contact us', href: `/${i18n.language}/contact`, img: navigator },
    { name: 'Virtual Phone Number', description: 'Enhance accessibility and professionalism with a virtual phone number, redirecting calls to your preferred device.', button: 'Contact us', href: `/${i18n.language}/contact`, img: mail },
    { name: 'Dedicated Receptionist', description: 'Impress clients with a dedicated receptionist handling calls, appointments, and inquiries on behalf of your business.', button: 'Contact us', href: `/${i18n.language}/contact`, img: phone },
    { name: 'Foreign Qualification', description: 'Expand your operations across state lines seamlessly by meeting all requirements for conducting business in new jurisdictions.', button: 'Contact us', href: `/${i18n.language}/contact`, img: travel },
    { name: 'Certified Copy Request', description: 'Obtain verified copies of vital documents for legal, regulatory, or administrative purposes.', button: 'Contact us', href: `/${i18n.language}/contact`, img: folder },
    { name: 'Dissolution & Cancellation', description: 'Navigate the process of formally closing your business entity in compliance with relevant regulations.', button: 'Contact us', href: `/${i18n.language}/contact`, img: axe },
    { name: 'Certificate of Amendment', description: 'Reflect changes to your business structure, name, or other key details with an official certificate.', button: 'Contact us', href: `/${i18n.language}/contact`, img: folder },
    { name: 'Doing Business As (DBA)', description: 'Operate under an assumed name for branding flexibility while staying compliant with the necessary regulations.', button: 'Contact us', href: `/${i18n.language}/contact`, img: wallet },
    { name: 'Apostille', description: 'Authenticate your documents for international use, ensuring their legal validity in foreign countries.', button: 'Contact us', href: `/${i18n.language}/contact`, img: filetext }
  ]
  const taxesPackage = [
    { name: 'EIN (Employer Identification Numb)', description: 'Obtain a unique identifier for your business, essential for tax filing and legal recognition.', button: 'Contact us', href: `/${i18n.language}/contact`, img: sheild },
    { name: 'Entity Type Conversion', description: 'Successfully change your business structure or entity type while adhering to legal guidelines.', button: 'Contact us', href: `/${i18n.language}/contact`, img: dollar },
    { name: 'US Bank Account Opening Support', description: 'Receive assistance in navigating the process of opening a US bank account for your business.', button: 'Contact us', href: `/${i18n.language}/contact`, img: locker }
  ]

  const growYourBusinessPackage = [
    { name: 'Post Incorporation', description: 'Access a range of services following incorporation, including compliance, documentation, and ongoing support.', button: 'Contact us', href: `/${i18n.language}/contact`, img: folder }
  ]

  const [showAllPackages, setShowAllPackages] = useState(false);
  const packagesName = ['Stay Compliant', 'Taxes & Accounting', 'Grow Your Business'];
  const [selectedPackage, setSelectedPackage] = useState(0);
  const selectedPackages = selectedPackage === 0 && stayCompliantPackage || selectedPackage === 1 && taxesPackage || selectedPackage === 2 && growYourBusinessPackage;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  };


  return (
    <div className="bg-[#1649FF] overflow-hidden">
      <div className="mx-auto max-w-5xl p-8 lg:px-12 lg:pt-24 pb-12">
        <h1 className="font-bold text-[32px] leading-[38px] lg:text-[64px] lg:leading-[64px] text-white text-left lg:text-center">Support your business needs <h1 className="text-[#9EE248]">after formation</h1></h1>
      </div>
      <div className="flex items-center justify-center gap-0.5 pb-12">
        {packagesName.map((pac, index) => {
          return (
            <div key={index} onClick={() => setSelectedPackage(index)} className={`cursor-pointer rounded-[12px] text-white text-[16px] leading-[22px] px-[6px] py-2 font-semibold text-center ${selectedPackage === index ? 'bg-white text-[#1649FF]' : 'bg-[#1649FF] text-white'}`}>
              {pac}
            </div>
          )
        })}
      </div>
      <div className="after-formation hidden lg:block relative" style={{ marginLeft: '175px', width: 'calc(100% - 175px)' }}>
        <Slider {...settings} className='relative'>
          {selectedPackages.map((pac, index) => {
            return (
              <div className="p-4">
                <div className="font-semibold text-[40px] leading-[38px] lg:leading-[44px] text-[#222222]">
                  {pac.name}
                </div>
                <div className="font-semibold text-[16px] lg:text-lg leading-[22px] text-[#222222] pt-4 flex-1">
                  {pac.description}
                </div>
                  <button className="absolute bottom-0 py-1 text-[22px] leading-[26px] font-semibold text-[#1649FF]">{pac.button}</button>
              </div>
            )
          })}
        </Slider>
      </div>
      <div className="block px-8 lg:hidden">
        <div className="flex flex-col gap-3 py-12">
          {selectedPackages.slice(0, showAllPackages ? selectedPackages.length : 3).map((pac, index) => {
            return (
              <div className="overflow-hidden shadow-lg bg-white rounded-[32px] relative">
                <div className="flex items-center justify-center">
                  <img className="h-64" src={pac.img} alt="Products" />
                </div>
                <div className="px-6">
                  <div className="font-semibold text-[40px] leading-[38px] lg:leading-[44px] text-[#222222]">{pac.name}</div>
                  <p className="font-semibold text-[16px] lg:text-lg leading-[22px] text-[#222222] pt-4">
                    {pac.description}
                  </p>
                </div>
                <div className="px-6 pt-6 pb-4 ">
                  <Link to={pac.href} className="inline-block py-1 text-[22px] leading-[26px] font-semibold text-[#1649FF] mr-2 mb-2">{pac.button}</Link>
                </div>
              </div>
            )
          })}
          {!showAllPackages && (
            <button onClick={() => setShowAllPackages(true)} className="mt-4 font-semibold text-[16px] leading-[22px] text-white">
              Daha Fazla Göster
            </button>
          )}
        </div>
      </div>
      <div className="mx-auto max-w-5xl border-t mt-4 lg:mt-16 border-white border-opacity-[0.20] py-12 px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols:2 lg:grid-cols-3 items-start gap-6 lg:gap-3">
          <div className="flex items-start gap-3 justify-start lg:justify-center">
            <img src={protectionicon} className='w-8 h-8 lg:w-6 lg:h-6' alt="protection icon" />
            <p className="text-white font-bold text-lg leading-6">In house USA based CPAs and Lawyers</p>
          </div>
          <div className="flex items-start gap-3 justify-start lg:justify-center">
            <img src={protectionicon} className='w-8 h-8 lg:w-6 lg:h-6' alt="protection icon" />
            <p className="text-white font-bold text-lg leading-6">Fast document approve. Physical office proximity to state HQ</p>
          </div>
          <div className="flex items-start gap-3 justify-start lg:justify-center">
            <img src={protectionicon} className='w-8 h-8 lg:w-6 lg:h-6' alt="protection icon" />
            <p className="text-white font-bold text-lg leading-6">60-Day money-back guarantee</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SupportYourBusiness;