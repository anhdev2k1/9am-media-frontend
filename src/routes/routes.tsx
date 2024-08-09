import Login from '@/admin/pages/Login'
import ListBlog from '@/admin/pages/blog-page/ListBlog'
import Customer from '@/admin/pages/customer-page/Customer'
import CreateService from '@/admin/pages/services-page/CreateService'
import ServiceDetail from '@/admin/pages/services-page/ServiceDetail'
import Services from '@/admin/pages/services-page/Services'
import ListService from '@/admin/pages/services-page/ServicesList'
import Loading from '@/components/Loading/Loading'
import ProtectedLayout from '@/layouts/ProtectedLayout'
import Notfound from '@/pages/404/Notfound'
import React, { Suspense } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

const MainLayout = React.lazy(() => import('@/layouts/MainLayout'))

const HomePage = React.lazy(() => import('@/pages/Home/Home'))
const ListPage = React.lazy(() => import('@/pages/List/List'))
const AboutUsPage = React.lazy(() => import('@/pages/AboutUs/AboutUs'))
const DetailPage = React.lazy(() => import('@/pages/Detail/Detail'))
const ContactUsPage = React.lazy(() => import('@/pages/ContactUs/ContactUs'))

export const routes = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    index: true,
    element: <Navigate to='trang-chu' />,
    errorElement: <Notfound />
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/trang-chu',
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        )
      },
      {
        path: '/gioi-thieu',
        element: (
          <Suspense fallback={<Loading />}>
            <AboutUsPage />
          </Suspense>
        )
      },
      {
        path: '/lien-he',
        element: (
          <Suspense fallback={<Loading />}>
            <ContactUsPage />
          </Suspense>
        )
      },
      {
        path: 'dich-vu',
        element: (
          <Suspense fallback={<Loading />}>
            <ListPage />
          </Suspense>
        )
      },
      {
        path: 'dich-vu/:service_id',
        element: (
          <Suspense fallback={<Loading />}>
            <ListPage />
          </Suspense>
        )
      },
      {
        path: 'dich-vu/:service_id/:detail',
        element: (
          <Suspense fallback={<Loading />}>
            <DetailPage />
          </Suspense>
        )
      },
      {
        path: 'du-an',
        element: (
          <Suspense fallback={<Loading />}>
            <ListPage />
          </Suspense>
        )
      },
      {
        path: 'du-an/:project_slug',
        element: (
          <Suspense fallback={<Loading />}>
            <DetailPage />
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
        path: 'services/:service_slug',
        element: (
          <Suspense>
            <ListService />
          </Suspense>
        )
      },
      {
        path: 'services/:service_slug/create',
        element: (
          <Suspense>
            <CreateService />
          </Suspense>
        )
      },
      {
        path: 'services/:service_slug/:service_detail',
        element: (
          <Suspense>
            <ServiceDetail />
          </Suspense>
        )
      },
      {
        path: 'blogs',
        element: (
          <Suspense>
            <ListBlog />
          </Suspense>
        )
      },
      {
        path: 'blogs/create',
        element: (
          <Suspense>
            <CreateService />
          </Suspense>
        )
      },
      {
        path: 'blogs/:blog_detail',
        element: (
          <Suspense>
            <ServiceDetail />
          </Suspense>
        )
      },
      {
        path: 'customers',
        element: (
          <Suspense>
            <Customer />
          </Suspense>
        )
      }
    ]
  }
])
