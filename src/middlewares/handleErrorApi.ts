import { Request, Response } from 'express'
import { INTERNAL_SERVER_ERROR } from './statusErrors'

interface ApiError {
  message: string
  status: number
}

export function handleErrorApi(err: ApiError, _req: Request, res: Response) {
  const infoErr = res.locals?.errorInfo

  const { status, message } = err

  if (status) {
    if (!infoErr) {
      return res.status(status).json({ error: message })
    }
    return res.status(status).json({ error: message, infoErr })
  }
  console.error(err)
  return res
    .status(INTERNAL_SERVER_ERROR.status)
    .json({ error: message, infoErr })
}
