import { useRef, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import EditorToolbar, { modules, formats } from '@/admin/components/EditToolbar'
import { Input } from 'antd'
const ServiceDetail = () => {
  const [value, setValue] = useState('')
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
