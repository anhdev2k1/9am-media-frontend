import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Question from '@/components/Question'
import { Outlet } from 'react-router-dom'

const ApplicationLayout = () => {
  return (
    <>
      <div className='w-full flex flex-col overflow-x-hidden bg-[#efefef] font-play'>
        <Navbar />
        <div className='h-full flex-1 mt-[90px]'>
          <Outlet />
        </div>
        <Question />
        <Hero />
        <Footer />
      </div>
    </>
  )
}

export default ApplicationLayout
