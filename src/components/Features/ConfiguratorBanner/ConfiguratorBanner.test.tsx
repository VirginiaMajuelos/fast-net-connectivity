import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { ConfigEstandar } from '../../../pages/Configurador-estandar/ConfigEstandar';
import { ConfiguratorBanner } from './ConfiguratorBanner';




describe('ConfiguratorBanner', () => {
  it('navigate correctly to /configura-tarifa', async () => {
    const user= userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<ConfiguratorBanner />} />
          <Route path='/configura-tarifa' element={<ConfigEstandar />} />
        </Routes>
      </MemoryRouter>
    );

    const btnLink = screen.getByRole('link', {name: /Configura ahora/i});
    await user.click(btnLink);
    
    expect(screen.getByText(/Personaliza tu tarifa de Fibra y móvil para tu empresa/i)).toBeInTheDocument();
  });
});