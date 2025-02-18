import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles/reset.local.css';
import './styles/tokens.css';

import { Header } from './components/Layout/Header/index';
import { Layout } from './components/Layout/Layout/index';
import AppRouter from './routes/AppRouter';

const App: React.FC = () => {
  const location = useLocation(); // Obtiene la ruta actual

  return (
    <main>
      {location.pathname === '/' && <Header />} {/* Solo muestra Header en Home */}
      <Layout>
        <AppRouter />
      </Layout>
    </main>
  );
};

export default App;
