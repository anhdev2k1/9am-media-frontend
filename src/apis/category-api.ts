import axiosClient from '@/interceptors/interceptor'
import { ICategory, IResponse } from '@/type'

export const categoryApi = {
  createCategory: (categoryData: ICategory): Promise<IResponse<ICategory>> => {
    return axiosClient.post('/category', categoryData)
  },
  findAllCategories: (): Promise<IResponse<ICategory[]>> => {
    return axiosClient.get('/categories')
  }
}
