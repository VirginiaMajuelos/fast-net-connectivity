import styles from '../Wizard.module.css';
import { WizardTypes } from '../WizardTypes.types';

const Step5: React.FC<WizardTypes> = () => {
  return (
    <div className={styles.step}>
      <h2>Paso 5</h2>
    </div>
  );
};

export default Step5;
