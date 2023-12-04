import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/index.ts'
import { RouterProvider } from 'react-router-dom'
import router from '@/router/index'
import 'normalize.css'
import '@/assets/style/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback="<div>..loading</div>">
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </Provider>
  </React.StrictMode>,
)
