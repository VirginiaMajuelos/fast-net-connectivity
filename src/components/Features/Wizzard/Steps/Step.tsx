import React from 'react';

import styles from '../Wizard.module.css';

interface StepProps {
  Component: React.ElementType; 
  componentProps?: object;
}

export const Step = ({ Component, componentProps = {} }: StepProps) => {
  return (
    <div className={styles.step}>
      <Component {...componentProps} />
    </div>
  );
};
