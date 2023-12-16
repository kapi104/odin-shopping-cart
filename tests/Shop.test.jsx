import { describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Shop from '../src/routes/Shop/Shop';

describe('Shop', async () => {
  it('should render Shop component', () => {
    render(<Shop />, { wrapper: MemoryRouter });
    expect(screen.getByTestId('Shop')).toBeInTheDocument();
  });

  it('should display item elements', async () => {
    render(<Shop />, { wrapper: MemoryRouter });
    const ls = await screen.findAllByRole('button');
    expect(ls[0]).toBeInTheDocument();
  });
});
