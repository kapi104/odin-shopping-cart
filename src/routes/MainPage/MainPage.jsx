import ShopButton from '../../components/ShopButton/ShopButton';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <main data-testid="MainPage" className={styles.MainPage}>
      <ShopButton />
    </main>
  );
};

export default MainPage;
