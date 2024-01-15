import { Request, Response, NextFunction } from 'express'
import { allQuestions } from '../../services/quiz/getAllQuestions'
import { OK, NOT_CONTENT } from '../../middlewares/statusErrors'
import { QuestionData } from '../../types'
import { handleErrorApi } from '../../middlewares/handleErrorApi'

export async function findQuestions(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const response: QuestionData[] = await allQuestions()
    if (response.length < 1) {
      return handleErrorApi(NOT_CONTENT, _req, res)
    }
    res.status(OK).json(response)
  } catch (error) {
    next(error)
  }
}
