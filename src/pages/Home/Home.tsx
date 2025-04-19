/* eslint-disable @typescript-eslint/no-explicit-any */
import { blogApi } from '@/apis/blogApi-api'
import { categoryApi } from '@/apis/category-api'
import { CardBody, CardContainer, CardItem } from '@/components/Card3D'
import { Button } from '@/components/ui/button'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { HeroParallax } from '@/components/ui/hero-parallax'
import { products } from '@/mocks/hero-parallax'
import { useQuery } from '@tanstack/react-query'
import { Image } from 'antd'
import { Link } from 'react-router-dom'
import './home.scss'
import { customerApi } from '@/apis/customer-api'
const useFetch = () => {
  const { data: ListCategory, isLoading: CategoryLoading } = useQuery({
    queryKey: ['list-category'],
    queryFn: () => categoryApi.findAllCategories(1, 6)
  })

  const { data: ListBlog, isLoading: BlogLoading } = useQuery({
    queryKey: ['list-blog'],
    queryFn: () => blogApi.findAllBlog(1, 10)
  })

  const { data: ListCustomer, isLoading: CustomerLoading } = useQuery({
    queryKey: ['list-customer'],
    queryFn: () => customerApi.findAllCustomer()
  })

  //return
  return {
    ListCategory,
    CategoryLoading,
    ListBlog,
    BlogLoading,
    ListCustomer,
    CustomerLoading
  }
}

