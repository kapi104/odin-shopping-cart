import { describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import MainPage from '../src/routes/MainPage/MainPage';
import { MemoryRouter } from 'react-router-dom';

describe('Main Page', () => {
  it('should render MainPage component', () => {
    render(<MainPage />, { wrapper: MemoryRouter });
    expect(screen.getByTestId('MainPage')).toBeInTheDocument();
  });

  it('should render one button with "VISIT OUR SHOP" text', () => {
    render(<MainPage />, { wrapper: MemoryRouter });
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('VISIT OUR SHOP');
  });

  it('button should be wrapped in link leading to "/shop"', () => {
    render(<MainPage />, { wrapper: MemoryRouter });
    expect(screen.getByRole('link')).toHaveAttribute('href', '/shop');
  });
});
