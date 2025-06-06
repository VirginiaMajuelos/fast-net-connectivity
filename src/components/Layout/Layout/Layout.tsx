import React from 'react';

import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container} data-testid='layout-container'>
      <main className={styles.mainContent} data-testid='layout-main'>{children}</main>
    </div>
  );
};
