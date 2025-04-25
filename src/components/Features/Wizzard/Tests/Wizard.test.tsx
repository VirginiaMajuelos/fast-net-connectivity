import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { CartProvider } from '../../../../context/CartContext';
import { WizardContext } from '../../../../context/WizardContext';
import { Wizard } from '../Wizard';

const mockGoNextPage = vi.fn();
const mockGoPrevPage = vi.fn();

const renderWizardWithContext = (step = 0) => {
  return render(
    <CartProvider>
      <WizardContext.Provider value={{
        currentStep: step, 
        goNextPage: mockGoNextPage,
        goPrevPage: mockGoPrevPage,
      }}>
        <Wizard />
      </WizardContext.Provider>
    </CartProvider>
  );
};

describe('Wizard component', () => {
  it('Render component in the base step', () => {
    renderWizardWithContext(0);

    expect(screen.getByText(/siguiente/i)).toBeInTheDocument();
    expect(screen.queryByText(/atrás/i)).not.toBeInTheDocument();
  });

  it('show "Atrás" button in next steps', () => {
    renderWizardWithContext(2);

    expect(screen.getByText(/atrás/i)).toBeInTheDocument();
    expect(screen.getByText(/siguiente/i)).toBeInTheDocument();
  });

  it('Hides the "Siguiente" button whe it is the last step', () => {
    renderWizardWithContext(5);

    expect(screen.queryByText(/siguiente/i)).not.toBeInTheDocument();
    expect(screen.getByText(/atrás/i)).toBeInTheDocument();
  });

  it('call to goNextPage when click btn "Siguiente"', () => {
    renderWizardWithContext(0);
    fireEvent.click(screen.getByText(/siguiente/i));
    expect(mockGoNextPage).toHaveBeenCalled();
  });

  it('call to goPrevPage when click btn "Atrás"', () => {
    renderWizardWithContext(2);
    fireEvent.click(screen.getByText(/atrás/i));
    expect(mockGoPrevPage).toHaveBeenCalled();
  });
});