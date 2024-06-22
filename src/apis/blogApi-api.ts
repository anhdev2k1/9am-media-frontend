/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from '@/interceptors/interceptor'
import { IBlog, IResponse } from '@/type'

export const blogApi = {
  createBlog: (blogData: IBlog): Promise<IResponse<IBlog>> => {
    return axiosClient.post(`/blog`, blogData)
  },
  findAllBlog: (page: number, pageSize: number): Promise<IResponse<{ data: IBlog[]; totalPage: number }>> => {
    return axiosClient.get(`/blogs?pageNumber=${page}&pageSize=${pageSize}`)
  },
  findOne: (blog_id: string): Promise<IResponse<IBlog>> => {
    return axiosClient.get(`/blog/${blog_id}`)
  },
  updateBlog: (blog_id: string, blogData: any): Promise<IResponse<IBlog>> => {
    return axiosClient.put(`/blog/${blog_id}`, blogData)
  },
  deleteBlog: (blog_id: string): Promise<IResponse<IBlog>> => {
    return axiosClient.delete(`/blog/${blog_id}`)
  }
}
