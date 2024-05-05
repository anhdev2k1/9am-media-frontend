import { useState } from 'react'
import Banner from './Banner'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './home.scss'
import { categoryApi } from '@/apis/category-api'
import { useQuery } from '@tanstack/react-query'
import { AuroraBackground } from '@/components/AuroraBackground'
import { BentoGridItem } from '@/components/BentoGrid'
const Home = () => {
  const [slide, setSlide] = useState<number>(1)
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const feedbackSetting = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const fetchCategories = async () => {
    const res = await categoryApi.findAllCategories()
    return res.metadata
  }
  const { data: Categories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories
  })

  return (
    <div className='root'>
      <div
        className='w-[50px] h-[50px] rounded-[50%] shadow-md flex items-center justify-center bg-primary fixed bottom-5 right-5 z-10'
        onClick={() => window.scrollTo(0, 0)}
      >
        <svg width='25' height='25' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' color='white'>
          <path
            d='M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z'
            fill='currentColor'
            fill-rule='evenodd'
            clip-rule='evenodd'
          ></path>
        </svg>
      </div>
      <div className='w-full h-[800px] relative'>
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
      <div className='flex flex-col gap-5 relative  pt-[50px] pb-[100px]'>
        <div className='slider__bg'></div>
        <div className='max-sm:flex-col lg:flex items-center justify-between mb-[60px]'>
          <div className='max-sm:flex-col max-sm:text-center lg:flex items-center gap-4 p-5'>
            <div className='max-sm:hidden w-[90px] h-[3px] bg-secondary-foreground rounded-md line__1'></div>
            <div className='max-sm:hidden w-[35px] h-[35px] rounded-[50%] bg-primary animate-bounce'></div>
            <h1 className='text-3xl lg:text-[3rem] font-normal text-secondary-foreground'>Dịch Vụ</h1>
            <h1 className='text-[3rem] lg:text-[5rem] font-bold text-primary'>Nổi bật</h1>
          </div>
          <div className='border-l-[2px] border-primary p-5 lg:w-[50%] max-sm:text-center'>
            <p className=''>9AM Media mang đến sự trải nghiệm tốt nhất cho khách hàng với nhiều dịch vụ chất lượng.</p>
          </div>
        </div>
        <Slider {...settings} className='min-h-[350px] pb-[50px] pl-5 pr-5' autoplay>
          {Categories &&
            Categories.map((category) => {
              return (
                <BentoGridItem
                  title={category.name}
                  thumbnail={category.thumbnail}
                  description={category.description}
                  key={category._id}
                />
              )
            })}
        </Slider>
      </div>

      <div className='flex flex-col gap-4 p-3 mt-[50px] mb-[50px]'>
        <div className='max-sm:flex-col max-sm:text-center lg:flex items-center gap-4 p-5'>
          <div className='max-sm:hidden w-[90px] h-[3px] bg-secondary-foreground rounded-md line__1'></div>
          <div className='max-sm:hidden w-[35px] h-[35px] rounded-[50%] bg-primary animate-bounce'></div>
          <h1 className='text-3xl lg:text-[3rem] font-normal text-secondary-foreground'>Đánh giá</h1>
        </div>

        <Slider {...feedbackSetting} autoplay className='pb-[50px]'>
          <div className='max-sm:flex-col-reverse lg:flex items-center justify-between gap-5 feedback__item'>
            <div className='max-sm:w-full flex flex-col gap-3 lg:w-[50%] lg:ml-12 border-l-[3px] border-primary p-5'>
              <p className='max-sm:text-sm lg:text-lg font-normal leading-9'>
                Số 1 về chất lượng, từ khi dùng dịch vụ bên 9AM Media, doanh thu bán hàng tại shop mình tăng một cách
                bất ngờ. Mình rất hài lòng về chất lượng dịch vụ và sự hỗ trợ nhiệt tình.
              </p>
              <div className='flex items-center gap-3'>
                <img
                  src='https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-testimonial-3.png'
                  alt='feedback-avt'
                  className='w-[90px] h-[90px] rounded-[50%]'
                />
                <span className='max-sm:text-lg lg:text-xl font-medium'>Dyno - Shop</span>
              </div>
            </div>
            <img
              src='https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Testimonial-Large-Img-1.png'
              alt='feedback-img'
              className='w-[430px] h-[390px] object-cover'
            />
          </div>
          <div className='max-sm:flex-col-reverse lg:flex items-center justify-between gap-5 feedback__item'>
            <div className='max-sm:w-full flex flex-col gap-3 lg:w-[50%] lg:ml-12 border-l-[3px] border-primary p-5'>
              <p className='max-sm:text-sm lg:text-lg font-normal leading-9'>
                Số 1 về chất lượng, từ khi dùng dịch vụ bên 9AM Media, doanh thu bán hàng tại shop mình tăng một cách
                bất ngờ. Mình rất hài lòng về chất lượng dịch vụ và sự hỗ trợ nhiệt tình.
              </p>
              <div className='flex items-center gap-3'>
                <img
                  src='https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-testimonial-3.png'
                  alt='feedback-avt'
                  className='w-[90px] h-[90px] rounded-[50%]'
                />
                <span className='max-sm:text-lg lg:text-xl font-medium'>Dyno - Shop</span>
              </div>
            </div>
            <img
              src='https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Testimonial-Large-Img-1.png'
              alt='feedback-img'
              className='w-[430px] h-[390px] object-cover'
            />
          </div>
        </Slider>
      </div>

      <div className='flex flex-col justify-center gap-5 mt-[100px] p-5 pb-[100px]'>
        <div className='max-sm:flex-col lg:flex items-center justify-between mb-[60px]'>
          <div className='max-sm:flex-col max-sm:text-center lg:flex items-center gap-4 p-5'>
            <div className='max-sm:hidden w-[90px] h-[3px] bg-secondary-foreground rounded-md line__1'></div>
            <div className='max-sm:hidden w-[35px] h-[35px] rounded-[50%] bg-primary animate-bounce'></div>
            <h1 className='text-3xl lg:text-[3rem] font-normal text-secondary-foreground'>Thống kê</h1>
          </div>
          <div className='border-l-[2px] border-primary p-5 lg:w-[50%] max-sm:text-center'>
            <p className=''>
              Với kinh nghiệm nhiều năm trong lĩnh vực này, chúng tôi tự tin mang lại những điều tốt nhất cho khách hàng
            </p>
          </div>
        </div>
        <div className='max-sm:flex-col flex gap-3 items-center justify-center mt-[50px]'>
          <div className='w-[300px] h-[300px] rounded-[50%] border-[3px] border-primary flex flex-col justify-center items-center hover:animate-pulse'>
            <h1 className='font-bold text-[4rem] text-primary'>259,752</h1>
            <p className='font-semibold text-[20px]'>Lượt truy cập</p>
          </div>
          <div className='max-sm:hidden w-[150px] h-[3px] bg-primary rounded-md'></div>
          <div className='w-[300px] h-[300px] rounded-[50%] border-[3px] border-primary flex flex-col justify-center items-center hover:animate-pulse'>
            <h1 className='font-bold text-[4rem] text-primary'>99,782</h1>
            <p className='font-semibold text-[20px]'>Đơn hàng thành công</p>
          </div>
          <div className='max-sm:hidden w-[150px] h-[3px] bg-primary rounded-md'></div>
          <div className='w-[300px] h-[300px] rounded-[50%] border-[3px] border-primary flex flex-col justify-center items-center hover:animate-pulse'>
            <h1 className='font-bold text-[4rem] text-primary'>89,636</h1>
            <p className='font-semibold text-[20px]'>Lượt đánh giá 5*</p>
          </div>
        </div>
      </div>

      <AuroraBackground>
        <div className='max-sm:flex-col max-sm:text-center flex items-center justify-between mt-[50px] pb-[100px] pt-[100px]'>
          <div className='flex flex-col items-start gap-3 p-5 flex-1 w-max'>
            <h1 className='text-[2rem] font-bold lg:text-[4rem]'>Đừng Ngần Ngại</h1>
            <h1 className='text-[2rem] font-bold lg:text-[4rem]'>Số Hoá Doanh Nghiệp</h1>
            <h1 className='text-[4rem] font-extrabold lg:text-[5rem] text-primary text-start animate-pulse'>Của Bạn</h1>
          </div>
          <div className='w-full lg:w-[40%] border-l-2 border-primary flex-shrink-0 p-5 text-secondary-foreground'>
            <p>
              Với kinh nghiệm hơn 6 năm cung cấp dịch vụ. 9AM Media cam kết đem đến khách hàng chất lượng dịch vụ tốt
              nhất.
            </p>
            <div className='flex items-center gap-3 mt-[20px] slide__btn-more cursor-pointer'>
              <div className='w-[90px] h-[3px] bg-secondary-foreground rounded-md line__1'></div>
              <div className='w-[15px] h-[15px] rounded-[50%] bg-primary animate-bounce'></div>
              <span className='font-medium text-lg'>Bắt đầu cùng chúng tôi!</span>
            </div>
          </div>
        </div>
      </AuroraBackground>

      <div className='flex flex-col gap-5 relative pt-[100px] pb-[50px]'>
        <div className='max-sm:flex-col lg:flex items-center justify-between mb-[60px]'>
          <div className='max-sm:flex-col max-sm:text-center lg:flex items-center gap-4 p-5'>
            <div className='max-sm:hidden w-[90px] h-[3px] bg-secondary-foreground rounded-md line__1'></div>
            <div className='max-sm:hidden w-[35px] h-[35px] rounded-[50%] bg-primary animate-bounce'></div>
            <h1 className='text-3xl lg:text-[3rem] font-normal text-secondary-foreground'>Dự Án</h1>
            <h1 className='text-[3rem] lg:text-[5rem] font-bold text-primary'>Nổi bật</h1>
          </div>
          <div className='border-l-[2px] border-primary p-5 lg:w-[50%] max-sm:text-center'>
            <p className=''>
              Với kinh nghiệm nhiều năm trong lĩnh vực này, chúng tôi tự tin mang lại những điều tốt nhất cho khách hàng
            </p>
          </div>
        </div>
        <Slider {...settings} className='min-h-[350px] p-5 pb-[50px] mt-[100px]' autoplay>
          {Categories &&
            Categories.map((category) => {
              return (
                <BentoGridItem
                  title={category.name}
                  thumbnail={category.thumbnail}
                  description={category.description}
                  key={category._id}
                />
              )
            })}
        </Slider>
      </div>
    </div>
  )
}

export default Home
