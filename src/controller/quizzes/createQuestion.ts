import { NextFunction, Request, Response } from 'express'
import { createQuestion } from '../../services/quiz/createQuestion'
import { StatusCodes } from 'http-status-codes'

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const data = req.body
    const serviceData = await createQuestion(data)
    console.log(serviceData)
    res.status(StatusCodes.CREATED).json({ ID: serviceData })
  } catch (error) {
    console.error(error)
    next(error)
  }
}
