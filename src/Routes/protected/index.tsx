import Product from '../../pages/Hubba/Product';
import ProductDetails from '../../pages/Hubba/Product/ProductDetails';
import ProductEditing from '../../pages/Hubba/Product/ProductEditing';
import ProductListing from '../../pages/Hubba/Product/ProductListing';

import { OAppModules } from '../../Data/AppModules/modules';

export const productRoutes = {
  path: 'produtos',
  title: 'Produtos',
  module: OAppModules.suc,
  element: <Product />,
  children: [
    {
      path: 'detalhes',
      title: 'Detalhe do Produto',
      module: OAppModules.suc,
      element: <ProductDetails />,
      hiddenOnTab: false
    },
    {
      path: 'edicao',
      title: 'Edição de Produto',
      module: OAppModules.suc,
      element: <ProductEditing />,
      hiddenOnTab: false
    },
    {
      path: 'listagem',
      title: 'Listagem de Produtos',
      index: true,
      module: OAppModules.suc,
      element: <ProductListing />,
      hiddenOnTab: false
    }
  ]
};
