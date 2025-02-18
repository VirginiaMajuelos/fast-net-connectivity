import styles from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode;
  dataId: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({children, dataId, isOpen, onClose}) => {
  if(!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer} data-id={dataId}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};

