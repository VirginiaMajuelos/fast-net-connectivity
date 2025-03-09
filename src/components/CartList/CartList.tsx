import React from 'react';

import { useCart } from '../../context/CartContext';
import style from './CartList.module.css';

export const CartList: React.FC = () => {
  const { getSelectedProducts, getTotalPrice} = useCart();
  const selectedProducts = getSelectedProducts() || [];
  const total = getTotalPrice();


  return (
    <div className={style.container__cartList}>
      <div className={style.divisor}>
        <h2 >Resumen de la tarifa configurada</h2>
      </div>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product.id} className={style.divisor}>
            <div className={style.item__list}>
              <p>{product.quantity} {product.name}</p>
              <p>{product.price.toFixed(2)}€/mes</p>
            </div>
            {/* <button
                className=''
                onClick={() => removeProduct(product.id)}
              >
                Eliminar
              </button> */}
          </li>
        ))}
      </ul>
      <p className={style.price}>{total.toFixed(2)}€<small>/mes</small></p>
    </div>
  );
};

