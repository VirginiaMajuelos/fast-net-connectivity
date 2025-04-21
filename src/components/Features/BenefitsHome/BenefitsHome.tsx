import { FaCogs, FaShieldAlt, FaUserTie, FaWifi } from 'react-icons/fa';
import { PiCheckLight } from 'react-icons/pi';


import benefits from '../../../services/data/benefitsData.json';
import styles from './BenefitsHome.module.css';

type IconNames = 'FaCogs' | 'FaShieldAlt' | 'FaWifi' | 'FaUserTie';

const icons: Record<IconNames, JSX.Element> = {
  FaCogs: <FaCogs className={styles.icon} />, 
  FaShieldAlt: <FaShieldAlt className={styles.icon} />, 
  FaWifi: <FaWifi className={styles.icon} />, 
  FaUserTie: <FaUserTie className={styles.icon} />
};

export const BenefitsHome: React.FC = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{benefits.title}</h3>
      <div className={styles.features}>
        {benefits.features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            {icons[feature.icon as IconNames]}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.description}>
        <h3>{benefits.description.title}</h3>
        <p>{benefits.description.text1}</p>
        <p>{benefits.description.text2}</p>
        <h3>{benefits.benefits.title}</h3>
        <ul className={styles.list__bullets}>
          {benefits.benefits.list.map((benefit, index) => (
            <li key={index}>  <PiCheckLight /><strong>{benefit.title}:</strong> {benefit.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
