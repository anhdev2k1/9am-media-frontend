import { Link } from 'react-router-dom'

type NavbarLinks = {
  title: string
  path: string
}
const Navbar = () => {
  const navbarLinks: NavbarLinks[] = [
    {
      title: 'Trang chủ',
      path: '#'
    },
    {
      title: 'Về chúng tôi',
      path: '#'
    },
    {
      title: 'Đối tác',
      path: '#'
    },
    {
      title: 'Dự án',
      path: '#'
    },
    {
      title: 'Tuyển dụng',
      path: '#'
    },
    {
      title: 'Liên hệ',
      path: '#'
    }
  ]
  return (
    <div className='w-full h-[90px] pl-5 pr-5 flex items-center justify-between'>
      <h1 className='text-3xl font-medium'>9AM Media.</h1>
      <div className='flex items-center gap-5 uppercase font-medium'>
        {navbarLinks.map((item, index) => {
          return (
            <Link to={item.path} className='hover:text-red-600 transition-all text-base' key={index}>
              {item.title}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
