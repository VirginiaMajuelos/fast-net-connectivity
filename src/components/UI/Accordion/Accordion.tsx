import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

import styles from './Accordion.module.css';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__header} onClick={handleToggle}>
        <p className={styles.accordion__title}>{title}</p>
        <AiOutlineDown
          className={`${styles.accordion__icon} ${
            show ? styles.accordion__icon__rotate : ''
          }`}
        />
      </div>
      <div
        className={`${styles.accordion__body} ${
          show ? styles.accordion__body__show : ''
        }`}
      >
        <p>{children}</p>
      </div>
    </div>
  );
};
