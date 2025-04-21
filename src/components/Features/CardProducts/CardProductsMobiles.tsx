

import { FaMobileAlt } from 'react-icons/fa';

import { useCart } from '../../../context/CartContext';
import { Tariff } from '../../../services/data/types';
import { CounterButtons } from '../../UI/CounterButtons/CounterButtons';
import { Price } from '../../UI/Price/Price';



export const CardProductsMobiles: React.FC<{litePlan: Tariff}> = ({litePlan}) => {
  const {addProduct, cart, removeProduct} = useCart();
  const mobileDevices  = litePlan.features.mobileDevices?.options || [] ;


  return (
    <article>
      <div className='container__title'>
        <FaMobileAlt size={32} />
        <h3>{litePlan.features.mobileDevices?.name}</h3>
        <p className='description'>{litePlan.features.mobileDevices?.description}</p>
      </div>
      <ul className='container__box'>
        {
          mobileDevices.map((product) => {
            const quantity = cart.items.find((item) => item.id === product.id)?.quantity || 0;
            return (
              <li key={product.id}>
                <div className={`box ${quantity > 0 ? 'box__isActive' : ''}`}>
                  <img src={product.img} alt={product.name} className='productImage' />
                  <h4>{product.name}</h4>
                  <Price>{product.price}</Price>
                  <CounterButtons quantity={quantity} onIncrease={() => addProduct({...product, quantity: 1})} onDecrease={() => removeProduct(product.id)} />

                </div>
              </li>);
          })}
      </ul>
    </article>
  );
};