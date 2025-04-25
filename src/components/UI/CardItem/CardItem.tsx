import React, { useState } from 'react';
import { FaChartLine, FaDigitalTachograph, FaExchangeAlt, FaMobile, FaMobileAlt, FaPhone, FaWifi } from 'react-icons/fa';

import { Tariff } from '../../../services/data/types';
import { ContactForm } from '../../Features/ContactForm/ContactForm';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import styles from './CardItem.module.css';

const iconMap: Record<string, JSX.Element> = {
  FaWifi: <FaWifi />,
  FaPhone: <FaPhone />,
  FaMobile: <FaMobile />,
  FaMobileAlt: <FaMobileAlt />,
  FaDigitalTachograph: <FaDigitalTachograph />,
  FaChartLine: <FaChartLine />,
  FaExchangeAlt: <FaExchangeAlt />
};

export const CardItem: React.FC<{ plan: Tariff }> = ({ plan }) => {
  const [openModalId, setOpenModalId] = useState<string | null>(null);

  const handleShowModal = (id: string) => setOpenModalId(id);
  const handleCloseModal = () => setOpenModalId(null);

  //console.log(plan.basicFeatures);

  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <h4>{plan.name}</h4>
        <ul>
          {plan.basicFeatures.map((feature) => (
            <li key={feature.id} className={styles.card__list}>
              <div className={styles.iconTextWrapper}>
                {iconMap[feature.icon]} <p>{feature.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.card__footer}>
        <p className={styles.price__container}>
          Desde <span className={styles.price}>{plan.basePrice}</span>€/mes
        </p>
        <Button variant='primary' onClick={() => handleShowModal('contactFormModal')} data-testid='me-interesa'>Me interesa</Button>
        
      </div>
      <Modal  isOpen={openModalId === 'contactFormModal'} onClose={handleCloseModal}>
        <ContactForm />
      </Modal>
    </div>
  );
};
