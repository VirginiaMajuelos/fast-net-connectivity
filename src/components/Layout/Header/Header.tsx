import { Logo } from '../../UI/Logo/Logo';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo />
        <h1 className='mb0'>
          Conectividad Avanzada para tu Negocio
        </h1>
        <p>
          La mejor velocidad y tecnología con nuestras tarifas personalizadas.
        </p>
        <p className={styles.header__priceContainer}>
          Desde <span className={styles.header__price}>42</span>€/mes
        </p>
      </div>
    </header>
  );
};
