import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { QueryClient } from '@tanstack/react-query'
import { Link, useLocation } from 'react-router-dom'

const NavbarAdmin = () => {
  const queryClient = new QueryClient()
  const location = useLocation().pathname

  const currentUser = queryClient.getQueryData(['me'])
  return (
    <div className='flex items-center justify-between p-3 h-[90px] bg-[#ab3638]'>
      <Link to='/admin/categories'>9AM Media.</Link>
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
        <DropdownMenuTrigger className='border-none outline-none text-lg'>👋 Hello, Admin!</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Tài khoản</DropdownMenuItem>
          <DropdownMenuItem disabled>Billing</DropdownMenuItem>
          <DropdownMenuItem disabled>Team</DropdownMenuItem>
          <DropdownMenuItem disabled>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default NavbarAdmin
