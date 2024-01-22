import express from 'express'
import { create } from './create'
import { findId } from './findId'
import { list } from './list'

const router = express.Router({ mergeParams: true })

router.get('/:id', findId)
router.get('/', list)
router.post('/', create)

export { router }
