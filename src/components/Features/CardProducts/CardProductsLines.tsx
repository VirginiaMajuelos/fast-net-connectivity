import { FaPhone } from 'react-icons/fa';
import { PiCheckLight } from 'react-icons/pi';

import { useCart } from '../../../context/CartContext';
import { Tariff } from '../../../services/data/types';
import styles from '../../../styles/general.module.css';
import { CounterButtons } from '../../UI/CounterButtons/CounterButtons';
import { Price } from '../../UI/Price/Price';

export const CardProductsLines: React.FC<{ litePlan: Tariff }> = ({ litePlan }) => {
  const { addProduct, cart, removeProduct } = useCart();
  const { options: mobileLines } = litePlan.features.mobileLines;

  return (
    <article>
      <div className={styles.container__title}>
        <FaPhone size={32} />
        <h3>{litePlan.features.mobileLines.name}</h3>
        <p className={styles.description}>{litePlan.features.mobileLines.description}</p>
      </div>
      <ul className={`${styles.container__box} ${styles['container__box--2column']}`}>
        {mobileLines.map((product) => {
          const quantity = cart.items.find((item) => item.id === product.id)?.quantity || 0;
          return (
            <li key={product.id}>
              <div className={`${styles.box} ${quantity > 0 ? styles.box__isActive : ''}`}>
                <div className={styles.container__name}>
                  <FaPhone />
                  <p>{product.name}</p>
                </div>
                <div>
                  {/* Mapeamos los detalles de las características de cada línea móvil */}
                  <ul>
                    {product.features?.map((feature) => (
                      <li key={feature.id} className={styles.container__list}>
                        <PiCheckLight />
                        <p>{feature.detail}</p></li>
                    ))}
                  </ul>
                  {/* <p>{product.price}€</p> */}
                  <Price>{product.price}</Price>
                </div>
                <CounterButtons quantity={quantity} onIncrease={() => addProduct({...product, quantity: 1})} onDecrease={() => removeProduct(product.id)} />
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
};
