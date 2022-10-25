import { Link } from 'react-router-dom';

import { useUser } from '../index';

const ProductDetails = () => {
  const { user, changeHandler } = useUser();
  return (
    <div>
      <h2>Detalhe de produto</h2>
      <p>Hello, {user && user.name}!</p>
      <input
        type='text'
        onChange={(e) => {
          changeHandler(e.target.value);
        }}
      />
    </div>
  );
};

export default ProductDetails;
