import { useNavigate } from 'react-router-dom';

const RecoveryAccess = () => {
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
        <h1>Recuperar senha</h1>
      </header>
      <label>Email</label>
      <input type='text' />
      <button
        onClick={() => {
          navigate('../acesso');
        }}
      >
        Recuperar
      </button>
    </div>
  );
};

export default RecoveryAccess;
