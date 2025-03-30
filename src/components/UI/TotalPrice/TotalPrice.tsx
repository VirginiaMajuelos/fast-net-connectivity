import React from 'react';

import { ContactForm } from '../../Features/ContactForm/ContactForm';
import { Modal } from '../Modal/Modal';
import styles from './TotalPrice.module.css';

interface TotalPriceProps {
  total: number;
  openModalId: string | null;
  handleShowModal: (id: string) => void;
  handleCloseModal: () => void;
}

export const TotalPrice: React.FC<TotalPriceProps> = ({ total, openModalId, handleShowModal, handleCloseModal }) => {
  return (
    <div className={styles.container}>
      <p><span className={styles.price}>{total.toFixed(2)}</span>€/mes</p>
      <button className={styles.button} onClick={() => handleShowModal('contactFormModal')}>
        Me interesa
      </button>

      {/* Renderiza la Modal aquí */}
      <Modal dataId='contactFormModal' isOpen={openModalId === 'contactFormModal'} onClose={handleCloseModal}>
        <h3>Formulario de contacto</h3>
        <ContactForm /> {/* Agrega el formulario aquí */}
        {/* <button onClick={handleCloseModal} className={styles.button}>Cerrar</button> */}
      </Modal>
    </div>
  );
};
