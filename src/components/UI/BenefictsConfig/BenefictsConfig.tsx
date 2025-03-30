import { FaClock, FaCogs, FaExchangeAlt, FaGlobe, FaLock, FaMobileAlt, FaNetworkWired, FaProjectDiagram, FaShieldAlt, FaTv, FaUserTie, FaWifi } from 'react-icons/fa';

import BenefictsData from '../../../services/data/benefitsData.json';
import styles from './BenefictsConfig.module.css'; // Importamos los estilos CSS Modules

const iconMap: Record<string, JSX.Element> = {
  FaWifi: <FaWifi className={styles.icon} />,
  FaClock: <FaClock className={styles.icon} />,
  FaMobileAlt: <FaMobileAlt className={styles.icon} />,
  FaGlobe: <FaGlobe className={styles.icon} />,
  FaShieldAlt: <FaShieldAlt className={styles.icon} />,
  FaTv: <FaTv className={styles.icon} />,
  FaCogs: <FaCogs className={styles.icon} />,
  FaUserTie: <FaUserTie className={styles.icon} />,
  FaNetworkWired: <FaNetworkWired className={styles.icon} />,
  FaProjectDiagram: <FaProjectDiagram className={styles.icon} />,
  FaLock: <FaLock className={styles.icon} />,
  FaExchangeAlt: <FaExchangeAlt className={styles.icon} />
};

export const BenefictsConfig: React.FC = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{BenefictsData.benefits.title}</h3>
      <div className={styles.grid}>
        {BenefictsData.benefits.list.map((benefit, index) => (
          <div key={index} className={styles.benefitCard}>
            <div>{iconMap[benefit.icon]}</div>
            <div>
              <h4 className={styles.benefitTitle}>{benefit.title}</h4>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
