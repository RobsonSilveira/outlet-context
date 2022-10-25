import { Link } from 'react-router-dom';

import { useUser } from '../index';

const ProductListing = () => {
  const { user, changeHandler } = useUser();
  return (
    <div>
      <h2>Listagem de produto</h2>
      <p>Hello, {user && user.name}!</p>
    </div>
  );
};

export default ProductListing;
