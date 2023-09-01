'use client';

import {
  CloseOutlined,
  HomeOutlined,
  MenuOutlined,
} from '@ant-design/icons/lib/icons';
import { Button, Menu, MenuProps } from 'antd';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import './style.css';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  { type: 'divider' },

  getItem('Home', '', <HomeOutlined />),

  { type: 'divider' },

  getItem('amCharts', 'amchart', undefined, [
    getItem('Pie Chart', 'amchart/pie'),
    getItem('Bar Chart', 'amchart/bar'),
    getItem('Line Chart', 'amchart/line'),
  ]),

  { type: 'divider' },

  getItem('Table', 'table'),

  { type: 'divider' },

  getItem('Push Notification', 'push_notification'),

  { type: 'divider' },

  //   getItem('Logout', 'login', <LogoutOutlined />),

  //   { type: 'divider' },
];

// submenu keys of first level
const rootSubmenuKeys = ['', 'amchart', 'table', 'push_notification'];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [openKeys, setOpenKeys] = useState([rootSubmenuKeys[0]]);

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setToggleMenu(!toggleMenu);
    router.push(`/${e.key}`);
  };

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    pathname !== '/login' && (
      <nav>
        <div className='p-3 flex items-center drop_shadow gap-3'>
          {/* menu */}
          <Button
            icon={!toggleMenu ? <MenuOutlined /> : <CloseOutlined />}
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          />

          {/* logo */}
          <a
            onClick={() => {
              router.push(`/`);
            }}
            style={{ cursor: 'pointer' }}
          >
            Testing
          </a>
        </div>

        <Menu
          onClick={onClick}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ width: '100%', display: toggleMenu ? 'block' : 'none' }}
          // defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          mode='inline'
          items={items}
        />
      </nav>
    )
  );
}
