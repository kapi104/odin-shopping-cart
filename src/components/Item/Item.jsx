import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';
import styles from './Item.module.scss';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  if (item.title == '' || item.price == '') return;

  return (
    <Link to={`/shop/${item.id}`}>
      <button className={styles.btn}>
        <div className={styles.img}>
          <img src={item.image} alt={item.title} />
        </div>
        <div>
          <span aria-label="title">{item.title}</span>
          <hr />
          <span aria-label="price">{item.price} $</span>
          <hr />
          <span aria-label="rating">
            {item.rating.rate}/5 <Icon path={mdiStar} data-testid="starSvg" />({item.rating.count})
          </span>
        </div>
      </button>
    </Link>
  );
};

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
