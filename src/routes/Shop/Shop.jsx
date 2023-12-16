import useItems from '../../hooks/useItems';
import Item from '../../components/Item/Item';

const Shop = () => {
  const { loading, items, error } = useItems();

  const cards = items.map((item) => <Item item={item} key={item.id} />);

  return <main data-testid="Shop">{cards}</main>;
};

export default Shop;
