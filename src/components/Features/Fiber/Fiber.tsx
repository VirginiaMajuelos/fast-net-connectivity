import { useState } from 'react';
import { FaWifi } from 'react-icons/fa';
import { PiCheckLight } from 'react-icons/pi';

import { Tariff } from '../../../services/data/types';
import styles from '../../../styles/general.module.css';
import { Button } from '../../UI/Button/Button';
import stylesFiber from './Fiber.module.css';

export const Fiber: React.FC<{ litePlan: Tariff; onFiberSelect: (price: number) => void }> = ({ litePlan, onFiberSelect }) => {
  const { fiber } = litePlan.features;
  const [fiberSelect, setFiberSelect] = useState<string | null>(fiber.options[0]?.id || null);

  const handleFiber = (id: string, price: number) => {
    setFiberSelect(id);
    onFiberSelect(price);  // Esto debe modificar el precio en el contexto
  };


  return (
    <article>
      <div className={styles.container__title}>
        <FaWifi size={32}/>
        <h3>{fiber.name}</h3>
        <p className={styles.description}>{fiber.description}</p>
      </div>
      <div className={styles.box__fibra}>
        <p className={stylesFiber.description}>Velocidad a elegir entre 600 Mbps o 1Gbps. Router WiFi 6.</p>
        <ul className={stylesFiber.container__picker}>
          {fiber.options.map((item) => (
            <li key={item.id}>
              <Button
                variant='picker'
                isSelected={fiberSelect === item.id}  
                onClick={() => handleFiber(item.id, item.price)}
              >
                {item.name}
              </Button>
            </li>
          ))}
        </ul>
        <ul>
          {fiber.features.map((item) => <li className={styles.container__list} key={item.id}>
            <PiCheckLight />
            <p>{item.detail}</p></li>)}
        </ul>

      </div>
    </article>
  );
};
