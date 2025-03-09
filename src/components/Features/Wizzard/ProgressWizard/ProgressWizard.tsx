import React from 'react';

import { ProgressWizardProps } from '../../../../services/data/types';
import styles from './ProgressWizard.module.css';

export const ProgressWizard: React.FC<ProgressWizardProps> = ({ currentStep, totalSteps }) => {


  return (
    <div className={styles.container__progress}>
      <div className={styles.progressTrack}>

        <div
          className={styles.progressFill}
          style={{ width: `${((currentStep) / (totalSteps - 1)) * 100}%` }}
        ></div>

        <div className={styles.progressSteps}>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className={`${styles.step} ${index <= currentStep ? styles.active : ''}`}>
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
