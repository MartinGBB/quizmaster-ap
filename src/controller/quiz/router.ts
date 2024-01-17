import express from 'express'
import { create } from './create'

const router = express.Router({ mergeParams: true })

router.get('/', () => null)
router.post('/', create)

export { router }
