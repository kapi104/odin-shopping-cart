import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './routes/App/App';
import Header from './components/Header/Header';
import MainPage from './routes/MainPage/MainPage';
import Shop from './routes/Shop/Shop';
import Cart from './routes/cart/cart';
import ItemDetails from './routes/ItemDetails/ItemDetails';
import ErrorElement from './components/ErrorElement/ErrorElement';

import { loader as itemLoader } from './routes/ItemDetails/loader';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorElement />,
      children: [
        {
          index: true,
          path: '',
          element: <MainPage />,
        },
        {
          path: '',
          element: <Header />,
        },
        {
          path: '/shop',
          element: <Shop />,
          errorElement: <ErrorElement />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/shop/:itemId',
          element: <ItemDetails />,
          loader: itemLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
