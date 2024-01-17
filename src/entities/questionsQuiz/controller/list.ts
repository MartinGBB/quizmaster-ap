import { Request, Response, NextFunction } from 'express'
import { list as listService } from '../service/list'
import { OK, NOT_CONTENT } from '../../../middlewares/statusErrors'
import { QuestionData } from '../../../types/questionsQuiz.interface'
import { handleErrorApi } from '../../../middlewares/handleErrorApi'

export async function list(_req: Request, res: Response, next: NextFunction) {
  try {
    const response: QuestionData[] = await listService()
    if (response.length < 1) {
      return handleErrorApi(NOT_CONTENT, _req, res)
    }
    res.status(OK).json(response)
  } catch (error) {
    next(error)
  }
}
