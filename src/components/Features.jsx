import mert from '../images/avatars/mert.png'
import cihan from '../images/avatars/cihan.png'
import ufuk from '../images/avatars/ufuk.png'
import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const {t} = useTranslation()
const tabs = [
  {
    name: t('section4_card1_title'),
    description:
    t('section4_card1_desc'),
    button: t('section4_card1_button'),
    href: '/pricing/form-my-company',
    icon: InboxIcon,
    executivedesc: t('section4_card1_executive_desc'),
    executivetitle: t('section4_card1_executive_name'),
    executiveimg: mert,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg',
    imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
  },
  {
    name: t('section4_card2_title'),
    description:
    t('section4_card2_desc'),
    button: t('section4_card2_button'),
    href: '/post-incorp',
    icon: SparklesIcon,
    imageSrc: 'https://registate.net/static/media/features2.fe27dab0a08de2622778.png',
    imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
  },
  {
    name: t('section4_card3_title'),
    description:
    t('section4_card3_desc'),
    button: t('section4_card3_button'),
    href: '/virtual-mailbox',
    icon: InboxIcon,
    executivedesc: t('section4_card3_executive_desc'),
    executivetitle: t('section4_card3_executive_name'),
    executiveimg: ufuk,
    imageSrc: 'https://chiselspace.com/wp-content/uploads/2017/09/digital-mail-2-1-850x429.jpg',
    imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
  },
  {
    name:t('section4_card4_title'),
    description:
    t('section4_card4_desc'),
    button: t('section4_card4_button'),
    href: '/apostille',
    icon: SparklesIcon,
    imageSrc: 'https://registate.net/static/media/features4.d28d6567c82c0ce9e37a.png',
    imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
  },
  {
    name: t('section4_card5_title'),
    description:
    t('section4_card5_desc'),
    button: t('section4_card5_button'),
    href: '/us-bank-account-opening-support',
    icon: InboxIcon,
    executivedesc: t('section4_card5_executive_desc'),
    executivetitle: t('section4_card5_executive_name'),
    executiveimg: cihan,
    imageSrc: 'https://jupiter.money/content/images/2021/11/Savings_Account.jpg',
    imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
  },
]

  return (
    <div className="bg-slate-50">
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          {tabs.map((feature) => (
                    <div key={feature.name} className="py-12 flex flex-col-reverse outline-none lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:col-span-5 lg:mt-0">
                        <div className='flex items-center gap-4'>
                          <div>
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                              <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                            </span>
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">{feature.name}</h2>
                          </div>
                        </div>
                          <div className="mt-6">
                            <p className="mt-4 text-lg text-gray-500">
                              {feature.description}
                            </p>
                          </div>
                          <div className="mt-6">
                            <a
                              href={feature.href}
                              className="inline-flex rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                            >
                              {feature.button}
                            </a>
                          </div>
                        {feature.executivetitle && <div className="mt-8 border-t border-gray-200 pt-6">
                          <blockquote>
                            <div>
                              <p className="text-base text-gray-500">
                                &ldquo;{feature.executivedesc}&rdquo;
                              </p>
                            </div>
                            <footer className="mt-3">
                              <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0">
                                  <img
                                    className="h-6 w-6 rounded-full"
                                    src={feature.executiveimg}
                                    alt={feature.executiveimg}
                                  />
                                </div>
                                <div className="text-base font-medium text-gray-700">{feature.executivetitle}</div>
                              </div>
                            </footer>
                          </blockquote>
                        </div>}

                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-w-2 aspect-h-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-w-5 sm:aspect-h-2">
                          <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                        </div>
                      </div>
                    </div>
              ))}
        </div>
      </section >
    </div >
  )
}
