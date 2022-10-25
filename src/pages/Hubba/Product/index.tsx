import { useState } from 'react';
import {
  NavLink,
  Outlet,
  useOutletContext,
  useNavigate
} from 'react-router-dom';

import type { UserProps } from '../../../types/User';

import { productRoutes } from '../../../Routes/protected';

type ContextType = {
  user: UserProps | null;
  changeHandler: (value?: string | undefined, key?: string) => void;
};

const Product = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProps | null>({ name: 'Robson' });

  const changeHandler = (e: any) => {
    setUser({ ...user, name: e });
  };

  return (
    <div>
      <header
        style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}
      >
        <button
          onClick={() => {
            navigate('../home');
          }}
        >
          Home
        </button>
        {productRoutes
          .children!.filter((r: any) => !r.hiddenOnTab)
          .map((config: any, index: number) => (
            <NavLink
              key={index}
              to={config.path}
              className={({ isActive }) => (isActive ? 'active' : 'outline')}
            >
              {config.title}
            </NavLink>
          ))}
      </header>
      <input
        type='text'
        value={user?.name}
        onChange={(e) => {
          changeHandler(e.target.value);
        }}
      />
      <button>Change user</button>
      <Outlet context={{ user, changeHandler }} />
    </div>
  );
};

export default Product;

export function useUser() {
  return useOutletContext<ContextType>();
}
