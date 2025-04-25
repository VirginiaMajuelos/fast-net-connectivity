import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { CartProvider } from '../../../context/CartContext';
import { WizardProvider } from '../../../context/WizardContext';
import { Wizard } from '../Wizzard/Wizard';
import { TotalPrice } from './TotalPrice';



describe('TotalPrice component', () => {
  it('updates total price when products are added from a step', () => {
    render(
      <CartProvider>
        <WizardProvider>
          <Wizard />
          <TotalPrice
            total={42.00}
            openModalId={null}
            handleShowModal={() => {}}
            handleCloseModal={() => {}}
          />
        </WizardProvider>
      </CartProvider>
    );

    // Paso 1: ir a la siguiente pantalla
    fireEvent.click(screen.getByText(/siguiente/i));

    fireEvent.click(screen.getByText(/Menos de 20 Líneas/i));
 
    const addButton = screen.getAllByLabelText(/increment/i)[0]; 
    fireEvent.click(addButton);
 
    expect(screen.getByTestId('total-price')).toHaveTextContent('42.00');

  });
});