import { useNavigate } from 'react-router-dom';
import { getCompanyData } from '../../../Data/Company/gateway';

const Home = () => {
  const navigate = useNavigate();
  const data = getCompanyData();

  const options = [
    { label: 'Pedidos', to: '../pedidos' },
    { label: 'Produtos', to: '../produtos/listagem' }
  ];

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          navigate('../autenticacao/acesso');
        }}
      >
        Desconectar
      </button>
      <br />

      {options &&
        options.map((op, index) => (
          <button
            key={index}
            onClick={() => {
              navigate(op.to);
            }}
          >
            {op.label}
          </button>
        ))}

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {JSON.stringify(data)}
      </div>
    </div>
  );
};

export default Home;
