import { DashboardOutlined, PlusCircleOutlined, FileTextOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const extraNavTree = [
  {
    key: 'extra',
    path: `${APP_PREFIX_PATH}/pages`,
    title: 'sidenav.pages',
    icon: PlusCircleOutlined,
    breadcrumb: true,
    isGroupTitle: true,
    submenu: [
      {
        key: 'extra-pages',
        path: `${APP_PREFIX_PATH}/pages`,
        title: 'sidenav.pages',
        icon: FileTextOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'extra-pages-list',
            path: `${APP_PREFIX_PATH}/pages/user-list`,
            title: 'sidenav.pages.userlist',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
        ]
      }
    ]
  }
]

const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'sidenav.dashboard.default',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...extraNavTree
]

export default navigationConfig;
