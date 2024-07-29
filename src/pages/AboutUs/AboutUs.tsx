import bannerAbout from '@/assets/images/banner-about.png'
import iconHeart from '@/assets/images/icon-heart.svg'
import { CardBody, CardContainer, CardItem } from '@/components/Card3D'
const AboutUs = () => {
  return (
    <div className='w-full'>
      <section className='w-full h-[100vh] max-sm:h-[50vh]'>
        <video
          autoPlay
          muted
          playsInline
          loop
          className='max-sm:h-[50vh] h-[100vh] w-full object-cover object-center block'
        >
          <source src='/video_2.mp4' />
        </video>
      </section>
      <section className='mt-[100px] relative p-5 max-sm:text-center'>
        <h1
          className='text-[100px] max-sm:text-[3.5rem] font-[900] text-primary uppercase'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          9AM Media
        </h1>
        <h2
          className='text-[80px] max-sm:text-[20px] font-extrabold text-black uppercase max-w-[70%] max-sm:w-full m-auto'
          data-aos='fade-up'
          data-aos-duration='2500'
        >
          Giải pháp maketing cho thương hiệu thế hệ mới
        </h2>
      </section>

      <section className='mt-[200px] h-max relative'>
        <div className='max-w-[1200px] m-auto mt-[100px]'>
          <h1
            className='text-[50px] max-sm:text-[2.5rem] font-[800] text-primary text-center'
            data-aos='fade-left'
            data-aos-duration='1000'
          >
            KHÁM PHÁ CÁC BƯỚC XÂY DỰNG GIẢI PHÁP TẠI 9AM MEDIA
          </h1>
          <div
            className='absolute top-[-20px] right-[80px] max-sm:top-[-80px] animate-wave'
            data-aos='fade-up'
            data-aos-duration='2500'
          >
            <img src={iconHeart} alt='icon-smile' />
          </div>
        </div>
      </section>
      <section className='flex justify-between gap-5 pt-[100px] pb-[100px] max-sm:flex-col p-5'>
        <div className='flex flex-col gap-5 w-[20%] max-sm:w-full'>
          <div className='p-5' data-aos='fade-right' data-aos-duration='1000'>
            <div className='flex gap-3 items-center'>
              <h1 className='text-[70px] text-primary font-[900]'>01</h1>
              <h1 className='text-[20px] text-primary font-[800] uppercase'>Hiểu yêu cầu của khách hàng</h1>
            </div>
            <p className='text-[15px] text-black font-bold'>
              Đây là bước quan trọng nhất, cần tìm hiểu kỹ lưỡng về thương hiệu, sản phẩm, đối tượng mục tiêu và yêu cầu
              cụ thể của khách hàng.
            </p>
          </div>
          <div className='p-5' data-aos='fade-right' data-aos-duration='2500'>
            <div className='flex gap-3 items-center'>
              <h1 className='text-[70px] text-primary font-[900]'>02</h1>
              <h1 className='text-[20px] text-primary font-[800] uppercase'> Lập kế hoạch chi tiết</h1>
            </div>
            <p className='text-[15px] text-black font-bold'>
              Dựa trên thông tin đúc kết từ nghiên cứu chuyên sâu và cũng là nền tảng lập kế hoạch chiến lược phù hợp
            </p>
          </div>
        </div>
        <div className='flex-1' data-aos='zoom-out' data-aos-duration='2000'>
          <CardContainer className='inter-var w-full'>
            <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  '>
              <CardItem translateZ='100' rotateX={20} rotateZ={-10} className='w-full mt-4'>
                <img
                  src={bannerAbout}
                  className='h-[450px] w-full object-cover rounded-xl group-hover/card:shadow-xl'
                  alt='thumbnail'
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>

        <div className='flex flex-col gap-5 w-[20%] max-sm:w-full'>
          <div className='p-5' data-aos='fade-left' data-aos-duration='1000'>
            <div className='flex gap-3 items-center'>
              <h1 className='text-[70px] text-primary font-[900]'>03</h1>
              <h1 className='text-[20px] text-primary font-[800] uppercase'> Tiến hành sản xuất</h1>
            </div>
            <p className='text-[15px] text-black font-bold'>
              Với quy trình đúng đắn, sản phẩm truyền thông được tạo ra với sự nhất quán về phong cách trên mọi phương
              diện, từ nội dung, thiết kế đến trải nghiệm cảm xúc của người dùng
            </p>
          </div>
          <div className='p-5' data-aos='fade-right' data-aos-duration='2000'>
            <div className='flex gap-3 items-center'>
              <h1 className='text-[70px] text-primary font-[900]'>04</h1>
              <h1 className='text-[20px] text-primary font-[800] uppercase'>Đánh giá hiệu quả</h1>
            </div>
            <p className='text-[15px] text-black font-bold'>
              Cuối cùng, theo dõi và đánh giá hiệu quả của chiến dịch. Sử dụng các công cụ phân tích để đo lường sự
              thành công và đề xuất điều chỉnh cải thiện kế hoạch trong tương lai
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
