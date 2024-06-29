export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'navigation',
    title: 'Kiosk',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'dashboard',
        title: 'Kiosk Menu',
        type: 'item',
        url: '/component/home',
        icon: 'feather icon-home'
      }
    ]
  },
  // {
  //   id: 'ui-component',
  //   title: 'Kiosk Pages',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'basic',
  //       title: 'Kiosk ',
  //       type: 'collapse',
  //       icon: 'feather icon-box',
  //       children: [
  //         {
  //           id: 'button',
  //           title: 'Menu',
  //           type: 'item',
  //           url: '/component/home'
  //         },
  //         {
  //           id: 'badges',
  //           title: 'Services Expertize',
  //           type: 'item',
  //           url: '/component/services'
  //         },
  //         {
  //           id: 'breadcrumb-pagination',
  //           title: 'impact-insights',
  //           type: 'item',
  //           url: '/component/impact-insights'
  //         },
  //         // {
  //         //   id: 'collapse',
  //         //   title: 'career',
  //         //   type: 'item',
  //         //   url: '/component/career'
  //         // },
  //         // {
  //         //   id: 'tabs-pills',
  //         //   title: 'Tabs & Pills',
  //         //   type: 'item',
  //         //   url: '/component/tabs-pills'
  //         // },
  //         // {
  //         //   id: 'typography',
  //         //   title: 'Typography',
  //         //   type: 'item',
  //         //   url: '/component/typography'
  //         // }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'Authentication',
  //   title: 'Authentication',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'signup',
  //       title: 'Sign up',
  //       type: 'item',
  //       url: '/auth/signup',
  //       icon: 'feather icon-at-sign',
  //       target: true,
  //       breadcrumbs: false
  //     },
  //     {
  //       id: 'signin',
  //       title: 'Sign in',
  //       type: 'item',
  //       url: '/auth/signin',
  //       icon: 'feather icon-log-in',
  //       target: true,
  //       breadcrumbs: false
  //     }
  //   ]
  // },
  // {
  //   id: 'forms & tables',
  //   title: 'Cloudlabs Advantage',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'forms',
  //       title: 'Advantage Point',
  //       type: 'item',
  //       url: '/advantage',
  //       classes: 'nav-item',
  //       icon: 'feather icon-file-text'
  //     },
  //     // {
  //     //   id: 'tables',
  //     //   title: 'tables',
  //     //   type: 'item',
  //     //   url: '/tables',
  //     //   classes: 'nav-item',
  //     //   icon: 'feather icon-server'
  //     // }
  //   ]
  // },
  // {
  //   id: 'chart',
  //   title: 'Cloudlabs Users',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'apexchart',
  //       title: 'Users',
  //       type: 'item',
  //       url: '/users',
  //       classes: 'nav-item',
  //       icon: 'feather icon-pie-chart'
  //     }
  //   ]
  // },
  // {
  //   id: 'other',
  //   title: 'Jobs',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'sample-page',
  //       title: 'Jobs',
  //       type: 'item',
  //       url: '/jobs',
  //       classes: 'nav-item',
  //       icon: 'feather icon-sidebar'
  //     },
  //     {
  //       id: 'sample-page2',
  //       title: 'Job Applications',
  //       type: 'item',
  //       url: '/job-applications',
  //       classes: 'nav-item',
  //       icon: 'feather icon-sidebar'
  //     }
  //     // {
  //     //   id: 'menu-level',
  //     //   title: 'Menu Levels',
  //     //   type: 'collapse',
  //     //   icon: 'feather icon-menu',
  //     //   children: [
  //     //     {
  //     //       id: 'menu-level-2.1',
  //     //       title: 'Menu Level 2.1',
  //     //       type: 'item',
  //     //       url: 'javascript:',
  //     //       external: true
  //     //     },
  //     //     {
  //     //       id: 'menu-level-2.2',
  //     //       title: 'Menu Level 2.2',
  //     //       type: 'collapse',
  //     //       children: [
  //     //         {
  //     //           id: 'menu-level-2.2.1',
  //     //           title: 'Menu Level 2.2.1',
  //     //           type: 'item',
  //     //           url: 'javascript:',
  //     //           external: true
  //     //         },
  //     //         {
  //     //           id: 'menu-level-2.2.2',
  //     //           title: 'Menu Level 2.2.2',
  //     //           type: 'item',
  //     //           url: 'javascript:',
  //     //           external: true
  //     //         }
  //     //       ]
  //     //     }
  //     //   ]
  //     // }
  //   ]
  // }
];
