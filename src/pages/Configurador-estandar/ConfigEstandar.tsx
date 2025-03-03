import React, { useState } from 'react';

import Wizard from '../../components/Features/Wizzard/Wizard';
import { Modal } from '../../components/UI/Modal/Modal';
import { TotalPrice } from '../../components/UI/TotalPrice/TotalPrice';
import { CartProvider, useCart } from '../../context/CartContext';
import { WizardProvider } from '../../context/WizardContext';
import litePlan from '../../services/data/estandar.json';

export const ConfigEstandar: React.FC = () => {
  return (
    <CartProvider>
      <WizardProvider>
        <ConfigEstandarContent />
      </WizardProvider>
    </CartProvider>
  );
};

const ConfigEstandarContent: React.FC = () => {
  const [openModalId, setOpenModalId] = useState<string | null>(null);
  const { getTotalPrice } = useCart();
  
  //const handleShowModal = (id: string) => setOpenModalId(id);
  const handleCloseModal = () => setOpenModalId(null);

  const totalPrice = getTotalPrice();


  return (
    <section>
      <h3>Dashboard Lite</h3>
      <Wizard />
      {/* <div className={styles.box}>
        <p>Centralita</p>
        <button onClick={() => handleShowModal(litePlan.features.switchboard.options[0].id)}>Añadir</button>
      </div> */}


      <TotalPrice total={totalPrice} />

      {/* Modales dinámicos */}
      <Modal dataId={litePlan.features.mobileLines.options[0].id} isOpen={openModalId === litePlan.features.mobileLines.options[0].id} onClose={handleCloseModal}>
        <p>Contenido de la modal para líneas móviles</p>
      </Modal>

      <Modal dataId={litePlan.features.switchboard.options[0].id} isOpen={openModalId === litePlan.features.switchboard.options[0].id} onClose={handleCloseModal}>
        <p>Contenido de la modal para centralita</p>
      </Modal>
    </section>
  );
};

