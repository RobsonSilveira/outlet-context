import Auth from '../../pages/Auth';
import Access from '../../pages/Auth/Access';
import RecoveryAccess from '../../pages/Auth/RecoveryAccess';

import { OAppModules } from '../../Data/AppModules/modules';
import Unauthorized from '../../pages/Unauthorized';

export const unprotectedRoutes = {
  path: 'hubba/autenticacao',
  title: 'Autenticacao',
  module: OAppModules.application,
  element: <Auth />,
  children: [
    {
      path: 'acesso',
      title: 'Login',
      index: true,
      module: OAppModules.application,
      element: <Access />
    },
    {
      path: 'recuperar',
      title: 'Recuperar senha',
      module: OAppModules.application,
      element: <RecoveryAccess />
    },
    {
      path: 'hubba/unauthorized',
      title: 'Página não autorizada',
      module: OAppModules.application,
      element: <Unauthorized />
    }
  ]
};
