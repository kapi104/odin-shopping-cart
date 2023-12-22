import { useEffect, useState } from 'react';

const useSingleItem = (productId) => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setItem(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [productId]);
  return { loading, item, error };
};

export default useSingleItem;
