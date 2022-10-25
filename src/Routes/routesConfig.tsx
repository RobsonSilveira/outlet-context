import { productRoutes } from './protected';
import { unprotectedRoutes } from './unprotected';

import Hubba from '../pages/Hubba';
import Home from '../pages/Hubba/Home';
import Order from '../pages/Hubba/Order';

import { OAppModules } from '../Data/AppModules/modules';

export const routesConfig = [
  unprotectedRoutes,
  {
    path: 'hubba',
    title: 'hubba',
    module: OAppModules.application,
    element: <Hubba />,
    children: [
      productRoutes,
      {
        path: 'home',
        title: 'Home',
        module: OAppModules.application,
        element: <Home />
      },
      {
        path: 'pedidos',
        title: 'Pedidos',
        module: OAppModules.vanilla,
        element: <Order />
      }
    ]
  }
];
