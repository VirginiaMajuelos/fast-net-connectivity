import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import { Home } from './Home';

vi.mock('../../components/UI/ProductsCard/ProductsCard', () => ({
  ProductsCard: () => <div data-testid='product-card' />
}));

vi.mock('../../components/Features/BusinessSection/BusinessSection', () => ({
  BusinessSection: () => <div data-testid='business-section' />
}));

vi.mock('../../components/Features/BenefitsHome/BenefitsHome', () => ({
  BenefitsHome: () => <div data-testid='benefits-home' />
}));

vi.mock('../../components/Features/Faqs/Faqs', () => ({
  Faqs: () => <div data-testid='faqs' />
}));

vi.mock('../../components/Layout/Footer/Footer', () => ({
  Footer: () => <div data-testid='footer' />
}));

describe('Home page component', ()=> {
  it('render childComponentes', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByTestId('product-card')).toBeInTheDocument();
    expect(screen.getByTestId('business-section')).toBeInTheDocument();
    expect(screen.getByTestId('benefits-home')).toBeInTheDocument();
    expect(screen.getByTestId('faqs')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();


  });
  // it('verify the main content: titles, buttons, Faqs', () => {

  // });
  // it('check click events', () => {

  // });
  // it('check the link routes', () => {

  // });
});