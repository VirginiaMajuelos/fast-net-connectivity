import React, { useEffect } from 'react';

import { useWizard } from '../../../context/WizardContext';
import { Button } from '../../UI/Button/Button';
import { ProgressWizard } from './ProgressWizard/ProgressWizard';
import { stepsConfig } from './Steps/FiberStep';
import { Step } from './Steps/Step';
import styles from './Wizard.module.css';


const Wizard: React.FC = () => {
  const { currentStep, goNextPage, goPrevPage } = useWizard();
  const { component: StepComponent, props = {} } = stepsConfig[currentStep];


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]); 

  return (
    <div className={styles.container__wizard}>
      <ProgressWizard currentStep={currentStep} totalSteps={stepsConfig.length} />
      <Step Component={StepComponent} componentProps={props} />
      <div className={styles.container__btn}>
        {currentStep > 0 && (
          <Button variant='picker' onClick={goPrevPage}>Atrás</Button>
        )}
        {currentStep < stepsConfig.length - 1 && (
          <Button variant='picker' onClick={goNextPage}>Siguiente</Button>

        )}
      </div>
    </div>
  );
};

export default Wizard;
