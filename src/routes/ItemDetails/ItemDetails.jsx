import { useLoaderData } from 'react-router-dom';

const ItemDetails = () => {
  const { itemId } = useLoaderData();

  return <div>{itemId}</div>;
};

export default ItemDetails;
