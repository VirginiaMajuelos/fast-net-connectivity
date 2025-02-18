import React from 'react';

import { WizardProvider } from '../../../context/WizardContext';
import { WizardButtonNext, WizardButtonPrev } from '../Wizzard/WizardButtons';
import { WizardPages } from '../Wizzard/WizardPages';
import styles from './Wizard.module.css';

interface WizardProps {
  children: React.ReactNode;
  steps: number;
}

const Wizard: React.FC<WizardProps> = ({ children, steps }) => {
  return (
    <WizardProvider steps={steps}>
      <div className={styles.wizard}>
        <WizardPages>{children}</WizardPages>
        <div className={styles.container__buttons}>
          <WizardButtonPrev />
          <WizardButtonNext />
        </div>
      </div>
    </WizardProvider>
  );
};

export default Wizard;
