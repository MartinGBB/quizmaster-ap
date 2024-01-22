import express from 'express';
import { create } from './create';
import { findId } from './findId';
const router = express.Router({ mergeParams: true });
router.get('/:id', findId);
router.post('/', create);
export { router };
//# sourceMappingURL=router.js.map