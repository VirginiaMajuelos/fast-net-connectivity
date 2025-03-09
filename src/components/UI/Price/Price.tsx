import React from 'react';

import styles from './Price.module.css';

interface PriceProps {
  children: number;
}

export const Price: React.FC<PriceProps> = ({ children }) => {
  return (
    <p className={styles.priceContainer}>
      <span className={styles.price}>{children}</span> €/mes
    </p>
    
  );
};
