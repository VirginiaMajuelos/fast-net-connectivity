import React from 'react';

import { useWizard } from '../../../context/WizardContext';
import { Button } from '../../UI/Button/Button';
import { ProgressWizard } from './ProgressWizard/ProgressWizard';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';
import Step6 from './Steps/Step6';
import styles from './Wizard.module.css';

const steps = [Step1, Step2, Step3, Step4, Step5, Step6];

const Wizard: React.FC = () => {
  const { currentStep, goNextPage, goPrevPage } = useWizard();
  const StepComponent = steps[currentStep];

  return (
    <div className={styles.container__wizard}>
      {/* Progress Bar */}
      <ProgressWizard currentStep={currentStep} totalSteps={steps.length} />

      <StepComponent currentStep={currentStep} goNextPage={goNextPage} goPrevPage={goPrevPage} />

      <div className={styles.container__btn}>
        {currentStep > 0 && (
          <Button variant='picker' onClick={goPrevPage}>Atrás</Button>
        )}
        {currentStep < steps.length - 1 && (
          <Button variant='picker' onClick={goNextPage}>Siguiente</Button>

        )}
      </div>
    </div>
  );
};

export default Wizard;
