const loader = ({ params }) => {
  const itemId = params.itemId;
  return { itemId };
};

export { loader };
