/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosRequestConfig } from 'axios'
import buuks from './buuks'

const get = async <T>({ route, config }: { route: string; config?: AxiosRequestConfig }): Promise<T> => {
  const response = await buuks.get(route, config)
  return response.data
}

const request = {
  get
}

export default request
