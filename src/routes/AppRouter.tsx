import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ConfigEstandar } from '../pages/Configurador-estandar/ConfigEstandar';
import { DashboardPremium } from '../pages/DashboardPremium';
import { Home } from '../pages/Home/Home';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tarifa-estandar' element={<ConfigEstandar />} />
      <Route path='/tarifa-premium' element={<DashboardPremium />} />
    </Routes>
  );
};

export default AppRouter;
