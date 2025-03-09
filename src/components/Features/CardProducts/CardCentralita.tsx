import { FaHeadphones } from 'react-icons/fa';
import { PiCheckLight } from 'react-icons/pi';

import { Tariff } from '../../../services/data/types';
import styles from '../../../styles/general.module.css';

export const CardCentralita: React.FC<{ litePlan: Tariff}> = ({ litePlan }) => {
  const { centralita } = litePlan.features;

  return (
    <article>
      <div className={styles.container__title}>
        <FaHeadphones size={32}/>
        <h3>{centralita.name}</h3>
      </div>
      <div className={styles.box__fibra}>        
        <ul>
          {centralita.features.map((item) => (
            <li key={item.id} className={styles.container__list}>
              <PiCheckLight />
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>

      </div>
    </article>
  );
};
