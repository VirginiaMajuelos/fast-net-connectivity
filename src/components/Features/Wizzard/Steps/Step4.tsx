import litePlan from '../../../../services/data/estandar.json';
import { CardProductsMobiles } from '../../CardProducts/CardProductsMobiles';
import styles from '../Wizard.module.css';
import { WizardTypes } from '../WizardTypes.types';

const Step4: React.FC<WizardTypes> = () => {
  return (
    <div className={styles.step}>
      <CardProductsMobiles litePlan={litePlan} />
    </div>
  );
};

export default Step4;
