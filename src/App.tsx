import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles/general.css';
import './styles/reset.local.css';
import './styles/tokens.css';

import { Header } from './components/Layout/Header/Header';
import { Layout } from './components/Layout/Layout/Layout';
import { AppRouter } from './routes/AppRouter';

const App: React.FC = () => {
  const location = useLocation(); 

  return (
    <main>
      {location.pathname === '/' && <Header />} 
      <Layout>
        <AppRouter />
      </Layout>
    </main>
  );
};

export default App;
