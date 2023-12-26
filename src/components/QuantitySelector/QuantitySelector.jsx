import styles from './QuantitySelector.module.scss';
import PropTypes from 'prop-types';

const QuantitySelector = ({ currentQuantity, setCurrentQuantity }) => {
  const plusQuantity = () => {
    setCurrentQuantity((currentQuantity) => currentQuantity + 1);
  };

  const minusQuantity = () => {
    currentQuantity !== 1 && setCurrentQuantity((currentQuantity) => currentQuantity - 1);
  };

  return (
    <div className={styles.QuantitySelector} data-testid="quantitySelector">
      <button aria-label="plus quantity" onClick={plusQuantity}>
        +
      </button>
      <div aria-label="current quantity">{currentQuantity}</div>
      <button aria-label="minus quantity" onClick={minusQuantity}>
        -
      </button>
    </div>
  );
};

QuantitySelector.propTypes = {
  currentQuantity: PropTypes.number,
  setCurrentQuantity: PropTypes.func,
};

export default QuantitySelector;
