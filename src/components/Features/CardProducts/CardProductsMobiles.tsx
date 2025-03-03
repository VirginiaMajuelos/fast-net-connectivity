
import { useCart } from '../../../context/CartContext';
import { Tariff } from '../../../services/data/types';
import styles from '../../../styles/general.module.css';
//import litePlan from '../../../services/data/estandar.json';



export const CardProductsMobiles: React.FC<{litePlan: Tariff}> = ({litePlan}) => {
  const {addProduct, cart, removeProduct} = useCart();
  const mobileDevices  = litePlan.features.mobileDevices?.options || [] ;



  return (
    <ul className={styles.container__box}>
      {
        mobileDevices.map((product) => {
          const quantity = cart.items.find((item) => item.id === product.id)?.quantity || 0;
          return (
            <li key={product.id}>
              <div className={styles.box}>
                <img src={product.img} alt={product.name} className={styles.productImage} />
                <h4>{product.name}</h4>
                <p>{product.price}€</p>
                {/* <p>Marca: {product.brand}</p>
                <p>Modelo: {product.model}</p> */}
                <div className={styles.container__counter}>
                  <button className={styles.btn__counter} onClick={() => removeProduct(product.id)} disabled={quantity === 0}>-</button>
                  <p>{quantity}</p>
                  <button className={styles.btn__counter} onClick={() => addProduct({ ...product, quantity: 1 })}>+</button>
                </div>
              </div>
            </li>);
        })}
    </ul>
  );
};