import exitpopupimg from '../images/exit-popup.jpg'

export default function ExitIndent() {
    return (
        <div id="stickLayer" style={{ display: "none" }} className="stick_popup">
            <div className="stick_content">
                <div className='flex items-center gap-6'>
                    <div>
                        <img src={exitpopupimg} className="rounded-md" />
                    </div>
                    <diV>
                        <div>
                            <h1 className='pb-4 text-center font-bold tracking-tight text-gray-900 text-3xl'>Wait! I have news for you. 20% discount!</h1>
                            <p class="text-center text-lg leading-8 text-gray-600">Lorem ıpsum dolor sit amet! Lorem ıpsum dolor sit amet!</p>
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
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-base font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </diV>
                </div>
            </div>
        </div>
    )
}
