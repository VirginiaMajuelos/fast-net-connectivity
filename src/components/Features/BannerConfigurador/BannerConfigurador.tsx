import { VscSettings } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

import { Button } from '../../UI/Button/Button';
import styles from './BannerConfigurador.module.css';

export const BannerConfigurador: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <VscSettings size={48}/>
        <div className={styles.bannerContent__text}>
          <h2 className={styles.bannerTitle}>
          ¡Configura tu tarifa a medida!
          </h2>
          <p className={styles.bannerDescription}>
          Elige la mejor combinación para tu empresa:
          </p>
        </div>
      </div>
      <div className={styles.bannerBtn}>
        <Button as={Link} to='/configura-tarifa'>Configura ahora</Button>

      </div>
    </div>
  );
};

