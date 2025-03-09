import React from 'react';

import styles from './Bullets.module.css';

export const Bullets: React.FC = () => {
  return (
    <div className={styles.bullets}>
      <div className={styles.bullets__item}></div>
      <div className={styles.bullets__item}></div>
      <div className={styles.bullets__item}></div>
      <div className={styles.bullets__item}></div>
    </div>
  );
};

