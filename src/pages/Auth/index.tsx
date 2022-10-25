import { Outlet, useLocation } from 'react-router-dom';

const Auth = () => {
  return (
    <div>
      <header>Auth Outlet</header>
      <Outlet />
    </div>
  );
};

export default Auth;
