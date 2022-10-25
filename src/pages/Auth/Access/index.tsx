import { useNavigate } from 'react-router-dom';

const Access = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <header>
        <h1>Login</h1>
      </header>
      <label>Email</label>
      <input type='text' />
      <label>Senha</label>
      <input type='text' />
      <button
        onClick={() => {
          console.log('\nAccessing');
          navigate('/hubba/home');
        }}
      >
        Acessar
      </button>
      <button
        onClick={() => {
          navigate('recuperar');
        }}
      >
        Recuperar senha
      </button>
    </div>
  );
};

export default Access;
