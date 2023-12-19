import { describe, it, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Shop from '../src/routes/Shop/Shop';
import Item from '../src/components/Item/Item';
import useItems from '../src/hooks/useItems';

vi.mock('../src/hooks/useItems');

const mockLoading = {
  loading: true,
  items: [],
  error: null,
};
const mockItems = {
  loading: false,
  items: [
    {
      title: 'item1',
      price: '54',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        count: 120,
        rate: 4.5,
      },
    },
  ],
  error: null,
};
const mockError = {
  loading: false,
  items: [],
  error: '404',
};

describe('Shop', () => {
  it('should render Loading Component', async () => {
    useItems.mockReturnValue(mockLoading);
    render(<Shop />, { wrapper: MemoryRouter });
    expect(screen.queryByTestId('loading')).toBeInTheDocument();
  });

  it('should display Item components', async () => {
    useItems.mockReturnValue(mockItems);
    render(<Shop />, { wrapper: MemoryRouter });
    const ls = await screen.findAllByRole('button');
    expect(ls[0]).toBeInTheDocument();
  });

  it('should display Error element', async () => {
    useItems.mockReturnValue(mockError);
    expect(() => render(<Shop />, { wrapper: MemoryRouter })).toThrowError('404');
  });
});

describe('Item', () => {
  const fakeItem = {
    title: 'item1',
    price: '54',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      count: 120,
      rate: 4.5,
    },
  };

  it('should have "item1" text content', () => {
    render(<Item item={fakeItem} />, { wrapper: MemoryRouter });
    expect(screen.getByLabelText('title')).toHaveTextContent('item1');
    expect(screen.getByLabelText('price')).toHaveTextContent('54');
  });

  it('should have img with "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" url', () => {
    render(<Item item={fakeItem} />, { wrapper: MemoryRouter });
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');
  });

  it('img should have "item1" alt text', () => {
    render(<Item item={fakeItem} />, { wrapper: MemoryRouter });
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'item1');
  });

  it('should display rating', () => {
    render(<Item item={fakeItem} />, { wrapper: MemoryRouter });
    expect(screen.getByLabelText('rating')).toHaveTextContent('4.5/5');
  });

  it('should display star svg', () => {
    render(<Item item={fakeItem} />, { wrapper: MemoryRouter });
    expect(screen.getByTestId('starSvg')).toBeInTheDocument();
  });

  it('should display rates cound', () => {
    render(<Item item={fakeItem} />, { wrapper: MemoryRouter });
    expect(screen.getByLabelText('rating')).toHaveTextContent('(120)');
  });

  describe('Item missing values', () => {
    const missingTitleItem = {
      title: '',
      price: '54',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        count: 120,
        rate: 4.5,
      },
    };

    it('should not render if title is missing', () => {
      render(<Item item={missingTitleItem} />, { wrapper: MemoryRouter });
      const btn = screen.queryByRole('button');
      expect(btn).not.toBeInTheDocument();
    });

    const missingPriceItem = {
      title: 'item1',
      price: '',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        count: 120,
        rate: 4.5,
      },
    };

    it('should not render if price is missing', () => {
      render(<Item item={missingPriceItem} />, { wrapper: MemoryRouter });
      const btn = screen.queryByRole('button');
      expect(btn).not.toBeInTheDocument();
    });
  });
});
