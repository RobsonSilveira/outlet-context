import { getUserResponse } from '../User/gateway';

export const getCompanyData: any = () => {
  const userData = getUserResponse();

  let permissionList = userData && userData.body.lista_permissao;

  let companyData = permissionList.map((item) => {
    return { empresa_id: item.empresa_id, empresa_nome: item.empresa_nome };
  });

  return companyData;
};
