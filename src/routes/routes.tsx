import Home from '@/pages/Home/Home'
import React from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

const MainLayout = React.lazy(() => import('@/layouts/MainLayout'))
export const routes = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    index: true,
    element: <Navigate to='home' />,
    errorElement: <p>Opps, Page not found!</p>
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'home',
        element: <Home />
      }
    ]
  }
])
