import logo from '@/assets/images/logo.png'
import iconSmile from '@/assets/images/icon-smile.svg'

const Footer = () => {
  return (
    <footer className='relative flex gap-5 justify-between pl-10 pr-10 pt-[100px] pb-[100px] flex-wrap bg-black z-10'>
      <div className='absolute top-[100px] z-[-1] left-10'>
        <h1 className='text-[200px] max-sm:text-[60px] font-[900] opacity-15 z-[-1]'>9AM MEDIA</h1>
      </div>
      <div className='absolute bottom-[30px] right-[120px]'>
        <img src={iconSmile} alt='icon' className='w-[100px] opacity-20 ' />
      </div>
      <div className='absolute top-[30px] left-[120px]'>
        <img src={iconSmile} alt='icon' className='w-[100px] opacity-20 ' />
      </div>
      <div className='flex flex-col gap-5 w-[20%] max-sm:w-full'>
        <img src={logo} alt='' className='w-[50px]' />
        <span className='font-semibold'>9AM MEDIA CO., LTD</span>
        <span className='text-[14px] font-semibold '>
          Tầng 3A, 29 Yên Bái, Phường Hải Châu I, Quận Hải Châu, Thành phố Đà Nẵng, Việt Nam
        </span>
        <span className='font-semibold'>Mã số thuế: 0402217718</span>
      </div>

      <div className='flex flex-col gap-5'>
        <div className='flex items-center gap-2'>
          <span className='text-xl font-bold uppercase'>Hỗ trợ</span>
        </div>
        <div className='flex items-center gap-2'>
          <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z'
              fill='currentColor'
              fill-rule='evenodd'
              clip-rule='evenodd'
            ></path>
          </svg>
          <span>Tel: 070.336.3333</span>
        </div>
        <div className='flex items-center gap-2'>
          <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z'
              fill='currentColor'
              fill-rule='evenodd'
              clip-rule='evenodd'
            ></path>
          </svg>
          <span>lienhe@9am.media</span>
        </div>
        <div className='w-[250px] h-max bg-white p-3 flex items-center rounded-[10px]'>
          <input
            type='text'
            className='w-full h-[30px] outline-none bg-none text-black'
            placeholder='Nhập email vào đây...'
          />
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex items-center gap-2'>
          <span className='text-xl font-bold uppercase'>Dịch vụ</span>
        </div>
        <span>Dịch vụ Facebook</span>
        <span>Dịch vụ Tiktok</span>
        <span>Dịch vụ Instagram</span>
        <span>Truyền thông & xã hội</span>
      </div>
    </footer>
  )
}

export default Footer
