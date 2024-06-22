import NavbarAdmin from '@/admin/components/Navbar'
import { authApi } from '@/apis/auth-api'
import { useQuery } from '@tanstack/react-query'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedLayout = () => {
  const { data: CurrentUser, isFetching } = useQuery({ queryKey: ['me'], queryFn: authApi.getMe })

  console.log(CurrentUser)

  return !isFetching && !CurrentUser?.metadata.email && !CurrentUser ? (
    <Navigate to='/login' />
  ) : (
    <>
      <NavbarAdmin />
      <Outlet />
    </>
  )
}

export default ProtectedLayout
