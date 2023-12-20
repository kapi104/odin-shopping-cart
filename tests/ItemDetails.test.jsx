import { describe, it, expect, beforeEach, vi, should } from 'vitest';
import { screen, render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ItemDetails from '../src/routes/ItemDetails/ItemDetails';
import useSingleItem from '../src/hooks/useSingleItem';

vi.mock('../src/hooks/useSingleItem');

const mockLoading = {
  loading: true,
  item: {},
  error: null,
};
const mockItem = {
  loading: false,
  item: {
    title: 'Mens Casual Premium Slim Fit T-Shirts',
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    price: '22.3',
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating: {
      count: 259,
      rate: 4.1,
    },
  },
  error: null,
};
const mockError = {
  loading: false,
  item: [],
  error: '404',
};

describe('renders ItemDetails', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={[`/shop/2`]}>
        <Routes>
          <Route path="/shop/:itemId" Component={ItemDetails} />
        </Routes>
      </MemoryRouter>,
    );
  });

  it('renders Loading component while loading is true', () => {
    useSingleItem.mockReturnValue(mockLoading);
    expect(screen.findByTestId('loading')).toBeInTheDocument();
  });

  it('should render ItemDetails component', () => {
    useSingleItem.mockReturnValue(mockItem);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render title with text content "Mens Casual Premium Slim Fit T-Shirts "', () => {
    useSingleItem.mockReturnValue(mockItem);
    expect(screen.findByRole('heading')).toHaveTextContent('Mens Casual Premium Slim Fit T-Shirts');
  });

  it('should render "Internal ID" element with value "2"', () => {
    useSingleItem.mockReturnValue(mockItem);
    expect(screen.findByLabelText('internal ID')).toHaveTextContent('Internal ID: 2');
  });

  it('should render image with src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"', () => {
    useSingleItem.mockReturnValue(mockItem);
    expect(screen.findByRole('img')).toBeInTheDocument();
    expect(screen.findByRole('img')).toHaveAttribute(
      'src',
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    );
  });

  it('should render description with description from API', () => {
    useSingleItem.mockReturnValue(mockItem);
    expect(screen.findByRole('paragraph')).toHaveTextContent(
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    );
  });

  it('should render price with text content 22.3 $', () => {
    useSingleItem.mockReturnValue(mockItem);
    expect(screen.findByLabelText('price')).toHaveTextContent('22.3 $');
  });

  it('should render rating', () => {
    useSingleItem.mockReturnValue(mockItem);
    expect(screen.findByLabelText('rating')).toHaveTextContent('4.5/5');
  });

  it('should render star svg', () => {
    useSingleItem.mockReturnValue(mockItem);
    expect(screen.findByTestId('starSvg')).toBeInTheDocument();
  });

  it('should render rates count', () => {
    useSingleItem.mockReturnValue(mockItem);
    expect(screen.findByLabelText('rating')).toHaveTextContent('(120)');
  });

  it('should render "ADD TO CART" button', () => {
    useSingleItem.mockReturnValue(mockItem);
    expect(screen.getByRole('button')).toHaveDisplayValue('ADD TO CART');
  });
});

describe('error', () => {
  it('throw error if error !== null', () => {
    useSingleItem.mockReturnValue(mockError);
    expect(
      render(
        <MemoryRouter initialEntries={[`/shop/2`]}>
          <Routes>
            <Route path="/shop/:itemId" Component={ItemDetails} />
          </Routes>
        </MemoryRouter>,
      ),
    ).toThrowError(404);
  });
});
