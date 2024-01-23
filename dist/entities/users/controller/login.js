export function login(_req, res, next) {
    try {
        res.status(200).send({ message: 'hello word' });
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=login.js.map