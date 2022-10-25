import { useRoutes } from 'react-router-dom';

import { routesConfig } from './routesConfig';

const Routes = () => {
  const elements = useRoutes(routesConfig);
  return elements;
};

export default Routes;
