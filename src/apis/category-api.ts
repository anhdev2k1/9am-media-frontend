import axiosClient from '@/interceptors/interceptor'
import { ICategory, IResponse } from '@/type'

export const categoryApi = {
  createCategory: (categoryData: ICategory): Promise<IResponse<ICategory>> => {
    return axiosClient.post(`/category`, categoryData)
  },
  findAllCategories: (page: number, pageSize: number): Promise<IResponse<{ data: ICategory[]; totalPage: number }>> => {
    return axiosClient.get(`/categories?pageNumber=${page}&pageSize=${pageSize}`)
  },
  updateCategory: (category_id: string): Promise<IResponse<ICategory>> => {
    return axiosClient.patch(`/category/${category_id}`)
  },
  deleteCategory: (category_id: string): Promise<IResponse<ICategory>> => {
    return axiosClient.delete(`/category/${category_id}`)
  }
}
