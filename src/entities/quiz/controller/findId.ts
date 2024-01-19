import { Request, Response, NextFunction } from 'express'
import { find } from '../service/find'
import { NOT_CONTENT, OK } from '../../../middlewares/statusErrors'
import { handleErrorApi } from '../../../middlewares/handleErrorApi'

export async function findId(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params
    const findIdResponse = await find(Number(id))
    if (!findIdResponse) {
      return handleErrorApi(NOT_CONTENT, req, res)
    }
    res.status(OK).json(findIdResponse)
  } catch (error) {
    console.error(error)
    next(error)
  }
}
