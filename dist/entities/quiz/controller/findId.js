import { find } from '../service/find';
import { BAD_REQUEST, NOT_CONTENT, OK } from '../../../middlewares/statusErrors';
import { handleErrorApi } from '../../../middlewares/handleErrorApi';
export async function findId(req, res, next) {
    try {
        const { params } = req;
        if (!params || !params.id) {
            return handleErrorApi(BAD_REQUEST, req, res);
        }
        const findIdResponse = await find(Number(params.id));
        if (!findIdResponse) {
            return handleErrorApi(NOT_CONTENT, req, res);
        }
        res.status(OK).json(findIdResponse);
    }
    catch (error) {
        console.error(error);
        next(error);
    }
}
//# sourceMappingURL=findId.js.map