import React from 'react';

import styles from './TotalPrice.module.css';

interface TotalPriceProps {
  total: number;
  label?: string; // Opcional: para personalizar el título
}

export const TotalPrice: React.FC<TotalPriceProps> = ({ total, label = 'Total' }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{label}</h3>
      <p className={styles.price}>{total.toFixed(2)} €</p>
    </div>
  );
};

