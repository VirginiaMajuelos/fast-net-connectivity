import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Modal } from './Modal';

describe('Modal component', () => {
  it('no render text in children when isOpen is false', () => {
    const { container } = render(<Modal isOpen={false}>Text one</Modal>);
    expect(container).toBeEmptyDOMElement();

  });

  it('render text in children when isOpen is true', () => {
    render(<Modal isOpen={true}>Text one</Modal>);
    expect(screen.getByText('Text one')).toBeInTheDocument();
  });

  it('call to inClose when click in the closeButton', async () => {
    const user = userEvent.setup();
    const handleClose= vi.fn();
    render(<Modal isOpen={true} onClose={handleClose}>Close</Modal>);
    const closeButton = screen.getByRole('button');
    await user.click(closeButton);
    expect(handleClose).toHaveBeenCalled();
  });

  it('adds dataId attribute if provided', () => {
    render(<Modal isOpen={true} dataId='my-modal'>Modal Content</Modal>);
    
    const modal = screen.getByTestId('my-modal');
    expect(modal).toBeInTheDocument();
  });
});