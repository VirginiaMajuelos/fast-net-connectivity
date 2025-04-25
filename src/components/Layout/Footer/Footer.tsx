import React from 'react';

import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Hecho con 🫀 por{' '}
        <a href='https://github.com/VirginiaMajuelos' target='_blank' rel='noopener noreferrer'>
          VirMajuelos
        </a>
      </p>
    </footer>
  );
};

