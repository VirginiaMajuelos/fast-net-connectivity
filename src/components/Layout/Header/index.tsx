import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>
          Conectividad Avanzada para tu Negocio
        </h1>
        <p className={styles.header__subtitle}>
          Disfruta de la mejor velocidad y tecnología con nuestras tarifas personalizadas.
        </p>
        <p className={styles.header__price}>Desde 40,20€/mes</p>

        <div className={styles.header__tokens}>
          <div className={styles.header__token}></div>
          <div className={styles.header__token}></div>
          <div className={styles.header__token}></div>
          <div className={styles.header__token}></div>
        </div>
      </div>
    </header>
  );
};
