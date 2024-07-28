/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useQueryClient } from '@tanstack/react-query'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NavbarAdmin = () => {
  const queryClient = useQueryClient()
  const location = useLocation().pathname
  const navigate = useNavigate()
  const currentUser = queryClient.getQueryData(['me']) as any

  return (
    <div className='flex items-center justify-between p-3 h-[90px] bg-[#ab3638]'>
      <Link to='/admin/services'>9AM Media.</Link>
      <div className='flex items-center gap-5'>
        <Link
          to='/admin/services'
          className={`w-[140px] h-[90px] flex items-center justify-center ${location.includes('services') ? 'border-b-[5px] border-b-white' : ''}`}
        >
          Dịch vụ
        </Link>
        <Link
          to='/admin/blogs'
          className={`w-[140px] h-[90px] flex items-center justify-center ${location.includes('blogs') ? 'border-b-[5px] border-b-white' : ''}`}
        >
          Bài đăng
        </Link>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className='border-none outline-none text-lg'>
          👋 Hello, {currentUser?.metadata?.username}!
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Tài khoản</DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              localStorage.removeItem('x-access-token')
              navigate('/login')
            }}
          >
            Đăng xuất
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default NavbarAdmin
