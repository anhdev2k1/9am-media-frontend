import iconHeart from '@/assets/images/icon-heart.svg'
import iconHand from '@/assets/images/icon-hand.svg'
import iconSmile from '@/assets/images/icon-smile.svg'

import CustomButton from './Button'
const Hero = () => {
  return (
    <div className='w-full min-h-[450px] bg-primary pt-[100px] pb-[100px]'>
      <div className='relative max-w-[1200px] m-auto h-max'>
        <h1
          className='lg:max-w-[70%] max-sm:text-[30px] text-[50px] font-[900] text-center m-auto uppercase text-black '
          data-aos='fade-right'
          data-aos-duration='1000'
        >
          Bắt đầu làm việc cùng chúng tôi
        </h1>

        <div
          className='max-sm:hidden absolute bottom-[-100px] right-[150px] w-[100px] h-[100px] z-10 animate-wave'
          data-aos='fade-right'
          data-aos-duration='1000'
        >
          <img src={iconHeart} alt='' />
        </div>
        <div
          className='absolute top-[-100px] right-[150px] w-[100px] h-[100px] z-10 rotate-12  bg-blue-500 flex items-center justify-center rounded-[30px]'
          data-aos='zoom-out'
          data-aos-duration='2000'
        >
          <img src={iconHand} alt='' className='animate-wave' />
        </div>
        <div
          className='absolute top-[100px] left-[250px] w-[100px] h-[100px] z-10 animate-wave'
          data-aos='fade-left'
          data-aos-duration='3000'
        >
          <img src={iconSmile} alt='' />
        </div>
      </div>
      <CustomButton path='#' title='Liên Hệ' />
    </div>
  )
}

export default Hero
