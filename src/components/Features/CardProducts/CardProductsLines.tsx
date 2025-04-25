import { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import { PiCheckLight } from 'react-icons/pi';

import { useCart } from '../../../context/CartContext';
import { Tariff } from '../../../services/data/types';
import '../../../styles/general.css';
import { Button } from '../../UI/Button/Button';
import { CounterButtons } from '../../UI/CounterButtons/CounterButtons';
import { Price } from '../../UI/Price/Price';

export const CardProductsLines: React.FC<{ litePlan: Tariff }> = ({ litePlan }) => {
  const [showLines, setShowLines] = useState<null | 'lessThan20' | 'moreThan20'>(null);
  const { addProduct, cart, removeProduct } = useCart();
  const { options: mobileLines } = litePlan.features.mobileLines;

  const productsWithQuantity = (showLines ? mobileLines[showLines] : []).map((product) => ({
    ...product,
    quantity: cart.items.find((item) => item.id === product.id)?.quantity || 0,
  }));
  
  const handleShowLines = (type: 'lessThan20' | 'moreThan20') => {
    setShowLines(prevState => prevState === type ? null : type);
  };

  return (
    <article>
      <FaPhone size={32} />
      <h3>{litePlan.features.mobileLines.name}</h3>
      {showLines && <p className='description'>{litePlan.features.mobileLines.description}</p> }
            
      {!showLines && (
        <div className='box'>  
          <p className='description'>¿Cuántas líneas necesitas?</p>
          <ul className='container__picker'>
            <li key='lineas-menos-20'>
              <Button
                variant='picker'  
                onClick={() => handleShowLines('lessThan20')}
              >
                Menos de 20 Líneas
              </Button>
            </li>
            <li key='lineas-mas-20'>
              <Button
                variant='picker'  
                onClick={() => handleShowLines('moreThan20')} 
              >
                Más de 20 Líneas
              </Button>
            </li>
          </ul>
        </div>
      )}

      {showLines && (
        <ul className='container__box'>
          {productsWithQuantity.map((product) => (
            <li key={product.id}>
              <div className={`box ${product.quantity > 0 ? 'box-active' : ''}`}>
                <div className='container__name'>
                  <p className='title__card'>{product.name}</p>
                </div>
                <div>
                  <ul>
                    {product.features?.map((feature) => (
                      <li key={feature.id} className='container__list'>
                        <PiCheckLight />
                        <p className='description__list'>{feature.detail}</p>
                      </li>
                    ))}
                  </ul>
                  <Price>{product.price}</Price>
                </div>
                <CounterButtons 
                  quantity={product.quantity} 
                  onIncrease={() => addProduct({...product, quantity: 1})} 
                  onDecrease={() => removeProduct(product.id)} 
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};
