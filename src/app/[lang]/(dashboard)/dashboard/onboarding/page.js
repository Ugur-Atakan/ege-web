'use client'

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { CompanyType, CompanyState, Formation, CompanyName, Review } from './components/steps/index.js';

const initialSteps  = [
    { id: '01', name: 'Company Type', status: 'current' },
    { id: '02', name: 'State', status: 'upcoming' },
    { id: '03', name: 'Formation', status: 'upcoming' },
    { id: '04', name: 'Company Name', status: 'upcoming' },
    { id: '05', name: 'Review', status: 'upcoming' }
];

const Page = ({ params: { lang } }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState(initialSteps);

  const handleNextButtonClick = () => {
    if (currentStep < steps.length - 1) {
      const updatedSteps = initialSteps.map((step, index) => ({
        ...step,
        status: index < currentStep - 1 ? 'complete' : index === currentStep - 1 ? 'current' : 'upcoming'
      }));

      setSteps(updatedSteps);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBackButtonClick = () => {
    if (currentStep > 0) {
      const updatedSteps = initialSteps.map((step, index) => ({
        ...step,
        status: index < currentStep ? 'complete' : index === currentStep ? 'current' : 'upcoming'
      }));

      setSteps(updatedSteps);
      setCurrentStep(currentStep - 1);
    }
  };
  
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <CompanyType lang={lang} />;
      case 1:
        return <CompanyState  />;
      case 2:
        return <Formation  />;
      case 3:
        return <CompanyName  />;
      case 4:
        return <Review  />;
      default:
        return null;
    }
  };

  return(
    <React.Fragment>
        <Navbar steps={steps} />
        {renderCurrentStep()}
        
        <button 
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={handleNextButtonClick}
        >
            Next
        </button>
        <button 
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={handleBackButtonClick}
        >
            Back
        </button>
    </React.Fragment>
  )
}

export default Page