import { Link } from 'react-router-dom';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div data-testid="MainPage">
      <Link to="/shop">
        <button>VISIT OUR SHOP</button>
      </Link>
    </div>
  );
};

export default MainPage;
