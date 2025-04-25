import React from 'react';

import { Button } from '../../UI/Button/Button';
import { Modal } from '../../UI/Modal/Modal';
import { ContactForm } from '../ContactForm/ContactForm';
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
      <p className='mb0' data-testid='total-price'><span className={styles.price}>{total.toFixed(2)}</span>€/mes</p>

      <Button variant='primary' onClick={() => handleShowModal('contactFormModal')}>Me interesa</Button>

      <Modal dataId='contactFormModal' isOpen={openModalId === 'contactFormModal'} onClose={handleCloseModal}>
        <ContactForm /> 
      </Modal>
    </div>
  );
};
