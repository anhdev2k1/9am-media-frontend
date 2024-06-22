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

export interface IUser {
  _id?: string
  email: string
  username?: string
  password: string
  isDelete?: number
}

export interface IUserPayload extends IUser {
  accessToken: string
}

export interface IBlog {
  _id?: string
  thumbnail?: string
  name: string
  description: string
  content: string
  slug: string
  isDelete?: number
}

export interface IServiceProvide {
  _id?: string
  name: string
  thumbnail?: string
  cover?: string
  description?: string
  content: string
  category: ICategory
  slug: string
  isDelete?: number
}
