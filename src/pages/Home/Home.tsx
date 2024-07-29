import { blogApi } from '@/apis/blogApi-api'
import { categoryApi } from '@/apis/category-api'
import icon1 from '@/assets/images/icon-1.png'
import icon3 from '@/assets/images/icon-3.png'
import iconHand from '@/assets/images/icon-hand.svg'
import iconHeart from '@/assets/images/icon-heart.svg'
import iconSmile from '@/assets/images/icon-smile.svg'
import likeIcon from '@/assets/images/like.png'
import noImage from '@/assets/images/no-image.png'
import CustomButton from '@/components/Button'
import { CardBody, CardContainer, CardItem } from '@/components/Card3D'
import { useQuery } from '@tanstack/react-query'
import './home.scss'
import { Link } from 'react-router-dom'
const useFetch = () => {
  const { data: ListCategory, isLoading: CategoryLoading } = useQuery({
    queryKey: ['list-category'],
    queryFn: () => categoryApi.findAllCategories(1, 6)
  })

  const { data: ListBlog, isLoading: BlogLoading } = useQuery({
    queryKey: ['list-blog'],
    queryFn: () => blogApi.findAllBlog(1, 10)
  })

  //return
  return {
    ListCategory,
    CategoryLoading,
    ListBlog,
    BlogLoading
  }
}

