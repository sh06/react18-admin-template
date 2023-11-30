import { RouteObject, createBrowserRouter } from 'react-router-dom'
// 单独引入，因为这个时候数组，其他的事对象
import exceptRoute from './modules/except'

// 保存所有的路由
let routes: RouteObject[] = []

// 使用 Vite 提供的 Glob 导入来引入路由
// 引入 modules 下的除了 except.tsx 下的所有文件
const modules: Record<string, any> = import.meta.glob(
  ['./modules/**/*.tsx', '!./modules/**/except.tsx'],
  {
    eager: true
  }
)

// 循环文件内容，将路由定义的 default 加入到数组中
Object.keys(modules).forEach((key) => {
  routes.push(modules[key].default)
})

// 将 exceptRoute 路由数组加入
routes = routes.concat(...exceptRoute)

const router = createBrowserRouter(routes)

export default router