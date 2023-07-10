import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from '../guards/AuthGuard';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default/adminIndex')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const Investment = Loadable(lazy(() => import('views/investment/index')));
const InvestmentSummary = Loadable(lazy(() => import('views/investment/InvestmentSummary')));
const ActiveUser = Loadable(lazy(() => import('views/user/ActiveUser')));
const InactiveUser = Loadable(lazy(() => import('views/user/InactiveUser')));
const BlockUser = Loadable(lazy(() => import('views/user/BlockUser')));
const SearchUser = Loadable(lazy(() => import('views/user/SearchUser')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

const WithdrawRequest = Loadable(lazy(() => import('views/withdraw/withdrawRequest')));
const ConfirmWithdrawRequest = Loadable(lazy(() => import('views/withdraw/ConfirmWithRequest')));
const Withdraw = Loadable(lazy(() => import('views/withdraw')));
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const Logout = Loadable(lazy(() => import('views/logout')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'user',
      children: [
        {
          path: 'active',
          element: <ActiveUser />
        },
        {
          path: 'blocked',
          element: <BlockUser />
        },
        {
          path: 'inactive',
          element: <InactiveUser />
        },
        {
          path: 'search-user',
          element: <SearchUser />
        }
      ]
    },
    {
      path: 'invesment',
      children: [
        {
          path: '/invesment',
          element: <Investment />
        },
        {
          path: '/invesment/summary',
          element: <InvestmentSummary />
        }
      ]
    },
    {
      path: 'withdraw',
      children: [
        {
          path: 'list',
          element: <Withdraw />
        },
        {
          path: 'request',
          element: <WithdrawRequest />
        },
        {
          path: 'confirm',
          element: <ConfirmWithdrawRequest />
        }
      ]
    },
    {
      path: 'util',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: '/logout',
      element: <Logout />
    }
  ]
};

export default MainRoutes;
