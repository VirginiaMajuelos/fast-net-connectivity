import React, { useState } from 'react';

import Wizard from '../../components/Features/Wizzard/Wizard';
import { BenefictsConfig } from '../../components/UI/BenefictsConfig/BenefictsConfig';
import { Logo } from '../../components/UI/Logo/Logo';
import { TotalPrice } from '../../components/UI/TotalPrice/TotalPrice';
import { CartProvider, useCart } from '../../context/CartContext';
import { WizardProvider } from '../../context/WizardContext';
import styles from './ConfigEstandar.module.css';

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
  
  const handleShowModal = (id: string) => setOpenModalId(id);
  const handleCloseModal = () => setOpenModalId(null);

  const totalPrice = getTotalPrice();



  return (
    <section>
      <Logo />
      <div className={styles.container__title}>
        <h1>Conectividad Avanzada</h1>
        <h2>Personaliza tu tarifa de Fibra y móvil para tu empresa:</h2>
      </div>
      <Wizard />
      <BenefictsConfig />

      
      <TotalPrice total={totalPrice} openModalId={openModalId} 
        handleShowModal={handleShowModal} 
        handleCloseModal={handleCloseModal} />


    </section>
  );
};

