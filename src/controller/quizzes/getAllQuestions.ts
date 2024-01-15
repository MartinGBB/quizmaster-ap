import { Request, Response, NextFunction } from 'express'
import { allQuestions } from '../../services/quiz/getAllQuestions'

export async function findQuestions(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const response = await allQuestions()
    res.status(200).json(response)
    // if ('data' in response) {
    //   const { status, data } = response
    //   res.status(status).json(data)
    // } else {
    //   const { status, message } = response
    //   res.status(status).json({ message })
    // }
  } catch (error) {
    next(error)
  }
}
