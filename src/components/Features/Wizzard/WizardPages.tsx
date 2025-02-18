import React from 'react';

import { useWizard } from '../../../context/WizardContext';


export const WizardPages: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {activePageIndex} = useWizard();

  const pages = React.Children.toArray(children);
  const currentPage = pages[activePageIndex];

  return <div className='wizard__content'>{currentPage}</div>;
};
