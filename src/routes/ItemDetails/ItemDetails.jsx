import { useParams } from 'react-router-dom';

const ItemDetails = () => {
  const { itemId } = useParams();

  return <main>{itemId}</main>;
};

export default ItemDetails;
