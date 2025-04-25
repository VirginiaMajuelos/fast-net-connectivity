import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { useWizard, WizardProvider } from './WizardContext';


const TestConsumer = () => {
  const {currentStep, goNextPage, goPrevPage} = useWizard();

  return(
    <div>
      <p>Step: {currentStep}</p>
      <button onClick={goNextPage}>Next</button>
      <button onClick={goPrevPage}>Prev</button>
    </div>
  );
};

describe('WizardContext test', () => {
  it('Starts with step 0 by default', () => {
    render(
      <WizardProvider>
        <TestConsumer />
      </WizardProvider>
    );

    expect(screen.getByText(/step: 0/i)).toBeInTheDocument();
  });

  it('increments step with goNextPage', async () => {
    render(
      <WizardProvider>
        <TestConsumer />
      </WizardProvider>
    );

    const nextBtn= screen.getByText(/next/i);
    const user = userEvent.setup();
    await user.click(nextBtn);
    expect(screen.getByText(/step: 1/i)).toBeInTheDocument();
  });

  it('decrements step with goPrevPage', async () => {
    render(
      <WizardProvider>
        <TestConsumer />
      </WizardProvider>
    );

    const nextBtn= screen.getByText(/next/i);
    const prevBtn= screen.getByText(/prev/i);
    const user = userEvent.setup();
    await user.click(nextBtn);
    await user.click(prevBtn);
    expect(screen.getByText(/step: 0/i)).toBeInTheDocument();
  });

  it('does not go below 0 or above 5', async () => {
    render(
      <WizardProvider>
        <TestConsumer />
      </WizardProvider>
    );

    const nextBtn= screen.getByText(/next/i);
    const prevBtn= screen.getByText(/prev/i);

    //try to decrement from 0
    const user = userEvent.setup();
    await user.click(prevBtn);
    expect(screen.getByText(/step: 0/i)).toBeInTheDocument();

    //Try to decrement beyond 5
    for(let i= 0; i < 10; i++){
      await userEvent.click(nextBtn);
    }

    expect(screen.getByText(/step: 5/i)).toBeInTheDocument();
  });
});