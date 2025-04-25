import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { Header } from './Header';

describe('Header component', () => {
  it('render title h1', () => {
    render(<MemoryRouter>
      <Header />
    </MemoryRouter>);

    const h1Element = screen.getByRole('heading', { level: 1 });
    expect(h1Element).toHaveTextContent('Conectividad Avanzada para tu Negocio');
  });


  it('render price', () => {
    render(<MemoryRouter>
      <Header />
    </MemoryRouter>);
    const price = screen.getByTestId('price');
    expect(price).toBeInTheDocument();
  });
  
});