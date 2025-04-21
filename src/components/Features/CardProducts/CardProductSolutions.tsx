import { FaBullhorn, FaCloud, FaServer, FaShieldAlt } from 'react-icons/fa';
import { PiFadersFill } from 'react-icons/pi';

import { useCart } from '../../../context/CartContext';
import { Tariff } from '../../../services/data/types';
import '../../../styles/general.css';
import { CounterButtons } from '../../UI/CounterButtons/CounterButtons';
import { Price } from '../../UI/Price/Price';

const iconMap: Record<string, React.ElementType> = {
  FaCloud: FaCloud,
  FaBullhorn: FaBullhorn,
  FaShieldAlt: FaShieldAlt,
  FaServer: FaServer
};

export const CardProductsSolutions: React.FC<{ litePlan: Tariff }> = ({ litePlan }) => {
  const { addProduct, cart, removeProduct } = useCart();
  const solutions = litePlan.features.solutions?.options || [];

  return (
    <article>
      <div className='container__title'>
        <PiFadersFill size={32} />
        <h3>{litePlan.features.solutions?.name}</h3>
        <p className='description'>{litePlan.features.solutions?.description}</p>
      </div>
      <ul className='container__box container__box--2column'>
        {solutions.map((product) => {
          const quantity = cart.items.find((item) => item.id === product.id)?.quantity || 0;
          const IconComponent = iconMap[product.icon];

          return (
            <li key={product.id}>
              <div className={`box ${quantity > 0 ? 'box__isActive' : ''}`}>
                <p className='title__card'>
                  {IconComponent && <IconComponent className='icon' />} 
                  {product.name}
                </p>
                <p>{product.description}</p>
                <Price>{product.price}</Price>
              
                <CounterButtons 
                  quantity={quantity} 
                  onIncrease={() => addProduct({...product, quantity: 1})} 
                  onDecrease={() => removeProduct(product.id)} 
                />
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
};
