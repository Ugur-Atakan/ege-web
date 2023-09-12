import Link from 'next/link'
import Image from 'next/image'
import umbrella from '../../../../images/reverse-umbrella.png'
import puzzle from '../../../../images/reverse-puzzle.png'
import tick from '../../../../images/tick.png'
import tickblue from '../../../../images/tick_blue.png'
import bishop from '../../../../images/bishop-white.png'
import queen from '../../../../images/queen-color.png'
import start from '../../../../images/start-perfect-name.webp'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import taq1 from '../../../../images/take-a-quiz2.webp'
import taq2 from '../../../../images/take-a-quiz1.webp'
import { useTranslation } from '../../../i18n/client'

export default function Content({ lang }) {
    const { t } = useTranslation(lang);

    return (
    <div className="relative isolate overflow-hidden pt-14">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-64 relative z-[3]">
            <div className="text-left lg:text-center px-6 lg:px-0 lg:-mt-24">
                <div className='flex items-center justify-center' >
                    <div className='max-w-[436px] mb-12'>
                        <p className="mt-6 font-semibold text-[16px] lg: leading-[22px] text-lg text-white">
                            Our dedicated team is ready to start your business in just one day, handling all the services from creating to apostille.
                        </p>
                    </div>
                </div>
                <h1 className="text-4xl leading-[38px] font-bold tracking-tight text-white sm:text-7xl">
                    Form your business all in one place
                </h1>
            </div>
        </div>
        <div className='mx-auto max-w-[500px] px-4 pt-24'>
            <h1 className='text-center font-semibold text-[40px] leading-[44px] text-[#222222]'>We'll help you choose the right company type</h1>
        </div>
        <div className='mx-auto max-w-[1120px] px-4 py-12'>
            <div className='flex items-center justify-center gap-6'>
                <div className='rounded-[20px] bg-[#ECEFF1] p-6 relative overflow-hidden'>
                    <h1 className='font-bold text-[64px] leading-[64px] text-[#222222]'>LLC</h1>
                    <p className='font-semibold text-[18px] leading-[24px] text-[#222222] pt-4 pb-24 w-2/3'>Great for small businesses and entrepreneurs with its flexibility and tax benefits.</p>
                    <div className='relative bottom-0'>
                        <button className='font-semibold text-[22px] leading-[26px] text-[#1649FF] '>Start my LLC</button>
                    </div>
                    <div className='absolute bottom-0 right-0'>
                        <Image src={umbrella} className='h-72' alt='select llc' />
                    </div>
                </div>
                <div className='rounded-[20px] bg-[#ECEFF1] p-6 relative overflow-hidden'>
                    <h1 className='font-bold text-[64px] leading-[64px] text-[#222222]'>C-Corp</h1>
                    <p className='font-semibold text-[18px] leading-[24px] text-[#222222] pt-4 pb-24 w-2/3'>Complex structure to raise capital through stocks, offering liability protection. </p>
                    <div className='relative bottom-0'>
                        <button className='font-semibold text-[22px] leading-[26px] text-[#1649FF] '>Start my C-Corp</button>
                    </div>
                    <div className='absolute bottom-0 right-0'>
                        <Image src={puzzle} className='h-52' alt='select ccorp' />
                    </div>
                </div>
            </div>
        </div>
        <div className='mx-auto max-w-[25rem] px-4 pb-24'>
            <div className='text-center font-semibold text-[22px] leading-[26px] text-[#222222]'>Find out what type of business better fits your needs. <Link href={`/${lang}/start-my-business`} className='text-[#1649FF]'>Take a quiz</Link></div>
        </div>
        <div className='bg-[#ECEFF1] py-24 px-4 lg:px-0'>
            <div className='mx-auto max-w-[1120px]'>
                <div className='mx-auto max-w-[473px]'>
                    <div className='text-center pb-12'>
                        <h2 className='font-semibold text-[40px] leading-[44px] text-[#222222]'>{t("how_it_works_help_company_state_title")}</h2>
                    </div>
                </div>
                <div className='flex items-center gap-8 pb-12'>
                    <div className='w-[549px] h-[669px] rounded-[32px] hiw-delaware relative overflow-hidden'>
                        <div className='absolute top-[60%] -right-4'>
                            <div className='bg-[#9EE248] text-[#222222] py-4 px-6 rounded-2xl rotate-12 font-semibold'>{t('how_it_works_help_company_state_card1_button_on')}</div>
                        </div>
                        <div className='bottom-8 left-8 absolute'>
                            <div className='flex items-center gap-4'>
                                <h3 className='font-bold text-[64px] leading-[64px] text-white'>{t("how_it_works_help_company_state_card1_title")}</h3>
                                <ArrowRightIcon className='mt-2 h-12 text-white' />
                            </div>
                            <div className='py-2'>
                                <p className='font-semibold text-white text-[18px] leading-6'>{t('how_it_works_help_company_state_card1_desc')}</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[549px] h-[669px] rounded-[32px] hiw-wyoming relative'>
                        <div className='absolute top-2/3 -right-8'>
                            <div className='bg-[#1649FF] text-white py-4 px-6 rounded-2xl -rotate-12 font-semibold'>{t('how_it_works_help_company_state_card2_button_on')}</div>
                        </div>
                        <div className='bottom-8 left-8 absolute'>
                            <div className='flex items-center gap-4'>
                                <h3 className='font-bold text-[64px] leading-[64px] text-white'>{t("how_it_works_help_company_state_card2_title")}</h3>
                                <ArrowRightIcon className='mt-2 h-12 text-white' />
                            </div>
                            <div className='py-2 pr-24'>
                                <p className='font-semibold text-white text-[18px] leading-6'>{t('how_it_works_help_company_state_card2_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mx-auto max-w-[1120px] px-4 lg:px-0 py-48'>
            <div className='flex items-start gap-32'>
                <div>
                    <h2 className='font-bold text-[64px] leading-[64px] text-[#222222]'>{t('how_it_works_take_a_quiz_title')}</h2>
                    <div className='flex gap-8 py-24'>
                        <Image src={taq1} className='w-[305px] h-[415px] object-cover rounded-2xl' alt='Take a quiz, get your business in 1 day' />
                        <Image src={taq2} className='mt-24 w-[305px] h-[415px] object-cover rounded-2xl' alt='Take a quiz, get your business in 1 day' />
                    </div>
                </div>
                <div>
                    <ul className='flex flex-col gap-12'>
                        <li>
                            <div className='flex items-center gap-3'>
                                <Image src={tick} className='h-8' alt='Company created in any state' />
                                <h3 className='font-semibold text-[28px] leading-[32px] text-[#222222]'>{t('how_it_works_take_a_quiz_list_item1_title')}</h3>
                            </div>
                            <div className='block pl-12 py-4'>
                                <p className='text-[#222222] font-semibold text-[22px] leading-[26px]'>{t('how_it_works_take_a_quiz_list_item1_desc')}</p>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center gap-3'>
                                <Image src={tick} className='h-8' alt='Registered agent' />
                                <h3 className='font-semibold text-[28px] leading-[32px] text-[#222222]'>{t('how_it_works_take_a_quiz_list_item2_title')}</h3>
                            </div>
                            <div className='block pl-12 py-4'>
                                <p className='text-[#222222] font-semibold text-[22px] leading-[26px]'>{t('how_it_works_take_a_quiz_list_item2_desc')}</p>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center gap-3'>
                                <Image src={tick} className='h-8' alt='EIN and bank account setup assistance' />
                                <h3 className='font-semibold text-[28px] leading-[32px] text-[#222222]'>{t('how_it_works_take_a_quiz_list_item3_title')}</h3>
                            </div>
                            <div className='block pl-12 py-4'>
                                <p className='text-[#222222] font-semibold text-[22px] leading-[26px]'>{t('how_it_works_take_a_quiz_list_item3_desc')}</p>
                            </div>
                        </li>
                        <li className='block pl-12 py-4'>
                            <Link href={'/'} className='font-semibold text-[18px] leading-6 text-white rounded-2xl bg-[#1649FF] px-6 py-3'>{t('how_it_works_take_a_quiz_list_button')}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='py-24 px-6 bg-[#ECEFF1]'>
            <div className='mx-auto max-w-[515px]'>
                <h1 className='text-center font-semibold text-[40px] leading-[44px] text-[#222222]'> Select the package with all the essential features</h1>
            </div>
            <div className='mx-auto max-w-[1120px] px-4 py-12'>
                <div className='flex items-center justify-center gap-6'>
                    <div className='bg-white rounded-[32px] p-6 relative overflow-hidden'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-bold text-[64px] leading-[64px] text-[#222222]'>Gold</h1>
                            <p c className='font-semibold text-[18px] leading-[24px] text-[#222222] w-2/3'>I want my business set up with essential services and documents.</p>
                        </div>
                        <div className='py-8'>
                            <ul className='flex flex-col gap-3'>
                                <li className='flex items-center gap-3'>
                                    <Image src={tick} className='h-8' alt='Registered Agent' />
                                    <p className='font-semibold text-[18px] leading-6 text-[#222222]'>Registered Agent</p>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <Image src={tick} className='h-8' alt='Registered Agent' />
                                    <p className='font-semibold text-[18px] leading-6 text-[#222222]'>Expedited EIN</p>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <Image src={tick} className='h-8' alt='Registered Agent' />
                                    <p className='font-semibold text-[18px] leading-6 text-[#222222]'>All formation documents</p>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <Image src={tick} className='h-8' alt='Registered Agent' />
                                    <p className='font-semibold text-[18px] leading-6 text-[#222222]'>Access to Registate Dashboad</p>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <Image src={tick} className='h-8' alt='Registered Agent' />
                                    <p className='font-semibold text-[18px] leading-6 text-[#222222]'>Lifetime Support</p>
                                </li>
                            </ul>
                        </div>
                        <div className='relative bottom-0'>
                            <div className='flex items-end justify-between -mt-80'>
                                <div className='relative'>
                                    <button className='font-semibold text-[18px] leading-[26px] text-[#1649FF]'> {t('how_it_works_package_card1_button')} </button>
                                </div>
                                <div className='relative -bottom-28 -right-4'>
                                    <Image src={bishop} className='h-full' alt='gold package' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#1649FF] rounded-[32px] p-6 relative overflow-hidden'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-bold text-[64px] leading-[64px] text-white'>Gold</h1>
                            <p c className='font-semibold text-[18px] leading-[24px] text-white w-2/3'>I want my business set up with essential services and documents.</p>
                        </div>
                        <div className='py-8'>
                            <ul className='flex flex-col gap-3'>
                                <li className='flex items-center gap-3'>
                                    <Image src={tickblue} className='h-8' alt='Registered Agent' />
                                    <p className='font-semibold text-[18px] leading-6 text-white'>Registered Agent</p>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <Image src={tickblue} className='h-8' alt='Expedited EIN' />
                                    <p className='font-semibold text-[18px] leading-6 text-white'>Expedited EIN</p>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <Image src={tickblue} className='h-8' alt='All formation documents' />
                                    <p className='font-semibold text-[18px] leading-6 text-white'>All formation documents</p>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <Image src={tickblue} className='h-8' alt='Access to Registate Dashboad' />
                                    <p className='font-semibold text-[18px] leading-6 text-white'>Access to Registate Dashboad</p>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <Image src={tickblue} className='h-8' alt='Lifetime Support' />
                                    <p className='font-semibold text-[18px] leading-6 text-white'>Lifetime Support</p>
                                </li>
                            </ul>
                        </div>
                        <div className='relative bottom-0'>
                            <div className='flex items-end justify-between -mt-80'>
                                <div className='relative'>
                                    <button className='font-semibold text-[18px] leading-[26px] text-white'> {t('how_it_works_package_card1_button')} </button>
                                </div>
                                <div className='relative -bottom-28 -right-4'>
                                    <Image src={queen} className='h-full' alt='gold package' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='hiw-section7'>
            <div className='mx-auto max-w-[851px] px-6 lg:px-0 py-24'>
                <h1 className='text-center font-bold text-[64px] leading-[64px] text-[#ECEFF1]'>Here's the magic you'll get from us in just 1 day</h1>
            </div>
            <div className='mx-auto max-w-[938px] px-4 py-12'>
                <div className='flex items-start justify-between px-12'>
                    <div className='w-[40%]'>
                        <div className='flex flex-col gap-16'>
                            <div>
                                <h3 className='font-semibold text-[22px] leading-[26px] text-white'>We offer the best value and fast service thanks to our network of teams across the US</h3>
                            </div>
                            <div>
                                <Link href={'/'} className='rounded-2xl bg-[#1649FF] text-white font-semibold p-4'>Get Started Now </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-[60%]'>
                        <ul className='flex flex-col gap-12'>
                            <li>
                                <div className='flex items-center gap-3'>
                                    <Image src={tick} className='h-8' alt='Company created in any state' />
                                    <h3 className='font-semibold text-[18px] leading-6 text-white'>Company created in any state</h3>
                                </div>
                                <div className='block pl-12'>
                                    <p className='text-[#ECEFF1] text-opacity-[30%] font-semibold text-lg leading-6'>We have a dedicated team in all states near HQ, ensuring an expedited process.</p>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center gap-3'>
                                    <Image src={tick} className='h-8' alt='Registered agent' />
                                    <h3 className='font-semibold text-[18px] leading-6 text-white'>Registered agent</h3>
                                </div>
                                <div className='block pl-12'>
                                    <p className='text-[#ECEFF1] text-opacity-[30%] font-semibold text-lg leading-6'>A registered agent receives all legal documents on behalf of your business in the state.</p>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center gap-3'>
                                    <Image src={tick} className='h-8' alt='EIN and bank account setup assistance' />
                                    <h3 className='font-semibold text-[18px] leading-6 text-white'>EIN and bank account setup assistance</h3>
                                </div>
                                <div className='block pl-12'>
                                    <p className='text-[#ECEFF1] text-opacity-[30%] font-semibold text-lg leading-6'>An EIN is essential for your U.S. company, enabling you to pay taxes and open a business bank account.</p>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center gap-3'>
                                    <Image src={tick} className='h-8' alt='Access to Registate online dashboard' />
                                    <h3 className='font-semibold text-[18px] leading-6 text-white'>Access to Registate online dashboard</h3>
                                </div>
                                <div className='block pl-12'>
                                    <p className='text-[#ECEFF1] text-opacity-[30%] font-semibold text-lg leading-6'>Get one application to centralize all your paperwork in a single, organized place.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='mx-auto max-w-[1120px] px-4 py-24'>
            <div className='h-[30rem] w-full'>
                <Image src={start} className='h-[30rem] w-full object-cover rounded-tl-[32px] rounded-tr-[32px]' alt='Start with you perfect name' />
            </div>
            <div className='bg-black rounded-bl-[32px] rounded-br-[32px] p-12'>
                <div className='flex items-start justify-between gap-8'>
                    <div className='flex flex-col gap-8 w-full'>
                        <h2 className='font-bold leading-[64px] text-[64px] text-white '>{t('how_it_works_start_perfect_name_title')}</h2>
                        <p className='w-[75%] text-[18px] font-semibold leading-6 text-white'>{t('how_it_works_start_perfect_name_desc')}</p>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="businessName" className="mb-2 text-sm font-medium sr-only">Search</label>
                        <div className="relative mb-4">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            </div>
                            <input type="text" id="businessName" className="block w-full p-6 pl-6 text-lg text-[#8A8A8A] rounded-[20px]  focus:outline-none border-none focus:border-none focus:ring-0" placeholder={t('pricing_header2_footer_input_text')} required />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#1649FF] py-4 px-7 rounded-2xl">{t('pricing_header2_footer_input_button')}</button>
                        </div>
                        <Link href={`/${lang}/start-my-business`} className='text-left' >
                            <p className='text-[#8A8A8A] block lg:flex items-center  gap-1'>{t('pricing_header2_footer_text_gray')} <span className='flex justify-center items-center gap-1 text-[#9EE248] cursor-pointer'>{t('pricing_header2_footer_text_green')} <ArrowRightIcon className='w-4 h-4' /> </span></p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}