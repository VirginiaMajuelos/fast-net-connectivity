import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Tariff } from '../../../services/data/types';
import { CardItem } from './CardItem';

describe('CardItem component', () => {
  const fakePlan = {
    name: 'Plan Empresarial',
    basePrice: 42,
    basicFeatures: [
      { id: '1', name: 'Internet rápido', icon: 'FaWifi' },
      { id: '2', name: 'Llamadas ilimitadas', icon: 'FaPhone' },
    ]
  } as unknown as Tariff;

  it('should open modal when clicking "Me interesa"', async () => {
    render(<CardItem plan={fakePlan} />);
    const user = userEvent.setup();

    const button = screen.getByRole('button', { name: /me interesa/i });
    await user.click(button);

    await waitFor(() => {
      const modal = screen.getByTestId('me-interesa');
      expect(modal).toBeVisible();
    });
  });
});
