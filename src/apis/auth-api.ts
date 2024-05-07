import axiosClient from '@/interceptors/interceptor'
import { IResponse, IUser, IUserPayload } from '@/type'

export const authApi = {
  login: (loginData: any): Promise<IResponse<IUserPayload>> => {
    return axiosClient.post('/auth/login', loginData)
  },
  getMe: (): Promise<IResponse<IUser>> => {
    return axiosClient.get('/auth/me')
  }
}
