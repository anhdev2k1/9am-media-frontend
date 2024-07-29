import { blogApi } from '@/apis/blogApi-api'
import { categoryApi } from '@/apis/category-api'
import { serviceApi } from '@/apis/service-api'
import iconHeart from '@/assets/images/icon-heart.svg'
import { BentoGridItem } from '@/components/BentoGrid'
import { BLOG, SERVICE } from '@/constants/path'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Pagination } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './list.scss'
import Loading from '@/components/Loading/Loading'

const List = () => {
  const location = useLocation().pathname
  const listService = useLocation().pathname.split('/')?.[2]
  const [query, setQuery] = useState<{ page: number; pageSize: number }>({ page: 1, pageSize: 10 })
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const handleQuery = async () => {
    if (location.includes('/' + SERVICE) && !listService) {
      return categoryApi.findAllCategories(query.page, query.pageSize)
    } else if (location.includes('/' + SERVICE) && listService) {
      return serviceApi.findAllService(listService, query.page, query.pageSize)
    } else {
      return blogApi.findAllBlog(query.page, query.pageSize)
    }
  }

  const {
    data: ListService,
    isLoading: ServicesLoading,
    refetch
  } = useQuery({
    queryKey: ['list-service'],
    queryFn: () => handleQuery()
  })

  const handleChangePage = (page: number) => {
    setQuery((prev) => ({
      ...prev,
      page
    }))
    queryClient.invalidateQueries({ queryKey: ['list-service'] })
    refetch()
  }

  useEffect(() => {
    if (location) {
      refetch()
    }
  }, [location])

  if (ServicesLoading) {
    return <Loading />
  }

  return (
    <div className='flex flex-col'>
      <div className='relative h-[500px] flex items-center justify-center'>
        <div className='flex flex-col gap-5' data-aos='fade-right' data-aos-duration='1000'>
          <div
            className='flex items-center gap-3 text-primary font-semibold cursor-pointer m-auto'
            onClick={() => navigate(-1)}
          >
            <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z'
                fill='currentColor'
                fillRule='evenodd'
                clipRule='evenodd'
              ></path>
            </svg>
            <span className='text-[20px] font-bold'>Trở về</span>
          </div>
          <h1
            className='text-[80px] max-sm:text-[40px] text-primary font-[900] uppercase'
            data-aos='fade-left'
            data-aos-duration='2000'
          >
            {location.includes(BLOG) ? 'Dự án' : 'Dịch vụ'}
          </h1>
          <div
            className='absolute top-[30%] right-[-35%] animate-wave max-sm:right-[-65%]'
            data-aos='fade-left'
            data-aos-duration='3000'
          >
            <img src={iconHeart} alt='icon-smile' />
          </div>
        </div>
      </div>
      <div className='text-center'>
        <h1
          className='text-[50px] max-sm:text-[30px] text-primary font-extrabold uppercase'
          data-aos='fade-up-right'
          data-aos-duration='2500'
        >
          Những dự án của chúng tôi
        </h1>
        <p
          className='max-w-[70%] max-sm:w-full text-center text-[18px] font-semibold text-black m-auto pt-[15px]'
          data-aos='fade-down-right'
          data-aos-duration='3000'
        >
          CHÚNG TÔI BẮT ĐẦU TỪ VIỆC THẤU CẢM CÂU CHUYỆN THƯƠNG HIỆU, ĐƯA RA CÁC Ý TƯỞNG SÁNG TẠO PHÙ HỢP VÀ THỂ HIỆN CÁC
          GIÁ TRỊ THƯƠNG HIỆU MUỐN MANG LẠI CHO NGƯỜI DÙNG QUA CÁC SẢN PHẨM THIẾT KẾ VÀ HÌNH ẢNH QUẢNG CÁO CHO THƯƠNG
          HIỆU.
        </p>
      </div>
      <div
        className='grid grid-cols-2 max-sm:grid-cols-1 gap-8 lg:w-[1200px] m-auto pt-[100px] pb-[100px] max-sm:p-5'
        data-aos='fade-up'
        data-aos-duration='4500'
      >
        {ListService?.metadata.data &&
          ListService.metadata.data.map((item, i) => (
            <BentoGridItem
              path={location.includes('/' + SERVICE) && !listService ? item._id : item.slug}
              key={i}
              title={item.name}
              description={item.description}
              thumbnail={item?.thumbnail}
            />
          ))}
      </div>
      {ListService && (
        <Pagination
          className='m-auto'
          defaultCurrent={query.page}
          total={Number(ListService?.metadata?.totalPage as number)}
          pageSize={query.pageSize}
          onChange={handleChangePage}
        />
      )}
    </div>
  )
}

export default List
