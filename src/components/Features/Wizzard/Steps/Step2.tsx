import litePlan from '../../../../services/data/estandar.json';
import { CardProductsLines } from '../../CardProducts/CardProductsLines';
import { WizardTypes } from '../WizardTypes.types';



const Step2: React.FC<WizardTypes> = () => {
  return (
    <div >
      <CardProductsLines litePlan={litePlan}/>
      {/* <button onClick={() => handleShowModal(litePlan.features.mobileLines.options[0].id)}>Añadir Lineas</button> */}
    </div>
  );
};

export default Step2;
