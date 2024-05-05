import BaseComponent from '@/components/BaseComponent'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'

const ApplicationLayout = () => {
  return (
    <>
      <BaseComponent />
      <div className='w-full flex flex-col'>
        <Navbar />
        <div className='h-full flex-1 mt-[90px]'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ApplicationLayout
