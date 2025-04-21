import React from 'react';
import { FaChartLine, FaHeadphones, FaMobile, FaMobileAlt, FaPhone, FaWifi } from 'react-icons/fa';

import { useCart } from '../../../context/CartContext';
import style from './CartList.module.css';


export const CartList: React.FC = () => {
  const { getGroupedProducts, getTotalPrice } = useCart();
  const groupedProducts = getGroupedProducts();
  const total = getTotalPrice();


  const iconMap: Record<string, JSX.Element> = {
    'Líneas Móviles:': <FaMobile />,
    'Dispositivos:': <FaMobileAlt />,
    'Soluciones:': <FaChartLine />,
  };
  

  return (
    <div className={style.container__cartList}>
      <h2>Resumen de la tarifa configurada</h2>
      <ul>
        <li>
          <div className={` ${style.divisor} ${style.container__name}`}>
            <FaWifi />
            <p className={style.item__nameList} ><strong>Fibra Óptica</strong></p>
          </div>
          <div  className={style.item__list}>
            <p>1 Fibra Velocidad 600Mbps con WiFi 6</p>
            <p>(Incluída en el pack)</p>
          </div>
        </li>
        <li>
          <div className={` ${style.divisor} ${style.container__name}`}>
            <FaPhone />
            <p className={style.item__nameList}><strong>Línea Fija</strong></p>
          </div>
          <div  className={style.item__list}>
            <p>1 Línea fija con llamadas ilimitadas</p>
            <p>(Incluída en el pack)</p>
          </div>
        </li>
        <li>
          <div className={` ${style.divisor} ${style.container__name}`}>
            <FaHeadphones />
            <p className={style.item__nameList}><strong>Centralita</strong></p>
          </div>
          <div  className={style.item__list}>
            <p>1 Centralita Avanzada</p>
            <p>(Incluída en el pack)</p>
          </div>
        </li>
      </ul>

      <ul>
        {groupedProducts.map(({ category, items }) => (
          <li key={category}>
            <div className={` ${style.divisor} ${style.container__name}`}>
              {iconMap[category]} 
              <p className={style.item__nameList}>
                <strong>{category}</strong>
              </p>
            </div>

            {items.map((product) => (
              <div key={product.id} className={style.item__list}>
                <p>{product.quantity} {product.name}</p>
                <p>{product.price.toFixed(2)}€/mes</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
      <p className={style.price}>{total.toFixed(2)}€<small>/mes</small></p>
    </div>
  );
};
