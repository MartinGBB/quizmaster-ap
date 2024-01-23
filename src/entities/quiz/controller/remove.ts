import { Request, Response, NextFunction } from 'express'
import { remove as removeService } from '../service/remove'
import {
  BAD_REQUEST,
  NOT_CONTENT,
  NOT_FOUND,
} from '../../../middlewares/statusErrors'
import { handleErrorApi } from '../../../middlewares/handleErrorApi'

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.body

    if (!id) {
      return handleErrorApi(BAD_REQUEST, req, res)
    }
    const removeResponse = await removeService(Number(id))
    if (!removeResponse) {
      return handleErrorApi(NOT_FOUND, req, res)
    }
    res.status(NOT_CONTENT.status).json(removeResponse)
  } catch (error) {
    console.error(error)
    next(error)
  }
}
