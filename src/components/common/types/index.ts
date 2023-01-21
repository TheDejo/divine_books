import { AxiosResponse } from 'axios'

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503
}

export type Res<T> = {
  data?: T
  message: string
  status_code: HttpStatusCode
  isSuccessful: boolean
  error?: string
  path?: string
}

export type ApiResponse<T = undefined> = Promise<AxiosResponse<Res<T>>>
