import { useTranslation } from 'react-i18next';
import turkeyicon from '../images/turkey.png'
import ukicon from '../images/united-kingdom.png'
import {
    Bars3Icon,
    BookmarkSquareIcon,
    BriefcaseIcon,
    BuildingOfficeIcon,
    CheckCircleIcon,
    ComputerDesktopIcon,
    GlobeAltIcon,
    InformationCircleIcon,
    NewspaperIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    XMarkIcon,
    EnvelopeOpenIcon,
    UserIcon,
    DocumentDuplicateIcon,
    InboxStackIcon,
    ClipboardDocumentIcon,
    QuestionMarkCircleIcon,
    BuildingLibraryIcon,
    CalendarIcon,
    ClipboardDocumentListIcon,
    RectangleStackIcon,
    RocketLaunchIcon,
    PresentationChartBarIcon,
    CubeIcon,
    ArchiveBoxIcon,
    CreditCardIcon,
    DocumentTextIcon,
    PencilSquareIcon,
    FolderMinusIcon,
    ArrowPathIcon,
    ChatBubbleLeftRightIcon,
    ReceiptPercentIcon
  } from '@heroicons/react/24/outline'
  import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function AllProductsSection() {
    const lngs = {
        en: { nativeName: 'English', icon: ukicon },
        tr: { nativeName: 'Turkish', icon: turkeyicon }
      };
      
      const { t, i18n } = useTranslation();

    const recurring = [
        { name: t('menu2_1_link_1_title'), href: '/compliance-reminder', desc: t('menu2_1_link_1_subtitle'), icon: FolderMinusIcon },
        { name: t('menu2_1_link_2_title'), href: '/registered-agent', desc: t('menu2_1_link_2_subtitle'), icon: BuildingOfficeIcon },
        { name: t('menu2_1_link_3_title'), href: '/virtual-mailbox', desc: t('menu2_1_link_3_subtitle'), icon: EnvelopeOpenIcon },
        { name: t('menu2_1_link_4_title'), href: '/office-address', desc: t('menu2_1_link_4_subtitle'), icon: BriefcaseIcon },
        { name: t('menu2_1_link_5_title'), release: '(BETA)', href: '/our-packages', desc: t('menu2_1_link_5_subtitle'), icon: CubeIcon },
        { name: t('menu2_1_link_6_title'), release: '(BETA)', href: '/virtual-phone-number', desc: t('menu2_1_link_6_subtitle'), icon: ChatBubbleLeftRightIcon },
        { name: t('menu2_1_link_7_title'), href: '/dedicated-receptionist', desc: t('menu2_1_link_7_subtitle'), icon: PhoneIcon },
      ]
      const onetime = [
        { name: t('menu2_2_link_1_title'), href: '/foreign-qualification', desc: t('menu2_2_link_1_subtitle'), icon: RocketLaunchIcon },
        { name: t('menu2_2_link_2_title'), href: '/certificate-of-good-standing', desc: t('menu2_2_link_2_subtitle'), icon: BookmarkSquareIcon },
        { name: t('menu2_2_link_3_title'), release: '(BETA)', href: '/certified-copy-request', desc: t('menu2_2_link_3_subtitle'), icon: ClipboardDocumentListIcon },
        { name: t('menu2_2_link_4_title'), release: '(BETA)', href: '/ein', desc: t('menu2_2_link_4_subtitle'), icon: CalendarIcon },
        { name: t('menu2_2_link_5_title'), release: '(BETA)', href: '/entity-type-conversion', desc: t('menu2_2_link_5_subtitle'), icon: PresentationChartBarIcon },
        { name: t('menu2_2_link_6_title'), href: '/renewal-and-revival', desc: t('menu2_2_link_6_subtitle'), icon: ArrowPathIcon },
        { name: t('menu2_2_link_7_title'), desc: t('menu2_2_link_7_subtitle'), href: '/dissolution-and-cancellation', icon: ArchiveBoxIcon },
        { name: t('menu2_2_link_8_title'), desc: t('menu2_2_link_8_subtitle'), href: '/certificate-of-amendment', icon: DocumentTextIcon },
        { name: t('menu2_2_link_9_title'), desc: t('menu2_2_link_9_subtitle'), href: '/doing-business-as', icon: PencilSquareIcon },
      ]
      const ies = [
        { name: t('menu2_3_link_1_title'), href: '/apostille', desc: t('menu2_3_link_1_subtitle'), icon: DocumentDuplicateIcon },
        { name: t('menu2_3_link_2_title'), href: '/certified-copy-request', desc: t('menu2_3_link_2_subtitle'), icon: ClipboardDocumentListIcon },
        { name: t('menu2_3_link_3_title'), href: '/ein', desc: t('menu2_3_link_3_subtitle'), icon: CalendarIcon },
        { name: t('menu2_3_link_4_title'), href: '/us-bank-account-opening-support', desc: t('menu2_3_link_4_subtitle'), icon: BuildingLibraryIcon },
        { name: t('menu2_3_link_5_title'), href: '/post-incorp', desc: t('menu2_3_link_5_subtitle'), icon: RectangleStackIcon },
      ]
  return (
    <div className="relative mx-auto grid max-w-7xl grid-cols-1 py-24">
    <nav className="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-3 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
      <div>
        <h3 className="text-base font-medium text-gray-500">{t('menu2_1_title')}</h3>
        <ul role="list" className="mt-5 space-y-6">
          {recurring.map((item) => (
            <li key={item.name} className="flow-root">
              <a
                href={item.href}
                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                <item.icon className="h-6 w-6 flex-shrink-0 text-blue-600" aria-hidden="true" />
                <div className='flex flex-col'>
                  <div className='flex gap-1 items-center'>
                    <span className="ml-4">{item.name}</span>
                    {item.release && <span className='text-blue-600 text-xs'>{item.release}</span>}
                  </div>
                  <span className='ml-4 text-gray-400 text-xs'>{item.desc}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-base font-medium text-gray-500">{t('menu2_2_title')}</h3>
        <ul role="list" className="mt-5 space-y-6">
          {onetime.map((item) => (
            <li key={item.name} className="flow-root">
              <a
                href={item.href}
                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                <item.icon className="h-6 w-6 flex-shrink-0 text-blue-600" aria-hidden="true" />
                <div className='flex flex-col'>
                  <div className='flex gap-1 items-center'>
                    <span className="ml-4">{item.name}</span>
                    {item.release && <span className='text-blue-600 text-xs'>{item.release}</span>}
                  </div>
                  <span className='ml-4 text-gray-400 text-xs'>{item.desc}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-base font-medium text-gray-500">{t('menu2_3_title')}</h3>
        <ul role="list" className="mt-5 space-y-6">
          {ies.map((item) => (
            <li key={item.name} className="flow-root">
              <a
                href={item.href}
                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                <item.icon className="h-6 w-6 flex-shrink-0 text-blue-600" aria-hidden="true" />
                <div className='flex flex-col'>
                  <div className='flex gap-1 items-center'>
                    <span className="ml-4">{item.name}</span>
                    {item.release && <span className='text-blue-600 text-xs'>{item.release}</span>}
                  </div>
                  <span className='ml-4 text-gray-400 text-xs'>{item.desc}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </div>
  )
}
