const Footer = () => {
  return (
    <footer className='flex items-center gap-5 justify-between p-5 pt-[100px] pb-[100px] flex-wrap'>
      <div className='flex flex-col gap-5 w-[20%]'>
        <span className='text-2xl font-semibold'>9AM Media.</span>
        <span>
          Sodales ut etiam sit amet. Eget nulla facilisi etiam dignissim. Aliquam vestibulum morbi blandit cursus risus.
          Ultrices vitae auctor eu augue ut lectus. Ultricies integer quis auctor elit sed vulputate mi sit amet.
        </span>
      </div>

      <div className='flex flex-col gap-5'>
        <div className='flex items-center gap-2'>
          <div className='w-[50px] h-[3px] bg-secondary-foreground rounded-md line__1'></div>
          <div className='w-[15px] h-[15px] rounded-[50%] bg-primary animate-bounce'></div>
          <span className='text-xl font-semibold'>Liên hệ</span>
        </div>
        <span>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</span>
        <span>Phone : +000 - 123 - 456789</span>
        <span>Mail : info@example.com</span>
        <span>Working Hours : 8hrs</span>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex items-center gap-2'>
          <div className='w-[50px] h-[3px] bg-secondary-foreground rounded-md line__1'></div>
          <div className='w-[15px] h-[15px] rounded-[50%] bg-primary animate-bounce'></div>
          <span className='text-xl font-semibold'>Dịch vụ</span>
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
