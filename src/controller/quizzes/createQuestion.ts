import { Request, Response, NextFunction } from 'express'

export function create(req: Request, res: Response, next: NextFunction) {
  try {
    const data = req.body
    return data
  } catch (error) {
    console.error(error)
    next(error)
  }
}
