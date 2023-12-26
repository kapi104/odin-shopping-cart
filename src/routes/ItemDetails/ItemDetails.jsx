import { useParams } from 'react-router-dom';
import useSingleItem from '../../hooks/useSingleItem';
import Loading from '../../components/Loading/Loading';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import { mdiStar } from '@mdi/js';
import Icon from '@mdi/react';
import styles from './ItemDetails.module.scss';
import { useState } from 'react';

const ItemDetails = () => {
  const { itemId } = useParams();
  const { loading, item, error } = useSingleItem(itemId);
  const [currentQuantity, setCurrentQuantity] = useState(1);

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
        <div className={styles.right}>
          <h3 aria-label="price">{item.price} $</h3>
          <span aria-label="rating">
            {item.rating.rate}/5 <Icon path={mdiStar} data-testid="starSvg" />({item.rating.count})
          </span>
          <span>Category: {item.category}</span>
          <div className={styles.buttonWrapper}>
            <button className={styles.addToCart} aria-label="add to cart">
              <span>ADD TO CART</span>
            </button>
            <QuantitySelector currentQuantity={currentQuantity} setCurrentQuantity={setCurrentQuantity} />
          </div>
        </div>
      </div>
      <div className="descrition">
        <h3>description</h3>
        <p aria-label="description">{item.description}</p>
      </div>
    </main>
  );
};

export default ItemDetails;
