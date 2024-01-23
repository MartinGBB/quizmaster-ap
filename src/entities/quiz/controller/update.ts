import { Request, Response, NextFunction } from 'express'
import { update as updateService } from '../service/update'
import {
  BAD_REQUEST,
  OK,
  UNPROCESSABLE_ENTITY,
} from '../../../middlewares/statusErrors'
import { handleErrorApi } from '../../../middlewares/handleErrorApi'

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const data = req.body
    const { id } = req.params

    if (!req.body || !id) {
      return handleErrorApi(BAD_REQUEST, req, res)
    }
    const updateResponse = await updateService(data, Number(id))

    if (!updateResponse.success) {
      res.locals.errorInfo = updateResponse.errorDetails
      return handleErrorApi(UNPROCESSABLE_ENTITY, req, res)
    }

    res.status(OK).json(updateResponse)
  } catch (error) {
    console.error(error)
    next(error)
  }
}
