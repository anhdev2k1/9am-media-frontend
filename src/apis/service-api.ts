/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from '@/interceptors/interceptor'
import { IServiceProvide, IResponse } from '@/type'

export const serviceApi = {
  createService: (serviceData: any): Promise<IResponse<IServiceProvide>> => {
    return axiosClient.post(`/service`, serviceData)
  },
  findAllService: (
    category_id: string,
    page: number,
    pageSize: number
  ): Promise<IResponse<{ data: IServiceProvide[]; totalPage: number }>> => {
    return axiosClient.get(`/services/${category_id}?pageNumber=${page}&pageSize=${pageSize}`)
  },
  findOne: (service_slug: string): Promise<IResponse<IServiceProvide>> => {
    return axiosClient.get(`/service/${service_slug}/slug`)
  },
  updateService: (service_id: string): Promise<IResponse<IServiceProvide>> => {
    return axiosClient.patch(`/service/${service_id}`)
  },
  deleteService: (service_id: string): Promise<IResponse<IServiceProvide>> => {
    return axiosClient.delete(`/service/${service_id}`)
  }
}
