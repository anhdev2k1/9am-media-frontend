import { authApi } from '@/apis/auth-api'
import { useQuery } from '@tanstack/react-query'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedLayout = () => {
  const { data: CurrentUser, isFetching } = useQuery({ queryKey: ['me'], queryFn: authApi.getMe })
  
  return !isFetching && !CurrentUser?.metadata.email ? <Navigate to='/login' /> : <Outlet />
}

export default ProtectedLayout
