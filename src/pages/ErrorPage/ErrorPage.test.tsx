import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ErrorPage } from './ErrorPage';


describe('ErrorPage component', () => {
  it('render 404 text', ()=> {
    render(<ErrorPage />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Ups, page not found')).toBeInTheDocument();
    expect(screen.getByText('This page doesn\'t exits')).toBeInTheDocument();
  });
});