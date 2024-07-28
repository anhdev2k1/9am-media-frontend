/* eslint-disable @typescript-eslint/no-explicit-any */
import { authApi } from '@/apis/auth-api'
import dashboardImg from '@/assets/images/dashboard.png'
import { useMutation } from '@tanstack/react-query'
import { Button, Checkbox, Col, Form, Input, Layout, Row } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Toast from '../components/Toast'

const Login = () => {
  const navigate = useNavigate()
  const { mutate: CreateAdmin, status } = useMutation({
    mutationFn: authApi.login,
    onSuccess(data) {
      if (data.status === 'success') {
        localStorage.setItem('x-access-token', data.metadata.accessToken)
        Toast({ message: data.message, position: 'top-right' })
        navigate('/admin/services')
      } else {
        Toast({ message: data.message, position: 'top-right' })
      }
    },
    onError: (error: any) => {
      Toast({ message: error.message, position: 'top-right' })
    }
  })

  const [loading, setLoading] = useState(false)
  const handleFinish = ({ email, password }: any) => {
    setLoading(true)
    try {
      CreateAdmin({ email, password })
    } finally {
      setLoading(false)
    }
  }

  return (
    // <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
    //   <div className=' w-[80%] lg:w-[500px] h-max p-5 bg-secondary rounded-md'>
    //     <h1 className='text-center text-2xl font-semibold'>Đăng nhập</h1>
    //     <form onSubmit={handleSubmit((values) => CreateAdmin(values))} className='flex flex-col gap-3 text-[#333]'>
    //       <label htmlFor='email' title='must be valid email' className='text-base font-medium text-white'>
    //         Email
    //       </label>
    //       <input
    //         id='email'
    //         {...register('email')}
    //         className='w-full h-[40px] indent-2 rounded-md'
    //         placeholder='Email...'
    //       />
    //       {/* {errors.email?.message && <p className='text-base text-red-500'>{errors.email?.message as string}</p>} */}

    //       <label htmlFor='password' title='must be longer than 8' className='text-base font-medium text-white'>
    //         Mật khẩu
    //       </label>
    //       <Input
    //         id='password'
    //         type='password'
    //         {...register('password')}
    //         className='w-full h-[40px] indent-2 rounded-md'
    //         placeholder='Mật khẩu...'
    //       />
    //       {errors.password?.message && <p className='text-base text-red-500'>{errors.password?.message as string}</p>}
    //       <input
    //         type='submit'
    //         className='pt-2 pb-2 pl-5 pr-5 bg-primary text-black rounded-md mt-3 cursor-pointer'
    //         value={status === 'pending' ? 'Đợi xíu...' : 'Đăng nhập'}
    //       />
    //     </form>
    //   </div>
    // </div>
    <Layout className='relative flex !min-h-screen !w-full !flex-row'>
      <div className='hidden grow flex-col items-center justify-center gap-[80px] bg-center  bg-no-repeat md:flex'>
        <div className='text-3xl font-bold leading-normal lg:text-4xl xl:text-5xl'>9AM Admin</div>
        <img className='max-w-[480px] xl:max-w-[560px]' src={dashboardImg} alt='' />
      </div>

      <div className='m-auto flex !h-screen w-full max-w-[480px] flex-col justify-center px-[16px] lg:px-[64px]'>
        <>
          <div className='mb-4 text-2xl font-bold xl:text-3xl'>{'sys.login.signInFormTitle'}</div>
          <Form name='login' size='large' onFinish={handleFinish}>
            <Form.Item name='email' rules={[{ required: true, message: 'sys.login.accountPlaceholder' }]}>
              <Input placeholder={'Nhập email'} />
            </Form.Item>
            <Form.Item name='password' rules={[{ required: true, message: 'sys.login.passwordPlaceholder' }]}>
              <Input.Password type='password' placeholder={'Nhập password'} />
            </Form.Item>
            <Form.Item>
              <Row>
                <Col span={12}>
                  <Form.Item name='remember' valuePropName='checked' noStyle>
                    <Checkbox>{'Nhớ mật khẩu'}</Checkbox>
                  </Form.Item>
                </Col>
                <Col span={12} className='text-right'>
                  <button className='!underline'>{'Quên mật khẩu'}</button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' className='w-full' loading={loading}>
                {'Đăng nhập'}
              </Button>
            </Form.Item>
          </Form>
        </>
      </div>

      <div className='absolute right-2 top-0'>{/* <LocalePicker /> */}</div>
    </Layout>
  )
}

export default Login
