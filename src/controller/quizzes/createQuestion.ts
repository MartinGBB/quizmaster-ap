import { NextFunction, Request, Response } from 'express'
import { createQuestion } from '../../services/quiz/createQuestion'
import { StatusCodes } from 'http-status-codes'

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const data = req.body
    const serviceData = await createQuestion(data)

    if (typeof serviceData === 'object') {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json(serviceData)
    }
    res.status(StatusCodes.CREATED).json({ ID: serviceData })
  } catch (error) {
    console.error(error)
    next(error)
  }
}
