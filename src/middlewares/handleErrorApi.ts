import { Request, Response } from 'express'

interface ApiError {
  message: string
  status: number
}

export function handleErrorApi(err: ApiError, _req: Request, res: Response) {
  const { status, message } = err
  if (status) {
    return res.status(status).json({ error: message })
  }
  console.error(err)
  return res.status(500).json({ error: { message: 'Internal Server Error' } })
}
