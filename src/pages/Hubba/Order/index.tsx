import { getCompanyData } from '../../../Data/Company/gateway';

const Order = () => {
  const data = getCompanyData();
  return (
    <div>
      <h1>Order</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {JSON.stringify(data)}
      </div>
    </div>
  );
};

export default Order;
