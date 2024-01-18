import { Request, Response } from 'express'

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
  return res.status(500).json({ error: { message: 'Internal Server Error' } })
}
