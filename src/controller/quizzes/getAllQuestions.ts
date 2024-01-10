import { Request, Response, NextFunction } from 'express'
import { allQuestions } from '../../services/quiz/getAllQuestions'

export async function findQuestions(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    res.status(200).json(await allQuestions())
  } catch (error) {
    next(error)
  }
}
