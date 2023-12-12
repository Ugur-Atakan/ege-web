import React from 'react'
import { useTranslation } from '@/i18n/client'
import Cards from './Cards/Cards'

const CompanyType = ({ lang }) => {
  const { t } = useTranslation(lang);
  const handleSelectLlc = () => {}
  const handleSelectCcorp = () => {}
    
  return (
    <div className='flex flex-col my-10'>
      <Cards t={t} lang={lang} handleSelectLlc={handleSelectLlc} handleSelectCcorp={handleSelectCcorp} />
    </div>
  );
};

export default CompanyType