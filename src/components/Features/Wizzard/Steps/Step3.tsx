import litePlan from '../../../../services/data/estandar.json';
import { CardProductsMobiles } from '../../CardProducts/CardProductsMobiles';
import styles from '../Wizard.module.css';
import { WizardTypes } from '../WizardTypes.types';

const Step3: React.FC<WizardTypes> = () => {
  return (
    <div className={styles.step}>
      <h2>Paso 3</h2>
      <CardProductsMobiles litePlan={litePlan} />
    </div>
  );
};

export default Step3;
