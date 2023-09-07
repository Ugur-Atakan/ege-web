import { useId } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '../components/Container'
import screenshotContacts from '../images/screenshots/contacts.png'
import screenshotInventory from '../images/screenshots/inventory.png'
import screenshotProfitLoss from '../images/screenshots/profit-loss.png'
import { useTranslation } from 'react-i18next'


function Feature({ feature, isActive, className, ...props }) {
  return (
    <a href={feature.href} className="group">
    <div
      className={clsx(className, { 'opacity-85 hover:opacity-100': !isActive })}
      {...props}
    >
      <div
        className={clsx('w-9 rounded-lg', {
          'bg-blue-600': isActive,
          'bg-slate-600': !isActive,
        })}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx('mt-6 text-sm font-medium text-slate-600')}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
    </a>
  )
}

function FeaturesMobile() {
  const { t,i18n } = useTranslation();
  const features = [
    {
      name: t('section5_icon1_heading'),
      href:`/${i18n.language}/foreign-qualification`,
      summary: t('section5_icon1_title'),
      description:
      t('section5_icon1_desc'),
      image: screenshotProfitLoss,
      icon: function ReportingIcon() {
        let id = useId()
        return (
          <>
            <defs>
              <linearGradient
                id={id}
                x1="11.5"
                y1={18}
                x2={36}
                y2="15.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".194" stopColor="#fff" />
                <stop offset={1} stopColor="#6692F1" />
              </linearGradient>
            </defs>
            <path
              d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
              stroke={`url(#${id})`}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )
      },
    },
    {
      name: t('section5_icon2_heading'),
      href: `/${i18n.language}/renewal-and-revival`,
      summary:
      t('section5_icon2_title'),
      description:
      t('section5_icon2_desc'),
      image: screenshotInventory,
      icon: function InventoryIcon() {
        return (
          <>
            <path
              opacity=".5"
              d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
              fill="#fff"
            />
            <path
              opacity=".3"
              d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
              fill="#fff"
            />
            <path
              d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
              fill="#fff"
            />
          </>
        )
      },
    },
    {
      name: t('section5_icon3_heading'),
      href: `/${i18n.language}/compliance-reminder`,
      summary:
      t('section5_icon3_title'),
      description:
      t('section5_icon3_desc'),
      image: screenshotContacts,
      icon: function ContactsIcon() {
        return (
          <>
            <path
              opacity=".5"
              d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
              fill="#fff"
            />
            <path
              d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
              fill="#fff"
            />
          </>
        )
      },
    },
  ]
  
  return (
    <div className="-mx-4 mt-20 space-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  const { t, i18n } = useTranslation();
  const features = [
    {
      name: t('section5_icon1_heading'),
      href: `/${i18n.language}/foreign-qualification`,
      summary: t('section5_icon1_title'),
      description:
      t('section5_icon1_desc'),
      image: screenshotProfitLoss,
      icon: function ReportingIcon() {
        let id = useId()
        return (
          <>
            <defs>
              <linearGradient
                id={id}
                x1="11.5"
                y1={18}
                x2={36}
                y2="15.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".194" stopColor="#fff" />
                <stop offset={1} stopColor="#6692F1" />
              </linearGradient>
            </defs>
            <path
              d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
              stroke={`url(#${id})`}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )
      },
    },
    {
      name: t('section5_icon2_heading'),
      href: `/${i18n.language}/renewal-and-revival`,
      summary:
      t('section5_icon2_title'),
      description:
      t('section5_icon2_desc'),
      image: screenshotInventory,
      icon: function InventoryIcon() {
        return (
          <>
            <path
              opacity=".5"
              d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
              fill="#fff"
            />
            <path
              opacity=".3"
              d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
              fill="#fff"
            />
            <path
              d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
              fill="#fff"
            />
          </>
        )
      },
    },
    {
      name: t('section5_icon3_heading'),
      href: `/${i18n.language}/compliance-reminder`,
      summary:
      t('section5_icon3_title'),
      description:
      t('section5_icon3_desc'),
      image: screenshotContacts,
      icon: function ContactsIcon() {
        return (
          <>
            <path
              opacity=".5"
              d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
              fill="#fff"
            />
            <path
              d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
              fill="#fff"
            />
          </>
        )
      },
    },
  ]
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive
                className="relative"
              />
            ))}
          </Tab.List>

        </>
      )}
    </Tab.Group>
  )
}

export function SecondaryFeatures() {
  const { t } = useTranslation();
  return (
    <section
      id="secondary-features"
      aria-labelledby="secondary-features-title"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="secondary-features-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
          {t('section5_title')}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          {t('section5_desc')}
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}

export default SecondaryFeatures