const Home = () => {
  const { ListCategory, CategoryLoading, ListBlog, BlogLoading } = useFetch()
  return (
    <div className='w-full min-h-[400px]'>
      <section className='w-full lg:h-[100vh]'>
        <video
          autoPlay
          muted
          playsInline
          loop
          className='max-sm:h-[40vh] lg:h-[100vh] w-full object-cover object-center block'
        >
          <source src='https://designmarket.vn/wp-content/uploads/2023/10/A_HOME_BANNER_V1.mp4' />
        </video>
      </section>

      <section className='p-5'>
        <div className='w-max relative m-auto pt-[50px]'>
          <h1
            className='max-sm:text-[50px] lg:text-[100px] font-[900] uppercase text-primary leading-[186px]'
            data-aos='fade-up'
            data-aos-duration='500'
          >
            Chào bạn
          </h1>
          <div className='max-sm:h-[50px] w-[50px] top-[90px] max-sm:right-[-30px] lg:w-[96px] h-[96px] rounded-[20px]  bg-primary flex items-center justify-center absolute lg:top-[40px] right-[-70px] rotate-[20deg] shadow-md z-10'>
            <img
              src={iconHand}
              alt='icon-hand'
              className='max-sm:h-[30px] w-[30px] lg:w-[70px] lg:h-[70px] animate-wave'
            />
          </div>
          <div
            className='max-sm:top-[50px] max-sm:left-0 absolute lg:bottom-[-20px] lg:right-[-140px]'
            data-aos='fade-left'
            data-aos-duration='1500'
          >
            <img src={iconSmile} alt='icon-smile' className='max-sm:w-[70px]' />
          </div>
        </div>
        <p
          className='max-sm:max-w-full max-sm:text-[20px] lg:max-w-[70%] text-[25px] font-extrabold uppercase text-primary m-auto text-center mt-[50px]'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          Cùng khám phá chuỗi dịch vụ truyền thông sáng tạo và công nghệ đa phương tiện của chúng tôi.
        </p>

        <div className='relative w-[50%] m-auto min-h-[300px] mt-[100px]'>
          <img
            src={icon1}
            alt=''
            className='absolute max-sm:top-[200px] left-0 w-[70px] lg:top-[50%] lg:left-[50px] animate-bounce'
          />
          <img src={icon3} alt='' className='absolute max-sm:w-[80px] bottom-[-100px] right-0 animate-bounce' />

          <CustomButton path='gioi-thieu' title='Xem thêm' />
        </div>
      </section>
      <section className='mt-[100px] w-full min-h-[300px] relative p-5'>
        <h1
          className='max-sm:max-w-full max-sm:text-[20px] break-words lg:max-w-[70%] lg:text-[50px] font-[800] text-center m-auto uppercase text-primary '
          data-aos='fade-left'
          data-aos-duration='500'
        >
          Chúng tôi biết bạn đang có một sản phẩm tốt và doanh nghiệp của bạn cần được
        </h1>
        <div className='absolute top-[25%] left-[85%]' data-aos='fade-right' data-aos-duration='1500'>
          <img src={iconSmile} alt='icon-smile' className='max-sm:w-[80px]' />
        </div>
      </section>

      <section
        className='sm:grid-cols-1 grid lg:grid-cols-3 gap-8 justify-center p-5 max-w-[1200px] m-auto '
        data-aos='fade-up'
        data-aos-duration='2500'
      >
        <CardContainer className='inter-var'>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  '>
            <CardItem translateZ='50' className='text-xl font-bold text-neutral-600 dark:text-white'>
              Nhận diện tốt hơn
            </CardItem>
            <CardItem as='p' translateZ='60' className='text-neutral-500 text-sm  mt-2 dark:text-neutral-300'>
              Nhận diện tốt hơn trên các nền tảng
            </CardItem>
            <CardItem translateZ='100' rotateX={20} rotateZ={-10} className='w-full mt-4'>
              <img
                src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
            <div className='flex justify-between items-center mt-20'>
              <CardItem
                translateZ={20}
                translateX={40}
                as='button'
                className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                Xem thêm
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className='inter-var'>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  '>
            <CardItem translateZ='50' className='text-xl font-bold text-neutral-600 dark:text-white'>
              Tăng lợi thế cạnh tranh
            </CardItem>
            <CardItem as='p' translateZ='60' className='text-neutral-500 text-sm  mt-2 dark:text-neutral-300'>
              Tăng lợ thế cạnh tranh trên các nền tảng
            </CardItem>
            <CardItem translateZ='100' rotateX={20} rotateZ={-10} className='w-full mt-4'>
              <img
                src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
            <div className='flex justify-between items-center mt-20'>
              <CardItem
                translateZ={20}
                translateX={40}
                as='button'
                className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                Xem thêm
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className='inter-var'>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  '>
            <CardItem translateZ='50' className='text-xl font-bold text-neutral-600 dark:text-white'>
              Thu hút khách hàng
            </CardItem>
            <CardItem as='p' translateZ='60' className='text-neutral-500 text-sm  mt-2 dark:text-neutral-300'>
              Dễ dàng thu hút mọi tệp khách hàng
            </CardItem>
            <CardItem translateZ='100' rotateX={20} rotateZ={-10} className='w-full mt-4'>
              <img
                src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
            <div className='flex justify-between items-center mt-20'>
              <CardItem
                translateZ={20}
                translateX={40}
                as='button'
                className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                Xem thêm
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </section>

      <section className='bg-primary min-h-[400px] pt-[100px] pb-[100px] p-5'>
        <div className='relative w-full h-max'>
          <h1
            className='max-sm:max-w-full text-[20px] lg:max-w-[70%] lg:text-[50px] font-[800] text-center m-auto uppercase text-primary '
            data-aos='fade-up'
            data-aos-duration='500'
          >
            Chúng tôi tự hào đồng hành cùng thương hiệu Việt Nam
          </h1>
          <div className='max-sm:w-[50px] h-[50px] bottom-[-50px] right-[0px] lg:w-[100px] lg:h-[100px] rounded-[30px] bg-blue-600 flex items-center justify-center absolute lg:top-[40px] lg:right-[200px] transform rotate-12'>
            <img src={likeIcon} alt='' className='animate-wave max-sm:w-[30px]' />
          </div>
        </div>
        <div
          className='sm:grid-cols-1 w-full grid lg:grid-cols-3 gap-10 max-w-[1200px] m-auto mt-[100px]'
          data-aos='fade-up'
          data-aos-duration='2500'
        >
          <div className='min-h-[250px] cursor-pointer group'>
            <div className='border-[2px] border-primary relative p-5 rounded-[40px] group-hover:bg-[#ab3638] transition-colors'>
              <img src={noImage} alt='no-image' className='w-full rounded-[20px]' />
              <div className='absolute max-sm:w-[60px] right-0 bottom-[-60px] lg:bottom-[-40px] lg:right-[-40px] w-[100px] h-[100px] z-10'>
                <img src={iconSmile} alt='' />
              </div>
            </div>

            <div className='w-full max-sm:h-[60px] lg:h-[80px] border-primary border-[2px] rounded-[40px] flex items-center justify-center mt-[30px]  group-hover:bg-[#ab3638] transition-colors'>
              <span className='text-[18px] font-bold uppercase text-primary group-hover:text-white'>
                Nhận diện thương hiệu
              </span>
            </div>
            <p className='text-center p-5 text-primary font-semibold'>
              Giúp thương hiệu được nhận ra ở khắp mọi nơi và được ghi nhớ trong tâm trí khách hàng.
            </p>
          </div>
          <div className='min-h-[250px] cursor-pointer group'>
            <div className='border-[2px] border-primary relative p-5 rounded-[40px] group-hover:bg-[#ab3638]'>
              <img src={noImage} alt='no-image' className='w-full rounded-[20px]' />
              <div className='absolute max-sm:w-[60px] right-0 bottom-[-60px] lg:bottom-[-40px] lg:right-[-40px] w-[100px] h-[100px] z-10'>
                <img src={iconSmile} alt='' />
              </div>
            </div>

            <div className='w-full h-[80px] border-primary border-[2px] rounded-[40px] flex items-center justify-center mt-[30px] group-hover:bg-[#ab3638]'>
              <span className='text-[18px] font-bold uppercase text-primary group-hover:text-white'>
                Tăng trưởng doanh thu
              </span>
            </div>
            <p className='text-center p-5 font-semibold text-primary'>
              Thúc đẩy doanh số bán hàng và gia tăng lợi nhuận thông qua chiến lược tiếp thị hiệu quả.
            </p>
          </div>
          <div className='min-h-[250px] cursor-pointer group '>
            <div className='border-[2px] border-primary relative p-5 rounded-[40px] group-hover:bg-[#ab3638]'>
              <img src={noImage} alt='no-image' className='w-full rounded-[20px]' />
              <div className='absolute max-sm:w-[60px] right-0 bottom-[-60px] lg:bottom-[-40px] lg:right-[-40px] w-[100px] h-[100px] z-10'>
                <img src={iconSmile} alt='' />
              </div>
            </div>

            <div className='w-full h-[80px] border-primary border-[2px] rounded-[40px] flex items-center justify-center mt-[30px] group-hover:bg-[#ab3638]'>
              <span className='text-[18px] font-bold uppercase text-primary group-hover:text-white'>
                Tạo dựng niềm tin
              </span>
            </div>
            <p className='text-center p-5 font-semibold text-primary'>
              Xây dựng mối quan hệ lâu dài và bền vững với khách hàng, tạo dựng niềm tin và sự trung thành.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-black min-h-[400px] pt-[100px] pb-[100px] p-5'>
        <div className='relative w-full h-max'>
          <h1
            className='max-sm:max-w-full text-[20px] lg:max-w-[70%] lg:text-[50px] font-[800] text-center m-auto uppercase text-primary '
            data-aos='fade-left'
            data-aos-duration='1000'
          >
            Chúng tôi cung cấp các dịch vụ trên mọi nền tảng
          </h1>
          <div
            className='max-sm:w-[50px] h-[50px] max-sm:bottom-[50px] max-sm:right-0 lg:w-[100px] lg:h-[100px] rounded-[30px] bg-blue-600 flex items-center justify-center absolute top-[80px] right-[300px] transform rotate-12'
            data-aos='fade-left'
            data-aos-duration='1000'
          >
            <img src={likeIcon} alt='' className='animate-wave max-sm:w-[30px]' />
          </div>
          <div className='max-sm:w-[50px] bottom-[-100px] absolute lg:bottom-[-40px] left-[220px] w-[100px] h-[100px] z-10'>
            <img src={iconSmile} alt='' />
          </div>
        </div>

        <div
          className='max-w-[1200px] m-auto min-h-[150px] grid lg:grid-cols-3 sm:grid-cols-1 mt-[100px] gap-10'
          data-aos='zoom-in'
          data-aos-duration='2500'
        >
          {CategoryLoading ? (
            <p>Đợi tý...</p>
          ) : ListCategory && ListCategory?.metadata?.data?.length > 0 ? (
            ListCategory?.metadata.data.map((category, index) => {
              return (
                <Link
                  to={'/dich-vu/' + category._id}
                  key={index}
                  className='max-sm:h-[50px] lg:h-[70px] rounded-[40px] border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer'
                >
                  <span className='max-sm:text-[14px] lg:text-[18px] font-bold uppercase'>{category.name}</span>
                </Link>
              )
            })
          ) : (
            <p>Không có dữ liệu</p>
          )}
        </div>
      </section>

      <section className='bg-primary min-h-[400px] pt-[200px] pb-[100px] p-5'>
        <div className='relative w-full h-max'>
          <h1
            className='max-sm:max-w-full text-[20px] lg:max-w-[70%] lg:text-[50px] font-[800] text-center m-auto uppercase text-primary '
            data-aos='fade-right'
            data-aos-duration='500'
          >
            Dự án tiêu biểu
          </h1>

          <div className='absolute bottom-[-40px] right-[410px] w-[100px] h-[100px] z-10'>
            <img src={iconSmile} alt='' />
          </div>
        </div>

        <div
          className='max-w-[1200px] m-auto min-h-[150px] grid lg:grid-cols-2 sm:grid-cols-1 mt-[100px] gap-10 justify-center'
          data-aos='flip-left'
          data-aos-duration='2000'
        >
          {BlogLoading ? (
            <p>Đợi tý...</p>
          ) : ListBlog && ListBlog.metadata.data.length > 0 ? (
            ListBlog.metadata.data.map((blog, index) => {
              return (
                <Link to={'/du-an/' + blog.slug} key={index} className='item'>
                  <div className='item__img'>
                    <img src={blog.thumbnail} alt='' />
                  </div>
                  <div className='item__content'>
                    <h3>{blog.name}</h3>
                    <span>{blog.description}</span>
                  </div>
                </Link>
              )
            })
          ) : (
            <p>Không có dữ liệu</p>
          )}
        </div>
        <CustomButton path='#' title='Xem thêm' />
      </section>

      <section className='bg-black min-h-[400px] pt-[100px] p-5'>
        <div className='relative w-full h-max'>
          <h1
            className='max-w-[70%] text-[50px] font-[800] text-center m-auto uppercase text-primary '
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Khách hàng thân thiết
          </h1>

          <div className='absolute bottom-[-40px] right-[300px] w-[100px] h-[100px] z-10 animate-wave'>
            <img src={iconHeart} alt='' />
          </div>
        </div>

        <div
          className='grid grid-cols-4 max-sm:grid-cols-2 gap-10 pt-[100px] m-auto pb-[100px] '
          data-aos='fade-up'
          data-aos-duration='2500'
        >
          {Array.from([1, 2, 3, 4, 5, 6, 7, 8]).map((item) => {
            return (
              <div className='bg-white p-5 rounded-[30px] flex gap-4 justify-between group hover:text-primary overflow-hidden transition-all'>
                <img
                  src={'/images/khach-hang/kh_' + item + '.jpeg'}
                  alt={'kh' + item}
                  key={item}
                  className='rounded-[30px] w-[150px] h-[150px] scale-[1] group-hover:scale-[1.1] transition-transform'
                />
                <h1 className='text-[90px] text-gray-100 font-bold group-hover:text-primary transition-all'>{item}</h1>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Home
