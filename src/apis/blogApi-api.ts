import axiosClient from '@/interceptors/interceptor'
import { IBlog, IResponse } from '@/type'

export const blogApi = {
  createBlog: (blogData: IBlog): Promise<IResponse<IBlog>> => {
    return axiosClient.post(`/blog`, blogData)
  },
  findAllBlog: (
    typeBlog: 'category' | 'blog',
    page: number,
    pageSize: number
  ): Promise<IResponse<{ data: IBlog[]; totalPage: number }>> => {
    return axiosClient.get(`/blogs?pageNumber=${page}&pageSize=${pageSize}/type/${typeBlog}`)
  },
  findOne: (blog_id: string): Promise<IResponse<IBlog>> => {
    return axiosClient.get(`/blog/${blog_id}`)
  },
  updateBlog: (blog_id: string): Promise<IResponse<IBlog>> => {
    return axiosClient.patch(`/blog/${blog_id}`)
  },
  deleteBlog: (blog_id: string): Promise<IResponse<IBlog>> => {
    return axiosClient.delete(`/blog/${blog_id}`)
  }
}
