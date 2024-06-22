import iconHand from '@/assets/images/icon-hand.svg'
import iconSmile from '@/assets/images/icon-smile.svg'
const ContactUs = () => {
  return (
    <div>
      <div className='w-max relative m-auto pt-[50px]'>
        <h1 className='text-[100px] font-[900] uppercase text-primary leading-[186px]'>Chào bạn</h1>
        <div className='w-[96px] h-[96px] rounded-[20px]  bg-primary flex items-center justify-center absolute top-[40px] right-[-70px] rotate-[20deg] shadow-md z-10'>
          <img src={iconHand} alt='icon-hand' className='w-[70px] h-[70px] animate-wave' />
        </div>
        <div className='absolute bottom-[-20px] right-[-140px]'>
          <img src={iconSmile} alt='icon-smile' />
        </div>
      </div>
      <p className='text-[30px] text-primary font-bold text-center pt-[50px]'>
        TRAO ĐỔI THÊM VỀ DỰ ÁN CỦA BẠN VÀ BẮT ĐẦU PHÁT TRIỂN CÙNG 9AM MEDIA
      </p>
    </div>
  )
}

export default ContactUs
