import { Link } from 'react-router-dom'
import { Button } from './ui/button'
const Hero = () => {
  return (
    <div className='w-full min-h-[450px] bg-primary pt-[80px] pb-[100px]'>
      <div className='relative max-w-[1200px] m-auto h-max'>
        <h1
          className='lg:max-w-[70%] max-sm:text-[30px] text-[50px] font-[900] text-center m-auto uppercase text-[#ab3638] '
          data-aos='fade-right'
          data-aos-duration='1000'
        >
          Bắt đầu làm việc cùng chúng tôi!
        </h1>
      </div>
      <div className='w-max m-auto flex items-center justify-center mt-10 relative'>
        <div className='absolute top-0 left-[-200px] max-sm:left-[-120px] max-sm:top-[-60px] max-sm:transform max-sm:rotate-[30deg]'>
          <img src='/images/arrow-gif.gif' alt='' className='max-sm:w-[120px]'/>
        </div>
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
