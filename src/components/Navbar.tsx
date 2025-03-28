import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
type NavbarLinks = {
  title: string
  path: string
}
const Navbar = () => {
  const location = useLocation()
  const navbarLinks: NavbarLinks[] = [
    {
      title: 'GIỚI THIỆU',
      path: 'gioi-thieu'
    },
    {
      title: 'DỰ ÁN',
      path: 'du-an'
    },
    {
      title: 'DỊCH VỤ',
      path: 'dich-vu'
    },
    {
      title: 'BÀI VIẾT',
      path: 'du-an'
    },
    {
      title: 'LIÊN HỆ',
      path: 'lien-he'
    },
    {
      title: 'Quảng cáo meta',
      path: 'quang-cao-meta'
    }
  ]
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)

  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'scroll'
    }
  }, [openSidebar])

  useEffect(() => {
    setOpenSidebar(false)
  }, [location.pathname])

  return (
    <div className={`w-[100vw] h-[90px] pl-5 pr-5 flex items-center justify-between bg-black fixed top-0 left-0 z-20`}>
      <div className='w-[1200px] m-auto flex items-center justify-between'>
        <Link to='/trang-chu' className=' text-xl font-medium text-secondary-foreground flex items-center gap-3'>
          <img src='/images/logo.png' alt='' className='w-[120px] max-sm:w-[90px]' />
        </Link>
        <div className='lg:hidden' onClick={() => setOpenSidebar(!openSidebar)}>
          <svg width='25' height='25' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z'
              fill='currentColor'
              fill-rule='evenodd'
              clip-rule='evenodd'
            ></path>
          </svg>
        </div>
        {openSidebar && (
          <div>
            <div className='w-[100vw] h-[100vh] bg-black z-10 opacity-90 fixed top-0 left-0'></div>
            <div
              className={`flex flex-col gap-5 p-5 hover:text-primary-foreground w-[300px] h-[100vh] fixed top-0 z-10 transform ${openSidebar ? 'translate-x-[-90%]' : 'translate-x-[200px]'} transition-transform bg-black`}
            >
              <div className='flex items-center justify-center w-[30px] h-[30px] rounded-md cursor-pointer ml-auto mr-[10px]'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  onClick={() => setOpenSidebar(false)}
                >
                  <path
                    d='M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z'
                    fill='currentColor'
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </div>
              <div className='flex items-center gap-2'>
                <img src='/images/logo.png' alt='/images/logo.png' className='w-[120px]' />
              </div>
              {navbarLinks.map((item, index) => {
                return (
                  <Link
                    to={item.path}
                    className='hover:text-primary-foreground transition-all text-[14px] font-semibold'
                    key={index}
                  >
                    {item.title}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
        <div className='hidden lg:flex items-center gap-5 uppercase font-medium'>
          {navbarLinks.map((item, index) => {
            return (
              <Link to={item.path} className='hover:text-primary-foreground transition-all font-bold' key={index}>
                {item.title}
              </Link>
            )
          })}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size='icon'>
                <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                <span className='sr-only'>Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
