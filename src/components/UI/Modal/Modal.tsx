import React from 'react';

import styles from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode; 
  isOpen: boolean;           
  onClose: () => void;       
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div className={styles.modalContent}>
          {children}  {/* Aquí se renderiza cualquier contenido pasado */}
        </div>
      </div>
    </div>
  );
};
