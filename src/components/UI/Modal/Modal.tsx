import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import styles from './Modal.module.css';

interface ModalProps {
  dataId: string, 
  children: React.ReactNode; 
  isOpen: boolean;           
  onClose: () => void;       
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <p></p>
          <button className={styles.closeButton} onClick={onClose}><IoCloseOutline /></button>
        </div>
        <div className={styles.modalContent}>
          {children}  
        </div>
      </div>
    </div>
  );
};
