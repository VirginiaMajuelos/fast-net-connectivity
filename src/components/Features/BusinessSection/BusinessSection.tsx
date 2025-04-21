import React from 'react';

import styles from './BusinessSection.module.css';

export const BusinessSection: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.solution}>
        <div className={styles.textContainer}>
          <h2>Soluciones digitales para tu empresa</h2>
          <p>
              Conéctate sin límites con nuestros packs de fibra y móvil diseñados para negocios. 
              Velocidad, estabilidad y soporte técnico especializado para que tu empresa 
              nunca se detenga.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src='/assets/section/employee-01.jpg' alt='Fibra óptica empresarial' />
        </div>
      </div>
      <div className={`${styles.solution} ${styles.reverse}` }>
        <div className={styles.textContainer}>
          <h2>Transforma tu empresa con soluciones digitales</h2>
          <p>
              Desde comunicaciones unificadas hasta soluciones en la nube, 
              impulsamos la digitalización de tu negocio para mejorar 
              su eficiencia y competitividad.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src='/assets/section/employee-02.jpg' alt='Transformación digital' />
        </div>
      </div>
    </section>
  );
};

