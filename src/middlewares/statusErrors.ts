import { StatusCodes, getReasonPhrase } from 'http-status-codes'

export const OK = StatusCodes.OK

export const NOT_CONTENT = {
  status: StatusCodes.NO_CONTENT,
  message: 'A requicisão teve sucesso, mas não foi retornado nenhum dado.',
}

export const NOT_FOUND = {
  status: StatusCodes.NOT_FOUND,
  message: getReasonPhrase(StatusCodes.NOT_FOUND),
}
