import { useState } from 'react';
import { FaWifi } from 'react-icons/fa';
import { PiCheckLight } from 'react-icons/pi';

import { Tariff } from '../../../services/data/types';
import { Button } from '../../UI/Button/Button';

export const Fiber: React.FC<{ litePlan: Tariff; onFiberSelect: (price: number) => void }> = ({ litePlan, onFiberSelect }) => {
  const { fiber } = litePlan.features;
  const [fiberSelect, setFiberSelect] = useState<string | null>(fiber.options[0]?.id || null);

  const handleFiber = (id: string, price: number) => {
    setFiberSelect(id);
    onFiberSelect(price);
  };

  return (
    <article>
      <div className='container__title'>
        <FaWifi size={32} />
        <h3>{fiber.name}</h3>
        <p className='description'>{fiber.description}</p>
      </div>
      <div className='box__fibra'>
        <p className='description'>Velocidad a elegir entre 600 Mbps o 1Gbps. Router WiFi 6.</p>
        <ul className='container__picker'>
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
          {fiber.features.map((item) => (
            <li className='container__list' key={item.id}>
              <PiCheckLight />
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
