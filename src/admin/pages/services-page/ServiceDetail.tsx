/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import EditorToolbar, { modules, formats } from '@/admin/components/EditToolbar'
import { Input } from 'antd'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { blogApi } from '@/apis/blogApi-api'
import { serviceApi } from '@/apis/service-api'
const ServiceDetail = () => {
  const [value, setValue] = useState('')
  const location = useLocation().pathname.trim().split('/')

  const queryKey = location[2].includes('services') ? 'services' : 'blogs'

  const handleQuery = () => {
    return queryKey.includes('services') ? serviceApi.findOne(location[3]) : blogApi.findOne(location[3])
  }
  const {
    data: Detail,
    status,
    refetch
  } = useQuery({
    queryKey: [queryKey],
    queryFn: () => handleQuery() as any
  })
  const quillRef = useRef<any>(null)

  return (
    <div className='flex flex-col gap-3 bg-white p-3'>
      <EditorToolbar />
      <Input />
      <ReactQuill
        theme='snow'
        value={value}
        onChange={setValue}
        className='w-full p-3 bg-white text-secondary'
        modules={modules}
        formats={formats}
        ref={quillRef}
      />
    </div>
  )
}

export default ServiceDetail
