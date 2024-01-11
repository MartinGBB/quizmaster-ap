import { StatusCodes } from 'http-status-codes'

export const ACCEPTED = {
  status: StatusCodes.ACCEPTED,
}

export const NO_CONTENT = {
  status: StatusCodes.NO_CONTENT,
  message:
    'A operação teve sucesso, porém nenhum dado foi encontrado para retorno.',
}

export const NOT_FOUND = {
  status: StatusCodes.NOT_FOUND,
  message: 'Recurso solicitado não foi encontrado no servidor.',
}
