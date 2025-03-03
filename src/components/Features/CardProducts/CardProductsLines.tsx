
import { useCart } from '../../../context/CartContext';
import { Tariff } from '../../../services/data/types';
import styles from '../../../styles/general.module.css';


export const CardProductsLines: React.FC<{litePlan: Tariff}> = ({litePlan}) => {
  const {addProduct, cart, removeProduct} = useCart();
  const { options: linesMobile } = litePlan.features.mobileLines;


  return (
    <ul className={styles.container__box}>
      {
        linesMobile.map((line) => {
          const quantity = cart.items.find((item) => item.id === line.id)?.quantity || 0;
          return (
            <li key={line.id}>
              <div className={styles.box}>
                <h3>{line.name}</h3>
                <p>{line.price}€</p>
                <div className={styles.container__counter}>
                  <button className={styles.btn__counter} onClick={() => removeProduct(line.id)} disabled={quantity === 0}>-</button>
                  <p>{quantity}</p>
                  <button className={styles.btn__counter} onClick={() => addProduct({ ...line, quantity: 1 })}>+</button>
                </div>
              </div>
            </li>);
        })}
    </ul>
  );
};