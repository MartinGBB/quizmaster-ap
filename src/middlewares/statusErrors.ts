import { StatusCodes, getReasonPhrase } from 'http-status-codes'

export const ACCEPTED = StatusCodes.ACCEPTED

export const NO_CONTENT = {
  status: StatusCodes.NO_CONTENT,
  message: getReasonPhrase(StatusCodes.NO_CONTENT),
}

export const NOT_FOUND = {
  status: StatusCodes.NOT_FOUND,
  message: getReasonPhrase(StatusCodes.NOT_FOUND),
}
