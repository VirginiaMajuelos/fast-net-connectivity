import { FaHeadphones } from 'react-icons/fa';
import { PiCheckLight } from 'react-icons/pi';

import { Tariff } from '../../../services/data/types';

export const CardCentralita: React.FC<{ litePlan: Tariff}> = ({ litePlan }) => {
  const { centralita } = litePlan.features;

  return (
    <article>
      <div className='container__title'>
        <FaHeadphones size={32}/>
        <h3>{centralita.name}</h3>
        <p className='description'>{litePlan.features.centralita.description}</p>

      </div>
      <div className='box__fibra'>        
        <ul>
          {centralita.features.map((item) => (
            <li key={item.id} className='container__list'>
              <PiCheckLight />
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>

      </div>
    </article>
  );
};
