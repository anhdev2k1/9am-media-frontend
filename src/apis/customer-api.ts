/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from '@/interceptors/interceptor'
import { IResponse } from '@/type'

export const customerApi = {
  createCustomer: (serviceData: any): Promise<IResponse<any>> => {
    return axiosClient.post(`/customer`, serviceData)
  },
  findAllCustomer: (): Promise<IResponse<any>> => {
    return axiosClient.get(`/customers`)
  },
  findOneCustomer: (customer_id: string): Promise<IResponse<any>> => {
    return axiosClient.get(`/customer/${customer_id}`)
  },
  updateCustomer: (customer_id: string, customerData: any): Promise<IResponse<any>> => {
    return axiosClient.patch(`/customer/${customer_id}`, customerData)
  },
  deleteCustomer: (customer_id: string): Promise<IResponse<any>> => {
    return axiosClient.delete(`/customer/${customer_id}`)
  }
}
