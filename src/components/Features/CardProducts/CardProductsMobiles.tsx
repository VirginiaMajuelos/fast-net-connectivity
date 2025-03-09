

import { FaMobileAlt } from 'react-icons/fa';

import { useCart } from '../../../context/CartContext';
import { Tariff } from '../../../services/data/types';
import styles from '../../../styles/general.module.css';
import { CounterButtons } from '../../UI/CounterButtons/CounterButtons';
import { Price } from '../../UI/Price/Price';



export const CardProductsMobiles: React.FC<{litePlan: Tariff}> = ({litePlan}) => {
  const {addProduct, cart, removeProduct} = useCart();
  const mobileDevices  = litePlan.features.mobileDevices?.options || [] ;
  //console.log('Mobile Devices:', mobileDevices);


  return (
    <article>
      <div className={styles.container__title}>
        <FaMobileAlt size={32} />
        <h3>{litePlan.features.mobileDevices?.name}</h3>
        <p className={styles.description}>{litePlan.features.mobileDevices?.description}</p>
      </div>
      <ul className={styles.container__box}>
        {
          mobileDevices.map((product) => {
            const quantity = cart.items.find((item) => item.id === product.id)?.quantity || 0;
            return (
              <li key={product.id}>
                <div className={`${styles.box} ${quantity > 0 ? styles.box__isActive : ''}`}>
                  <img src={product.img} alt={product.name} className={styles.productImage} />
                  <h4>{product.name}</h4>
                  <Price>{product.price}</Price>
                  {/* <p>Marca: {product.brand}</p>
                <p>Modelo: {product.model}</p> */}
 
                  <CounterButtons quantity={quantity} onIncrease={() => addProduct({...product, quantity: 1})} onDecrease={() => removeProduct(product.id)} />

                </div>
              </li>);
          })}
      </ul>
    </article>
  );
};