import litePlan from '../../../../services/data/estandar.json';
import { CardProductsSolutions } from '../../CardProducts/CardProductSolutions';
import styles from '../Wizard.module.css';
import { WizardTypes } from '../WizardTypes.types';

const Step5: React.FC<WizardTypes> = () => {
  return (
    <div className={styles.step}>
      <CardProductsSolutions litePlan={litePlan} />
    </div>
  );
};

export default Step5;
