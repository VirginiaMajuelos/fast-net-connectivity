import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Accordion } from './Accordion';
import styles from './Accordion.module.css';


describe('Accordion component', ()=> {
  it('render component', () => {
    render(<Accordion title='titulo'>text</Accordion>);
    expect(screen.getByText('text')).toBeInTheDocument();
  });
  it('render title as a prop', () => {
    render(<Accordion title='titulo'>text</Accordion>);
    expect(screen.getByText('titulo')).toBeInTheDocument();
  });

  it('the content is hidden by default', () => {
    render(<Accordion title='string'>text</Accordion>);

    const content = screen.getByText('text');
    const contentWrapper= content.parentElement;
    expect(contentWrapper).toHaveClass(styles.accordion__body);
    expect(contentWrapper).not.toHaveClass(styles.accordion__body__show);
  });

  it('the content is showed when you click', async () => {
    const user = userEvent.setup();

    render(<Accordion title='My Title'>My Content</Accordion>);

    const header = screen.getByText('My Title');
    const content = screen.getByText('My Content');
    const wrapper = content.parentElement;

    //oculto por defecto
    expect(wrapper).not.toHaveClass(styles.accordion__body__show);

    //primer click: mostrar
    await user.click(header);
    expect(wrapper).toHaveClass(styles.accordion__body__show);

    //segundo click: ocultar
    await user.click(header);
    expect(wrapper).not.toHaveClass(styles.accordion__body__show);

  });

  it('Rotate icon change when the accordion is open', async () => {
    const user = userEvent.setup();
    render(<Accordion title='My Title'>My Content</Accordion>);
    
    const header = screen.getByText('My Title');
    const iconBtn = screen.getByLabelText('outline-down-icon');

    expect(iconBtn).not.toHaveClass(styles.accordion__icon__rotate);
    
    await user.click(header);
    expect(iconBtn).toHaveClass(styles.accordion__icon__rotate);

  });

  it('matches the snapshot', () => {
    const { asFragment } = render(
      <Accordion title='Snapshot Test'>Content snapshot</Accordion>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('has aria-label on the icon', () => {
    render(<Accordion title='Acc title'>Acc content</Accordion>);
    const icon = screen.getByLabelText('outline-down-icon');
    expect(icon).toBeInTheDocument();
  });

});