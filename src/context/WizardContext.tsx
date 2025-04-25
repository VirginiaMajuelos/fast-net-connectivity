import React, { createContext, useContext, useState } from 'react';

import { WizardTypes } from '../components/Features/Wizzard/WizardTypes.types';

export const WizardContext = createContext<WizardTypes | undefined>(undefined);

export const useWizard = () => {
  const context = useContext(WizardContext);
  if(!context) {
    throw new Error('useWizard debe usarse dentro de un wizardProvider');
  }
  return context;
};

export const WizardProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [currentStep, setcurrentStep] = useState(0);

  const goNextPage = () => setcurrentStep((prev) => Math.min(prev + 1, 5));
  const goPrevPage = () => setcurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <WizardContext.Provider value={{ currentStep, goNextPage, goPrevPage}}>
      {children}
    </WizardContext.Provider>
  );
};