'use client'

import React from 'react'
import { useTranslation } from '@/i18n/client'

const Home = ({ lang }) => {
  const { t } = useTranslation(lang);

  return (
    <React.Fragment>
      <h1>Home Page</h1>
    </React.Fragment>
  )
}

export default Home
