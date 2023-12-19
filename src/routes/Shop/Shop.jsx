import useItems from '../../hooks/useItems';
import Item from '../../components/Item/Item';
import styles from './Shop.module.scss';
import Loading from '../../components/Loading/Loading';

const Shop = () => {
  const { loading, items, error } = useItems();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    throw new Error(error);
  }

  const cards = items.map((item) => <Item item={item} key={item.id} />);

  return (
    <main data-testid="Shop" className={styles.Shop}>
      {cards}
    </main>
  );
};

export default Shop;
