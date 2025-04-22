import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { CounterButtons } from './CounterButtons';

describe('Counter Buttons component', () => {
  it('render quantity', () => {
    render(<CounterButtons quantity={0} onDecrease={() => {}} onIncrease={() => {}}></CounterButtons>);

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('Disables decrement button when quantity is 0', () => {
    render(<CounterButtons quantity={0} onDecrease={() => {}} onIncrease={() => {}}></CounterButtons>);
    const btnDecrease = screen.getByLabelText('decrease');
    expect(btnDecrease).toBeDisabled();
  });

  it('Not Disables increment button when quantity higher than 0', () => {
    render(<CounterButtons quantity={1} onDecrease={() => {}} onIncrease={() => {}}></CounterButtons>);
    const btnIncrement = screen.getByLabelText('increment');
    expect(btnIncrement).not.toBeDisabled();
  });

  it('call to Increase btn when click increment btn', async () => {
    const user = userEvent.setup();
    const handleIncrement= vi.fn();
    render(<CounterButtons quantity={1} onDecrease={() => {}} onIncrease={handleIncrement}></CounterButtons>);

    const btnIncrement = screen.getByLabelText('increment');
    await user.click(btnIncrement);
    expect(handleIncrement).toHaveBeenCalled();
  });

  it('call to decrease btn when click decrease btn', async () => {
    const user = userEvent.setup();
    const handleDecrement = vi.fn();
    render(<CounterButtons quantity={1} onDecrease={handleDecrement} onIncrease={() =>{}}></CounterButtons>);

    const btnDecrement= screen.getByLabelText('decrease');
    await user.click(btnDecrement);
    expect(handleDecrement).toHaveBeenCalled();
  });


  it('not call to onDecrease if the btn is disabled', async () => {
    const user = userEvent.setup();
    const handleDecrement = vi.fn();
    render(<CounterButtons quantity={0} onDecrease={handleDecrement} onIncrease={() =>{}}></CounterButtons>);
    
    const btnDecrement= screen.getByLabelText('decrease');
    expect(btnDecrement).toBeDisabled();
    await user.click(btnDecrement);
    expect(handleDecrement).not.toHaveBeenCalled();
  });

  it('render icons GoDash y GoPlus', () => {
    render(<CounterButtons quantity={0} onDecrease={() => {}} onIncrease={() =>{}}></CounterButtons>);

    const iconDecrease = screen.getByLabelText('decrease-icon');
    const iconIncrement = screen.getByLabelText('increment-icon');

    expect(iconDecrease).toBeInTheDocument();
    expect(iconIncrement).toBeInTheDocument();

  });
});