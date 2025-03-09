import { useCart } from '../../../../context/CartContext'; // Importa el hook para acceder al contexto
import litePlan from '../../../../services/data/estandar.json';
import { Fiber } from '../../Fiber/Fiber';
import styles from '../Wizard.module.css';
import { WizardTypes } from '../WizardTypes.types';

const Step1: React.FC<WizardTypes> = () => {
  const { updateFiberPrice } = useCart();  // Accede a la función que actualiza el precio global

  return (
    <div className={styles.step}>
      {/* Usamos el contexto para actualizar el precio global de la fibra */}
      <Fiber litePlan={litePlan} onFiberSelect={updateFiberPrice} />
      {/* <button className={styles.btn__wizard} onClick={goNextPage}>Siguiente</button> */}
    </div>
  );
};

export default Step1;
