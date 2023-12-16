import { Link } from 'react-router-dom';
import styles from './ShopButton.module.scss';

const ShopButton = () => {
  return (
    <Link to="/shop" className={styles.shopLink}>
      <button className={styles.shopButton}>VISIT OUR SHOP</button>
    </Link>
  );
};

export default ShopButton;
