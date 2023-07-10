import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import GuestGuard from '../guards/GuestGuard';
// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication/Login')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/auth/login',
      element: (
        <GuestGuard>
          <AuthLogin3 />
        </GuestGuard>
      )
    }
  ]
};

export default AuthenticationRoutes;
