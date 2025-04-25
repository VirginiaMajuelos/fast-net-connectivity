import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { AppRouter } from './AppRouter';

describe('App router test', () => {
  
  it('Show Home page ', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRouter />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/Elige uno de nuestros Packs o Configura tu tarifa:/i)).toBeInTheDocument();
  });

  it('Show config page', () => {
    render(
      <MemoryRouter initialEntries={['/configura-tarifa']}>
        <AppRouter />
      </MemoryRouter>
    );

    expect(screen.getByText(/Personaliza tu tarifa de Fibra y móvil para tu empresa:/i)).toBeInTheDocument();
  });
});

it('Show ErrorPage when the route is wrong', () => {
  render(
    <MemoryRouter initialEntries={['/whatever-route']}>
      <AppRouter />
    </MemoryRouter>
  );

  expect(screen.getByText(/Ups, page not found/i)).toBeInTheDocument();

});