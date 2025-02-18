import React, { useState } from 'react';

import { Fiber } from '../../components/Features/Fiber/Fiber';
import { Page1 } from '../../components/Features/Wizzard/Steps/Step1';
import { Step2 } from '../../components/Features/Wizzard/Steps/Step2';
import { Step3 } from '../../components/Features/Wizzard/Steps/Step3';
import Wizard from '../../components/Features/Wizzard/Wizard';
import { Modal } from '../../components/UI/Modal/Modal';
import { TotalPrice } from '../../components/UI/TotalPrice/TotalPrice';
import litePlan from '../../services/data/estandar.json';
import styles from './ConfigEstandar.module.css';

export const ConfigEstandar: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [fiberPrice, setFiberPrice] = useState(0);
  const [openModalId, setOpenModalId] = useState<string | null>(null);

  const totalEstandar = litePlan.basePrice;
  const counterPrice = counter * 1.80;
  const totalPrice = totalEstandar + counterPrice + fiberPrice;

  const handleAdd = () => setCounter((prevCounter) => prevCounter + 1);
  const handleRemove = () => setCounter((prevCounter) => Math.max(prevCounter - 1, 0));

  const handleShowModal = (id: string) => setOpenModalId(id);
  const handleCloseModal = () => setOpenModalId(null);

  return (
    <section>
      <h3>Dashboard Lite</h3>
      <Wizard steps={3}>
        <Page1 />
        <Step2 />
        <Step3 />
      </Wizard>

      <div className={styles.container__plan}>
        <div className={styles.box}>
          <Fiber litePlan={litePlan} onFiberSelect={setFiberPrice} />
        </div>
        <div className={styles.box}>
          <p>Lineas móviles</p>
          <button onClick={() => handleShowModal(litePlan.features.mobileLines.options[0].id)}>Añadir Lineas</button>
        </div>
        <div className={styles.box}>
          <p>Centralita</p>
          <button onClick={() => handleShowModal(litePlan.features.switchboard.options[0].id)}>Añadir</button>
        </div>
        <div className={styles.box}>
          <div className={styles.container__counter}>
            <button className={styles.btn__counter} onClick={handleRemove} disabled={counter === 0}>-</button>
            <p>{counter}</p>
            <button className={styles.btn__counter} onClick={handleAdd}>+</button>
          </div>
        </div>
      </div>

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
