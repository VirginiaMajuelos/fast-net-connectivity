
import litePlan from '../../../services/data/estandar.json';
import proPlan from '../../../services/data/premium.json';
import { BannerConfigurador } from '../../Features/BannerConfigurador/BannerConfigurador';
import { CardItem } from '../CardItem';
import styles from './ProductsCard.module.css';


export const ProductsCard: React.FC = () => {
  return (
    <div className={styles.container__section}>
      <h2>Elige uno de nuestros Packs o Configura tu tarifa: </h2>
      <div className={styles.container__plans}>
        <CardItem plan={litePlan} />
        <CardItem plan={proPlan} />
      </div>
      <div className={styles.container__plans}>
        <BannerConfigurador />
      </div>
    </div>
  );
};
