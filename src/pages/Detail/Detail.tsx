import { useLocation, useNavigate } from 'react-router-dom'
import '../List/list.scss'
import { BLOG, SERVICE } from '@/constants/path'
import { useQuery } from '@tanstack/react-query'
import { serviceApi } from '@/apis/service-api'
import { blogApi } from '@/apis/blogApi-api'
import Loading from '@/components/Loading/Loading'
import './detail.scss'
const Detail = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const detail_id = location.pathname.includes('/' + BLOG)
    ? location.pathname.split('/')?.[2]
    : location.pathname.split('/')?.[3]

  const handleQuery = async () => {
    if (location.pathname.includes('/' + SERVICE)) {
      return serviceApi.findOne(detail_id)
    } else {
      return blogApi.findOne(detail_id)
    }
  }
  const { data: Detail, isLoading: DetailLoading } = useQuery({
    queryKey: ['detail'],
    queryFn: () => handleQuery()
  })

  if (DetailLoading) {
    return <Loading />
  }
  return (
    <div className='flex flex-col'>
      <div className='relative h-[500px] flex items-center justify-center max-sm:p-5'>
        <div className='flex flex-col gap-5'>
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
          <h1 className='text-[80px] max-sm:text-[50px] text-primary font-[900] uppercase text-center'>Chi tiết</h1>
          <h2 className='text-[40px] max-sm:text-[30px] text-black font-extrabold text-center'>{Detail?.metadata.name}</h2>
        </div>
      </div>

      {Detail?.metadata.thumbnail && (
        <div className='lg:w-[900px] m-auto w-full'>
          <img
            src={Detail?.metadata.thumbnail}
            alt='thumnail'
            className='w-full max-h-[420px] object-contain rounded-[30px]'
          />
        </div>
      )}
      <div
        className='w-[1200px] min-h-[200px] m-auto relative mt-[100px] detail-content max-sm:w-[100dvw] max-sm:p-5'
        dangerouslySetInnerHTML={{ __html: Detail?.metadata.content || '' }}
      ></div>
    </div>
  )
}

export default Detail
