import PropTypes from 'prop-types';

const Item = ({ item }) => {
  return (
    <button>
      <span aria-label="title">{item.title}</span>
      <span aria-label="price">{item.price}</span>
    </button>
  );
};

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
