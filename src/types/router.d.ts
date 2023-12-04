// 一级路由定义
interface RouteConfig {
  // 路由地址 必填
  path: string
  // 路由名称 可选
  name?: string
  // 页面组件 可选
  element?: JSX.Element
  // 图标
  icon?: JSX.Element
  // 子路由配置
  children?: Array<RouteChildrenConfig>
  // 权限
  permission?: string
  // 页面是否展示，有的路由是没有页面的不展示
  pageShow?: boolean
}

// 子路由定义
interface RouteChildrenConfig {
  index?: boolean
  // 路由地址 必填
  path?: string
  // 路由名称 可选
  name?: string
  // 页面组件 可选
  element?: JSX.Element
  icon?: JSX.Element
  permission?: string
  // 子路由配置
  children?: Array<RouteChildrenConfig>
}
