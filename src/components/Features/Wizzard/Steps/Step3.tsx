import litePlan from '../../../../services/data/estandar.json';
import { CardCentralita } from '../../CardProducts/CardCentralita';
import styles from '../Wizard.module.css';
import { WizardTypes } from '../WizardTypes.types';

const Step3: React.FC<WizardTypes> = () => {
  return (
    <div className={styles.step}>
      <CardCentralita litePlan={litePlan}/>
    </div>
  );
};

export default Step3;
