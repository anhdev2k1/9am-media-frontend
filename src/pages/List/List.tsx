import { BentoGrid, BentoGridItem } from '@/components/BentoGrid'
import './list.scss'
import { useLocation } from 'react-router-dom'
const List = () => {
  const location = useLocation()

  const items = [
    {
      title: 'The Dawn of Innovation',
      description: 'Explore the birth of groundbreaking ideas and inventions.',
      thumbnail: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/service-image-1-1.jpg',
      className: 'md:col-span-1'
    },
    {
      title: 'The Digital Revolution',
      description: 'Dive into the transformative power of technology.',
      thumbnail: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/service-image-1-1.jpg',
      className: 'md:col-span-1'
    },
    {
      title: 'The Art of Design',
      description: 'Discover the beauty of thoughtful and functional design.',
      thumbnail: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/service-image-1-1.jpg',
      className: 'md:col-span-1'
    },
    {
      title: 'The Power of Communication',
      description: 'Understand the impact of effective communication in our lives.',
      thumbnail: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/service-image-1-1.jpg',
      className: 'md:col-span-1'
    }
  ]
  return (
    <div className='flex flex-col'>
      <div className='relative h-[500px] flex items-center justify-center'>
        <div className='service__bg'></div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-[4rem] text-primary font-bold'>
            {location.pathname.includes('projects') ? 'Dự án' : 'Dịch vụ'}
          </h1>
        </div>
      </div>
      <div className='flex items-center justify-between flex-wrap gap-5 p-5'>
        <div className='pt-[50px]'>
          <h1 className='text-[3rem] font-bold text-secondary-foreground flex-1'>Chúng Tôi Cung Cấp Các</h1>
          <h1 className='text-[5rem] font-bold text-primary flex-1'>Giải Pháp</h1>
        </div>
        <div className='w-[50%] p-5 border-l-[2px] border-primary'>
          <p>
            9AM hiểu được khách hàng cần gì, chính vì vậy 9AM liên tục cập nhật các dịch vụ tốt nhất và mới nhất đáp ứng
            nhu cầu của khách hàng cũng như thị trường
          </p>
        </div>
      </div>

      <BentoGrid className='mx-auto md:auto-rows-[30rem] mt-[100px] p-5'>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            thumbnail={item.thumbnail}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  )
}

export default List
