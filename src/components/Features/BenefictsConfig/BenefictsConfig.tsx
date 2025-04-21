import { FaClock, FaCogs, FaExchangeAlt, FaGlobe, FaLock, FaMobileAlt, FaNetworkWired, FaProjectDiagram, FaShieldAlt, FaTv, FaUserTie, FaWifi } from 'react-icons/fa';

import BenefictsData from '../../../services/data/benefitsData.json';
import styles from './BenefictsConfig.module.css';

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
      <h3>{BenefictsData.benefits.title}</h3>
      <div className={styles.container__cards}>
        {BenefictsData.benefits.list.map((benefit, index) => (
          <div key={index} className={styles.benefitCard}>
            <div>{iconMap[benefit.icon]}</div>
            <div>
              <h4 className={styles.benefitTitle}>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
