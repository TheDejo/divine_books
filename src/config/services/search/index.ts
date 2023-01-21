import { ApiResponse } from '@components/common/types'
import request from '../request'
import constants from '@config/constants'

const { API } = constants

type IBooks = {}

const getAllBooks = (): ApiResponse<IBooks> => request.get({ route: API.routes.allBooks })

const auth = {
  getAllBooks
}

export default auth
