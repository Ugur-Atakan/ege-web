'use client'

import React from 'react'
import Stats from './Stats'
import OpenCompany from './OpenCompany'
import { useTranslation } from '@/i18n/client'

const Home = ({ lang }) => {
  const { t } = useTranslation(lang);

  return (
    <React.Fragment>
      <Stats />
      <OpenCompany lang={lang} />
    </React.Fragment>
  )
}

export default Home
