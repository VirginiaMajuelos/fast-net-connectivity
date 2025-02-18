
import litePlan from '../../../services/data/estandar.json';
import proPlan from '../../../services/data/premium.json';
import { CardItem } from '../CardItem';
import styles from './Products.module.css';


export const ProductsCard: React.FC = () => {
  return (
    <div className={styles.container__plans}>
      <CardItem plan={litePlan} />
      <CardItem plan={proPlan} />
    </div>
  );
};

