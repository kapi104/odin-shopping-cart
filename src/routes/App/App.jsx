import { Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header';
import { createContext, useState } from 'react';

export const CartContext = createContext([]);

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Header />
        <Outlet />
      </CartContext.Provider>
    </>
  );
};

export default App;
