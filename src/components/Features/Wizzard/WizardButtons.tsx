import { useWizard } from '../../../context/WizardContext';
import styles from './Wizard.module.css';

export const WizardButtonPrev: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { goPrevPage, activePageIndex } = useWizard();

  return activePageIndex > 0 ? (
    <button type='button' className={styles.btn__wizard} {...props} onClick={goPrevPage}>
      Atrás
    </button>
  ) : null;
};

export const WizardButtonNext: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const {goNextPage, activePageIndex, steps} =  useWizard();
  
  return activePageIndex < steps - 1 ? (
    <button type='button' className={styles.btn__wizard} {...props} onClick={goNextPage}>
      Siguiente
    </button>
  ) : null;
};