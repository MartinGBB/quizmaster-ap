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

export const CREATED = {
  status: StatusCodes.CREATED,
  message: 'Criado com sucesso!',
}

export const UNPROCESSABLE_ENTITY = {
  status: StatusCodes.UNPROCESSABLE_ENTITY,
  message: 'Dado não criado',
}

export const BAD_REQUEST = {
  status: StatusCodes.BAD_REQUEST,
  message: 'Um parametro é requerido é não foi informado',
}

export const INTERNAL_SERVER_ERROR = {
  status: StatusCodes.INTERNAL_SERVER_ERROR,
  message: 'Problemas no servidor',
}
