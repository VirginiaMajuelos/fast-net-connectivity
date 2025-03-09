import React from 'react';
import { GoDash, GoPlus } from 'react-icons/go';

import styles from './CounterButtons.module.css';

interface CounterButtonsProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const CounterButtons: React.FC<CounterButtonsProps> = ({quantity, onDecrease, onIncrease}) => {
  return (
    <div className={styles.container__counter}>
      <button
        className={styles.btn__counter}
        onClick={onDecrease}
        disabled={quantity === 0}
      >
        <GoDash />
      </button>
      <div className={styles.counter__quantity}>{quantity}</div>
      <button
        className={styles.btn__counter}
        onClick={onIncrease}
      >
        <GoPlus />
      </button>
    </div>
  );
};

