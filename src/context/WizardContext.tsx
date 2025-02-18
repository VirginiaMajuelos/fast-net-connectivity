import React, { createContext, useContext, useState } from 'react';

interface WizardContextType {
  activePageIndex: number;
  goNextPage: () => void;
  goPrevPage: () => void;
  steps: number;
}

const WizardContext = createContext<WizardContextType | undefined>(undefined);

export const useWizard = () => {
  const context = useContext(WizardContext);
  if(!context) {
    throw new Error('useWizard debe usarse dentro de un wizardProvider');
  }
  return context;
};

export const WizardProvider: React.FC<{children: React.ReactNode; steps: number}> = ({children, steps}) => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const goNextPage = () => setActivePageIndex((index) => Math.min(index + 1, steps - 1));
  const goPrevPage = () => setActivePageIndex((index) => Math.max(index - 1, 0));

  return (
    <WizardContext.Provider value={{ activePageIndex, goNextPage, goPrevPage, steps }}>
      {children}
    </WizardContext.Provider>
  );
};