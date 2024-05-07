/* eslint-disable @typescript-eslint/no-explicit-any */
import NavbarAdmin from '@/admin/components/Navbar'
import { categoryApi } from '@/apis/category-api'
import { Button } from '@/components/ui/button'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { Form, Modal, Table } from 'antd'
import { useEffect, useState } from 'react'
const Services = () => {
  const queryClient = new QueryClient()
  const [query, setQuery] = useState<{ page: number; total: number; pageSize: number }>({
    page: 1,
    pageSize: 10,
    total: 0
  })
  const [currentCategory, setCurrentCategory] = useState<any>(null)
  const [form] = Form.useForm()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const {
    data: ListService,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['services'],
    queryFn: () => categoryApi.findAllCategories(query.page, query.pageSize)
  })

  const { mutate: DeleteCategory } = useMutation({
    mutationFn: categoryApi.deleteCategory
  })

  const ServiceColumns = [
    {
      title: 'Hình ảnh',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      render: (record: any) => <img src={record} alt='service-img' className='w-[100px] rounded-md' />
    },
    {
      title: 'Tên dịch vụ',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
      render: (record: string) => <span className='line-clamp-1'>{record}</span>
    },
    {
      title: 'Thao tác',
      width: '15%',
      render: (record: any) => {
        return (
          <div className='flex items-center gap-2'>
            <Button
              onClick={() => {
                setOpenModal(!openModal)
              }}
              className='bg-secondary'
            >
              Cập nhật
            </Button>
            <Button
              onClick={() => {
                DeleteCategory(record._id)
                refetch()
              }}
            >
              Xoá
            </Button>
          </div>
        )
      }
    }
  ]

  useEffect(() => {
    if (query.page) {
      refetch()
    }
  }, [query.page])

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
            dataSource={ListService?.metadata.data}
            loading={isLoading}
            pagination={{
              onChange(page, pageSize) {
                setQuery((prev) => ({
                  ...prev,
                  page,
                  pageSize
                }))
                queryClient.invalidateQueries({ queryKey: ['services', { page, pageSize }] })
              },
              total: Number(ListService?.metadata.totalPage) * 10,
              pageSize: 10,
              responsive: true,
              position: ['bottomCenter'],
              current: query.page
            }}
            onRow={(record) => {
              return {
                onClick: () => {
                  setCurrentCategory(record)
                }
              }
            }}
          />
        </div>
      </div>
      {openModal && (
        <Modal open={openModal} onCancel={() => setOpenModal(false)} title='Cập nhật' onOk={form.submit}>
          <Form layout='vertical'></Form>
        </Modal>
      )}
    </div>
  )
}

export default Services
