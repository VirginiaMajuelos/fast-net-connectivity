import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ConfigEstandar } from '../pages/Configurador-estandar/ConfigEstandar';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { Home } from '../pages/Home/Home';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/configura-tarifa' element={<ConfigEstandar />} />
      <Route path='/*' element={<ErrorPage />} />
    </Routes>
  );
};

