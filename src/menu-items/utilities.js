// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconUser, IconReportMoney } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconUser,
  IconReportMoney
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  type: 'group',
  title: 'User List',
  children: [
    {
      id: 'user',
      title: 'User List',
      type: 'collapse',
      icon: icons.IconUser,
      children: [
        {
          id: 'tabler-icons',
          title: 'Active User List',
          type: 'item',
          url: '/user/active',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Block User List',
          type: 'item',
          url: '/user/blocked',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Inative User',
          type: 'item',
          url: '/user/inactive',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Search User',
          type: 'item',

          url: '/user/search-user',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'icons',
      title: 'Invesment',
      type: 'collapse',
      icon: icons.IconReportMoney,
      children: [
        {
          id: 'tabler-icons',
          title: 'Invesment',
          type: 'item',
          url: '/invesment',
          breadcrumbs: false
        },
        {
          id: 'material-icons',
          title: 'Invesment Summary',
          type: 'item',
          url: '/invesment/summary',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default utilities;
