import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ConfigEstandar } from '../pages/Configurador-estandar/ConfigEstandar';
import { Home } from '../pages/Home/Home';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/configura-tarifa' element={<ConfigEstandar />} />
      
    </Routes>
  );
};

export default AppRouter;
