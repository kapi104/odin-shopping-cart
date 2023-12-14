import { NavLink } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png" alt="Logo" />
      </NavLink>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
          Main page
        </NavLink>
        <NavLink to="/shop" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
          Shop
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
          <Icon path={mdiCart} size={1} />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
