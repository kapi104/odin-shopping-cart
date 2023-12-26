import { CartContext } from '../App/App';
import { useContext } from 'react';

const Cart = () => {
  const cart = useContext(CartContext);
  console.log(cart.cartItems);
  return <main>Cart</main>;
};

export default Cart;
