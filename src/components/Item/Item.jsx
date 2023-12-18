import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';

const Item = ({ item }) => {
  if (item.title == '' || item.price == '') return;

  return (
    <button>
      <img src={item.image} alt={item.title} />
      <div>
        <span aria-label="title">{item.title}</span>
        <span aria-label="price">{item.price}</span>
        <span aria-label="rating">
          {item.rating.rate}/5 <Icon path={mdiStar} data-testid="starSvg" />({item.rating.count})
        </span>
      </div>
    </button>
  );
};

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
