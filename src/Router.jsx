import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './routes/App/App';
import Header from './components/Header/Header';
import MainPage from './routes/MainPage/MainPage';
import Shop from './routes/Shop/Shop';
import Cart from './routes/cart/cart';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
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
        },
        {
          path: '/cart',
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
