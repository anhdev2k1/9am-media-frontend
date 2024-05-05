interface ITimeStamp {
  createdAt?: string
  updatedAt?: string
}

export interface IResponse<T> {
  message: string
  status: string
  statusCode: number
  metadata: T
}
export interface ICategory extends ITimeStamp {
  _id?: string
  name: string
  thumbnail?: string
  description?: string
  slug: string
  isDelete?: number
}
