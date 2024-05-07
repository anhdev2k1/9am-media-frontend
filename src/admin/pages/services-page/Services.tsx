import NavbarAdmin from '@/admin/components/Navbar'
import { categoryApi } from '@/apis/category-api'
import { useQuery } from '@tanstack/react-query'
import { Table } from 'antd'
const Services = () => {
  const { data: ListService, isLoading } = useQuery({ queryKey: ['services'], queryFn: categoryApi.findAllCategories })

  const ServiceColumns = [
    {
      title: 'Hình ảnh',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      render: (record: any) => <img src={record} alt='service-img' className='w-[120px] rounded-md' />
    },
    {
      title: 'Tên dịch vụ',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description'
    }
  ]
  return (
    <div className='flex flex-col bg-white'>
      <NavbarAdmin />

      <div className='h-full flex-1 flex-col space-y-8 p-5 md:flex'>
        <div className='flex flex-col justify-center space-y-2'>
          <div className='mb-5'>
            <h2 className='text-2xl font-bold tracking-tight text-secondary'>Chào mừng trở lại!</h2>
            <p className='text-muted-foreground'>Đây là danh sách dịch vụ của bạn!</p>
          </div>

          <Table
            columns={ServiceColumns}
            dataSource={ListService?.metadata}
            loading={isLoading}
            pagination={{
              total: 10,
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              responsive: true,
              position: ['bottomCenter'],

              current: 1
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Services
