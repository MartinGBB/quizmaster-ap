import express from 'express';
import { login } from './login';
const router = express.Router({ mergeParams: true });
router.get('/login', login);
export { router };
//# sourceMappingURL=router.js.map