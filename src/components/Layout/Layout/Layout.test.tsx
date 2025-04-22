import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Layout } from './Layout';
import styles from './Layout.module.css';


describe('Layout component', () => {
  it('render the content of the children', () => {
    render(<Layout><p>Texto Layout</p></Layout>);
    
    expect(screen.getByText('Texto Layout')).toBeInTheDocument();  
  });

  it('applies container and mainContent classes', () => {
    const { getByTestId } = render(
      <Layout>
        <p>Content</p>
      </Layout>
    );

    const div = getByTestId('layout-container');
    const main = getByTestId('layout-main');

    expect(div).toHaveClass(styles.container);
    expect(main).toHaveClass(styles.mainContent);  
  });

  it('matches dnapshot', () => {
    const { asFragment} = render(
      <Layout>
        <p>Snapshot content</p>
      </Layout>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});