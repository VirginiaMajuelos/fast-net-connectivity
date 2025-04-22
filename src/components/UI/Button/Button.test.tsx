import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './Button';
import styles from './Button.module.css';

describe('Button component', () => {
  it('render text button correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('apply class css variant and size', () =>{
    render(<Button variant='primary' >Test</Button>);
    const button= screen.getByText('Test');
    expect(button).toHaveClass(styles.button);
  });

  it('should have both picker and pickerSelect when selected', () => {
    render(<Button variant='picker' isSelected>Picker Selected</Button>);
    const btn = screen.getByText('Picker Selected');
    expect(btn).toHaveClass(styles.pickerSelect);
    expect(btn).toHaveClass(styles.picker); 
  });

  it('use a tag <a> cuando se pasa as="a"', () => {
    render(<Button as='a' to='#'>Link</Button>);

    const linkElement = screen.getByText('Link');
    expect(linkElement.tagName).toBe('A');
  });

  it('trigger onClick event', async () => {
    const user= userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    const button = screen.getByText('Click');
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  
});
