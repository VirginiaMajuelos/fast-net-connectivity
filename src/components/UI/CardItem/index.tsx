import React, { useState } from 'react';
import { FaChartLine, FaDigitalTachograph, FaExchangeAlt, FaMobile, FaMobileAlt, FaPhone, FaWifi } from 'react-icons/fa';

import { Tariff } from '../../../services/data/types';
import { ContactForm } from '../../Features/ContactForm/ContactForm';
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

  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <h2>{plan.name}</h2>
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
        <button onClick={() => handleShowModal('contactFormModal')} className={styles.button}>Me interesa</button>
      </div>
      <Modal dataId='me-interesa' isOpen={openModalId === 'contactFormModal'} onClose={handleCloseModal}>
        <ContactForm />
      </Modal>
    </div>
  );
};
