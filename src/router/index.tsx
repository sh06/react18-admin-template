import { RouteObject, createBrowserRouter } from 'react-router-dom'
// 单独引入，因为这个时候数组，其他的事对象
import exceptRoute from './modules/except'
import homeRoute from './modules/home'

// 保存所有的路由
let routes: RouteConfig[] = []
// 保存所有 layout 的子路由
const childrenRouter: RouteChildrenConfig[] = []
// 保存 home 路由
const baseRoute: RouteConfig = homeRoute

// 子路由先放 home 的子路由
childrenRouter.push(...homeRoute.children)

// 使用 Vite 提供的 Glob 导入来引入路由
// 引入 modules 下的除了 except.tsx 下的所有文件
const modules: Record<string, any> = import.meta.glob(
  ['./modules/**/*.tsx', '!./modules/**/except.tsx', '!./modules/**/home.tsx'],
  {
    eager: true
  }
)

// 循环文件内容，将路由定义的 default 加入到子路由数组中
Object.keys(modules).forEach((key) => {
  childrenRouter.push(modules[key].default)
})

// 所有的子路由替换原来的路由
baseRoute.children = childrenRouter

routes.push(baseRoute)

// 将 exceptRoute 路由数组加入
routes = routes.concat(...exceptRoute)

const router = createBrowserRouter(routes as RouteObject[])

export default router