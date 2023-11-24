import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import '@/assets/style/global.scss'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
