import { useEffect, useState } from 'react';

const useItems = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setItems(res);
      })
      .catch((err) => setError(err));
  }, []);
  return { loading, items, error };
};

export default useItems;
