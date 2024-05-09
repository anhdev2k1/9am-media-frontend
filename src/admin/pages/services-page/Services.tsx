/* eslint-disable @typescript-eslint/no-explicit-any */
import NavbarAdmin from '@/admin/components/Navbar'
import { categoryApi } from '@/apis/category-api'
import { Button } from '@/components/ui/button'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { Form, Input, Modal, Table, Upload } from 'antd'
import { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import TextArea from 'antd/es/input/TextArea'
import { uploadToCloudinary } from '@/cloudinary/cloudinaryHelper'
import Toast from '@/admin/components/Toast'
import { Link } from 'react-router-dom'
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
      title: 'Chi tiết',
      render: (record: any) => (
        <Link to={record.slug} className='text-primary font-semibold cursor-pointer'>
          Xem chi tiết
        </Link>
      )
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

  const { mutate: UpdateCategory } = useMutation({
    mutationFn: (values) => categoryApi.updateCategory(currentCategory._id, values)
  })
  const handleUpdate = (values: any) => {
    UpdateCategory(values)
    queryClient.invalidateQueries({ queryKey: ['services'] })
    refetch()
    Toast({ message: 'Cập nhật thành công', position: 'top-right' })
    setOpenModal(false)
  }

  const handleUploadImage = (options: any) => {
    const { onSuccess, onError, file } = options
    uploadToCloudinary({
      file,
      fileType: 'image',
      successCallback: onSuccess,
      failureCallback: onError
    })
  }
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
                  form.setFieldsValue(record)
                }
              }
            }}
          />
        </div>
      </div>
      {openModal && (
        <Modal open={openModal} onCancel={() => setOpenModal(false)} title='Cập nhật' footer={null}>
          <Form
            layout='vertical'
            name='basic'
            initialValues={{ remember: true }}
            onFinish={handleUpdate}
            autoComplete='off'
            form={form}
          >
            <div className='flex items-center gap-4'>
              {currentCategory?.thumbnail && (
                <div>
                  <img src={currentCategory?.thumbnail} alt='' className='w-[100px] rounded-md' />
                </div>
              )}
              <Form.Item label='Hình ảnh' name='thumbnail' getValueFromEvent={(value) => value.file?.response?.url}>
                <Upload action='/upload.do' listType='picture-card' customRequest={handleUploadImage}>
                  <button style={{ border: 0, background: 'none' }} type='button'>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </button>
                </Upload>
              </Form.Item>
            </div>
            <Form.Item label='Tên dịch vụ' name='name'>
              <Input placeholder='Nhập tên dịch vụ' className='h-[40px]' />
            </Form.Item>
            <Form.Item label='Mô tả' name='description'>
              <TextArea placeholder='Nhập mô tả' />
            </Form.Item>
            <Button type='submit' className='bg-primary w-full'>
              Cập nhật
            </Button>
          </Form>
        </Modal>
      )}
    </div>
  )
}

export default Services
