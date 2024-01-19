import { Request, Response } from 'express'
import { INTERNAL_SERVER_ERROR } from './statusErrors'

interface ApiError {
  message: string
  status: number
}

interface InfoErr {
  code: string
  message: string
}

export function handleErrorApi(
  err: ApiError,
  _req: Request,
  res: Response,
  infoErr?: InfoErr,
) {
  const { status, message } = err
  if (status) {
    return res.status(status).json({ error: message, infoErr })
  }
  console.error(err)
  return res.status(INTERNAL_SERVER_ERROR.status).json({ message })
}
