import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { QueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

const NavbarAdmin = () => {
  const queryClient = new QueryClient()

  const currentUser  = queryClient.getQueryData(['me'])
  console.log(currentUser);
  return (
    <div className='flex items-center justify-between p-3 h-[90px] bg-primary'>
      <Link to='/admin/services'>9AM Media.</Link>
      <div className=''>
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
    </div>
  )
}

export default NavbarAdmin
