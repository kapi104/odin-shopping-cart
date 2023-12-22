import { useParams } from 'react-router-dom';
import useSingleItem from '../../hooks/useSingleItem';
import Loading from '../../components/Loading/Loading';
import { mdiStar } from '@mdi/js';
import Icon from '@mdi/react';
import styles from './ItemDetails.module.scss';

const ItemDetails = () => {
  const { itemId } = useParams();
  const { loading, item, error } = useSingleItem(itemId);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    throw new Error(error);
  }

  return (
    <main className={styles.ItemDetails}>
      <h1>{item.title}</h1>
      <span aria-label="internal ID" className={styles.iID}>
        Internal ID: {itemId}
      </span>
      <div className={styles.wrapper}>
        <img src={item.image} alt={item.title} />
        <div className="right">
          <h3 aria-label="price">{item.price} $</h3>
          <span aria-label="rating">
            {item.rating.rate}/5 <Icon path={mdiStar} data-testid="starSvg" />({item.rating.count})
          </span>
          <span>Category: {item.category}</span>
          <button>ADD TO CART</button>
        </div>
      </div>
      <div className="descrition">
        <p aria-label="description">{item.description}</p>
      </div>
    </main>
  );
};

export default ItemDetails;
