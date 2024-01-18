import { NextFunction, Request, Response } from 'express'
import { created as createdService } from '../service/created'
import {
  CREATED,
  UNPROCESSABLE_ENTITY,
} from '../../../middlewares/statusErrors'
import { handleErrorApi } from '../../../middlewares/handleErrorApi'

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const data = req.body
    const serviceData = await createdService(data)

    if (!serviceData) {
      return res.status(404).json('Problema não mapeado ainda')
    }

    if (typeof serviceData === 'object') {
      return handleErrorApi(UNPROCESSABLE_ENTITY, req, res, serviceData)
    }
    const { status, message } = CREATED

    res.status(status).json({ message, question_id: serviceData })
  } catch (error) {
    console.error(error)
    next(error)
  }
}
