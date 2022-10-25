import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Unauthorized from '../Unauthorized';

const useAuth = () => {
  let user = {
    isLogged: true,
    resources: ['hubba/home', 'hubba/produtos'],
    claimsByResource: [
      {
        resource: 'hubba/pedidos',
        actions: ['read', 'create', 'update', 'delete']
      },
      {
        resource: 'hubba/produtos',
        actions: ['read', 'create', 'update', 'delete']
      }
    ]
  };

  return user;
};

const Hubba = () => {
  const user = useAuth();
  const location = useLocation();
  const [currentResource, setCurrentResource] = useState('hubba/home');

  const getCurrentResource = () => {
    const fullResource = location.pathname;
    let splittedResource = fullResource.split('/');
    let resource = splittedResource[1] + '/' + splittedResource[2];
    // console.log('\nResource: ', resource);
    setCurrentResource(resource);
  };

  useEffect(() => {
    getCurrentResource();
  }, [location]);

  return user?.isLogged ? (
    user.resources.includes(currentResource) ? (
      <div>
        <header>Hubba Outlet</header>
        <Outlet />
      </div>
    ) : (
      <Unauthorized />
    )
  ) : (
    <Navigate to='/hubba/autenticacao/acesso' />
  );
};

export default Hubba;
