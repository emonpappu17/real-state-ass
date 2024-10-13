import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Routes/Route.jsx'
import AuthProvider from './Pages/Shared/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={route}></RouterProvider></AuthProvider>
  </StrictMode>,
)
