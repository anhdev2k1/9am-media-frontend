/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import EditorToolbar, { modules, formats } from '@/admin/components/EditToolbar'
import { Form, Input, Upload } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { blogApi } from '@/apis/blogApi-api'
import { serviceApi } from '@/apis/service-api'
import TextArea from 'antd/es/input/TextArea'
import { PlusOutlined } from '@ant-design/icons'
import { uploadToCloudinary } from '@/cloudinary/cloudinaryHelper'
import { Button } from '@/components/ui/button'
import Toast from '@/admin/components/Toast'
const ServiceDetail = () => {
  const [value, setValue] = useState('')
  const location = useLocation().pathname.trim().split('/')
  const [formUpdate] = Form.useForm()
  const queryKey = location[2].includes('services') ? 'services' : 'blogs'
  const navigate = useNavigate()
  const handleQuery = () => {
    return queryKey.includes('services') ? serviceApi.findOne(location[4]) : blogApi.findOne(location[3])
  }

  const {
    data: Detail,
    status,
    isLoading
  } = useQuery({
    queryKey: [queryKey],
    queryFn: () => handleQuery() as any,
    enabled: queryKey.includes('services') ? !!location[4] : !!location[3]
  })
  const quillRef = useRef<any>(null)
  const queryClient = useQueryClient()
  const handleMutation = async (data: any) => {
    if (queryKey.includes('services')) {
      return serviceApi.updateService(Detail?.metadata?._id, data)
    } else {
      return blogApi.updateBlog(Detail?.metadata?._id, data)
    }
  }
  const { mutate: Update, error } = useMutation({ mutationFn: handleMutation })

  const handleUpdate = async (values: any) => {
    await Update({ ...values, content: value })
    queryClient.invalidateQueries({ queryKey: ['service-list'] })
    setValue('')
    navigate(-1)
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

  useEffect(() => {
    if (Detail) {
      formUpdate.setFieldsValue(Detail.metadata)
      setValue(Detail.metadata.content)
    }
  }, [Detail, formUpdate])

  if (error) {
    return <Toast message={error.message} position='top-right' />
  }
  return (
    <div className='flex flex-col gap-3 bg-white p-3 justify-center items-center min-h-[100vh]'>
      <div className='flex items-center gap-3 text-primary font-semibold cursor-pointer' onClick={() => navigate(-1)}>
        <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z'
            fill='currentColor'
            fillRule='evenodd'
            clipRule='evenodd'
          ></path>
        </svg>
        <span>Trở về</span>
      </div>
      <h3 className='text-2xl text-black font-semibold uppercase pt-2 pb-3'>Cập nhật bài viết</h3>
      {isLoading ? (
        <svg
          width='50'
          height='50'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='animate-spin'
          color='red'
        >
          <path
            d='M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z'
            fill='currentColor'
            fillRule='evenodd'
            clipRule='evenodd'
          ></path>
        </svg>
      ) : (
        <Form
          form={formUpdate}
          layout='vertical'
          onFinish={handleUpdate}
          initialValues={{ remember: true }}
          className='w-[70%]'
        >
          <Form.Item label='Tên bài đăng' name='name'>
            <Input placeholder='Tên bài đăng...' className='h-[40px]' />
          </Form.Item>
          <Form.Item label='Mô tả' name='description'>
            <TextArea placeholder='Mô tả...' rows={3} />
          </Form.Item>

          <div className='flex items-center gap-4'>
            {Detail && Detail?.metadata?.thumbnail && (
              <div className='w-[100px] h-[100px] rounded-md'>
                <img
                  src={Detail?.metadata?.thumbnail}
                  alt='service'
                  className='w-[100%] h-[100%] object-cover rounded-md'
                />
              </div>
            )}
            <Form.Item
              label='Thumbnail'
              name='thumbnail'
              getValueFromEvent={(value) => value.file?.response?.url}
              className='w-[250px]'
            >
              <Upload action='/upload.do' listType='picture-card' customRequest={handleUploadImage}>
                <button style={{ border: 0, background: 'none' }} type='button'>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </button>
              </Upload>
            </Form.Item>
          </div>

          <EditorToolbar />

          <ReactQuill
            theme='snow'
            value={value}
            onChange={setValue}
            className='w-[100%] bg-white text-black'
            modules={modules}
            formats={formats}
            ref={quillRef}
          />
          <Button type='submit' className='w-[70%] fixed bottom-5 left-1/2 -translate-x-1/2 rounded-[8px] bg-black '>
            {status === 'pending' ? (
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='animate-spin'
              >
                <path
                  d='M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z'
                  fill='currentColor'
                  fillRule='evenodd'
                  clipRule='evenodd'
                ></path>
              </svg>
            ) : (
              'Cập nhật bài viết'
            )}
          </Button>
        </Form>
      )}
    </div>
  )
}

export default ServiceDetail
