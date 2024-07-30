import { Link } from 'react-router-dom'
import { Button } from './ui/button'
const Hero = () => {
  return (
    <div className='w-full min-h-[450px] bg-primary pt-[80px] pb-[100px]'>
      <div className='relative max-w-[1200px] m-auto h-max'>
        <h1
          className='lg:max-w-[70%] max-sm:text-[30px] text-[50px] font-[900] text-center m-auto uppercase text-black '
          data-aos='fade-right'
          data-aos-duration='1000'
        >
          Bắt đầu làm việc cùng chúng tôi!
        </h1>
      </div>
      <div className='w-full flex items-center justify-center mt-10'>
        <Button className='button-27 !w-[220px]'>
          <Link to='' className='text-[1.1rem]'>
            Xem thêm
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Hero
