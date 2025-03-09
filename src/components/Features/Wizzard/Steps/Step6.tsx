import { CartList } from '../../../CartList/CartList';
import styles from '../Wizard.module.css';
import { WizardTypes } from '../WizardTypes.types';

const Step6: React.FC<WizardTypes> = () => {
  return (
    <div className={styles.step}>
      <CartList />

    </div>
  );
};

export default Step6;
