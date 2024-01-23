import { list as listService } from '../service/list';
import { OK, NOT_CONTENT } from '../../../middlewares/statusErrors';
import { handleErrorApi } from '../../../middlewares/handleErrorApi';
export async function list(_req, res, next) {
    try {
        const response = await listService();
        if (response.length < 1) {
            return handleErrorApi(NOT_CONTENT, _req, res);
        }
        res.status(OK).json(response);
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=list.js.map