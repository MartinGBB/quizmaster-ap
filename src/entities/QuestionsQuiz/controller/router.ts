import express from 'express'
import { list } from './list'
import { create } from './create'

const router = express.Router({ mergeParams: true })

router.get('/', list)
router.post('/', create)

export { router }
