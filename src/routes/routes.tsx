import Login from '@/admin/pages/Login'
import ServiceDetail from '@/admin/pages/services-page/ServiceDetail'
import Services from '@/admin/pages/services-page/Services'
import ProtectedLayout from '@/layouts/ProtectedLayout'
import Notfound from '@/pages/404/Notfound'
import Detail from '@/pages/Detail/Detail'
import React, { Suspense } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

const MainLayout = React.lazy(() => import('@/layouts/MainLayout'))

const HomePage = React.lazy(() => import('@/pages/Home/Home'))
const ListPage = React.lazy(() => import('@/pages/List/List'))
export const routes = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    index: true,
    element: <Navigate to='home' />,
    errorElement: <Notfound />
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'home',
        element: (
          <Suspense>
            <HomePage />
          </Suspense>
        )
      },
      {
        path: 'services',
        element: (
          <Suspense>
            <ListPage />
          </Suspense>
        )
      },
      {
        path: 'projects',
        element: (
          <Suspense>
            <ListPage />
          </Suspense>
        )
      },
      {
        path: 'projects/:project_slug/:detail_slug',
        element: (
          <Suspense>
            <Detail />
          </Suspense>
        )
      },
      {
        path: 'services/:service_slug/:detail_slug',
        element: (
          <Suspense>
            <Detail />
          </Suspense>
        )
      }
    ]
  },
  {
    path: 'login',
    element: (
      <Suspense>
        <Login />
      </Suspense>
    )
  },
  {
    path: '/admin',
    element: <ProtectedLayout />,
    errorElement: <Notfound />,
    children: [
      {
        path: 'services',
        element: (
          <Suspense>
            <Services />
          </Suspense>
        )
      },
      {
        path: 'blogs',
        element: (
          <Suspense>
            <Services />
          </Suspense>
        )
      },
      {
        path: 'services/:service_slug',
        element: (
          <Suspense>
            <ServiceDetail />
          </Suspense>
        )
      },
      {
        path: 'blogs/:blog_slug',
        element: (
          <Suspense>
            <ServiceDetail />
          </Suspense>
        )
      }
    ]
  }
])
