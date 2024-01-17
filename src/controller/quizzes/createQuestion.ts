import { NextFunction, Request, Response } from 'express'
import { createQuestion } from '../../services/quiz/createQuestion'
import { CREATED, UNPROCESSABLE_ENTITY } from '../../middlewares/statusErrors'

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const data = req.body
    const serviceData = await createQuestion(data)

    if (typeof serviceData === 'object') {
      return res.status(UNPROCESSABLE_ENTITY.status).json(serviceData)
    }

    const { status, message } = CREATED

    res.status(status).json({ message, question_id: serviceData })
  } catch (error) {
    console.error(error)
    next(error)
  }
}
