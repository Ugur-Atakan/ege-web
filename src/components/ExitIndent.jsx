import { useState } from 'react'
import exitpopupimg from '../images/exit-popup.jpg'

export default function ExitIndent() {
    const [showModal, setShowModal] = useState(true);
    return (
       showModal && 
       <div id="stickLayer" style={{ display: "none" }} className="stick_popup">
       <div id="popupclose" className="stick_close" onClick={()=> setShowModal(false)}>X</div>
       <div className="stick_content p-16">
           <div className='block items-center'>
               <div>
                   <h1 className='pb-4 text-center font-bold tracking-tight text-gray-900 text-3xl'>Get 15% Off Before You Go!</h1>
                   <p className='mt-4 text-lg text-gray-500 text-center'>Leave your email address and get a valid discount coupon on your purchase</p>
               </div>
           </div>
           <div className='block py-4'>
               <form className="block sm:max-w-md">
                   <label htmlFor="email-address" className="sr-only">
                       Email address
                   </label>
                   <input
                       type="email"
                       name="email"
                       id="email"
                       autoComplete="email"
                       required
                       className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:placeholder-gray-400 focus:outline-none focus:ring-blue-500"
                       placeholder="Enter your mail"
                   />
                   <div className="pt-4 rounded-md sm:mt-0 sm:flex-shrink-0">
                       <button
                           type="submit"
                           className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 py-3 px-4 text-base font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                       >
                           Submit
                       </button>
                   </div>
               </form>
               <div className="relative -bottom-12">
               <p className='text-md text-gray-500 text-center'>No thanks, I'm happier when I pay more :)</p>
               </div>
           </div>
       </div>
   </div>
    )
}
