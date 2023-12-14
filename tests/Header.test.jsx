import { describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import Header from '../src/components/Header/Header';
import { MemoryRouter } from 'react-router-dom';

describe('header', () => {
  it('Header is rendered', () => {
    render(<Header />, { wrapper: MemoryRouter });
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('Header must render logo', () => {
    render(<Header />, { wrapper: MemoryRouter });
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });

  it('Logo must heve src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png" and alt = "Logo"', () => {
    render(<Header />, { wrapper: MemoryRouter });
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png');
    expect(img).toHaveAttribute('alt', 'Logo');
  });

  it('Header must contain 4 links', () => {
    render(<Header />, { wrapper: MemoryRouter });
    expect(screen.getAllByRole('link')).toHaveLength(4);
  });
});
