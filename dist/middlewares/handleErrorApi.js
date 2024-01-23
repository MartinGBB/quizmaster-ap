import { INTERNAL_SERVER_ERROR } from './statusErrors';
export function handleErrorApi(err, _req, res) {
    var _a;
    const infoErr = (_a = res.locals) === null || _a === void 0 ? void 0 : _a.errorInfo;
    const { status, message } = err;
    if (status) {
        if (!infoErr) {
            return res.status(status).json({ error: message });
        }
        return res.status(status).json({ error: message, infoErr });
    }
    console.error(err);
    return res
        .status(INTERNAL_SERVER_ERROR.status)
        .json({ error: message, infoErr });
}
//# sourceMappingURL=handleErrorApi.js.map