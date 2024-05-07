import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { authApi } from '@/apis/auth-api'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import Toast from '../components/Toast'
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Mật khẩu tối đa phải là 8 ký tự')
})
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: true
  })

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

  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
      <div className=' w-[80%] lg:w-[500px] h-max p-5 bg-secondary rounded-md'>
        <h1 className='text-center text-2xl font-semibold'>Đăng nhập</h1>
        <form onSubmit={handleSubmit((values) => CreateAdmin(values))} className='flex flex-col gap-3 text-[#333]'>
          <label htmlFor='email' title='must be valid email' className='text-base font-medium text-white'>
            Email
          </label>
          <input
            id='email'
            {...register('email')}
            className='w-full h-[40px] indent-2 rounded-md'
            placeholder='Email...'
          />
          {errors.email?.message && <p className='text-base text-red-500'>{errors.email?.message as string}</p>}

          <label htmlFor='password' title='must be longer than 8' className='text-base font-medium text-white'>
            Mật khẩu
          </label>
          <input
            id='password'
            type='password'
            {...register('password')}
            className='w-full h-[40px] indent-2 rounded-md'
            placeholder='Mật khẩu...'
          />
          {errors.password?.message && <p className='text-base text-red-500'>{errors.password?.message as string}</p>}
          <input
            type='submit'
            className='pt-2 pb-2 pl-5 pr-5 bg-primary text-white rounded-md mt-3 cursor-pointer'
            value={status ? 'Đợi xíu...' : 'Đăng nhập'}
          />
        </form>
      </div>
    </div>
  )
}

export default Login
