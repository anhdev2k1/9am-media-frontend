import { useState } from 'react'
import Banner from './Banner'
import './home.scss'
const Home = () => {
  const [slide, setSlide] = useState<number>(1)
  console.log(slide);
  
  return (
    <div className='w-full h-max relative'>
      <div className='banner'></div>

      {slide === 1 && (
        <Banner
          title1='9AM Media'
          title2='Giải Pháp Truyền Thông'
          title3='Dành Cho Bạn          '
          desc='9AM Media là đơn vị truyền thông với đội ngũ trẻ và năng động, chuyên cung cấp các giải pháp và dịch vụ trong lĩnh vực truyền thông. Chúng tôi luôn đặt sự hài lòng của khách hàng làm “kim chỉ nam” trong suốt quá trình làm việc.'
          setBanner={setSlide}
        />
      )}

      {slide === 2 && (
        <Banner
          title1='Ngôi Nhà Của Những'
          title2='Giải Pháp Và Chiến Lược'
          title3='Nhất Thị Trường'
          desc='Mục tiêu lớn nhất của chúng tôi là trở thành đối tác, một người bạn đồng hành đáng tin của khách hàng trên hành trình xây dựng thành tựu. Biến những ý tưởng thành hiện thực tạo ra giá trị gia tăng thực tế, mang lại sự tăng trưởng về quy mô và mở rộng tầm ảnh hưởng của thương hiệu trên thị trường.'
          setBanner={setSlide}
        />
      )}
    </div>
  )
}

export default Home
