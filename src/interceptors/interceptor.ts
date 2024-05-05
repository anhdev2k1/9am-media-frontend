import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL as string
const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add a response interceptor
axiosClient.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (response: any) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // 401, 403, 500
    return Promise.reject(error.response?.data) // should be error response body
  }
)
axiosClient.interceptors.request.use(function (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: InternalAxiosRequestConfig<any>
) {
  const userID: string | null = localStorage.getItem('token')
  if (userID) {
    config.headers['x-access-token'] = userID
    // config.headers['Content-Type'] = 'multipart/form-data';
  }
  return config
})

export default axiosClient
