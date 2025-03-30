
import React from 'react';
import { FaWifi } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

export const Logo: React.FC = () => {
  return (
    <Link to={'/'} >
      <div className={styles.logo}>
        <div className={styles.icon}>
          <FaWifi className={styles.wifiIcon} />
        </div>
            FASTNET
      </div>
    </Link>
  );
};