const Home = () => {
  const { ListCategory, CategoryLoading, ListBlog, BlogLoading, ListCustomer } = useFetch()
  return (
    <div className='w-full'>
      <section className='w-full lg:h-[100vh] bg-black'>
        <video
          autoPlay
          muted
          playsInline
          loop
          className='max-sm:h-[40vh] lg:h-[100vh] w-full object-contain object-center block'
        >
          <source src='/images/video.mp4' />
        </video>
      </section>

      <section className='p-5 max-w-[1200px] m-auto max-sm:p-3'>
        <Link
          to='https://web.facebook.com/business/partner-directory/search?solution_type=campaign_management&id=6232261756898794&_rdc=1&_rdr'
          className='w-full flex flex-col gap-[20px] items-center justify-center pt-[30px]'
        >
          <img src='/images/partner-badge.png' alt='partner-badge' className='max-w-[200px] max-sm:w-[60%]' />
          <h3 className='w-[60%] max-sm:w-full text-black font-[800] text-[20px] text-center'>
            9AM MEDIA VIETNAM IS NOW A META BUSINESS PARTNERS.
          </h3>
        </Link>
        <div className='w-max relative m-auto lg:pt-[50px]'>
          <h1
            className='max-sm:text-[50px] lg:text-[100px] font-[900] uppercase text-primary leading-[186px]'
            data-aos='fade-up'
            data-aos-duration='500'
          >
            Chào bạn
          </h1>
        </div>
        <p
          className='max-sm:max-w-full max-sm:text-[20px] lg:max-w-[70%] text-[25px] font-extrabold uppercase text-primary m-auto text-center mt-[50px]'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          Cùng khám phá chuỗi dịch vụ truyền thông sáng tạo và công nghệ đa phương tiện của chúng tôi.
        </p>

        <div className='relative w-[50%] m-auto min-h-[100px] mt-[100px] flex justify-center items-center'>
          <div className='absolute top-0 left-0'>
            <img src='/images/arrow-gif.gif' alt='' />
          </div>
          <Button className='button-27 !w-[220px]'>
            <Link to='gioi-thieu' className='text-[1.1rem]'>
              Xem thêm
            </Link>
          </Button>
        </div>
      </section>
      {/* <section className='mt-[50px] min-h-[100px] relative p-5 max-sm:w-[90dvw] m-auto'>
        <AppleCardsCarouselDemo />
      </section> */}

      <section className='max-w-[1200px] mt-[50px] min-h-[100px] relative m-auto mb-[200px] max-sm:p-3'>
        <HeroParallax products={products} />
      </section>
      <section className='max-w-[1200px] mt-[50px] min-h-[100px] relative m-auto mb-20 max-sm:p-3'>
        <h1
          className='max-sm:max-w-full max-sm:text-[20px] break-words lg:max-w-[100%] lg:text-[40px] font-[800] text-center m-auto uppercase text-primary '
          data-aos='fade-left'
          data-aos-duration='500'
        >
          Chúng tôi biết bạn đang có một sản phẩm tốt và doanh nghiệp của bạn cần được
        </h1>
      </section>

      <section
        className='max-sm:grid-cols-1 grid lg:grid-cols-3 gap-8 justify-center p-5 max-w-[1200px] m-auto max-sm:w-[90dvw]'
        data-aos='fade-up'
        data-aos-duration='2500'
      >
        <CardContainer className='inter-var max-sm:w-full'>
          <CardBody className='max-sm:w-[90%] bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  '>
            <CardItem translateZ='50' className='text-xl font-bold text-neutral-600 dark:text-white'>
              Nhận diện tốt hơn
            </CardItem>
            <CardItem as='p' translateZ='60' className='text-neutral-500 text-sm  mt-2 dark:text-neutral-300'>
              Nhận diện tốt hơn trên các nền tảng
            </CardItem>
            <CardItem translateZ='100' rotateX={20} rotateZ={-10} className='w-full mt-4'>
              <img
                src='/images/hero_1.jpg'
                className='w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
            <div className='flex justify-between items-center mt-10'>
              <Link to='#' className='text-red-500 font-bold flex items-center gap-2 m-auto'>
                <span>Xem thêm</span>
                <svg width='20' height='20' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                    fill='currentColor'
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </Link>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className='inter-var max-sm:w-full'>
          <CardBody className='max-sm:w-[90%] bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  '>
            <CardItem translateZ='50' className='text-xl font-bold text-neutral-600 dark:text-white'>
              Tăng lợi thế cạnh tranh
            </CardItem>
            <CardItem as='p' translateZ='60' className='text-neutral-500 text-sm  mt-2 dark:text-neutral-300'>
              Tăng lợi thế cạnh tranh trên các nền tảng
            </CardItem>
            <CardItem translateZ='100' rotateX={20} rotateZ={-10} className='w-full mt-4'>
              <img
                src='/images/hero_2.jpg'
                className='w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
            <div className='flex justify-between items-center mt-10'>
              <Link to='#' className='text-red-500 font-bold flex items-center gap-2 m-auto'>
                <span>Xem thêm</span>
                <svg width='20' height='20' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                    fill='currentColor'
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </Link>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className='inter-var max-sm:w-full'>
          <CardBody className='max-sm:w-[90%] bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  '>
            <CardItem translateZ='50' className='text-xl font-bold text-neutral-600 dark:text-white'>
              Thu hút khách hàng
            </CardItem>
            <CardItem as='p' translateZ='60' className='text-neutral-500 text-sm  mt-2 dark:text-neutral-300'>
              Dễ dàng thu hút mọi tệp khách hàng
            </CardItem>
            <CardItem translateZ='100' rotateX={20} rotateZ={-10} className='w-full mt-4'>
              <img
                src='/images/hero_3.jpg'
                className='w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
            <div className='flex justify-between items-center mt-10'>
              <Link to='#' className='text-red-500 font-bold flex items-center gap-2 m-auto'>
                <span>Xem thêm</span>
                <svg width='20' height='20' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                    fill='currentColor'
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </Link>
            </div>
          </CardBody>
        </CardContainer>
      </section>

      <section className='max-w-[1200px] mt-[20px] min-h-[100px] relative m-auto mb-10 max-sm:p-3'>
        <div className='flex flex-col overflow-hidden gap-5'>
          <ContainerScroll
            titleComponent={
              <div className='flex flex-col gap-3'>
                <h1 className='max-sm:text-2xl text-[30px] font-semibold text-black'>
                  Khẳng định <br />
                  <p className='max-sm:text-[30px] text-[50px] uppercase font-bold mt-1 leading-none text-[#ab3638]'>
                    Thương hiệu
                  </p>
                </h1>
              </div>
            }
          >
            <Image
              src={`/images/slide_2.jpg`}
              alt='hero'
              className='mx-auto rounded-2xl h-full object-left-top object-contain'
              draggable={false}
              preview={false}
            />
          </ContainerScroll>
        </div>
      </section>
      <section className='bg-primary min-h-[400px] pt-[50px] pb-[100px] p-5 max-sm:w-[90dvw] m-auto'>
        <div className='relative w-full h-max'>
          <h1
            className='max-sm:max-w-full text-[20px] lg:max-w-[70%] lg:text-[40px] font-[800] text-center m-auto uppercase text-primary '
            data-aos='fade-up'
            data-aos-duration='500'
          >
            Chúng tôi tự hào đồng hành cùng thương hiệu Việt Nam
          </h1>
        </div>
        <div
          className='sm:grid-cols-1 w-full grid lg:grid-cols-3 gap-10 max-w-[1200px] m-auto mt-[100px]'
          data-aos='fade-up'
          data-aos-duration='2500'
        >
          <div className='min-h-[250px] cursor-pointer group'>
            <div className='border-[2px] border-primary relative p-5 rounded-[40px] group-hover:bg-[#ab3638] transition-colors'>
              <img src='/images/thumb_1.jpg' alt='no-image' className='w-full rounded-[20px]' />
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
              <img src='/images/thumb_2.jpg' alt='no-image' className='w-full rounded-[20px]' />
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
              <img src='/images/thumb_3.jpg' alt='no-image' className='w-full rounded-[20px]' />
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
        <div className='relative w-full h-max  max-sm:w-[90dvw] m-auto'>
          <h1
            className='max-sm:max-w-full text-[20px] lg:max-w-[70%] lg:text-[50px] font-[800] text-center m-auto uppercase text-primary '
            data-aos='fade-left'
            data-aos-duration='1000'
          >
            Chúng tôi cung cấp các dịch vụ trên mọi nền tảng
          </h1>
        </div>

        <div
          className='max-w-[1200px] m-auto min-h-[150px] grid lg:grid-cols-3 sm:grid-cols-1 mt-[100px] gap-10  max-sm:w-[90dvw]'
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
                  className='max-sm:h-[50px] lg:h-[70px] rounded-[40px] border p-5 text-center border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer'
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

      <section className='bg-primary min-h-[400px] pt-[100px] pb-[100px] p-5 max-sm:w-[90dvw] m-auto'>
        <div className='relative w-full h-max'>
          <h1
            className='max-sm:max-w-full text-[20px] lg:max-w-[70%] lg:text-[50px] font-[800] text-center m-auto uppercase text-primary '
            data-aos='fade-right'
            data-aos-duration='500'
          >
            Dự án tiêu biểu
          </h1>
        </div>

        <div
          className='max-w-[1200px] m-auto min-h-[150px] grid lg:grid-cols-2 max-sm:grid-cols-1 mt-[100px] gap-10 justify-center'
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
                  <div className='item__content max-sm:line-clamp-3'>
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
        <div className='w-full flex items-center justify-center'>
          <Button className='button-27 !w-[220px]'>
            <Link to='gioi-thieu' className='text-[1.1rem]'>
              Xem thêm
            </Link>
          </Button>
        </div>
      </section>

      <section className='bg-black min-h-[400px] pt-[100px] p-5'>
        <div className='relative w-full h-max'>
          <h1
            className='lg:max-w-[70%] text-[50px] max-sm:text-[30px] font-[800] text-center m-auto uppercase text-primary '
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Khách hàng thân thiết
          </h1>
        </div>

        <div
          className='grid grid-cols-4 max-sm:grid-cols-2 gap-10 pt-[100px] m-auto pb-[100px]  max-w-[1200px]'
          data-aos='fade-up'
          data-aos-duration='2500'
        >
          {ListCustomer?.metadata?.length > 0
            ? ListCustomer?.metadata?.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className='bg-white p-5 rounded-[30px] flex max-sm:flex-col max-sm:items-center gap-4 justify-center group hover:text-primary overflow-hidden transition-all'
                  >
                    <img
                      src={item?.image}
                      alt={'kh' + item?.name}
                      className='rounded-[30px] w-max h-[150px] object-contain scale-[1] group-hover:scale-[1.1] transition-transform'
                    />
                  </div>
                )
              })
            : Array.from([1, 2, 3, 4, 5, 6, 7, 8]).map((item) => {
                return (
                  <div
                    key={item}
                    className='bg-white p-5 rounded-[30px] flex max-sm:flex-col max-sm:items-center gap-4 justify-center group hover:text-primary overflow-hidden transition-all'
                  >
                    <img
                      src={'/images/khach-hang/kh_' + item + '.jpeg'}
                      alt={'kh' + item}
                      className='rounded-[30px] w-max h-[150px] scale-[1] group-hover:scale-[1.1] transition-transform'
                    />
                  </div>
                )
              })}
        </div>
      </section>
    </div>
  )
}

export default Home
