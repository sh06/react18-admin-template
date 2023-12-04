import { MenuProps } from "antd";

import React from 'react'
import {
  AppstoreOutlined,
} from '@ant-design/icons'

export type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export function makeMenu(menuList: Array<object>) {
  return format(menuList)
}

function format(data) {
  const list = []
  for (const d of data) {
    if (d.children) {
      list.push(getItem(d.name, d.route, <AppstoreOutlined />, [...format(d.children)]))
    } else {
      list.push(getItem(d.name, d.route, <AppstoreOutlined />))
    }
  }

  return list
}