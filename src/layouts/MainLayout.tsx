import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'

const ApplicationLayout = () => {
  return (
    <div className='w-full flex flex-col'>
      <Navbar />
      <div className='h-full flex-1'>
        <Outlet />
      </div>
    </div>
  )
}

export default ApplicationLayout
