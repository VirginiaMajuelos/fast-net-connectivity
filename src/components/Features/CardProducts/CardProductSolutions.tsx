import { FaBullhorn, FaCloud, FaServer, FaShieldAlt } from 'react-icons/fa';
import { PiFadersFill } from 'react-icons/pi';

import { useCart } from '../../../context/CartContext';
import { Tariff } from '../../../services/data/types';
import styles from '../../../styles/general.module.css';
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
      <div className={styles.container__title}>
        <PiFadersFill size={32} />
        <h3>{litePlan.features.solutions?.name}</h3>
        <p className={styles.description}>{litePlan.features.solutions?.description}</p>
      </div>
      <ul className={`${styles.container__box} ${styles['container__box--2column']}`}>
        {solutions.map((product) => {
          const quantity = cart.items.find((item) => item.id === product.id)?.quantity || 0;
          const IconComponent = iconMap[product.icon]; // Obtener el icono correspondiente

          return (
            <li key={product.id}>
              <div className={`${styles.box} ${quantity > 0 ? styles.box__isActive : ''}`}>
                <h4>
                  {IconComponent && <IconComponent className={styles.icon} />} {/* Renderiza el icono si existe */}
                  {product.name}
                </h4>
                <p>{product.description}</p>
                <Price>{product.price}</Price>
              
                <CounterButtons quantity={quantity} onIncrease={() => addProduct({...product, quantity: 1})} onDecrease={() => removeProduct(product.id)} />

              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
};
