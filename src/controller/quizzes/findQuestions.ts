import { Request, Response, NextFunction } from 'express'

export function findQuestions(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    res.status(200).send({ message: 'hello word' })
  } catch (error) {
    next(error)
  }
}
