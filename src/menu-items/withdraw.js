// assets
import { IconBrandChrome, IconHelp, IconCash, IconCashBanknote } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp, IconCash, IconCashBanknote };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const withdraw = {
  id: 'sample-docs-roadmap',
  title: 'Withdraw',
  type: 'group',
  children: [
    {
      id: 'withdraw',
      title: 'Withdraw List',
      type: 'item',
      url: '/withdraw/list',
      icon: icons.IconCash
    },
    {
      id: 'withdraw-request',
      title: 'Withdraw Request',
      type: 'item',
      url: '/withdraw/request',
      icon: icons.IconCashBanknote
    },
    {
      id: 'confirm-withdraw',
      title: 'Confirm Withdraw',
      type: 'item',
      url: 'withdraw/confirm',
      icon: icons.IconHelp
    }
  ]
};

export default withdraw;
